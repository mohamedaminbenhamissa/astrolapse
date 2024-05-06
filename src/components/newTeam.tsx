import { Box, Divider, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface newClienttProps {
  visible: boolean;
  onClose: () => void;
}

const NewTeam: React.FC<newClienttProps> = ({ visible, onClose }) => {

  const[teamName,setTeamName] = useState("");

  const [error,setError] =useState("");

  const handleSubmit= () => {
if(!teamName){
  setError("Team Name cannot be empty.")
      return;
}


  }

  if (!visible) return null;
  return (
    <div className="fixed inset-1 bg-opacity-25 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white p-2 rounded w-100 border border-[#A58A76]">
        <div className="flex justify-between ">
          <Box sx={{ p: 3 }}>

                <h1 className="text-[#A58A76] text-xl mb-4"> New Client</h1>

            <form onSubmit={(event) => event.preventDefault()}>
              <Stack spacing={3}>
                <TextField fullWidth label="Team Name" name="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                
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

export default NewTeam;
