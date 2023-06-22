import RunsHeader from "./RunsHeader";
import RunsTable from "./RunsTable";
import RunsTableTabs from "./RunTableTabs";

export default function RunsContainer() {
  return (
    <div className="flex-col flex justify-center items-center h-[500px]">
      <RunsHeader />
      <RunsTableTabs />
      <RunsTable />
    </div>
  );
}
