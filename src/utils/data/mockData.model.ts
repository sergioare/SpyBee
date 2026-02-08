type Project = {
  _id: string;
  title: string;
  projectPlan: ProjectPlan;
  status: ProjectStatus;
  img: string;
  lastVisit: string;
  position: Position;
  users: ProjectUser[];
  clientData: ClientData;
  city: string;
  country?: string | number;
  lastUpdated: string;
  partnerClients: PartnerClients[];
  companyId: string;
  address: string;
  projectClientAdmin: string[];
  projectPlanData: ProjectPlanData;
  createdAt: string;
  incidents: Incident[];
};

type ProjectPlan = {
  _id: string;
};

type ProjectStatus = "active" | "suspended" | "inactive" | "pending_payment";

type Position = {
  _id: string;
  lat: number;
  lng: number;
};

type ProjectUser = {
  name: string;
  lastName: string;
};

type ClientData = {
  title: string;
  _id: string;
};

type PartnerClients = {
  _id: string;
  maxUsers: number;
  maxAdmins: number;
  maxStorage: number;
};

type ProjectPlanType = "small" | "big";

type ProjectPlanData = {
  plan: ProjectPlanType;
};

type Incident = {
  _id: string;
  status: IncidentStatus;
  item: IncidentItem;
  description: string;
  owner: string;
  tag: IncidentTag;
  coordinates: Coordinates;
  limitDate: string;
  createdAt: string;
  updatedAt: string;
};

type IncidentStatus = "active" | "close";
type IncidentItem = "incidents" | "RFI" | "task";
type IncidentTag = "abroad" | "inside";

type Coordinates = {
  lat: number;
  lng: number;
};

export type { Project, Incident, ProjectUser};
