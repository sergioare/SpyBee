import { Typography } from "@/components/atoms/Typography";
import { FilterModalStyles } from "./filterModal.styles";

type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FilterModalComponent = ({ isOpen, onClose }: FilterModalProps) => {
  if (!isOpen) return null;

  const options = [
    "Orden alfabético",
    "Número de Incidencias",
    "Número de RFI",
    "Número de Tareas",
  ];

  return (
    <>
      <div className="filterModal__container" onClick={onClose} />
      <div className="filterModal__content">
        <ul className="filterModal__list">
          {options.map((option) => (
            <li key={option} className="filterModal__item" onClick={onClose}>
              <Typography variant="p2">{option}</Typography>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{FilterModalStyles}</style>
    </>
  );
};

export default FilterModalComponent;
