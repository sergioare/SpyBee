import { includesSearchTerm } from "@/utils/constants/normilizeText";
import {
  IncidentSummary,
  IncidentWithProject,
  Project,
  ProjectIncidentSummary,
  SortBy,
  UpcomingIncidentWithUsers,
} from "./dashboard.model";
import { Incident } from "@/utils/data/mockData.model";

export const sortProjects = (
  projects: Project[],
  sortBy: SortBy,
): Project[] => {
  const sorted = [...projects];

  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    case "incidents":
      return sorted.sort(
        (a, b) =>
          b.incidents.filter((i) => i.item === "incidents").length -
          a.incidents.filter((i) => i.item === "incidents").length,
      );

    case "rfi":
      return sorted.sort(
        (a, b) =>
          b.incidents.filter((i) => i.item === "RFI").length -
          a.incidents.filter((i) => i.item === "RFI").length,
      );

    case "tasks":
      return sorted.sort(
        (a, b) =>
          b.incidents.filter((i) => i.item === "task").length -
          a.incidents.filter((i) => i.item === "task").length,
      );

    default:
      return sorted;
  }
};

export const incidentMatchesSearch = (
  incidents: Incident[],
  term: string,
): boolean => {
  return incidents.some((incident) => {
    return (
      includesSearchTerm(incident.owner, term) ||
      includesSearchTerm(incident.description, term)
    );
  });
};

export const extractIncidents = (projects: Project[]): IncidentWithProject[] =>
  projects.flatMap((project) =>
    project.incidents.map((incident) => ({
      projectId: project._id,
      projectTitle: project.title,
      incident,
    })),
  );

export const getUpcomingIncidents = (
  projects: Project[],
  limit = 3,
): IncidentWithProject[] => {
  return extractIncidents(projects)
    .filter(({ incident }) => incident.status === "active")
    .sort(
      (a, b) =>
        new Date(a.incident.limitDate).getTime() -
        new Date(b.incident.limitDate).getTime(),
    )
    .slice(0, limit);
};

export const attachUsersToUpcomingIncidents = (
  upcomingIncidents: {
    projectId: string;
    projectTitle: string;
    incident: Incident;
  }[],
  projects: Project[],
): UpcomingIncidentWithUsers[] => {
  return upcomingIncidents.map((item) => {
    const project = projects.find((p) => p._id === item.projectId);

    return {
      ...item,
      users: project?.users ?? [],
    };
  });
};

const emptySummary = (): IncidentSummary => ({
  total: 0,
  active: 0,
});

export const getProjectIncidentSummary = (
  projects: Project[],
): ProjectIncidentSummary => {
  const summary: ProjectIncidentSummary = {
    incidents: emptySummary(),
    rfi: emptySummary(),
    tasks: emptySummary(),
  };

  projects.forEach((project) => {
    project.incidents.forEach((incident) => {
      let target: IncidentSummary | null = null;

      if (incident.item === "incidents") target = summary.incidents;
      if (incident.item === "RFI") target = summary.rfi;
      if (incident.item === "task") target = summary.tasks;

      if (!target) return;

      target.total += 1;
      if (incident.status === "active") {
        target.active += 1;
      }
    });
  });

  return summary;
};
