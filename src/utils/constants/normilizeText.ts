export const normalizeText = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export const includesSearchTerm = (
  value: string | undefined,
  searchTerm: string,
) => {
  const normalizedValue = value ? normalizeText(value) : "";
  const normalizedTerm = normalizeText(searchTerm);
  return normalizedValue.includes(normalizedTerm);
};

export const getInitials = (
  user: { name: string; lastName: string }
) => {
  const firstInitial = user.name.charAt(0).toUpperCase();
  const lastInitial = user.lastName.charAt(0).toUpperCase();
  return {
    id: crypto.randomUUID(),
    name: `${firstInitial}${lastInitial}`,
  };
};
