import { create } from "zustand";
import type {
  DashboardState,
  DashboardActions,
  SortBy,
} from "./dashboard.model";

const initialState: DashboardState = {
  projects: [],
  isLoading: false,
  sortBy: "name",
  currentPage: 1,
  pageSize: 10,
  searchTerm: "",
};

const useDashboardStore = create<DashboardState & DashboardActions>((set) => ({
  ...initialState,

  fetchProjects: async () => {
    try {
      set({ isLoading: true });

      const response = await fetch("/api/projects");
      const data = await response.json();

      set({
        projects: data.data,
        isLoading: false,
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
