import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
  useTheme,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Executive Director',
      description: 'Leading our mission to connect communities through volunteerism.',
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      description: 'Ensuring our platform provides the best user experience with innovative technology.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      description: 'Building partnerships with organizations and supporting our volunteer community.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 20s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' },
            },
          }}
        />

        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {/* Back Button */}
            <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
              <RouterLink
                to="/"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <ArrowBackIcon fontSize="small" />
                Back to Home
              </RouterLink>
            </Box>

            {/* Main Content */}
            <Paper
              elevation={8}
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                  variant={isMobile ? "h3" : "h2"}
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    color: '#1a1a2e',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    background: 'linear-gradient(90deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  About CommunityConnect
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                  }}
                >
                  Empowering communities through meaningful volunteer connections
                </Typography>
              </Box>

              {/* Mission Section */}
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: '#667eea',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  🎯 Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    fontSize: '1rem',
                    color: 'rgba(0,0,0,0.7)',
                  }}
                >
                  To connect passionate volunteers with meaningful opportunities, creating lasting positive impact in communities worldwide. We strive to make volunteering accessible, transparent, and rewarding for everyone involved.
                </Typography>
              </Box>

             
              {/* Values Section */}
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: '#667eea',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  💎 Our Values
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { title: 'Impact', description: 'Creating meaningful change in communities' },
                    { title: 'Transparency', description: 'Open and honest in all our operations' },
                    { title: 'Innovation', description: 'Continuously improving our platform and services' },
                    { title: 'Community', description: 'Building strong connections between volunteers and organizations' },
                  ].map((value, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Card
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          background: 'rgba(255,255,255,0.8)',
                          border: '1px solid rgba(102,126,234,0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: '0 8px 20px rgba(102,126,234,0.1)',
                          },
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#667eea' }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.description}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
