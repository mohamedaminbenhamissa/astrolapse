import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffCsredIcon from "@mui/icons-material/MoneyOffCsred";

interface Project {
  id: string;
  name: string;
  phases: string[];
}

interface newProjectProps {
  visible: boolean;
  onClose: () => void;
}

const iconOptions = [
  { value: "Payed", icon: <AttachMoneyIcon /> },
  { value: "Not payed", icon: <MoneyOffCsredIcon /> },
];

const NewTimeTracker: React.FC<newProjectProps> = ({ visible, onClose }) => {
  // Dummy data for projects and phases
  const projects: Project[] = [
    {
      id: "1",
      name: "Project 1",
      phases: ["Phase 1A", "Phase 1B", "Phase 1C"],
    },
    {
      id: "2",
      name: "Project 2",
      phases: ["Phase 2A", "Phase 2B", "Phase 2C"],
    },
  ];

  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [error, setError] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedPhase, setSelectedPhase] = useState("");
  const [nbhours, setNbHours] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(iconOptions[0].value);

  const handleSubmit = () => {
    if (!selectedProject) {
      setError("Please select a project.");
      return;
    }
    if (!selectedPhase) {
      setError("Please select a phase.");
      return;
    }
    if (!nbhours) {
      setError("Please enter the number of hours.");
      return;
    }
    // Reset error state if there are no errors
    setError("");
    // Perform form submission logic here
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-1 bg-opacity-25 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white p-1 rounded w-90 border border-[#A58A76]">
        <div className="flex justify-between ">
          <Box sx={{ p: 3 }}>
            <h1 className="text-[#A58A76] text-xl mb-4"> New Follow-up</h1>
            <form onSubmit={(event) => event.preventDefault()}>
              <Stack spacing={3}>
                <Stack spacing={3} direction={"row"}>
                  <FormControl fullWidth>
                    <InputLabel>Project Name</InputLabel>
                    <Select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value as string)}
                    >
                      {projects.map((project) => (
                        <MenuItem key={project.id} value={project.id}>
                          {project.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel>Phase Name</InputLabel>
                    <Select
                      value={selectedPhase}
                      onChange={(e) => setSelectedPhase(e.target.value as string)}
                    >
                      {projects
                        .find((project) => project.id === selectedProject)
                        ?.phases.map((phase) => (
                          <MenuItem key={phase} value={phase}>
                            {phase}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Stack>
                <Stack spacing={2} direction={"row"}>
                  <DateTimePicker
                    label="Date"
                    value={startDate}
                    onChange={(newDate) => setStartDate(newDate)}
                  />
                  <TextField
                    type="number"
                    label="Number of Hours"
                    name="nbofhours"
                    value={nbhours}
                    onChange={(e) => setNbHours(e.target.value)}
                  />
                </Stack>
                <Stack spacing={2} direction={"row"}>
                  <TimePicker label="Start" ampm={false} />
                  <TimePicker label="End" ampm={false} />
                </Stack>
                <Grid xs={12}>
                  <Typography sx={{ mb: 1 }} variant="subtitle2">
                    Description
                  </Typography>
                  <OutlinedInput fullWidth name="message" required multiline rows={6} />
                </Grid>
                <Select
                  labelId="icon-select-label"
                  value={selectedIcon}
                  onChange={(event) => setSelectedIcon(event.target.value as string)}
                >
                  {iconOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.icon} {option.value}
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
              {error && <p className="text-red-500">{error}</p>}
              <Divider sx={{ my: 3 }} />
              <Box sx={{ alignItems: "center", display: "flex" }}>
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

export default NewTimeTracker;
