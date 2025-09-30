import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Menu as MenuIcon, Palette } from "@mui/icons-material";
import {
    NightsStayTwoTone as DarkModeIcon ,
    LightMode as LightModeIcon
} from "@mui/icons-material";
import { useApp } from "../ThemedApp";
const Header = () => {
    const {mode, setMode, showDrawer, setShowDrawer } = useApp();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
            size="small" 
            edge="start" 
            onClick={()=> setShowDrawer(!showDrawer)}
        >
          <MenuIcon sx={{color: "banner"}}/>
        </IconButton>
        <Typography sx={{ flexGrow: 1, ml: 2, color: "banner" }} variant="h5">Essences</Typography>

        <Box edge="end">
          {mode === "light" ? (
            <IconButton onClick={()=>  setMode("dark") }>
              <DarkModeIcon sx={{color: "banner"}} />
            </IconButton>
          ) : (
            <IconButton onClick={()=> setMode("light")}>
              <LightModeIcon color="inherit" />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
