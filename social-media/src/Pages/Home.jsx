import {
  Box,
  Container,
  Card,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import { NearMeTwoTone as SharePostIcon } from "@mui/icons-material";
import Item from "../components/Item";
import { useNavigate } from "react-router-dom";
import { useApp } from "../ThemedApp";
const App = () => {
    const {posts, setCurrentPost} = useApp();
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="sm">
        <Card
            onClick={()=> {
              setCurrentPost(null);
              navigate("/addpost");
            }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 24, height: 24 }} />
            <Typography sx={{ color: "text", fontSize: 15, fontFamily: "serif" }}>
              What's your feeling today? Share Something...
            </Typography>
          </Box>
          <IconButton>
            <SharePostIcon />
          </IconButton>
        </Card>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
          {posts.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default App;
