import { Project } from "@/utils/data/mockData.model";

type SortBy = "name" | "incidents" | "rfi" | "tasks";

type DashboardState = {
  projects: Project[];
  sortBy: SortBy;
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  searchTerm: string;
};

type DashboardActions = {
  fetchProjects: () => Promise<void>;
  setSortBy: (sortBy: SortBy) => void;
  setPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
};

export type { DashboardState, DashboardActions, SortBy, Project };
