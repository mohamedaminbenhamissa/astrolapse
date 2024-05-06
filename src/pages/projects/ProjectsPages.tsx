import Navbar from "@/components/Navbar";
import NewProject from "@/components/NewProject";
//import { FaSearch } from "react-icons/fa";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

import type { FC } from "react";
import { format, subMinutes, subSeconds } from "date-fns";


import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import type { SeverityPillColor } from "@/components/severity-pill";

import { Scrollbar } from "../../components/scrollbar";
import { SeverityPill } from "@/components/severity-pill";
import ProjectDetails from "@/components/ProjectDetails";

const labelColors: Record<OrderStatus, SeverityPillColor> = {
  complete: "success",
  inprogress: "warning",
  rejected: "error",
};
type OrderStatus = "complete" | "inprogress" | "rejected";

interface Order {
  id: string;
  startday: number;
  enddate: number;
  projectName: string;
  clientName: string;
  status: OrderStatus;
  phases: string;
}

const now = new Date();

const orders: Order[] = [
  {
    id: "5eff2548979e396cb4b000ba",
    startday: subMinutes(subSeconds(now, 10), 7).getTime(),
    enddate: subMinutes(subSeconds(now, 10), 7).getTime(),
    projectName: "Carson Darrin",
    clientName: "pending",
    status: "complete",
    phases: "Design, Development",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    startday: subMinutes(subSeconds(now, 10), 7).getTime(),
    enddate: subMinutes(subSeconds(now, 10), 7).getTime(),
    projectName: "Carson Darrin",
    clientName: "pending",
    status: "rejected",
    phases: "Design, Development",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    startday: subMinutes(subSeconds(now, 10), 7).getTime(),
    enddate: subMinutes(subSeconds(now, 10), 7).getTime(),
    projectName: "Carson Darrin",
    clientName: "pending",
    status: "complete",
    phases: "Design, Development",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    startday: subMinutes(subSeconds(now, 10), 7).getTime(),
    enddate: subMinutes(subSeconds(now, 10), 7).getTime(),
    projectName: "Carson Darrin",
    clientName: "pending",
    status: "rejected",
    phases: "Design, Development",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    startday: subMinutes(subSeconds(now, 10), 7).getTime(),
    enddate: subMinutes(subSeconds(now, 10), 7).getTime(),
    projectName: "Carson Darrin",
    clientName: "pending",
    status: "inprogress",
    phases: "Design, Development",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    startday: subMinutes(subSeconds(now, 10), 7).getTime(),
    enddate: subMinutes(subSeconds(now, 10), 7).getTime(),
    projectName: "Carson Darrin",
    clientName: "pending",
    status: "inprogress",
    phases: "Design, Development",
  },
];

const ProjectsPages: FC = () => {
  const [shownewProject, setShownewProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Order | null>(null);
  const handleClose = () => {
    setShownewProject(false);
  };

  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] mr-[1%] ">
        <div className="flex justify-end ">
          <button
            type="button"
            className="relative flex items-center justify-end  mr-10 mt-4 py-2 px-3 bg-white rounded-xl hover:text-[#A58A76]  text-sm focus:outline-none focus:ring-2 focus:ring-white  "
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => setShownewProject(true)}
          >
            <span className="text-lg text-black hover:text-[#A58A76] ">
              Create New Project
            </span>
          </button>
          <NewProject onClose={handleClose} visible={shownewProject} />
        </div>

        <div className="flex items-center justify-between ml-10 mr-5 mt-10">
          <div className=" w-full">
            <input
              type="text"
              className="bg-white h-10 outline-none px-4 w-[99%] rounded-full placeholder:text-[14px] font-normal"
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            className=" flex items-center bg-white rounded-full text-xl py-1 px-5"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <FilterListIcon />
            <span className="text-lg text-black ">Filters</span>
          </button>
        </div>
        <div>
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
              p: 3,
            }}
          >
            <Card>
              <CardHeader
                action={
                  <IconButton>
                    <SvgIcon></SvgIcon>
                  </IconButton>
                }
                title="Projects List"
              />
              <Divider />
              {selectedProject && (
                <ProjectDetails
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              )}
              <Scrollbar>
                <Table sx={{ minWidth: 700, cursor: "pointer" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>NAME</TableCell>
                      <TableCell>CLIENT</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>End Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Phases</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => {
                      const statusColor = labelColors[order.status];
                      const startDay = format(order.startday, "dd MMM, yyyy");
                      const endDate = format(order.enddate, "dd MMM, yyyy");

                      return (
                        <TableRow
                          hover
                          key={order.id}
                          onClick={() => setSelectedProject(order)}
                        >
                          <TableCell>{order.projectName}</TableCell>
                          <TableCell>{order.clientName}</TableCell>
                          <TableCell>{startDay}</TableCell>
                          <TableCell>{endDate}</TableCell>
                          <TableCell>
                            <SeverityPill color={statusColor}>
                              {order.status}
                            </SeverityPill>
                          </TableCell>
                          <TableCell>{order.phases}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Scrollbar>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPages;
