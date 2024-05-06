import React, { useState, ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/astrolab.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";

import SourceIcon from "@mui/icons-material/Source";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
type AuthProviderProps = {
  children: ReactNode;
};

const Sidebar: React.FC<AuthProviderProps> = ({ children }) => {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  const handleProjectsToggle = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };
  const handleTeamToggle = () => {
    setIsTeamOpen(!isTeamOpen);
  };

  const handleSelection = (path: string) => {
    setSelected(path);
  };

  return (
    
    <div className="flex min-h-screen ">
      <div className="min-w-64 min-h-full overflow-y-auto">
        <img
          src={logo}
          alt="Logo"
          className="fixed top-10 left-16 transition-transform -translate-x-full sm:translate-x-0 w-42 h-20"
        />

        <aside
          id="default-sidebar"
          className="fixed top-40  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
          aria-label="Sidebar"
      
        >
          
          <ul className="space-y-2 ml-6 mb-6 font-medium">
              <li>
                <Link
                  to="/main/timetracker"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF]  hover:text-[#A58A76] ${
                    location.pathname === "/main/timetracker"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main")}
                >
                  {selected === "/main" ? <AccessTimeIcon /> : <AccessTimeIcon />}
                  <span className="ms-3">TIME TRACKER</span>
                </Link>
              </li>
              </ul>
          <span className="flex ml-10 text-[#B3BBCA]">ANALYSE</span>
          <div className=" px-5 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/main"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF]  hover:text-[#A58A76] ${
                    location.pathname === "/main"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main")}
                >
                  {selected === "/main" ? <DashboardIcon /> : <DashboardIcon />}
                  <span className="ms-3">DASHBOARD</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/main/reports"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                    location.pathname === "/main/reports"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/reports")}
                >
                  {selected === "/main/reports" ? (
                    <SignalCellularAltIcon />
                  ) : (
                    <SignalCellularAltIcon />
                  )}
                  <span className="flex-1 ms-3 whitespace-nowrap">REPORTS</span>
                </Link>
              </li>
            </ul>
          </div>
          <span className="flex ml-10 text-[#B3BBCA]">MANAGE</span>
          <div className=" px-5 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/main/projects"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                    location.pathname === "/main/projects"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/projects")}
                >
                  {selected === "/main/projects" ? (
                    <SourceIcon />
                  ) : (
                    <SourceIcon />
                  )}
                  <span
                    className="flex-1 ms-3 whitespace-nowrap"
                    onClick={handleProjectsToggle}
                  >
                    PROJECTS
                  </span>
                </Link>
                {isProjectsOpen && (
                  <ul className="sidebar-dropdown-options">
                    <li>
                      <Link
                        to="/main/projects/phases"
                        className={`sidebar-dropdown-option flex items-center mr-4 ml-4 p-2 mt-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                          location.pathname === "/main/projects/phases"
                            ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                            : "text-gray-900" && "active"
                        }`}
                      >
                        <AlignHorizontalLeftIcon />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          PHASES
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/main/team"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                    location.pathname === "/main/team"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/team")}
                >
                  {selected === "/main/team" ? <GroupsIcon /> : <GroupsIcon />}
                  <span
                    className="flex-1 ms-3 whitespace-nowrap"
                    onClick={handleTeamToggle}
                  >
                    TEAM
                  </span>
                </Link>
                {isTeamOpen && (
                  <ul className="sidebar-dropdown-options">
                    <li>
                      <Link
                        to="/main/team/user"
                        className={`sidebar-dropdown-option flex items-center mr-4 ml-4 p-2 mt-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                          location.pathname === "/main/projects/phases"
                            ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                            : "text-gray-900" && "active"
                        }`}
                      >
                        <PeopleAltIcon />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          USERS
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/main/clients"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                    location.pathname === "/main/clients"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/clients")}
                >
                  {selected === "/main/clients" ? (
                    <AccountCircleIcon />
                  ) : (
                    <AccountCircleIcon />
                  )}
                  <span className="flex-1 ms-3 whitespace-nowrap">CLIENTS</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/main/tags"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                    location.pathname === "/main/tags"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/tags")}
                >
                  {selected === "/main/tags" ? (
                    <LocalOfferIcon />
                  ) : (
                    <LocalOfferIcon />
                  )}
                  <span className="flex-1 ms-3 whitespace-nowrap">TAGS</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/main/settings"
                  className={`flex items-center p-2 rounded-lg hover:bg-[#F8F7FF] hover:text-[#A58A76] ${
                    location.pathname === "/main/settings"
                      ? "text-[#A58A76] bg-[#F8F7FF] border-r-8 border-[#A58A76]"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleSelection("/main/settings")}
                >
                  {selected === "/main/settings" ? (
                    <SettingsIcon />
                  ) : (
                    <SettingsIcon />
                  )}
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    SETTINGS
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div className="flex-1 mx-3 ">{children}</div>
    </div>
  );
};

export default Sidebar;
