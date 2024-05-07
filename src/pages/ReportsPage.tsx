import Navbar from "@/components/Navbar";
import FilterReports from "@/components/filterReports";
import { Scrollbar } from "@/components/scrollbar";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import * as XLSX from "xlsx";

interface Order {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  date: string;
  nbhours: number;
}
const orders: Order[] = [
  {
    id: "1d",
    firstname: "Golda",
    lastname: "Treuge",
    email: "gtreuge0@indiegogo.com",
    date: "5/14/2023",
    nbhours: 1,
  },
  {
    id: "2d",
    firstname: "Alene",
    lastname: "Gradly",
    email: "agradly1@delicious.com",
    date: "12/22/2023",
    nbhours: 2,
  },
  {
    id: "3z",
    firstname: "Madelina",
    lastname: "Sonner",
    email: "msonner2@biglobe.ne.jp",
    date: "5/14/2023",
    nbhours: 3,
  },
  {
    id: "4f",
    firstname: "Fabiano",
    lastname: "Bessey",
    email: "fbessey3@whitehouse.gov",
    date: "3/8/2024",
    nbhours: 4,
  },
  {
    id: "5f",
    firstname: "Shanda",
    lastname: "Baccas",
    email: "sbaccas4@mozilla.org",
    date: "10/26/2023",
    nbhours: 5,
  },
  {
    id: "6",
    firstname: "Immanuel",
    lastname: "Matas",
    email: "imatas5@boston.com",
    date: "6/15/2023",
    nbhours: 6,
  },
  {
    id: "7",
    firstname: "Nikkie",
    lastname: "Buddleigh",
    email: "nbuddleigh6@blogger.com",
    date: "10/31/2023",
    nbhours: 7,
  },
];
const exportToExcel = () => {
  const worksheetData = [
    ["Name", "Age", "City"], // Header row
    ...orders.map((row) => [
      row.id,
      row.firstname,
      row.lastname,
      row.email,
      row.date,
      row.nbhours,
    ]),
  ];
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "tableData.xlsx");
};

const ReportsPage = () => {
  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] mr-[1%]">
        <FilterReports />
        <div className="flex justify-end mt-4 text-[#A58A76] ">
          <Button onClick={exportToExcel}>
            Export
            <FileDownloadIcon />
          </Button>
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
              <CardHeader title="Users Lsit" />
              <Divider />
              <Scrollbar>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sortDirection="desc">First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Nb Hours</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => {
                      return (
                        <TableRow hover key={order.id}>
                          <TableCell>{order.firstname}</TableCell>
                          <TableCell>{order.lastname}</TableCell>
                          <TableCell>{order.email}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.nbhours}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <div className="flex justify-between ">
                  <Card>ok</Card>
                  <Card>ok</Card>
                </div>
              </Scrollbar>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
