import { useState } from "react";
import "./App.css"; // or "./App.scss" if using SCSS

function App() {
  const [filters, setFilters] = useState([]);

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
              <div className="company">Photosnap</div>
              <div className="position">Senior Frontend Developer</div>
              <div className="meta">1d ago • Full Time • USA only</div>
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

