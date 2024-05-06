import Navbar from "@/components/Navbar";
// import { FaSearch } from "react-icons/fa";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

import type { FC } from "react";


import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";

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
  phaseName: string;
  date: string;
  nbhours: number;
  description: string;
  nature: string;
}

const orders: Order[] = [
  {
    id: "92-565-9154",
    projectName: "Edgeify",
    phaseName: "Quitzon and Sons",
    date: "2/14/2024",
    nbhours: 1,
    description:
      "in faucibus orci luctus et ultrices posuere cubilia curae nulla",
    nature: "true",
  },
  {
    id: "74-254-0133",
    projectName: "Yodel",
    phaseName: "Kutch-Kuhic",
    date: "7/6/2023",
    nbhours: 2,
    description:
      "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis",
    nature: "false",
  },
  {
    id: "52-182-2635",
    projectName: "Voonyx",
    phaseName: "Skiles LLC",
    date: "1/3/2024",
    nbhours: 3,
    description: "elit ac nulla sed vel enim sit amet nunc viverra dapibus",
    nature: "false",
  },
  {
    id: "32-663-7019",
    projectName: "Meetz",
    phaseName: "Green, Auer and Lehner",
    date: "7/23/2023",
    nbhours: 4,
    description:
      "orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio",
    nature: "false",
  },
  {
    id: "99-140-2837",
    projectName: "Flashdog",
    phaseName: "Hodkiewicz-Marvin",
    date: "7/30/2023",
    nbhours: 5,
    description:
      "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac",
    nature: "false",
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
              p: 3,
            }}
          >
            <Card>
              <CardHeader title="Done list" />
              <Divider />
              <Scrollbar>
                <Table sx={{ minWidth: 500 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell> Project Name</TableCell>
                      <TableCell> Phase Name</TableCell>
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
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TimeTracekerPage;
