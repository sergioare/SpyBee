"use client";
import { useEffect } from "react";
import { DashboardComponent } from "./dashboard.component";
import useDashboardStore from "@/store/dashboard/dashboard.store";
import Spinner from "@/components/molecules/Spinner";

const DashboardContainer = () => {
  const fetchProjects = useDashboardStore((s) => s.fetchProjects);
  const projects = useDashboardStore((s) => s.projects);
  const isLoading = useDashboardStore((s) => s.isLoading);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (isLoading) return <Spinner />;
  if (!projects) return null;

  return <DashboardComponent/>;
};

export default DashboardContainer;