import ClientsPage from "@/pages/ClientsPage";
import DashboardPage from "@/pages/DashboardPage";
import ProjectsPages from "@/pages/projects/ProjectsPages";
import ReportsPage from "@/pages/ReportsPage";
import TagsPage from "@/pages/TagsPage";
import TeamPage from "@/pages/teams/TeamPage";
import { Route, Routes } from "react-router-dom";
import PhasesPages from "@/pages/projects/PhasesPages";
import UserPage from "@/pages/teams/UserPage";
import TimeTracekerPage from "@/pages/TimeTracekrPage";
import SettingsPage from "@/pages/SettingsPage";
import ProtectedRoute from "@/ProtectedRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<DashboardPage />} />
        <Route path="timetracker" element={<TimeTracekerPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="projects" element={<ProjectsPages />} />
        <Route path="projects/phases" element={<PhasesPages />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team/user" element={<UserPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="tags" element={<TagsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
