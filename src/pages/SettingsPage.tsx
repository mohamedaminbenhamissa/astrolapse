import Navbar from "@/components/Navbar";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";

import Switch from "@mui/material/Switch";

import Typography from "@mui/material/Typography";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TextField } from "@mui/material";

const SettingsPage = () => {
  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] mr-[1%]">
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} md={4}>
                  <Typography variant="h6">Public details</Typography>
                </Grid>
                <Grid xs={12} sm={12} md={8}>
                  <Stack divider={<Divider />} spacing={3}>
                    <Stack
                      alignItems="flex-start"
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <Stack spacing={1}>
                        <Typography variant="subtitle1">
                          Notificattions
                        </Typography>
                      </Stack>
                      <Switch />
                    </Stack>
                    <Stack
                      alignItems="flex-start"
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <Stack spacing={1}>
                        <Typography variant="subtitle1">
                          Available for new Tasks
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          Toggling this will let your teammates know that you
                          are available for acquiring new projects.
                        </Typography>
                      </Stack>
                      <Switch defaultChecked />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} md={4}>
                  <Typography variant="h6">Email</Typography>
                </Grid>
                <Grid xs={12} sm={12} md={8}>
                  <Stack divider={<Divider />} spacing={3}>
                    <Stack
                      alignItems="flex-start"
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <Stack spacing={1}>
                        <Typography variant="subtitle1">
                          Product updates
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          News, announcements, and product updates.
                        </Typography>
                      </Stack>
                      <Switch defaultChecked />
                    </Stack>
                    <Stack
                      alignItems="flex-start"
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <Stack spacing={1}>
                        <Typography variant="subtitle1">
                          Security updates
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Important notifications about your account security.
                        </Typography>
                      </Stack>
                      <Switch defaultChecked />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} md={4}>
                  <Typography variant="h6">Reminder</Typography>
                </Grid>
                <Grid xs={12} sm={12} md={8}>
                  <Stack divider={<Divider />} spacing={3}>
                    <Stack
                      alignItems="flex-start"
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <Stack spacing={1}>
                        <Typography variant="subtitle1">
                          User Reminder
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          Once the user forgets to fill in their fields a
                          notification will be sent at a chosen time
                        </Typography>
                      </Stack>

                        <Stack direction={"row"} spacing={1}>
                        <TextField sx={{ width: 70 }} type="number" />
                        <h1 className="flex items-center">Days,</h1>

                        <TimePicker label="Choose Time" ampm={false} />
                      </Stack>
                    </Stack>
                    <Stack
                      alignItems="flex-start"
                      direction="row"
                      justifyContent="space-between"
                      spacing={3}
                    >
                      <Stack spacing={1}>
                        <Typography variant="subtitle1">
                          Manager Reminder
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          The manager will be notified after a period chosen by
                          himself at a chosen time
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={1}>
                        <TextField sx={{ width: 70 }} type="number" />
                        <h1 className="flex items-center">Days,</h1>

                        <TimePicker label="Choose Time" ampm={false} />
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </div>
    </div>
  );
};

export default SettingsPage;
