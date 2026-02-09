"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MapStyles } from "./map.styles";
import useDashboardStore from "@/store/dashboard/dashboard.store";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_API_KEY;

type LngLatArray = [number, number];

const INITIAL_CENTER: LngLatArray = [-74.0242, 40.6941];
const INITIAL_ZOOM = 10.12;

export default function Map() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const currentProject = useDashboardStore((state) => state.selectedProject);

  const [center, setCenter] = useState<LngLatArray>(INITIAL_CENTER);
  const [zoom, setZoom] = useState<number>(INITIAL_ZOOM);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom,
      attributionControl: false,
      style: process.env.NEXT_PUBLIC_MAP_BOX_STYLE,
    });

    mapRef.current.on("move", () => {
      if (!mapRef.current) return;
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat] as LngLatArray);
      setZoom(mapZoom);
    });
    mapRef.current.on("load", () => {
      if (!mapRef.current) return;

      mapRef.current.on("click", "incidents-layer", (e) => {
        if (!e.features || !e.features[0]) return;

        const coordinates = (
          e.features[0].geometry as GeoJSON.Point
        ).coordinates.slice();

        mapRef.current?.flyTo({
          center: coordinates as [number, number],
          zoom: 15,
          duration: 1500,
        });
      });

      mapRef.current.on("mouseenter", "incidents-layer", () => {
        if (mapRef.current) {
          mapRef.current.getCanvas().style.cursor = "pointer";
        }
      });

      mapRef.current.on("mouseleave", "incidents-layer", () => {
        if (mapRef.current) {
          mapRef.current.getCanvas().style.cursor = "";
        }
      });
    });

    return () => {
      if (!mapRef.current) return;
      mapRef.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mapRef.current || !currentProject) return;

    const map = mapRef.current;

    const updateIncidents = () => {
      const features =
        currentProject.incidents?.map((incident) => ({
          type: "Feature" as const,
          properties: {
            id: incident._id,
            status: incident.status,
            description: incident.description,
            tag: incident.tag,
          },
          geometry: {
            type: "Point" as const,
            coordinates: [incident.coordinates.lng, incident.coordinates.lat],
          },
        })) || [];

      const geojsonData = {
        type: "FeatureCollection" as const,
        features: features,
      };

      if (map.getSource("incidents-source")) {
        (map.getSource("incidents-source") as mapboxgl.GeoJSONSource).setData(
          geojsonData,
        );
      } else {
        map.addSource("incidents-source", {
          type: "geojson",
          data: geojsonData,
        });

        map.addLayer({
          id: "incidents-layer",
          type: "circle",
          source: "incidents-source",
          paint: {
            "circle-color": "#EEB702",
            "circle-radius": 8,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });
      }

      if (currentProject.position) {
        const { lng, lat } = currentProject.position;
        const newCenter: LngLatArray = [lng, lat];
        setCenter(newCenter);

        map.flyTo({
          center: newCenter,
          essential: true,
          duration: 2000,
        });
      }
    };

    if (map.isStyleLoaded()) {
      updateIncidents();
    } else {
      map.once("load", updateIncidents);
    }
  }, [currentProject]);

  return (
    <>
      <div>
        Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)}
      </div>
      <div ref={wrapperRef} className="map-wrapper">
        <div ref={mapContainerRef} className="map-container" />
      </div>
      <style>{MapStyles}</style>
    </>
  );
}
