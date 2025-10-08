import {
  TextField,
  Box,
  Button,
  Typography,
  ImageListItem,
} from "@mui/material";
import { Clear as DeleteImageIcon } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../ThemedApp";
import { grey } from "@mui/material/colors";
const AddPost = () => {
  const { addPost, editPost, currentPost } = useApp();
  const navigate = useNavigate();
  const contentRef = useRef();
  const [image, setImage] = useState([]); // store selected image (preview)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file); // temporary preview
      setImage(prev=> [...prev, imgUrl]);
    }
  };
  //deleting image in preview
  const handleDeleteImage = (imgURL)=> {
    setImage(prev=> prev.filter(img=> img !== imgURL))
  }
  useEffect(() => {
    if (currentPost) {
      contentRef.current.value = currentPost.content;
      setImage([...image, currentPost.img]);
    }
  }, [currentPost]);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const content = contentRef.current.value;

    if (currentPost) {
      editPost({ ...currentPost, content, img: image });
    } else {
      addPost(content, "Alice", image);
    }

    e.currentTarget.reset();
    setImage(null);
    navigate("/"); // fixed
  };

  return (
    <Box sx={{ mt: 4, textAlign: "right" }}>
      <form onSubmit={handleSubmitPost}>
        {/* Post text */}
        <TextField
          inputRef={contentRef}
          id="outlined-multiline-flexible"
          label="What's on your mind?"
          multiline
          fullWidth
          rows={10}
        />

        {/* Image Upload */}
        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2, fontSize: 20 }}
        >
          +
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        {/* Preview selected image */}
        <Typography sx={{ textAlign: "start" }}>Preview:</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {image.map((img) => (
            <ImageListItem key={img} sx={{ position: "relative" }}>
              <img src={img}  />
              <DeleteImageIcon
                onClick={() => handleDeleteImage(img)}
                sx={{
                  position: "absolute",
                  top: -1,
                  right: 2,
                  color: grey[400],
                }}
              />
            </ImageListItem>
          ))}
        </Box>
        <Button variant="contained" type="submit" sx={{ my: 2 }}>
          {currentPost ? "Edit Post" : "Post"}
        </Button>
      </form>
    </Box>
  );
};

export default AddPost;
