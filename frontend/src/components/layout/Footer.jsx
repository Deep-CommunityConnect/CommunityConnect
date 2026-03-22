import { Box, Typography, Grid, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("accessToken");
  
  // Check if current page is a public page (should show dark footer for non-logged-in users)
  const currentPath = window.location.pathname;
  const isPublicPage = currentPath === '/' || 
                      currentPath === '/about' || 
                      currentPath === '/faq' || 
                      currentPath === '/contact' ||
                      currentPath === '/terms' ||
                      currentPath === '/privacy' ||
                      currentPath === '/login' ||
                      currentPath === '/register' ||
                      currentPath === '/forgot-password' ||
                      currentPath === '/reset-password';

  // Simple white footer for all logged-in users (protected routes)
  if (isLoggedIn) {
    return (
      <Box
        sx={{
          py: 3,
          textAlign: "center",
          backgroundColor: "#ffffff",
          marginTop: "auto",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2026 CommunityConnect. All rights reserved.
        </Typography>
      </Box>
    );
  }

  // Simple white footer for non-logged-in users on dashboard pages
  if (!isPublicPage) {
    return (
      <Box
        sx={{
          py: 3,
          textAlign: "center",
          backgroundColor: "#ffffff",
          marginTop: "auto",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2026 CommunityConnect. All rights reserved.
        </Typography>
      </Box>
    );
  }

  // Dark footer for non-logged-in users on public pages only
  return (
    <Box sx={{ 
      backgroundColor: "#1a1a2e", 
      color: "white", 
      py: 4,
      marginTop: "auto",
      position: "relative",
      bottom: 0
    }}>
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#667eea" }}>
              CommunityConnect
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              Connecting volunteers with organizations to create positive change.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/" sx={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Home
              </Link>
              <Link component={RouterLink} to="/about" sx={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                About
              </Link>
              <Link component={RouterLink} to="/faq" sx={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                FAQ
              </Link>
              <Link component={RouterLink} to="/contact" sx={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Contact
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/terms" sx={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Terms & Conditions
              </Link>
              <Link component={RouterLink} to="/privacy" sx={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                Privacy Policy
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            © 2026 CommunityConnect. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
