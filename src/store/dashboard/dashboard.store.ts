import { create } from "zustand";
import type {
  DashboardState,
  DashboardActions,
  SortBy,
} from "./dashboard.model";
import {
  getProjectIncidentSummary,
} from "./dashboard.utils";
import { selectDashboardProjects } from "./dashboard.selectors";

const initialState: DashboardState = {
  projects: [],
  paginatedProjects: [],
  isLoading: false,
  sortBy: "name",
  currentPage: 1,
  pageSize: 10,
  searchTerm: "",
  incidentSummary: {
    incidents: { total: 0, active: 0 },
    rfi: { total: 0, active: 0 },
    tasks: { total: 0, active: 0 },
  },
  upcomingIncidentWithUsers: [],
};

const useDashboardStore = create<DashboardState & DashboardActions>((set) => ({
  ...initialState,

  fetchProjects: async () => {
    try {
      set({ isLoading: true });

      const response = await fetch("/api/projects");
      const data = await response.json();

      set((state) => {
        const nextState = {
          ...state,
          projects: data.data,
          incidentSummary: getProjectIncidentSummary(data.data),
          isLoading: false,
        };

        return {
          ...nextState,
          paginatedProjects: selectDashboardProjects(nextState),
        };
      });
    } catch (error) {
      set({ isLoading: false });
      console.error("Error fetching projects:", error);
    }
  },

  setSortBy: (sortBy: SortBy) => {
    set({ sortBy, currentPage: 1 });
  },

  setPage: (page: number) => {
    set({ currentPage: page });
  },

  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
  },
}));

export default useDashboardStore;
