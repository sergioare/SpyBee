import { Typography } from "@/components/atoms/Typography";
import { ResumeTableStyles } from "./resumeTables.styles";
import { theme } from "@/utils/ThemeProvider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Hexagon } from "@/components/atoms/Hexagon";
import { ResumeTableProps } from "./resumeTables.model";

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
                <Typography variant="p1" className="--text">{row.projectTitle}</Typography>
                <Typography variant="p2" className="--text" color={colors.neutrals[200]}>
                  {row.projectDescription}
                </Typography>
              </div>

              {isWithTeam ? (
                <ul className="team">
                  {row.associatedTeam?.map((user) => ( 
                    <Hexagon key={user.id} size={25}>
                      {user.name}
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
