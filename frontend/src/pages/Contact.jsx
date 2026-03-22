import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
      title: "Email",
      content: "support@CommunityConnect.com",
      link: "mailto:support@CommunityConnect.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 30 }} />,
      title: "Phone",
      content: "+91 9876543210",
      link: "tel:+919876543210",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 30 }} />,
      title: "Office Hours",
      content: "Mon - Fri, 9:00 AM - 6:00 PM",
      link: null,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
      title: "Address",
      content: "123 Community Street, Mumbai, India",
      link: null,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSnackbar({
      open: true,
      message: "Thank you for your message! We'll get back to you soon.",
      severity: "success",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)", // Account for navbar height
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 6, sm: 8, md: 10 },
            px: { xs: 2, sm: 3, md: 4 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              sx={{
                fontWeight: 700,
                color: "white",
                mb: 3,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Have questions or need assistance? We are here to help volunteers
              and organizers with any inquiries.
            </Typography>
          </Container>
        </Box>

        {/* Contact Info Cards */}
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' } }} key={index}>
                <Card
                  component={info.link ? "a" : "div"}
                  href={info.link || undefined}
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    textDecoration: "none",
                    display: "block",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": info.link
                      ? {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                        }
                      : {},
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        color: "white",
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 1, color: "#1a1a2e" }}
                    >
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;