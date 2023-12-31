import RunsHeader from "./RunsHeader";
import RunsTable from "./RunsTable";
import RunsTableTabs from "./RunTableTabs";
import fakeData from "../fakeData";

export default function RunsContainer() {
  return (
    <div className="flex-col flex justify-center items-center h-[500px]">
      <RunsHeader />
      <RunsTable
        data={fakeData}
        rowsPerPage={4}
        tableHeaderText={"Weekly Stats"}
      />
      <RunsTable
        data={fakeData}
        rowsPerPage={4}
        tableHeaderText={"Lifetime Stats"}
      />
    </div>
  );
}
