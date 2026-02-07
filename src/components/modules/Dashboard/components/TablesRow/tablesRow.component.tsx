import { Project } from "@/utils/data/mockData.model";
import { TablesRowStyles } from "./tablesRow.styles";
import Chip from "@/components/atoms/Chip";
import { Hexagon } from "@/components/atoms/Hexagon";
import { Typography } from "@/components/atoms/Typography";
import { theme } from "@/utils/ThemeProvider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";

const { colors } = theme;

type Props = {
  project: Partial<Project>;
  onClick: () => void;
  isSidePanelOpen: boolean;
};

const TablesRow = ({ project, onClick, isSidePanelOpen }: Props) => {
  return (
    <>
      <article className={`row__container ${isSidePanelOpen ? "row__container--sidePanel--open" : ""}`} onClick={onClick}>
        <div className="row__project">
          <div className="thumb" />
          <div>
            <Typography variant="p1" weight="semibold">
              {project.title}
            </Typography>
            <div className="row__project__dates">
              <AccessTimeIcon
                sx={{ color: colors.neutrals[200], fontSize: 15 }}
              />
              <Typography variant="p2" color={colors.neutrals[200]}>
                <time dateTime={project.createdAt}>{project.createdAt}</time>
              </Typography>
              <SyncOutlinedIcon
                sx={{ color: colors.neutrals[200], fontSize: 15 }}
              />
              <Typography variant="p2" color={colors.neutrals[200]}>
                <time dateTime={project.lastUpdated}>
                  {project.lastUpdated}
                </time>
              </Typography>
            </div>
          </div>
        </div>

        <Chip
          title={project.projectPlanData?.plan ?? ""}
          status={project.projectPlanData?.plan}
        />
        <Chip title={project.status ?? ""} status={project.status} />

        <ul className="team">
          {["JC", "AO", "ML"].map((i) => (
            <Hexagon key={i} size={25}>
              {i}
            </Hexagon>
          ))}
        </ul>

        <div className="items">
          <Item label="Incidencias" value={45} />
          <Item label="RFI" value={12} />
          <Item label="Tareas" value={7} />
        </div>
      </article>

      <style jsx>{TablesRowStyles}</style>
    </>
  );
};

const Item = ({ label, value }: { label: string; value: number }) => {
  return (
    <div>
      <Typography variant="p1" weight="semibold">
        {value}
      </Typography>
      <Typography variant="p2" color={colors.neutrals[200]}>
        {label}
      </Typography>
    </div>
  );
};

export default TablesRow;
