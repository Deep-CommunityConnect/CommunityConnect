import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Stack,
  Button,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";
import axiosInstance from "../../../api/axios";
import BlogEditor from "../../../components/blog/BlogEditor";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    }
  };

  // cleanup preview memory
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const submit = async () => {

    let missingFields = [];

    if (!title.trim()) missingFields.push("Title");
    if (!content.trim()) missingFields.push("Content");

    if (missingFields.length > 0) {
      setSnackbar({
        open: true,
        message: `${missingFields.join(" and ")} ${missingFields.length > 1 ? "are" : "is"} required`,
        severity: "error"
      });
      return;
    }

    try {

      const formData = new FormData();

      formData.append("title", title.trim());
      formData.append("excerpt", excerpt.trim());
      formData.append("content", content);

      if (coverImage) {
        formData.append("cover_image", coverImage);
      }

      await axiosInstance.post("/blogs/create_blog/", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setSnackbar({
        open: true,
        message: "Blog published successfully",
        severity: "success"
      });

      setTimeout(() => {
        navigate("/org/blogs");
      }, 1000);

    } catch (error) {

      console.error("Create blog failed:", error);

      setSnackbar({
        open: true,
        message: "Failed to publish blog",
        severity: "error"
      });

    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>

      <Stack spacing={3}>

        <Typography variant="h4">
          Create Blog
        </Typography>

        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />

        <TextField
          label="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          fullWidth
        />

        <Button variant="outlined" component="label">
          Upload Cover Image
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>

        {preview && (
          <img
            src={preview}
            alt="Cover Preview"
            style={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        )}

        <BlogEditor
          value={content}
          setValue={setContent}
        />

        <Button
          variant="contained"
          size="large"
          onClick={submit}
        >
          Publish Blog
        </Button>

      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={1000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>

    </Container>
  );
};

export default CreateBlog;