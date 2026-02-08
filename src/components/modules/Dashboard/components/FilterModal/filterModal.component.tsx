import { Typography } from "@/components/atoms/Typography";
import { FilterModalStyles } from "./filterModal.styles";

type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
};

const FilterModalComponent = ({
  isOpen,
  onClose,
  onSelect,
}: FilterModalProps) => {
  if (!isOpen) return null;

  const options = [
    { label: "Orden alfabético", value: "name" },
    { label: "Número de Incidencias", value: "incidents" },
    { label: "Número de RFI", value: "rfi" },
    { label: "Número de Tareas", value: "tasks" },
  ];

  return (
    <>
      <div className="filterModal__container" onClick={onClose} />
      <div className="filterModal__content">
        <ul className="filterModal__list">
          {options.map((option) => (
            <li
              key={option.value}
              className="filterModal__item"
              onClick={() => {
                onSelect(option.value);
                onClose();
              }}
            >
              <Typography variant="p2">{option.label}</Typography>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{FilterModalStyles}</style>
    </>
  );
};

export default FilterModalComponent;
