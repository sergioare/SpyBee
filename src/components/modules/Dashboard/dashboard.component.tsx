import Header from "./components/Header";
import Table from "./components/Table";

export const DashboardComponent = () => {
  return (
    <>
      <Header />
      <Table onSelect={(project) => console.log(project)} />
    </>
  );
};
