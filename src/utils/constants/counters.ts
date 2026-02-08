import { ProjectUser } from "../data/mockData.model";
import { theme } from "../ThemeProvider";
import { getInitials } from "./normilizeText";

const { colors } = theme;

export const getHexagonList = (users: ProjectUser[], max: number = 6) => {
  const color = [
    colors.hexagon[100],
    colors.hexagon[200],
    colors.hexagon[300],
    colors.hexagon[400],
    colors.hexagon[500],
  ];

  const total = users.length;
  const showPlus = total > max;

  const limit = showPlus ? max - 1 : max;

  const list = users.slice(0, limit).map((user, index) => {
    const data = getInitials(user);
    return {
      id: data.id,
      label: data.name,
      color: color[index % 5],
    };
  });

  if (showPlus) {
    list.push({
      id: "exceded-users",
      label: `+${total - (max - 1)}`,
      color: color[(max - 1) % 5],
    });
  }

  return list;
};
