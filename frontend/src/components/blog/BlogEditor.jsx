import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box } from "@mui/material";

const BlogEditor = ({ value, setValue }) => {

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate({ editor }) {
      setValue(editor.getHTML());
    },
  });

  // Sync content when value loads asynchronously
  useEffect(() => {
    if (!editor) return;
    if (value === undefined || value === null) return;

    // Avoid resetting if editor already has the same content
    const currentContent = editor.getHTML();
    if (currentContent === value) return;

    editor.commands.setContent(value);
  }, [value, editor]);

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 2,
        minHeight: 300,
        "& .ProseMirror": {
          outline: "none",
          minHeight: 250,
        },
      }}
    >
      <EditorContent editor={editor} />
    </Box>
  );
};

export default BlogEditor;