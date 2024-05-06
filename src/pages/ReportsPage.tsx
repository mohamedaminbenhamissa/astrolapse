import Navbar from "@/components/Navbar";
import FilterReports from "@/components/filterReports";
import { Scrollbar } from "@/components/scrollbar";

import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface Order {
  id: string;
  firstname: string;
  lastname: string;
  team: string;
  email: string;
  phonenumber: string;
  role: string;
}
const orders: Order[] = [
  {
    id: "1",
    firstname: "Lyon",
    lastname: "Ure",
    team: "Dodge",
    email: "lure0@theguardian.com",
    phonenumber: "611-493-4581",
    role: "Journey",
  },
  {
    id: "2a",
    firstname: "Rena",
    lastname: "Cornwell",
    team: "Chevrolet",
    email: "rcornwell1@drupal.org",
    phonenumber: "237-828-0528",
    role: "Avalanche 1500",
  },
  {
    id: "3",
    firstname: "Mersey",
    lastname: "Dalrymple",
    team: "GMC",
    email: "mdalrymple2@paypal.com",
    phonenumber: "677-116-9968",
    role: "Savana 1500",
  },
  {
    id: "4",
    firstname: "Ruth",
    lastname: "Gouldstone",
    team: "Mercury",
    email: "rgouldstone3@cyberchimps.com",
    phonenumber: "904-563-7936",
    role: "Sable",
  },
  {
    id: "5",
    firstname: "Margo",
    lastname: "Curteis",
    team: "Kia",
    email: "mcurteis4@ycombinator.com",
    phonenumber: "668-744-4663",
    role: "Sephia",
  },
];

const ReportsPage = () => {
  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] mr-[1%]">
        <FilterReports />
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
                title="Users Lsit"
              />
              <Divider />
              <Scrollbar>
                <Table sx={{ minWidth: 700 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sortDirection="desc">First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Team</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => {
                      return (
                        <TableRow hover key={order.id}>
                          <TableCell>{order.firstname}</TableCell>
                          <TableCell>{order.lastname}</TableCell>
                          <TableCell>{order.team}</TableCell>
                          <TableCell>{order.email}</TableCell>
                          <TableCell>{order.phonenumber}</TableCell>
                          <TableCell>{order.role}</TableCell>
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

export default ReportsPage;
