import Navbar from "@/components/Navbar";
// import { FaSearch } from "react-icons/fa";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

import type { FC } from "react";


import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

import { Scrollbar } from "../components/scrollbar";
import NewTimeTracker from "@/components/newTimeTracekr";

interface Order {
  id: string;
  projectName: string;
  phaseName:string;
  date:string;
  nbhours:number;
  description: string;
  nature:string
  
}



const orders: Order[] = [
  {
    id: "5eff2548979e396cb4b000ba",
    projectName: "pending",
    phaseName: "Carson Darrin",
    date:"12/03/2022",
    nbhours:4,
    description:"lorem ipsum",
    nature:"paid"
    
  },
  {
    id: "5eff2548979e396cb4b000ba",
    projectName: "pending",
    phaseName: "Carson Darrin",
    date:"12/03/2022",
    nbhours:4,
    description:"lorem ipsum",
    nature:"paid"
    
  },
  {
    id: "5eff2548979e396cb4b000ba",
    projectName: "pending",
    phaseName: "Carson Darrin",
    date:"12/03/2022",
    nbhours:4,
    description:"lorem ipsum",
    nature:"paid"
    
  },
  {
    id: "5eff2548979e396cb4b000ba",
    projectName: "pending",
    phaseName: "Carson Darrin",
    date:"12/03/2022",
    nbhours:4,
    description:"lorem ipsum",
    nature:"paid"
    
  },
  {
    id: "5eff2548979e396cb4b000ba",
    projectName: "pending",
    phaseName: "Carson Darrin",
    date:"12/03/2022",
    nbhours:4,
    description:"lorem ipsum",
    nature:"paid"
    
  },
  {
    id: "5eff2548979e396cb4b000ba",
    projectName: "pending",
    phaseName: "Carson Darrin",
    date:"12/03/2022",
    nbhours:4,
    description:"lorem ipsum",
    nature:"paid"
    
  },
];

const TimeTracekerPage: FC = () => {
  const [shownewTag, setShownewTag] = useState(false);
  const handleClose = () => {
    setShownewTag(false);
  };
  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] mr-[1%]">
        <div className="flex justify-end ">
          <button
            type="button"
            className="relative flex items-center justify-end  mr-10 mt-4 py-2 px-3 bg-white rounded-xl hover:text-[#A58A76]  text-sm focus:outline-none focus:ring-2 focus:ring-white  "
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => setShownewTag(true)}
          >
            <span className="text-lg text-black hover:text-[#A58A76] ">
            New Follow-up
            </span>
          </button>
          <NewTimeTracker onClose={handleClose} visible={shownewTag} />
        </div>

        <div className="flex items-center justify-between ml-10 mr-5 mt-10">
          <div className=" w-full">
            <input
              type="text"
              className="bg-white h-10 outline-none px-4 w-[99%] rounded-full placeholder:text-[14px] font-normal"
              placeholder="Search"
            />
            {/* <FaSearch className="absolute left-3 top-[10px] text-gray-400" /> */}
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
                title="Done list"
              />
              <Divider />
              <Scrollbar>
                <Table sx={{ minWidth: 700 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell> Project Name</TableCell>
                      <TableCell> Phase  Name</TableCell>
                      <TableCell> Date</TableCell>
                      <TableCell> Number of Hours</TableCell>
                      <TableCell> Description</TableCell>
                      <TableCell> Nature</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => {
                      return (
                        <TableRow hover key={order.id}>
                          <TableCell>{order.projectName}</TableCell>
                          <TableCell>{order.phaseName}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.nbhours}</TableCell>
                          <TableCell>{order.description}</TableCell>
                          <TableCell>{order.nature}</TableCell>
                          
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Scrollbar>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                }}
              >
                <Button
                  color="inherit"
                  endIcon={
                    <SvgIcon>
                      <ArrowForwardIosIcon />
                    </SvgIcon>
                  }
                  size="small"
                >
                  See All
                </Button>
              </Box>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TimeTracekerPage;