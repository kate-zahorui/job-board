import { Route, Routes } from "react-router-dom";
import { DetailedJob, JobList, NotFound } from "../pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/:JobId" element={<DetailedJob />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
