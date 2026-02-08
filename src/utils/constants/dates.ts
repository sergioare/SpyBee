type FormattedDate = {
  label: string;
  tag: string;
};

type DueDateTime = {
  dueDate: string;
  dueTime: string;
};

const monthNames = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export const formatIsoDate = (isoDate: string): FormattedDate => {
  const date = new Date(isoDate);

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth();
  const year = date.getFullYear();

  return {
    label: `${day} ${monthNames[month]} ${year}`,
    tag: `${day}/${(month + 1).toString().padStart(2, "0")}/${year}`,
  };
};

export const extractDueDateTime = (isoDate: string): DueDateTime => {
  const date = new Date(isoDate);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return {
    dueDate: `${day}/${month}/${year}`,
    dueTime: `${hours}:${minutes}`,
  };
};
