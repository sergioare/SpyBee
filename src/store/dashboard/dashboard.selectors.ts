import { includesSearchTerm } from "@/utils/constants/normilizeText";
import { DashboardState, Project } from "./dashboard.model";
import { paginate } from "@/utils/constants/pagination";
import { incidentMatchesSearch, sortProjects } from "./dashboard.utils";

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

export const selectDashboardProjects = (state: DashboardState) => {
  const { projects, searchTerm, sortBy, currentPage, pageSize } = state;
  const searched = filterProjectsBySearch(projects, searchTerm);
  const sorted = sortProjects(searched, sortBy);
  return paginate(sorted, currentPage, pageSize);
};
