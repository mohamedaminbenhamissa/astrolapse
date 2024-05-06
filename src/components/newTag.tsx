import { Box, Divider, IconButton, Popover, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import ColorLensIcon from '@mui/icons-material/ColorLens';
interface newTagProps {
  visible: boolean;
  onClose: () => void;
}

const NewTag: React.FC<newTagProps> = ({ visible, onClose }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const[tagName,setTagName] = useState("");
  const [color,setColor] = useState("#aabbcc");
 const [error,setError] = useState("");
 const [showColorPicker, setShowColorPicker] = useState(false);
  const handleSubmit= () => {
if(!tagName){
  setError("Tag Name cannot be empty.")
      return;
}
if(!color){
  setError("Color cannot be empty.")
      return;
}

  }

  if (!visible) return null;
  return (
        <div className="fixed inset-1 bg-opacity-25 backdrop-blur-md flex items-center justify-center overflow-hidden">
          <div className="bg-white p-2 rounded w-100 border border-[#A58A76]">
            <div className="flex justify-between ">
              <Box sx={{ p: 3 }}>
                <h1 className="text-[#A58A76] text-xl mb-4">New Client</h1>
                <form onSubmit={(event) => event.preventDefault()}>
                  <Stack spacing={3}>
                    <TextField fullWidth label="Tag Name" name="clientname" value={tagName} onChange={(e) => setTagName(e.target.value)} />
                   
                    <IconButton
                     sx={{borderRadius:2 , backgroundColor: color, width:40, height:40 }}
                     disableRipple
                     onClick={(event) => {
                        setAnchorEl(event.currentTarget);
                        setShowColorPicker(true);
                     }}
                     
                    >
                   <ColorLensIcon/>
                    </IconButton>
                    <Popover
                 open={showColorPicker}
                 anchorEl={anchorEl}
                 onClose={() => setShowColorPicker(false)}
                 anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                 }}
                 transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                 }}
                >
                 <HexColorPicker color={color} onChange={setColor} />
                </Popover>
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
                     className="bg-white text-[#A58A76] font-poppins text-lg py-1 px-16 rounded-xl"
                     onClick={onClose}
                    >
                     Cancel
                    </button>
                    <button
                     className="bg-[#A58A76] text-white font-poppins text-lg py-1 px-16 rounded-xl"
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

export default NewTag;
