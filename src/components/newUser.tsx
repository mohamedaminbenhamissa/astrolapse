import { Box, Divider, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface newClienttProps {
  visible: boolean;
  onClose: () => void;
}

const NewUser: React.FC<newClienttProps> = ({ visible, onClose }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [team, setTeam] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!firstname) {
      setError("First Name cannot be empty.");
      return;
    }
    if (!lastname) {
      setError("Last Name cannot be empty.");
      return;
    }
    if (!team) {
      setError("Team cannot be empty.");
      return;
    }
    if (!email) {
      setError("E-mail cannot be empty.");
      return;
    }
    if (!phoneNumber) {
      setError("Phone Number cannot be empty.");
      return;
    }
    if (!role) {
      setError("Role cannot be empty.");
      return;
    }
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-1 bg-opacity-25 backdrop-blur-md flex items-center justify-center">
      <div className="bg-white p-2 rounded w-100 border border-[#A58A76]">
        <div className="flex justify-between ">
          <Box sx={{ p: 3 }}>
            <h1 className="text-[#A58A76] text-xl mb-4"> New Client</h1>

            <form onSubmit={(event) => event.preventDefault()}>
              <Stack spacing={2} direction={"column"}>
                <Stack spacing={3} direction={"row"}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Stack>
                <Stack spacing={3} direction={"row"}>
                  <TextField
                    fullWidth
                    label="Team"
                    name="team"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="E-mail"
                    name="eamil"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Stack>
                <Stack spacing={3} direction={"row"}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phonenumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Role"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
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

export default NewUser;
