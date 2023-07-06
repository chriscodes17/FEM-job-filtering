import JobList from "./components/JobList";
import FilterList from "./components/FilterList";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header-banner"></div>
      <div className="app-container">
        <FilterList />
        <JobList />
      </div>
    </div>
  );
}

export default App;
