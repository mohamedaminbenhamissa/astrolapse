import {
  Box,
  Divider,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import PhaseSelectionPage from "./phaseList";

interface newProjectProps {
  visible: boolean;
  onClose: () => void;
}

const NewProject: React.FC<newProjectProps> = ({ visible, onClose }) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs("2022-04-17"));

  const [error, setError] = useState("");
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");

  const [status, setStatus] = useState("IN PROGRESS");
  const handleSubmit = () => {
    if (!projectName) {
      setError("Project Name cannot be empty.");
      return;
    }
    if (!clientName) {
      setError("Client Name cannot be empty.");
      return;
    }
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-1 bg-opacity-25 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white p-2 rounded w-100 border border-[#A58A76]">
        <div className="flex justify-between ">
          <Box sx={{ p: 3 }}>
            <h1 className="text-[#A58A76] text-xl mb-4"> New Project</h1>
            <form onSubmit={(event) => event.preventDefault()}>
              <Stack direction={"row"} spacing={3}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Project Name"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Client Name"
                    name="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />

                  <DateTimePicker
                    label="Satrt Day"
                    value={startDate}
                    ampm={false}
                    views={["year", "month", "day"]}
                    onChange={(newDate) => setStartDate(newDate)}
                  />

                  <DateTimePicker
                    label="End Day"
                    views={["year", "month", "day"]}
                    value={endDate}
                    ampm={false}
                    onChange={(newValue) => setEndDate(newValue)}
                  />
                </Stack>
                <Stack spacing={3}>
                  <PhaseSelectionPage />

                  <Select
                    value={status}
                    onChange={(event) =>
                      setStatus(event.target.value as string)
                    }
                    inputProps={{ "aria-label": "Status" }}
                  >
                    <MenuItem value="IN PROGRESS">IN PROGRESS</MenuItem>
                    <MenuItem value="COMPLETE">COMPLETE</MenuItem>
                    <MenuItem value="REJECTED">REJECTED</MenuItem>
                    <MenuItem value="REJECTED">ON HOLD</MenuItem>
                  </Select>
                </Stack>
              </Stack>
              {error && <p className="text-red-500">{error}</p>}
              <Divider sx={{ my: 3 }} />
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Box sx={{ flexGrow: 1 }} />
                <button
                  className={`bg-white text-[#A58A76] font-poppins text-lg py-1 px-16 rounded-xl`}
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className={`bg-[#A58A76] text-white font-poppins text-lg py-1 px-16 rounded-xl`}
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
              </Box>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
