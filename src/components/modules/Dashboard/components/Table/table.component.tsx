import { Project } from "@/utils/data/mockData.model";
import { TableStyles } from "./table.styles";
import TablesRow from "../TablesRow/tablesRow.component";
import { Typography } from "@/components/atoms/Typography";

type Props = {
  onSelect: (project: Partial<Project>) => void;
  isSidePanelOpen: boolean;
};

const mockProjects: Partial<Project>[] = [
  {
    _id: "1",
    title: "Proyecto Alpha",
    projectPlanData: { plan: "small" },
    status: "active",
    createdAt: "2023-11-24",
    lastUpdated: "2023-11-24",
  },
  {
    _id: "2",
    title: "Proyecto Beta",
    projectPlanData: { plan: "big" },
    status: "active",
    createdAt: "2023-11-24",
    lastUpdated: "2023-11-24",
  },
  {
    _id: "1",
    title: "Proyecto Alpha",
    projectPlanData: { plan: "small" },
    status: "active",
  },
  {
    _id: "2",
    title: "Proyecto Beta",
    projectPlanData: { plan: "big" },
    status: "active",
  },
  {
    _id: "1",
    title: "Proyecto Alpha",
    projectPlanData: { plan: "small" },
    status: "active",
  },
  {
    _id: "2",
    title: "Proyecto Beta",
    projectPlanData: { plan: "big" },
    status: "active",
  },
  {
    _id: "1",
    title: "Proyecto Alpha",
    projectPlanData: { plan: "small" },
    status: "active",
  },
  {
    _id: "2",
    title: "Proyecto Beta",
    projectPlanData: { plan: "big" },
    status: "active",
  },
  {
    _id: "1",
    title: "Proyecto Alpha",
    projectPlanData: { plan: "small" },
    status: "active",
  },
  {
    _id: "2",
    title: "Proyecto Beta",
    projectPlanData: { plan: "big" },
    status: "active",
  }
];

export default function ProjectsTable({ onSelect, isSidePanelOpen }: Props) {
  return (
    <>
      <section>
        <header className={`projects__header ${isSidePanelOpen ? "projects__header-sidePanel--open" : ""}`}>
          <Typography variant="p1">Proyecto</Typography>
          <Typography variant="p1">Plan</Typography>
          <Typography variant="p1">Estado</Typography>
          <Typography variant="p1">Equipo</Typography>
          <Typography variant="p1">Items por vencer</Typography>
        </header>

        <ul className="projects__list">
          {mockProjects.map((project) => (
            <li key={project._id}>
              <TablesRow isSidePanelOpen={isSidePanelOpen} project={project} onClick={() => onSelect(project)} />
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{TableStyles}</style>
    </>
  );
}
