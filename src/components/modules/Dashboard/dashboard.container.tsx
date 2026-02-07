"use client";
import { useEffect } from "react";
import { DashboardComponent } from "./dashboard.component";

const DashboardContainer = () => {
  const fetchProjects = async () => {
    const projects = await fetch("/api/projects");
    const projectsData = await projects.json();
    console.log(projectsData);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return <DashboardComponent />;
};

export default DashboardContainer;