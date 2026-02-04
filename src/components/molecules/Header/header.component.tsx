"use client";
import { theme } from "@/utils/ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HeaderStyles from "./header.styles";
import { DEFAULT_WHITE_LOGO } from "@/utils/constants/defaultStaticImages";

const { colors } = theme;

const HeaderComponent = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal((prevState) => !prevState);
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
                  width={102}
                  height={32}
                />
            </Link>
          </div>

          <div className="navbar__right"></div>
        </nav>
      </header>

      <style jsx>{HeaderStyles}</style>
    </>
  );
};
export default HeaderComponent;
