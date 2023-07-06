import { createSlice } from "@reduxjs/toolkit";
import jobData from "../data/data.json";

const initialState = jobData.map((job) => {
  return { ...job, tags: [job.role, job.level, ...job.languages, ...job.tools] };
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {},
});

export default jobsSlice.reducer;
