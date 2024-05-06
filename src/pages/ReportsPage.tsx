import Navbar from "@/components/Navbar";
import FilterReports from "@/components/filterReports";
import { Scrollbar } from "@/components/scrollbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Card, CardHeader, Divider, IconButton, SvgIcon, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from "@mui/material";

interface Order {
  id: string;
  firstname: string;
  lastname: string;
  team: string;
  email: string;
  phonenumber: number;
  role: string;
}
const orders: Order[] = [
  {
    id: "5eff2548979e396cb4b000ba",
    firstname: "Ekaterina Tankova",
    lastname: "Ben Hamissa",
    team: "Alpha",
    email: "test@gmail.com",
    phonenumber: 123456789,
    role: "Manager",
  },];

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
                      <TableCell sortDirection="desc">
                        <Tooltip enterDelay={300} title="Sort">
                          <TableSortLabel active direction="desc">
                            First Name
                          </TableSortLabel>
                        </Tooltip>
                      </TableCell>
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

export default ReportsPage;
