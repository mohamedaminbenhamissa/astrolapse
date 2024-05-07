import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Checkbox, SvgIcon, TextField } from "@mui/material";

export default function WorkPicker() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string,
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Button onClick={handleClickOpen} color="inherit">
          Work
          <SvgIcon>
            <ExpandMoreIcon fontSize="small" />
          </SvgIcon>
        </Button>
      </div>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose The Wrok flow</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
                <ChevronRightIcon fontSize="large" />
                <TextField sx={{ width: 50 }} />
            
              </div>
              
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
             / <Checkbox />
                <ChevronLeftIcon fontSize="large" />
                <TextField sx={{ width: 50 }} />
              </div>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
