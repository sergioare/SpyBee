import Chip from "@/components/atoms/Chip";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/CustomInput";
import { Typography } from "@/components/atoms/Typography";
import { theme } from "@/utils/ThemeProvider";
import SortIcon from "@mui/icons-material/Sort";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/AddOutlined";
import HeaderStyles from "./header.styles";

const { colors } = theme;

const HeaderComponent = () => {
  return (
    <section className="header__container">
      <div className="header__title">
        <Typography variant="h1" weight="semibold">
          Mis proyectos
        </Typography>
        <Chip title="proyectos" />
      </div>
      <div className="header__actions">
        <div className="header__actions">
          <Button
            variant="white"
            className="--button "
            icon={
              <SortIcon sx={{ color: colors.neutrals[300], fontSize: 18 }} />
            }
          />
          <div className="header__actions--filters">
            <Button
              variant="white"
              className="--button --initial"
              icon={
                <ListIcon sx={{ color: colors.neutrals[300], fontSize: 18 }} />
              }
            />
            <Button
              variant="white"
              className="--button --middle"
              icon={
                <GridViewIcon
                  sx={{ color: colors.neutrals[300], fontSize: 18 }}
                />
              }
            />
            <Button
              variant="white"
              className="--button --final"
              icon={
                <PlaceIcon sx={{ color: colors.neutrals[300], fontSize: 18 }} />
              }
            />
          </div>
        </div>
        <div className="header__actions">
          <Input
            placeholder="Buscar"
            iconPosition="right"
            icon={<SearchIcon sx={{ color: colors.neutrals[200] }} />}
          />
          <Button variant="contained" size="large"  icon={<AddIcon sx={{ fontSize: 18 }} />}>
            Crear proyecto
          </Button>
        </div>
      </div>
      <style jsx>{HeaderStyles}</style>
    </section>
  );
};

export default HeaderComponent;
