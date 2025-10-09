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
  const [image, setImage] = useState([]); // store selected images (preview)

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImage((prev) => [...prev, ...newImages]);
  };

  const handleDeleteImage = (imgURL) => {
    setImage((prev) => prev.filter((img) => img !== imgURL));
  };

  useEffect(() => {
    if (currentPost) {
      contentRef.current.value = currentPost.content;
      if (Array.isArray(currentPost.imgs)) {
        setImage(currentPost.imgs);
      } else if (currentPost.imgs) {
        setImage([currentPost.imgs]);
      }
    }
  }, [currentPost]);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    const content = contentRef.current.value;

    if (currentPost) {
      editPost({ ...currentPost, content, imgs: [...image]});
    } else {
     
      addPost(content, "Alice", image);
     
    }
    setImage([]);
    e.currentTarget.reset();
   
    navigate("/");
  };

  return (
    <Box sx={{ mt: 4, textAlign: "right" }}>
      <form onSubmit={handleSubmitPost}>
        {/* Post text */}
        <TextField
          inputRef={contentRef}
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
            multiple
            onChange={handleFileChange}
          />
        </Button>

        {/* Preview selected images */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {image.map((img) => (
            <ImageListItem sx={{ position: "relative", marginTop: 3}}>
              <img src={img} alt="preview" />
              <DeleteImageIcon
                onClick={() => handleDeleteImage(img)}
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  color: grey[400],
                  cursor: "pointer",
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
