import { Container, Box, Typography, Button, Stack, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 6,
        mb: 6,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to CommunityConnect
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Discover meaningful volunteering opportunities and connect with
            organizations making a real impact in the community.
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Volunteers can easily browse and apply for roles, while organizers
            can manage opportunities and applications in one place.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 3 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Need help or have questions? Visit our{" "}
            <Button
              variant="text"
              size="small"
              onClick={() => navigate("/contact")}
              sx={{ textTransform: "none", p: 0, minWidth: "auto" }}
            >
              contact page
            </Button>
            .
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Landing;

