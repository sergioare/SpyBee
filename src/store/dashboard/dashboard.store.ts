import { create } from "zustand";
import type {
  DashboardState,
  DashboardActions,
  SortBy,
  Project,
} from "./dashboard.model";
import {
  getProjectIncidentSummary,
  getUpcomingIncidentsWithUsers,
} from "./dashboard.utils";
import { selectDashboardProjects } from "./dashboard.selectors";
import { getTotalPages } from "@/utils/constants/pagination";

const initialState: DashboardState = {
  projects: [],
  paginatedProjects: [],
  isLoading: false,
  sortBy: "name",
  currentPage: 1,
  totalPages: 1,
  pageSize: 10,
  searchTerm: "",
  incidentSummary: {
    incidents: { total: 0, active: 0 },
    rfi: { total: 0, active: 0 },
    tasks: { total: 0, active: 0 },
  },
  upcomingIncidentWithUsers: [],
  selectedProject: null,
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
          totalPages: getTotalPages(data.data.length, 10),
          incidentSummary: getProjectIncidentSummary(data.data),
          upcomingIncidentWithUsers: getUpcomingIncidentsWithUsers(
            data.data,
            3,
          ),
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
    set((state) => {
      const nextState = {
        ...state,
        sortBy,
        currentPage: 1,
      };

      return {
        ...nextState,
        paginatedProjects: selectDashboardProjects(nextState),
      };
    });
  },

  setPage: (page: number) => {
    set((state) => {
      const nextState = {
        ...state,
        currentPage: page,
      };

      return {
        ...nextState,
        paginatedProjects: selectDashboardProjects(nextState),
      };
    });
  },

  setSearchTerm: (term: string) => {
    set((state) => {
      const nextState = {
        ...state,
        searchTerm: term,
        currentPage: 1,
      };

      return {
        ...nextState,
        paginatedProjects: selectDashboardProjects(nextState),
      };
    });
  },

  setSelectedProject: (project: Project | null) => {
    set((state) => {
      const newPageSize = project ? 4 : initialState.pageSize;
      const newTotalPages = getTotalPages(state.projects.length, newPageSize);
      
      const nextState = {
        ...state,
        currentPage: 1,
        pageSize: newPageSize,
        selectedProject: project,
        totalPages: newTotalPages,
      };

      return {
        ...nextState,
        paginatedProjects: selectDashboardProjects(nextState),
      };
    });
  },
}));

export default useDashboardStore;
