import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Stack,
  Button,
  Snackbar,
  Alert
} from "@mui/material";
import axiosInstance from "../../../api/axios";
import BlogEditor from "../../../components/blog/BlogEditor";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  useEffect(() => {
    fetchBlog();
  }, []);

  const stripHtml = (html) => {
    if (!html) return "";
    let text = html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .replace(/<\/div>/gi, "\n")
      .replace(/<p[^>]*>/gi, "")
      .replace(/<div[^>]*>/gi, "")
      .replace(/<[^>]+>/g, "");

    text = text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&nbsp;/g, " ")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    return text.replace(/\n{3,}/g, "\n\n").trim();
  };

  const fetchBlog = async () => {
    try {
      const res = await axiosInstance.get("/blogs/my_blogs/");
      const blog = res.data.find((b) => b.id === Number(id));
      if (!blog) return;

      setTitle(stripHtml(blog.title));
      setExcerpt(stripHtml(blog.excerpt));
      setContent(blog.content);
    } catch (err) {
      console.error("Fetch blog failed", err);
    }
  };

  const updateBlog = async () => {
    try {
      await axiosInstance.put(`/blogs/${id}/update_blog/`, {
        title,
        excerpt,
        content
      });
      setSnackbar({ open: true, message: "Blog updated successfully", severity: "success" });
      setTimeout(() => navigate("/org/blogs"), 1000);
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: "Update failed", severity: "error" });
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Stack spacing={3}>
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
          multiline
          minRows={2}
        />
        <BlogEditor value={content} setValue={setContent} />
        <Button variant="contained" onClick={updateBlog}>
          Update Blog
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

export default EditBlog;