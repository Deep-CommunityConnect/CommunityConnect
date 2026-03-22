import React from 'react';

import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  useMediaQuery,
  useTheme,
  Paper,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

// Icons
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import EventIcon from '@mui/icons-material/Event';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';


import communityLogo from '../assets/communityconnect.png';


const Landing = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 40 }} />,
      title: 'Meaningful Impact',
      description: 'Connect with causes that matter and make a real difference in your community.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Community Building',
      description: 'Join a network of passionate volunteers and dedicated organizers.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Track Progress',
      description: 'Monitor your volunteer hours, achievements, and personal growth.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Safe & Secure',
      description: 'Verified organizations and secure application process for peace of mind.',
    },
    {
      icon: <EventIcon sx={{ fontSize: 40 }} />,
      title: 'Diverse Opportunities',
      description: 'From events to ongoing programs, find opportunities that match your schedule.',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'Recognition',
      description: 'Earn badges, certificates, and recognition for your contributions.',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: 'auto', md: '100vh' },
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 12, md: 0 },
          pb: { xs: 8, md: 0 },
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
            opacity: 0.15,
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 20s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' },
            },
          }}
        />

        {/* Enhanced Floating Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255,215,0,0.3), rgba(255,193,7,0.3))',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 8px 32px rgba(255,215,0,0.3)',
            animation: 'pulse 3s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
              '50%': { transform: 'scale(1.1)', opacity: 1 },
            },
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(240,147,251,0.2))',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 8px 32px rgba(240,147,251,0.3)',
            animation: 'float 15s ease-in-out infinite reverse',
          }}
        />

        {/* Additional Floating Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            animation: 'float 25s ease-in-out infinite',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '15%',
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'rgba(255,215,0,0.15)',
            backdropFilter: 'blur(8px)',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <>
                  <Typography
                    variant={isMobile ? "h3" : "h2"}
                    component="h1"
                    sx={{
                      fontWeight: 900,
                      color: 'white',
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      lineHeight: 1.1,
                      textShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Connect, Volunteer,{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(90deg, #ffd700, #ffed4e, #fff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 900,
                        textShadow: '0 0 30px rgba(255,215,0,0.5)',
                      }}
                    >
                      Make Impact
                    </Box>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255,255,255,0.95)',
                      mb: { xs: 4, md: 6 },
                      maxWidth: 550,
                      mx: { xs: 'auto', md: 0 },
                      lineHeight: 1.8,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      fontWeight: 400,
                      textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    }}
                  >
                    Join thousands of volunteers and organizations creating positive change.
                    <br />
                    Find opportunities that match your passion and skills.
                  </Typography>
                </>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                {/* Enhanced Modern Glass Circle */}
                <Paper
                  sx={{
                    width: { xs: 280, sm: 350, md: 400 },
                    height: { xs: 280, sm: 350, md: 400 },
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
                    backdropFilter: 'blur(25px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    position: 'relative',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15), inset 0 0 30px rgba(255,255,255,0.1)',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.05) rotate(2deg)',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.2), inset 0 0 40px rgba(255,255,255,0.15)',
                    },
                  }}
                >
                  <img
                    src={communityLogo}
                    alt="Community Connect"
                    style={{
                      width: '65%',
                      height: '65%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                    }}
                  />

                  {/* Enhanced Floating Mini Icons */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '12%',
                      right: '8%',
                      width: 55,
                      height: 55,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, rgba(255,215,0,0.4), rgba(255,193,7,0.4))',
                      backdropFilter: 'blur(15px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(255,215,0,0.4)',
                      animation: 'float 4s ease-in-out infinite, pulse 3s ease-in-out infinite',
                      '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                        '50%': { transform: 'translateY(-10px) rotate(5deg)' },
                      },
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: 28, color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                  </Box>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '18%',
                      left: '8%',
                      width: 45,
                      height: 45,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, rgba(255,255,255,0.3), rgba(102,126,234,0.3))',
                      backdropFilter: 'blur(12px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 20px rgba(102,126,234,0.3)',
                      animation: 'float 5s ease-in-out infinite reverse',
                    }}
                  >
                    <GroupsIcon sx={{ fontSize: 22, color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                  </Box>

                  {/* Additional floating element */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '25%',
                      left: '15%',
                      width: 35,
                      height: 35,
                      borderRadius: '50%',
                      background: 'rgba(240,147,251,0.2)',
                      backdropFilter: 'blur(10px)',
                      animation: 'pulse 6s ease-in-out infinite',
                    }}
                  />
                </Paper>

                {/* Buttons positioned left side of the circle */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3} 
                  sx={{ 
                    position: 'absolute',
                    right: { xs: '50%', md: '-60px' },
                    top: '50%',
                    transform: { xs: 'translate(50%, -50%)', md: 'translate(100%, -50%)' },
                    zIndex: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={() => navigate('/register')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
                      color: '#1a1a2e',
                      fontWeight: 700,
                      px: 3,
                      py: 1.5,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      border: '2px solid #4ade80',
                      boxShadow: '0 8px 20px rgba(255,215,0,0.3), 0 0 0 0 rgba(74,222,128,0.2)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transition: 'left 0.5s',
                      },
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ffed4e, #fff)',
                        border: '2px solid #4ade80',
                        boxShadow: '0 12px 30px rgba(255,215,0,0.4), 0 0 0 0 rgba(74,222,128,0.3)',
                        transform: 'translateY(-2px)',
                        '&:before': {
                          left: '100%',
                        },
                      },
                    }}
                  >
                    Get Started
                  </Button>

                  <Button
                    variant="outlined"
                    size="medium"
                    onClick={() => scrollToSection('features')}
                    sx={{
                      borderColor: 'rgba(255,255,255,0.6)',
                      color: 'white',
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(255,255,255,0.05)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'left 0.5s',
                      },
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255,255,255,0.15)',
                        boxShadow: '0 6px 20px rgba(255,255,255,0.2)',
                        transform: 'translateY(-2px)',
                        '&:before': {
                          left: '100%',
                        },
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section - Why Choose Community Connect? */}
      <Box id="features" sx={{ py: 10, background: 'linear-gradient(180deg, rgba(102,126,234,0.02) 0%, rgba(118,75,162,0.02) 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 800, 
                mb: 3, 
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 15px rgba(102,126,234,0.2)',
              }}
            >
              Why Choose CommunityConnect?
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'rgba(0,0,0,0.7)',
              }}
            >
              Everything you need to start your volunteering journey
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Card 
              sx={{ 
                maxWidth: 900,
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
                borderRadius: '20px',
                border: '1px solid rgba(102,126,234,0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box 
                        sx={{ 
                          textAlign: 'center',
                          p: 2,
                          borderRadius: '12px',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                          '&:hover': {
                            background: 'rgba(102,126,234,0.05)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: 50, 
                            height: 50, 
                            mx: 'auto', 
                            mb: 2, 
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 6px 15px rgba(102,126,234,0.2)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              boxShadow: '0 8px 20px rgba(102,126,234,0.3)',
                            },
                          }}
                        >
                          <Box sx={{ transform: 'scale(0.8)' }}>
                            {feature.icon}
                          </Box>
                        </Box>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            fontWeight: 600, 
                            mb: 1,
                            fontSize: '0.95rem',
                            color: '#1a1a2e',
                            lineHeight: 1.3,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            lineHeight: 1.5,
                            fontSize: '0.85rem',
                            color: 'rgba(0,0,0,0.6)',
                            fontWeight: 400,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* How It Works Section */}
     

     
    </Box>
  );
};

export default Landing;
