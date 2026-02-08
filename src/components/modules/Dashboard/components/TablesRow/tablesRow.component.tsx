import { IncidentItem, Project } from "@/utils/data/mockData.model";
import { TablesRowStyles } from "./tablesRow.styles";
import Chip from "@/components/atoms/Chip";
import { Hexagon } from "@/components/atoms/Hexagon";
import { Typography } from "@/components/atoms/Typography";
import { theme } from "@/utils/ThemeProvider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import { formatIsoDate } from "@/utils/constants/dates";
import { getHexagonList } from "@/utils/constants/counters";

const { colors } = theme;

type Props = {
  project: Project;
  onClick: () => void;
  isSidePanelOpen: boolean;
};

const TablesRow = ({ project, onClick, isSidePanelOpen }: Props) => {
  const createdAt = project.createdAt
    ? formatIsoDate(project.createdAt)
    : { label: "", tag: "" };
  const lastUpdated = project.lastUpdated
    ? formatIsoDate(project.lastUpdated)
    : { label: "", tag: "" };

  const getActiveCountByItem = (itemType: IncidentItem) => {
    return project.incidents.filter(
      (incident) => incident.item === itemType,
    ).length;
  };

  const hexagonList = getHexagonList(project.users);

  return (
    <>
      <article
        className={`row__container ${isSidePanelOpen ? "row__container--sidePanel--open" : ""}`}
        onClick={onClick}
      >
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
                <time dateTime={createdAt.tag}>{createdAt.label}</time>
              </Typography>
              <SyncOutlinedIcon
                sx={{ color: colors.neutrals[200], fontSize: 15 }}
              />
              <Typography variant="p2" color={colors.neutrals[200]}>
                <time dateTime={lastUpdated.tag}>{lastUpdated.label}</time>
              </Typography>
            </div>
          </div>
        </div>

        <Chip status={project.projectPlanData?.plan} />
        <Chip status={project.status} />

        <ul className="team">
          {hexagonList.map((item) => (
            <Hexagon key={item.id} size={25} color={item.color}>
              {item.label}
            </Hexagon>
          ))}
        </ul>

        <div className="items">
          <Item label="Incidencias" value={getActiveCountByItem("incidents")} />
          <Item label="RFI" value={getActiveCountByItem("RFI")} />
          <Item label="Tareas" value={getActiveCountByItem("task")} />
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
