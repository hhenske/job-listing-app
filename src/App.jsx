import { useState } from "react";
import "./App.css"; // or "./App.scss" if using SCSS
import data from "./data.json";

function App() {
  const [filters, setFilters] = useState(['Frontend']);

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-bg-desktop" />
        <div className="header-bg-mobile" />
      </header>

      {/* FILTER BAR */}
      {filters.length > 0 && (
        <div className="filter-bar">
          <div className="active-filters">
            {filters.map((filter, index) => (
              <div className="filter-tag" key={index}>
                <span>{filter}</span>
                <button onClick={() => handleRemoveFilter(filter)}>×</button>
              </div>
            ))}
          </div>
          <button className="clear-btn" onClick={() => setFilters([])}>
            Clear
          </button>
        </div>
      )}

      {/* MAIN JOB LISTINGS */}
      <main className="job-listings">
        {/* Job Card Example */}
        <div className="job-card">
          <div className="left">
            <img
              src="/images/photosnap.svg"
              alt="Photosnap"
              className="company-logo"
            />
            <div className="details">
              <div className="company">
                <span className="company-name">Company name</span>
                <span className="company-tags">Company tags rendered dynamically, side by side</span>
              </div>
              <div className="position">Position being listed</div>
              <div className="meta">1d ago • Full Time • USA only
                <span className="listed-when">1 day ago</span>
                <span className="listed-type">Full Time</span>
                <span className="listed-where">Location</span>
              </div>
            </div>
          </div>
          <div className="right">
            <span className="tag">Frontend</span>
            <span className="tag">Senior</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
          </div>
        </div>

        {/* Add more job cards dynamically */}
      </main>
    </div>
  );

  function handleRemoveFilter(filterToRemove) {
    setFilters(filters.filter((f) => f !== filterToRemove));
  }
}

export default App;

