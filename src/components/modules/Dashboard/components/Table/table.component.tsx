import { Project } from "@/utils/data/mockData.model";
import { TableStyles } from "./table.styles";
import TablesRow from "../TablesRow/tablesRow.component";
import { Typography } from "@/components/atoms/Typography";
import useDashboardStore from "@/store/dashboard/dashboard.store";

type Props = {
  onSelect: (project: Partial<Project>) => void;
  isSidePanelOpen: boolean;
};

export default function ProjectsTable({ onSelect, isSidePanelOpen }: Props) {
  const projects = useDashboardStore(state => state.paginatedProjects);
  return (
    <>
      <section>
        <header
          className={`projects__header ${isSidePanelOpen ? "projects__header-sidePanel--open" : ""}`}
        >
          <Typography variant="p1">Proyecto</Typography>
          <Typography variant="p1">Plan</Typography>
          <Typography variant="p1">Estado</Typography>
          <Typography variant="p1">Equipo</Typography>
          <Typography variant="p1">Items por vencer</Typography>
        </header>

        <ul className="projects__list">
          {projects.map((project) => (
            <li key={project._id}>
              <TablesRow
                isSidePanelOpen={isSidePanelOpen}
                project={project}
                onClick={() => onSelect(project)}
              />
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{TableStyles}</style>
    </>
  );
}
