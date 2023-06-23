import RunsHeader from "./RunsHeader";
import RunsTable from "./RunsTable";
import RunsTableTabs from "./RunTableTabs";
import fakeData from "../fakeData";

export default function RunsContainer() {
  return (
    <div className="flex-col flex justify-center items-center h-[500px]">
      <RunsHeader />
      <RunsTableTabs />
      <RunsTable data={fakeData} rowsPerPage={4} />
    </div>
  );
}
