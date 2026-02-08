import { includesSearchTerm } from "@/utils/constants/normilizeText";
import {
  DashboardState,
  Project,
  ProjectIncidentSummary,
  SortBy,
} from "./dashboard.model";
import { paginate } from "@/utils/constants/pagination";
import {
  attachUsersToUpcomingIncidents,
  getProjectIncidentSummary,
  getUpcomingIncidents,
  incidentMatchesSearch,
  sortProjects,
} from "./dashboard.utils";

const filterProjectsBySearch = (
  projects: Project[],
  searchTerm: string,
): Project[] => {
  if (!searchTerm.trim()) return projects;

  return projects.filter((project) => {
    const matchesProject =
      includesSearchTerm(project.title, searchTerm) ||
      includesSearchTerm(project.clientData?.title, searchTerm) ||
      includesSearchTerm(project.city, searchTerm);

    const matchesIncidents = incidentMatchesSearch(
      project.incidents,
      searchTerm,
    );

    return matchesProject || matchesIncidents;
  });
};

export const selectDashboardProjects = (
  projects: Project[],
  searchTerm: string,
  sortBy: SortBy,
  currentPage: number,
  pageSize: number,
) => {
  const searched = filterProjectsBySearch(projects, searchTerm);
  const sorted = sortProjects(searched, sortBy);
  return paginate(sorted, currentPage, pageSize);
};

export const selectUpcomingIncidents = (state: DashboardState) => {
  return getUpcomingIncidents(state.projects, 3);
};

export const selectUpcomingIncidentsWithUsers = (state: DashboardState) => {
  const upcoming = selectUpcomingIncidents(state);

  return attachUsersToUpcomingIncidents(upcoming, state.projects);
};

export const selectProjectIncidentSummary = (
  state: DashboardState,
): ProjectIncidentSummary => getProjectIncidentSummary(state.projects);
