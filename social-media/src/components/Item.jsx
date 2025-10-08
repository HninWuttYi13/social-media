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
  Grid
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
  const { deletePost, setCurrentPost } = useApp();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
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
                onClick={() => {
                  setCurrentPost(item);
                  navigate("/addpost");
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
      {item.imgs &&
        item.imgs.length > 0 &&
        item.imgs.map((img, index) => (
          <CardMedia
            key={index}
            component="img"
            height={250}
            image={img}
            sx={{ paddingX: 2, mb: 1 }}
          />
        ))}

      <CardContent>
        <Typography
          sx={{
            color: "text.primary",
            display: "-webkit-box",
            WebkitLineClamp: expanded ? "unset" : 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.content}
        </Typography>
        {item.content.length > 300 && (
          <Typography
            onClick={() => {
              setExpanded(!expanded);
            }}
            sx={{ cursor: "pointer", color: "custom.info" }}
          >
            <b> {expanded ? "See less" : "See more..."}</b>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Item;
