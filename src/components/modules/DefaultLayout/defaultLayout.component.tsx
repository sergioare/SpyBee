"use client";
import { useAppContext } from "@/context/appContext";
import { DefaultLayoutProps } from "./defaultLayout.model";
import { DefaultLayoutLocalStyles } from "./defaultLayout.styles";
import Header from "@/components/molecules/Header";
import Spinner from "@/components/molecules/Spinner";

const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
  const { user } = useAppContext();

  if (!user) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <Header />
        <main className="content">{children}</main>
      </div>
      <style jsx>{DefaultLayoutLocalStyles}</style>
    </>
  );
};

export default DefaultLayoutComponent;
