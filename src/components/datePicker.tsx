import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs, { Dayjs } from "dayjs";
import { SvgIcon } from "@mui/material";

export default function DatePicker() {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Button onClick={handleClickOpen}
                color="inherit">
          Date
          <SvgIcon>
            <ExpandMoreIcon />
          </SvgIcon>
        </Button>
      </div>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose The Date</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <DateTimePicker
                label="Satrt Day"
                value={startDate}
                ampm={false}
                views={["year", "month", "day"]}
                onChange={(newDate) => setStartDate(newDate)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <DateTimePicker
                label="End Day"
                views={["year", "month", "day"]}
                value={endDate}
                ampm={false}
                onChange={(newValue) => setEndDate(newValue)}
              />
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
