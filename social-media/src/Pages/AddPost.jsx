import { TextField, Box, Button, Typography, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../ThemedApp";
const AddPost = () => {
  const { addPost, editPost, currentPost } = useApp();
  const navigate = useNavigate();
  const contentRef = useRef();
  const [image, setImage] = useState(null); // store selected image (preview)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file); // temporary preview
      setImage(imgUrl);
    }
  };
  useEffect(() => {
    if (currentPost) {
      contentRef.current.value = currentPost.content;
      setImage(currentPost.img);
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
      <form
        onSubmit={handleSubmitPost}
      >
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
        {image && (
          <Box sx={{ mt: 2, textAlign: "left" }}>
            <Typography variant="body2">Preview:</Typography>
            <img
              src={image}
              alt="preview"
              style={{ maxWidth: "100%", borderRadius: 8, marginTop: 8 }}
            />
          </Box>
        )}

        <Button variant="contained" type="submit" sx={{ my: 2 }}>
          {currentPost? "Edit Post" : "Post"}
        </Button>
      </form>
    </Box>
  );
};

export default AddPost;
