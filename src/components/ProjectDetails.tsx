import { Order } from "@/type/type";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { format } from "date-fns";
import { useState } from "react";
import NewPhases from "./NewPhases";
import PhaseSelectionPage from "./phaseList";

const ProjectDetails = ({
  project,

  onClose,
}: {
  project: Order;

  onClose: () => void;
}) => {
  const [openNewPhase, setOpenNewPhase] = useState(false);


  const handleClose = () => {
    setOpenNewPhase(false);
  };
  if (!project) return null;
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <div className="fixed inset-1 bg-opacity-25 backdrop-blur-lg flex items-center justify-center">
        <Card>
          <CardHeader title="Project Details" />
          <Divider />
          <div className="flex flex-wrap gap-4  ">
            <div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">Project Name:</Typography>
                    </TableCell>
                    <TableCell>
                      <div>{project.projectName}</div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">Client Name:</Typography>
                    </TableCell>
                    <TableCell> {project.clientName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">Start Date:</Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      {format(project.startday, "dd MMM, yyyy HH:mm:ss")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">End Date:</Typography>
                    </TableCell>
                    <TableCell>
                      {format(project.enddate, "dd MMM, yyyy HH:mm:ss")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">Status:</Typography>
                    </TableCell>
                    <TableCell>{project.status}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-4">
              <PhaseSelectionPage />
            </div>
          </div>

          <Stack alignItems="flex-start" spacing={1} sx={{ mt: 2 }}>
            <Button
              onClick={() => setOpenNewPhase(true)}
              color="inherit"
              endIcon={
                <SvgIcon>
                  <ArrowRightAltIcon />
                </SvgIcon>
              }
            >
              Add New Phase
            </Button>
            <NewPhases onClose={handleClose} visible={openNewPhase}/>
            <CardActions>
              <button
                onClick={onClose}
                className="mt-4 bg-[#A58A76] text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </CardActions>
          </Stack>
        </Card>
      </div>
    </Box>
  );
};

export default ProjectDetails;
