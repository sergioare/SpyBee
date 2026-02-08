import { Incident, Project } from "@/utils/data/mockData.model";

type SortBy = "name" | "incidents" | "rfi" | "tasks";

type DashboardState = {
  projects: Project[];
  paginatedProjects: Project[];
  sortBy: SortBy;
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  searchTerm: string;
  incidentSummary: ProjectIncidentSummary;
  upcomingIncidentWithUsers: UpcomingIncidentWithUsers[];
};

type DashboardActions = {
  fetchProjects: () => Promise<void>;
  setSortBy: (sortBy: SortBy) => void;
  setPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
};

type IncidentWithProject = {
  projectId: string;
  projectTitle: string;
  incident: Incident;
};

type UpcomingIncidentWithUsers = IncidentWithProject & {
  users: Project["users"];
};

type IncidentSummary = {
  total: number;
  active: number;
};

type ProjectIncidentSummary = {
  incidents: IncidentSummary;
  rfi: IncidentSummary;
  tasks: IncidentSummary;
};

export type {
  DashboardState,
  DashboardActions,
  SortBy,
  Project,
  IncidentWithProject,
  UpcomingIncidentWithUsers,
  ProjectIncidentSummary,
  IncidentSummary,
};
