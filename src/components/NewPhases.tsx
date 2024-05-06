import { Box, Divider, Stack, TextField } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";



interface newPhaseProps {
  visible: boolean;
  onClose: () => void;

}

const NewPhases: React.FC<newPhaseProps> = ({ visible, onClose}) => {
  
  
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [error, setError] = useState("");
  const [phaseName, setPhaseName] = useState("");
  const [estimation, setEstimation] = useState("");
  const [costPerDay, setCostPerDay] = useState("");

  const  handleSubmit = () => {
    if(!phaseName)
     { setError("Phase Name cannot be empty.")
      return;}
      if(!estimation){
        setError("Estimation cannot be empty.")
      return;
      }
      if(!costPerDay){
        setError("Cost Per Day cannot be empty.")
      return;
      }
  }

  if (!visible) return null;
  return (
    
    <div className="fixed inset-1 bg-opacity-25 backdrop-blur-md flex items-center justify-end">
      <div className="bg-white p-2 rounded w-100 border border-[#A58A76]">
        <div className="flex justify-between ">
          <Box sx={{ p: 3 }}>
          <h1 className="text-[#A58A76] text-xl mb-4"> New Phase</h1>
            <form onSubmit={(event) => event.preventDefault()}>
              <Stack spacing={4}>
                <Stack spacing={3}>
                  <TextField fullWidth label="Phase Name" name="phaseName" value={phaseName} onChange={(e) => setPhaseName(e.target.value)} />
                 
                </Stack>
                <Stack spacing={3} direction="row">
                  
                    <DateTimePicker
                      label="Satrt Day"
                      value={startDate}
                      onChange={(newDate) => setStartDate(newDate)}
                    />

                    <DateTimePicker
                      label="End Day"
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                    />
           
                </Stack>
                <Stack spacing={3} direction="row">
                  <TextField type="number" fullWidth label="Estimation" name="estimation" value={estimation} onChange={(e) => setEstimation(e.target.value)} />
                  <TextField
                    fullWidth
                    type="number"
                    label="Cost Per Day"
                    name="costPerDay"
                    value={costPerDay}
                    onChange={(e) => setCostPerDay(e.target.value)}
                  />
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

export default NewPhases;
