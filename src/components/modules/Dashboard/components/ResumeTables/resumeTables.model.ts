import { ProjectUser } from "@/utils/data/mockData.model";

type ResumeTableRow = {
  projectTitle: string;
  projectDescription: string;
  users: ProjectUser[];
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

export type { ResumeTableProps, ResumeTableRow, HeaderNames };
