import { Typography } from "@/components/atoms/Typography";
import { StatsCardStyles } from "./statsCard.styles";
import CircleChart from "@/components/atoms/CircleChart";
import { theme } from "@/utils/ThemeProvider";

type StatsCardProps = {
  title: string;
  total: number;
  currentOpen: number;
};

const { colors } = theme;

const StatsCardComponent = ({ title, total, currentOpen }: StatsCardProps) => {
  return (
    <article key={title} className="stat-card">
      <header className="stat-card__header">
        <Typography variant="p1"  weight="medium">
          {title}
        </Typography>
        <Typography variant="h4" >
          {total}
        </Typography>
        <Typography variant="p2" color={colors.neutrals[200]}>
          Total Abiertas
        </Typography>
      </header>

      <div className="stat-card__chart-container">
        <CircleChart value={currentOpen} />
      </div>
      <style jsx>{StatsCardStyles}</style>
    </article>
  );
};

export default StatsCardComponent;
