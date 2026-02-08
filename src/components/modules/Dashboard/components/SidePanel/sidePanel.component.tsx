import { useState } from "react";
import ResumeTable from "../ResumeTables";
import { SidePanelStyles } from "./sidePanel.styles";
import { theme } from "@/utils/ThemeProvider";
import { Typography } from "@/components/atoms/Typography";
import FilterAltIcon from "@mui/icons-material/FilterAltOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import { Button } from "@/components/atoms/Button";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import StatsCard from "../StatsCard";
import useDashboardStore from "@/store/dashboard/dashboard.store";
import { getInitials } from "@/utils/constants/normilizeText";
import { formatIsoDate } from "@/utils/constants/dates";

type ResumeSidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

const { colors } = theme;

const SidePanel = ({}: ResumeSidePanelProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const incidentSummary = useDashboardStore((state) => state.incidentSummary);
  const upcommingIncidentsWithUsers = useDashboardStore(
    (state) => state.upcomingIncidentWithUsers,
  );

  const tabs = ["General", "Mis actualizaciones"];

  const statsData = [
    {
      title: "Incidencias",
      total: incidentSummary.incidents.total,
      current: incidentSummary.incidents.active,
    },
    {
      title: "RFI",
      total: incidentSummary.rfi.total,
      current: incidentSummary.rfi.active,
    },
    {
      title: "Tareas",
      total: incidentSummary.tasks.total,
      current: incidentSummary.tasks.active,
    },
  ];

  const upcommingStuff = upcommingIncidentsWithUsers.map((item) => {
    const initials = item.users.map((user) => getInitials(user));
    return {
      projectTitle: item.projectTitle,
      projectDescription: item.incident.description,
      associatedTeam: initials,
      itemType: item.incident.item,
      dueDate: formatIsoDate(item.incident.limitDate).label,
      dueTime: formatIsoDate(item.incident.limitDate).tag,
    };
  });

  return (
    <>
      <div className="side__panel__content">
        <header className="side__panel__header">
          <AssessmentOutlinedIcon
            sx={{ fontSize: 25, color: colors.neutrals[300] }}
          />
          <Typography variant="h5">Resumen</Typography>
        </header>

        <nav className="side__panel__tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`side__panel__tab ${activeTab === index ? "--active" : ""}`}
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index}
              role="tab"
            >
              <Typography variant="p1" color={colors.neutrals[200]}>
                {tab}
              </Typography>
            </button>
          ))}
          <button
            className="side__panel__filter"
            aria-label="Filtros"
            type="button"
          >
            <FilterAltIcon sx={{ fontSize: 20, color: colors.neutrals[300] }} />
            <Typography variant="p1" weight="semibold">
              Filtros
            </Typography>
          </button>
        </nav>

        {activeTab === 0 && (
          <>
            <section className="side__panel__section">
              <header className="side__panel__section-header">
                <div className="side__panel__section-title">
                  <HistoryIcon
                    sx={{ fontSize: 20, color: colors.primary[500] }}
                  />
                  <Typography variant="s1">Próximos a vencer</Typography>
                </div>
                <Button variant="white" className="side__panel__header--button">
                  Ver todos
                </Button>
              </header>

              <div className="statsCards__container">
                {statsData.map((item) => (
                  <StatsCard
                    key={item.title}
                    title={item.title}
                    total={item.total}
                    currentOpen={item.current}
                  />
                ))}
              </div>

              <ResumeTable
                headerNames={{
                  projectTitle: "Proyecto",
                  itemTitle: "Item",
                  dueDateTitle: "Fecha límite",
                }}
                rows={upcommingStuff}
              />
            </section>

            <section className="side__panel__section">
              <header className="side__panel__section-header">
                <div className="side__panel__section-title">
                  <CalendarIcon
                    sx={{ fontSize: 20, color: colors.primary[500] }}
                  />
                  <Typography variant="s1">Próximos eventos</Typography>
                </div>
                <Button variant="white" className="side__panel__header--button">
                  Ver todos
                </Button>
              </header>

              <ResumeTable
                headerNames={{
                  projectTitle: "Proyecto",
                  teamTitle: "Equipo",
                  dueDateTitle: "Fecha límite",
                }}
                rows={upcommingStuff}
                isWithTeam
              />
            </section>
          </>
        )}
        {activeTab === 1 && (
          <Typography variant="p1" color={colors.neutrals[200]}>
            No hemos encontrado actualizaciones pendientes para mostrar
          </Typography>
        )}
      </div>

      <style jsx>{SidePanelStyles}</style>
    </>
  );
};

export default SidePanel;
