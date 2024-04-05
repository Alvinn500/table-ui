import Table from "./components/Table";

function App() {
  return (
    <div className="bg-gray-200">
      <Table
        dataLength={5000}
        pageSize={10}
        siblingCount={2}
        filter={true}
        title="Examples"
      />
    </div>
  );
}

export default App;
