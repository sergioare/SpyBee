"use client";

import { theme } from "@/utils/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import HeaderStyles from "./header.styles";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  DEFAULT_AVATAR,
  DEFAULT_WHITE_LOGO,
} from "@/utils/constants/defaultStaticImages";
import { useAppContext } from "@/context/appContext";
import { Typography } from "@/components/atoms/Typography";

const { colors } = theme;

const HeaderComponent = () => {
  const { user } = useAppContext();

  const roleName = () => {
    if (!user) return null;
    switch (user.role) {
      case "admin":
        return "Administrador";
      default:
        return "Usuario";
    }
  };

  return (
    <>
      <header className="navbar">
        <nav className="navbar__content">
          <div className="navbar__icon">
            <Link href="/dashboard" passHref>
              <Image
                src={DEFAULT_WHITE_LOGO.image}
                alt={DEFAULT_WHITE_LOGO.alt}
                width={120}
                height={56}
              />
            </Link>
          </div>

          <div className="navbar__right">
            <Image
              src={DEFAULT_AVATAR.image}
              alt={DEFAULT_AVATAR.alt}
              width={40}
              height={40}
            />
            <div className="navbar__right__menu">
              <div className="navbar__right__menu--user">
                <Typography variant="s1"> {user?.username} </Typography>
                <Typography variant="p2">{roleName()}</Typography>
              </div>
              <ArrowDown
                style={{
                  color: colors.primary[100],
                  width: 30,
                  height: 30,
                }}
              />
            </div>
          </div>
        </nav>
      </header>

      <style jsx>{HeaderStyles}</style>
    </>
  );
};

export default HeaderComponent;
