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

type ResumeTableRow = {
  projectTitle: string;
  projectSubtitle: string;
  itemType: string;
  dueDate: string;
  dueTime: string;
};

type ResumeSidePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  dueSoonRows: ResumeTableRow[];
  eventsRows: ResumeTableRow[];
};

const { colors } = theme;

const SidePanel = ({ dueSoonRows, eventsRows }: ResumeSidePanelProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["General", "Mis actualizaciones"];

  const statsData = [
    { title: "Incidencias", total: 60, current: 10 },
    { title: "RFI", total: 50, current: 23 },
    { title: "Tareas", total: 120, current: 50 },
  ];

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
                rows={dueSoonRows}
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
                rows={eventsRows}
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
