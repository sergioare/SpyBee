import { Project } from "@/utils/data/mockData.model";
import { TablesRowStyles } from "./tablesRow.styles";
import Chip from "@/components/atoms/Chip";
import { Hexagon } from "@/components/atoms/Hexagon";
import { Typography } from "@/components/atoms/Typography";
import { theme } from "@/utils/ThemeProvider";


const { colors } = theme;


type Props = {
  project: Partial<Project>;
  onClick: () => void;
};

const TablesRow = ({ project, onClick }: Props) => {
  return (
    <>
      <article className="row__container" onClick={onClick}>
        <div className="row__project">
          <div className="thumb" />
          <div>
            <Typography variant="p1" weight="semibold">{project.title}</Typography>
            <Typography variant="p2" color={colors.neutrals[200]}>24 Nov 2023</Typography>
          </div>
        </div>

        <Chip title={project.projectPlanData?.plan ?? ""} status={project.projectPlanData?.plan}/>
        <Chip title={project.status ??""} status={project.status}/>

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
      <Typography variant="p1" weight="semibold">{value}</Typography>
      <Typography variant="p2" color={colors.neutrals[200]}>{label}</Typography>
    </div>
  );
}

export default TablesRow;
