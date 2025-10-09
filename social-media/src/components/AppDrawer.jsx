import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
  Login as LoginIcon,
  PersonAddTwoTone as RegisterIcon,
} from "@mui/icons-material";
import { useApp } from "../ThemedApp";
import { indigo } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const AppDrawer = () => {
  const { showDrawer, setShowDrawer, auth, setAuth } = useApp();
  const navigate = useNavigate();
  return (
    <div>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(!showDrawer)}>
        <Box
          sx={{
            width: 300,
            height: 180,
            bgcolor: "banner",
            mb: 6,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              position: "absolute",
              bottom: -20,
              left: 20,
            }}
          >
            <Avatar
              sx={{
                width: 94,
                height: 94,
                background: indigo[500],
              }}
            />
            <Typography variant="h6" sx={{ color: "text" }}>
              Alice
            </Typography>
          </Box>
        </Box>
        <List>
          <ListItem>
            <ListItemButton onClick={() => {
              navigate("/");;
              setShowDrawer(!showDrawer)
            }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text" }}>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          {auth && (
            <>
              <ListItem>
                <ListItemButton onClick={()=> navigate("/profile/1")}>
                  <ListItemIcon>
                    <ProfileIcon sx={{ color: "text" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "text" }}>Profile</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() => setAuth(null)}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "text" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "text" }}>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          )}
          {!auth && (
            <>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <RegisterIcon sx={{ color: "text" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "text" }}>Register</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() => setAuth(true)}>
                  <ListItemIcon>
                    <LoginIcon sx={{ color: "text" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "text" }}>Login</ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default AppDrawer;
