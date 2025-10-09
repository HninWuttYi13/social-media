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
  Grid,
  Box,
  Divider,
} from "@mui/material";

import {
  MoreVert as MoreVertIcon,
  AccountCircle as ProfileIcon,
  Delete as DeleteIcon,
  EditDocument as EditIcon,
  ExpandLess as ShowLessImageIcon,
} from "@mui/icons-material";
import { useApp } from "../ThemedApp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { grey } from "@mui/material/colors";
const Item = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const { deletePost, setCurrentPost } = useApp();
  const [expanded, setExpanded] = useState(false);
  const [moreImage, setMoreImage] = useState(false);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 600, mb: 2 }}>
      <CardHeader
        avatar={
          <IconButton size="large">
            <Avatar src={null} />
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
      {Array.isArray(item.imgs) && item.imgs.length > 0 ? (
        <Box sx={{ paddingX: 1, position: "relative" }}>
          {!moreImage ? (
            <Grid container spacing={1}>
              {item.imgs.slice(0, 4).map((img, index) => (
                <Grid
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() => setMoreImage(!moreImage)}
                  size={
                    item.imgs.length === 1
                      ? 12
                      : item.imgs.length === 2
                      ? 6
                      : item.length === 3
                      ? 4
                      : 3
                  }
                >
                  <CardMedia
                    component="img"
                    height={250}
                    image={img}
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>
              ))}
              {item.imgs.length > 4 && (
                <Typography
                  onClick={() => setMoreImage(!moreImage)}
                  sx={{
                    position: "absolute",
                    top: "120px",
                    right: 20,
                    color: grey[200],
                  }}
                  variant="h4"
                >
                  +{item.imgs.length - 4}
                </Typography>
              )}
            </Grid>
          ) : (
            <>
              <Grid container rowSpacing={2}>
                {item.imgs.map((img, index) => (
                  <Grid key={index} size={12}>
                    <CardMedia
                      component="img"
                      height={250}
                      image={img}
                      sx={{ borderRadius: 2 }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: "flex",  justifyContent: "flex-end" }}>
                <ShowLessImageIcon
                  onClick={() => setMoreImage(!moreImage)}
                  sx={{
                    color: grey[400],
                    fontSize: 35,
                    cursor: "pointer",
                  }}
                />
                
              </Box>
            </>
          )}
        </Box>
      ) : (
        item.imgs && (
          <CardMedia
            component="img"
            height={250}
            image={item.imgs}
            sx={{ paddingX: 2, mb: 1 }}
          />
        )
      )}
      {moreImage && <Divider/>}

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
