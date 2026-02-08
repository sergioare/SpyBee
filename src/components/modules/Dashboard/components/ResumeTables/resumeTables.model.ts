type ResumeTableRow = {
  projectTitle: string;
  projectDescription: string;
  associatedTeam?: AssociatedTeam[];
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

type AssociatedTeam = {
  name: string;
  id: string;
};

export type { ResumeTableProps, ResumeTableRow, HeaderNames };
