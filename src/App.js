import { useState } from "react";
import "./App.css";
import { Filter } from "./components/filter/filter";
import { Paginator } from "./components/paginator/paginator";
import { Table } from "./components/table/table";

function App() {
  const [thisPage, setThisPage] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welbex project </h1>
      </header>
      <div className="mainWrapper">
        <Filter className="filter" />
        <Table thisPage={thisPage} className="table" />
        <Paginator
          className="paginator"
          thisPage={thisPage}
          setThisPage={setThisPage}
        />
      </div>
    </div>
  );
}

export default App;
