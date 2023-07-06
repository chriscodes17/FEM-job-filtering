import { useSelector } from "react-redux";
import Job from "./JobComponents/Job";

export default function JobList() {
  const jobs = useSelector(({ jobs, filter }) => {
    if (!filter.length) return jobs;
    return jobs.filter((job) => filter.every((tag) => job.tags.includes(tag)));
  });
  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <Job key={job.id} jobObj={job} />
      ))}
    </div>
  );
}
