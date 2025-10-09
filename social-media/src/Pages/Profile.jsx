import {Avatar, Box, Typography} from '@mui/material';
import { indigo } from '@mui/material/colors';
import Item from '../components/Item';

const Profile = () => {
  return (
    <Box>
      <Box sx={{ height: 150, borderRadius: 4, bgcolor: "text.primary" }}></Box>
      <Box
        sx={{
          mb: 4,
          marginTop: "-50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: 100, height: 100, color: indigo[500] }} />
        <Typography sx={{marginTop: 2}}>Alice</Typography>
        <Typography sx={{ fontSize: "0.8em", color: "text.fade" }}>
          Alice's profile bio content here
        </Typography>
      </Box>
      <Item
        sx={{ marginTop: 5 }}
        item={{
          id: 1,
          content: "A post content from Alice",
          name: "Alice",
        }}
      />
    </Box>
  );
}

export default Profile