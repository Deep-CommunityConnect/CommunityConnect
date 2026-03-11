import { Container, Typography, Paper } from "@mui/material";

const Privacy = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          We respect your privacy and are committed to protecting your personal
          information. The data you provide is used only to operate the
          CommunityConnect platform and to help connect volunteers with
          organizations.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          This may include contact details, basic profile information, and
          application history. We do not sell your information to third parties.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          Access to your data is limited to authorized personnel and is handled
          in accordance with applicable data protection practices.
        </Typography>

        <Typography component="p">
          By using this site, you consent to the collection and use of your
          information as described here. We may update this policy from time to
          time to reflect improvements to our services.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Privacy;

