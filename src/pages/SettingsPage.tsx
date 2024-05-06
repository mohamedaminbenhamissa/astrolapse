import Navbar from "@/components/Navbar";
import type { FC } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


interface AccountGeneralSettingsProps {
  avatar: string;
  email: string;
  name: string;
}
const SettingsPage: FC<AccountGeneralSettingsProps> = (props) => {
  const { avatar, email, name } = props;
  return (
    <div className="min-w-full">
      <Navbar />
      <div className="bg-[#F9F9F9] h-full p-2 rounded-lg mt-[2%] mr-[1%]">
        <Stack spacing={2} {...props}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={12} md={4}>
                  <Typography variant="h6">Basic details</Typography>
                </Grid>
                <Grid xs={12} md={8}>
                  <Stack spacing={3}>
                    <Stack alignItems="center" direction="row" spacing={90}>
                      <Stack>
                        <Box
                          sx={{
                            borderColor: "neutral.300",
                            borderRadius: "50%",
                            borderStyle: "dashed",
                            borderWidth: 1,
                            p: "4px",
                          }}
                        >
                          <Box
                            sx={{
                              borderRadius: "50%",
                              height: "100%",
                              width: "100%",
                              position: "relative",
                            }}
                          >
                            <Box
                              sx={{
                                alignItems: "center",

                                borderRadius: "50%",
                                color: "common.white",
                                cursor: "pointer",
                                display: "flex",
                                height: "100%",
                                justifyContent: "center",
                                left: 0,
                                opacity: 0,
                                position: "absolute",
                                top: 0,
                                width: "100%",
                                zIndex: 1,
                                "&:hover": {
                                  opacity: 1,
                                },
                              }}
                            >
                              <Stack
                                alignItems="center"
                                direction="row"
                                spacing={1}
                              >
                                <SvgIcon color="inherit">
                                  <CameraAltIcon />
                                </SvgIcon>
                                <Typography
                                  color="inherit"
                                  variant="subtitle2"
                                  sx={{ fontWeight: 700 }}
                                >
                                  Select
                                </Typography>
                              </Stack>
                            </Box>
                            <Avatar
                              src={avatar}
                              sx={{
                                height: 100,
                                width: 100,
                              }}
                            >
                              <SvgIcon>
                                <PersonIcon />
                              </SvgIcon>
                            </Avatar>
                          </Box>
                        </Box>
                      </Stack>

                      <button
                        className={`bg-[#A58A76] text-white font-poppins text-lg py-1 px-6 rounded-xl`}
                      >
                        Edit
                      </button>
                    </Stack>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <TextField
                        defaultValue={name}
                        label="Full Name"
                        sx={{ flexGrow: 1 }}
                      />
                    </Stack>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <TextField
                        defaultValue={email}
                        label="Adress Mail"
                        sx={{ flexGrow: 1 }}
                      />
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
        </Stack>
      </div>
    </div>
  );
};

export default SettingsPage;
