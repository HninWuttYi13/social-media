import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  AccountCircle as ProfileIcon,
  Delete as DeleteIcon,
  EditDocument as EditIcon,
} from "@mui/icons-material";
import { useApp } from "../ThemedApp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Item = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const { deletePost, setCurrentPost, editPost } = useApp();
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 600, mb: 2 }}>
      <CardHeader
        avatar={
          <IconButton size="large">
            <Avatar src={item.img || null} />
          </IconButton>
        }
        action={
          <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={() => setAnchorEl(!anchorEl)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => deletePost(item.id)}
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <DeleteIcon />
                Delete Post
              </MenuItem>
              <MenuItem
                onClick={()=> {
                  setCurrentPost(item)
                  navigate("/addpost")
                }}
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <EditIcon />
                Edit Post
              </MenuItem>
            </Menu>
          </>
        }
        sx={{ color: "text.primary" }}
        title={item.name}
        subheader="A few seconds ago"
      />
      {item.img && (
        <CardMedia
          component="img"
          height={250}
          image={item.img}
          sx={{ paddingX: 2 }}
        />
      )}
      <CardContent>
        <Typography sx={{ color: "text.primary" }}>{item.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
