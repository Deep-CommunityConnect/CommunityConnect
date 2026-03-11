import { Container, Typography, Paper } from "@mui/material";

const Terms = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom>
          Terms &amp; Conditions
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          By using the CommunityConnect platform, you agree to use the site
          responsibly and only for the purpose of discovering, managing, or
          providing volunteering opportunities.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          Volunteers are responsible for ensuring that the information they
          provide is accurate and up to date. Organizations are responsible for
          posting clear and honest information about their opportunities.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          CommunityConnect is a facilitation platform only and does not employ
          volunteers or represent the organizations listed. Any agreements or
          arrangements are strictly between volunteers and organizations.
        </Typography>

        <Typography component="p">
          We may update these terms periodically. Continued use of the platform
          after updates means you accept the revised terms.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Terms;

