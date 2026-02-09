import Header from "./components/Header";
import Table from "./components/Table";
import { useState } from "react";
import { DashboardStyles } from "./dashboard.styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeftOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { theme } from "@/utils/ThemeProvider";
import SidePanel from "./components/SidePanel/sidePanel.component";
import Map from "../../molecules/Map";
import useDashboardStore from "@/store/dashboard/dashboard.store";

const { colors } = theme;

export const DashboardComponent = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const setSelectedProject = useDashboardStore(
    (state) => state.setSelectedProject,
  );
  const selectedProject = useDashboardStore((state) => state.selectedProject);

  return (
    <>
      <Header />
      <main
        className={`dashboard ${
          isSidePanelOpen ? "dashboard--with-panel" : ""
        }`}
      >
        <section className="dashboard__table">
          {selectedProject && <Map />}
          <Table
            isSidePanelOpen={isSidePanelOpen}
            onSelect={(project) =>setSelectedProject(project)}
          />
        </section>

        {isSidePanelOpen && (
          <aside className="dashboard__sidepanel">
            <SidePanel
              isOpen={!isSidePanelOpen}
              onClose={() => setIsSidePanelOpen(false)}
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
