import Header from "./components/Header";
import Table from "./components/Table";
import { useState } from "react";
import { DashboardStyles } from "./dashboard.styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { theme } from "@/utils/ThemeProvider";
import SidePanel from "./components/SidePanel/sidePanel.component";

const { colors } = theme;
export const DashboardComponent = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  return (
    <>
      <Header />
      <main
        className={`dashboard ${
          isSidePanelOpen ? "dashboard--with-panel" : ""
        }`}
      >
        <section className="dashboard__table">
          <Table
            isSidePanelOpen={isSidePanelOpen}
            onSelect={(project) => console.log(project)}
          />
        </section>

        {isSidePanelOpen && (
          <aside className="dashboard__sidepanel">
            <SidePanel
              isOpen={!isSidePanelOpen}
              onClose={() => setIsSidePanelOpen(false)}
              dueSoonRows={[
                {
                  projectTitle: "Proyecto Alpha",
                  projectSubtitle: "Revisión de planos estructurales",
                  itemType: "Incidencia",
                  dueDate: "12/02/2025",
                  dueTime: "15:00",
                },
                {
                  projectTitle: "Proyecto Alpha",
                  projectSubtitle: "Respuesta pendiente proveedor",
                  itemType: "RFI",
                  dueDate: "13/02/2025",
                  dueTime: "10:30",
                },
                {
                  projectTitle: "Proyecto Beta",
                  projectSubtitle: "Validación checklist seguridad",
                  itemType: "Tarea",
                  dueDate: "14/02/2025",
                  dueTime: "09:00",
                },
              ]}
              eventsRows={[
                {
                  projectTitle: "Proyecto Gamma",
                  projectSubtitle: "Reunión de avance semanal",
                  itemType: "Evento",
                  dueDate: "15/02/2025",
                  dueTime: "11:00",
                },
                {
                  projectTitle: "Proyecto Delta",
                  projectSubtitle: "Inspección técnica en sitio",
                  itemType: "Evento",
                  dueDate: "16/02/2025",
                  dueTime: "08:30",
                }
              ]}
            />
          </aside>
        )}
        {!isSidePanelOpen && (
          <div className="dashboard__open-panel">
            <button
              type="button"
              className="dashboard__open-panel--base"
              onClick={() => setIsSidePanelOpen(true)}
              aria-label="Abrir resumen"
            >
              <AssessmentOutlinedIcon
                sx={{ fontSize: 25, color: colors.neutrals[300] }}
              />
            </button>

            <button
              type="button"
              className="dashboard__open-panel--arrow"
              onClick={() => setIsSidePanelOpen(true)}
              aria-hidden
            >
              <ChevronLeftIcon
                sx={{ fontSize: 20, color: colors.neutrals[300] }}
              />
            </button>
          </div>
        )}
        {isSidePanelOpen && (
          <button
            className="dashboard__close-panel--arrow"
            onClick={() => setIsSidePanelOpen(false)}
          >
            <ChevronRightIcon
              sx={{ fontSize: 20, color: colors.neutrals[300] }}
            />
          </button>
        )}
      </main>
      <style jsx>{DashboardStyles}</style>
    </>
  );
};
