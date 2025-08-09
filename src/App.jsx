import { useState } from "react";
import "./App.css"; // or "./App.scss" if using SCSS
import data from "./data.json";

function App() {
  const [filters, setFilters] = useState([]);

  const handleAddFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const handleTagClick = (tag) => {
    handleAddFilter(tag);
  };

  const handleRemoveFilter = (filterToRemove) => {
    setFilters(filters.filter((f) => f !== filterToRemove))
  }

  const filteredJobs = filters.length === 0
  ? data
  : data.filter((job) => {
    const allTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => allTags.includes(filter));
  });

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-bg-desktop" />
        <div className="header-bg-mobile" />
        <h1>Find-a-Job.com</h1>
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

<main className="job-listings">
  <p className="instructions">
  Click on tags below to filter jobs:
</p>
  {filteredJobs.map((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return (
      <div className={`job-card ${job.featured ? 'featured' : ' '}`} key={job.id}>
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="job-logo"
        />

        <div className="job-info">
          <div className="job-top-row">
            <span className="company-name">{job.company}</span>
            {job.new && <span className="badge new">NEW!</span>}
            {job.featured && <span className="badge featured">FEATURED</span>}
          </div>

          <h2 className="job-position">{job.position}</h2>

          <div className="job-meta">
            <span>{job.postedAt}</span>
            <span>•</span>
            <span>{job.contract}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
        </div>

        <div className="job-tags">
          {tags.map((tag) => (
            <span
              key={tag}
              className="tag"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  })}
</main>

    </div>
  );

}

export default App;

