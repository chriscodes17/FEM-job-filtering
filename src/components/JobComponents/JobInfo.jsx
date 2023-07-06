export default function JobInfo({
  name,
  isNew,
  featured,
  title,
  date,
  contract,
  location,
}) {
  return (
    <div className="jobInfo-container">
      <div className="jobInfo-header">
        <p className="jobInfo-company">{name}</p>
        {isNew && (
          <div
            style={{ background: "#5CA5A5", color: "white" }}
            className="jobInfo-header-pill"
          >
            <p>NEW!</p>
          </div>
        )}
        {featured && (
          <div
            style={{ background: "#2B3939", color: "white" }}
            className="jobInfo-header-pill"
          >
            <p>FEATURED</p>
          </div>
        )}
      </div>
      <p className="jobInfo-title">{title}</p>
      <div className="jobInfo-footer">
        <p>{date}</p>
        <div className="oval"></div>
        <p>{contract}</p>
        <div className="oval"></div>
        <p>{location}</p>
      </div>
    </div>
  );
}
