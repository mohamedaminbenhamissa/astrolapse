import Navbar from "@/components/Navbar";

//import { FaSearch } from "react-icons/fa";
import FilterListIcon from "@mui/icons-material/FilterList";
// import { useState } from "react";

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

import { Scrollbar } from "../../components/scrollbar";
// import NewPhases from "@/components/NewPhases";

interface Order {
  id: string;
  phasename: string;
}

const orders: Order[] = [
  {
    id: "5eff2548979e396cb4b000ba",
    phasename: "Ekaterina Tankova",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    phasename: "Ekaterina Tankova",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    phasename: "Ekaterina Tankova",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    phasename: "Ekaterina Tankova",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    phasename: "Ekaterina Tankova",
  },
  {
    id: "5eff2548979e396cb4b000ba",
    phasename: "Ekaterina Tankova",
  },
];

const PhasesPages: FC = () => {
  // const [shownewProject, setShownewProject] = useState(false);
  // const handleClose = () => {
  //   setShownewProject(false);
  // };

  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] w-full px-[2px]">
        <div className="flex justify-end ">
          <button
            type="button"
            className="relative flex items-center justify-end py-2 px-3 mr-10 mt-4 bg-white rounded-xl hover:text-[#A58A76]  text-sm focus:outline-none focus:ring-2 focus:ring-white  "
            aria-expanded="false"
            aria-haspopup="true"
            // onClick={() => setShownewProject(true)}
          >
            <span className="text-lg  text-black hover:text-[#A58A76] ">
              Add Phase
            </span>
          </button>
         {/* // <NewPhases onClose={handleClose} visible={shownewProject} /> */}
        </div>

        <div className="flex items-center  justify-between ml-10 mr-5 mt-10">
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
            className=" flex items-center bg-white rounded-full text-xl py-1 px-5 focus:outline-none focus:ring-2 focus:ring-white"
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
                title="Phases Lsit"
              />
              <Divider />
              <Scrollbar>
                <Table sx={{ minWidth: 700 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => {
                      return (
                        <TableRow hover key={order.id}>
                          <TableCell>{order.phasename}</TableCell>
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

export default PhasesPages;
