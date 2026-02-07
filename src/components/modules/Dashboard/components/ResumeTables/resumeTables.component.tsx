import { Typography } from "@/components/atoms/Typography";
import { ResumeTableStyles } from "./resumeTables.styles";
import { theme } from "@/utils/ThemeProvider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Hexagon } from "@/components/atoms/Hexagon";

type ResumeTableRow = {
  projectTitle: string;
  projectSubtitle: string;
  itemType: string;
  dueDate: string;
  dueTime: string;
};
type HeaderNames = {
  projectTitle: string;
  itemTitle?: string;
  teamTitle?: string;
  dueDateTitle: string;
};
type ResumeTableProps = {
  headerNames: HeaderNames;
  rows: ResumeTableRow[];
  isWithTeam?: boolean;
};

const { colors } = theme;

const ResumeTable = ({ headerNames, rows, isWithTeam }: ResumeTableProps) => {
  return (
    <>
      <section className="resume__table" role="table">
        <header className="resume__table__header" role="row">
          <Typography variant="p1">
            <span role="columnheader">{headerNames.projectTitle}</span>
          </Typography>
          <Typography variant="p1">
            <span role="columnheader">
              {headerNames.itemTitle ?? headerNames.teamTitle}
            </span>
          </Typography>
          <Typography variant="p1">
            <span role="columnheader">{headerNames.dueDateTitle}</span>
          </Typography>
        </header>

        <div className="resume__table__body">
          {rows.map((row, index) => (
            <article key={index} className="resume__table__row" role="row">
              <div className="resume__table__cell">
                <Typography variant="p1">{row.projectTitle}</Typography>
                <Typography variant="p2" color={colors.neutrals[200]}>
                  {row.projectSubtitle}
                </Typography>
              </div>

              {isWithTeam ? (
                <ul className="team">
                  {["JC", "AO", "ML"].map((i) => (
                    <Hexagon key={i} size={25}>
                      {i}
                    </Hexagon>
                  ))}
                </ul>
              ) : (
                <div className="resume__table__cell">
                  <Typography variant="p1" color={colors.neutrals[200]}>
                    {row.itemType}
                  </Typography>
                </div>
              )}

              <div className="resume__table__cell">
                <Typography variant="p1">
                  <time dateTime={row.dueDate}>{row.dueDate}</time>
                </Typography>
                <div className="resume__table__time">
                  <AccessTimeIcon
                    sx={{ color: colors.neutrals[200], fontSize: 15 }}
                  />
                  <Typography variant="p2" color={colors.neutrals[200]}>
                    {row.dueTime}
                  </Typography>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{ResumeTableStyles}</style>
    </>
  );
};

export default ResumeTable;
