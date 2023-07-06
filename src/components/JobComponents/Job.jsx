import JobTags from "./JobTags";
import JobInfo from "./JobInfo";
export default function Job({ jobObj }) {
  const borderStyle = {
    borderLeft: jobObj.featured ? "5px solid #5CA5A5" : "",
  };
  return (
    <div style={borderStyle} className="job-container">
      <div className="jobs-info-section">
        <img className="job-logo" src={jobObj.logo} alt="" />
        <JobInfo
          name={jobObj.company}
          isNew={jobObj.new}
          featured={jobObj.featured}
          title={jobObj.position}
          date={jobObj.postedAt}
          contract={jobObj.contract}
          location={jobObj.location}
        />
      </div>
      <div className="jobTags-container">
        {jobObj.tags.map((tag, i) => (
          <JobTags key={i} tag={tag} />
        ))}
      </div>
    </div>
  );
}
