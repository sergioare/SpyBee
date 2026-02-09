import { Project } from "@/utils/data/mockData.model";
import { TableStyles } from "./table.styles";
import TablesRow from "../TablesRow/tablesRow.component";
import { Typography } from "@/components/atoms/Typography";
import useDashboardStore from "@/store/dashboard/dashboard.store";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { theme } from "@/utils/ThemeProvider";

type Props = {
  onSelect: (project: Project) => void;
  isSidePanelOpen: boolean;
};

const { colors } = theme;

export default function ProjectsTable({ onSelect, isSidePanelOpen }: Props) {
  const projects = useDashboardStore((state) => state.paginatedProjects);
  const setPage = useDashboardStore((state) => state.setPage);
  const currentPage = useDashboardStore((state) => state.currentPage);
  const totalPages = useDashboardStore((state) => state.totalPages);

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

        <div className="projectTable__pagination">
          <Typography variant="p1" color={colors.neutrals[300]}>
            Página {currentPage} de {totalPages}
          </Typography>
          <button
            className="projectTable__pagination--button"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            <ChevronLeftIcon
              sx={{ fontSize: 20, color: colors.neutrals[300] }}
            />
          </button>

          <button
            className="projectTable__pagination--button"
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
          >
            <ChevronRightIcon
              sx={{ fontSize: 20, color: colors.neutrals[300] }}
            />
          </button>
        </div>
      </section>

      <style jsx>{TableStyles}</style>
    </>
  );
}
