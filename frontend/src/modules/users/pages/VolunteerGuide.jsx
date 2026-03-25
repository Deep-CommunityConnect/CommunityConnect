import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
  Avatar,
  Fade,
  alpha,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  ExpandMore,
  CheckCircle,
  Schedule,
  LocationOn,
  People,
  Star,
  Lightbulb,
  Security,
  Help,
  EmojiEvents,
  VolunteerActivism,
  School,
  TrendingUp,
  Search,
  HowToReg,
  Category,
  FilterList,
  Assignment,
  PlayArrow,
} from "@mui/icons-material";

const VolunteerGuide = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: 'white',
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
          <Fade in timeout={800}>
            <Box>
              <Avatar
                sx={{
                  width: { xs: 60, md: 80 },
                  height: { xs: 60, md: 80 },
                  bgcolor: theme.palette.primary.main,
                  mx: 'auto',
                  mb: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <Lightbulb 
                  sx={{ 
                    fontSize: { xs: 30, md: 40 }, 
                    color: 'white' 
                  }} 
                />
              </Avatar>
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 2
                }}
              >
                Volunteer Guide
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Everything you need to know to make a difference in your community
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Quick Start - Simple Steps */}
        <Fade in timeout={1000}>
          <Box mb={{ xs: 4, sm: 5, md: 6 }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: theme.palette.text.primary,
                fontWeight: 600,
                mb: 4,
                textAlign: 'center'
              }}
            >
              Get Started in 4 Simple Steps
            </Typography>
            
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              {[
                { number: '1', title: 'Create Profile', desc: 'Set up your volunteer profile with interests and skills', color: '#4CAF50' },
                { number: '2', title: 'Browse Opportunities', desc: 'Find opportunities that match your passion and schedule', color: '#2196F3' },
                { number: '3', title: 'Apply & Get Approved', desc: 'Submit applications and wait for organization approval', color: '#FF9800' },
                { number: '4', title: 'Start Volunteering', desc: 'Begin making a difference in your community', color: '#9C27B0' },
              ].map((step, index) => (
                <Box 
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    mb: 4,
                    p: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: step.color,
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      boxShadow: `0 4px 12px ${alpha(step.color, 0.3)}`,
                    }}
                  >
                    {step.number}
                  </Avatar>
                  <Box flex={1}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        mb: 1
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5
                      }}
                    >
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Fade>

        {/* How to Find Opportunities - Modern UI */}
        <Fade in timeout={1200}>
          <Box mb={{ xs: 4, sm: 5, md: 6 }}>
            <Box textAlign="center" mb={4}>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                How to Find the Right Opportunity
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Discover the perfect way to find opportunities that match your skills and passion
              </Typography>
            </Box>
            
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        background: alpha('#4CAF50', 0.04),
                        border: `1px solid ${alpha('#4CAF50', 0.15)}`,
                        height: '100%',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        '&:hover': {
                          background: alpha('#4CAF50', 0.08),
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 12px 40px rgba(76, 175, 80, 0.15)',
                          '& .icon-wrapper': {
                            transform: 'scale(1.1) rotate(5deg)',
                          }
                        },
                      }}
                    >
                      <Box className="icon-wrapper" sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, #4CAF50, #66BB6A)`,
                        mb: 3,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}>
                        <Category sx={{ fontSize: 28, color: 'white' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 700, mb: 2 }}>
                        Browse by Category
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3, lineHeight: 1.7 }}>
                        Explore opportunities organized by cause areas like education, environment, healthcare, and more.
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1.5}>
                        {['Education', 'Environment', 'Healthcare', 'Animal Welfare'].map((tag, index) => (
                          <Chip 
                            key={tag} 
                            label={tag} 
                            size="small" 
                            sx={{ 
                              backgroundColor: alpha('#4CAF50', 0.1), 
                              color: '#4CAF50', 
                              border: `1px solid ${alpha('#4CAF50', 0.3)}`,
                              fontWeight: 500,
                              borderRadius: '12px',
                              px: 2,
                              '&:hover': {
                                backgroundColor: alpha('#4CAF50', 0.2),
                                transform: 'scale(1.05)',
                              }
                            }} 
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        background: alpha('#2196F3', 0.04),
                        border: `1px solid ${alpha('#2196F3', 0.15)}`,
                        height: '100%',
                        width:'auto',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        '&:hover': {
                          background: alpha('#2196F3', 0.08),
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 12px 40px rgba(33, 150, 243, 0.15)',
                          '& .icon-wrapper': {
                            transform: 'scale(1.1) rotate(5deg)',
                          }
                        },
                      }}
                    >
                      <Box className="icon-wrapper" sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, #2196F3, #42A5F5)`,
                        mb: 3,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}>
                        <FilterList sx={{ fontSize: 28, color: 'white' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 700, mb: 2 }}>
                        Use Smart Filters
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3, lineHeight: 1.7 }}>
                        Find opportunities that match your availability, location preferences, and skill level.
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1.5}>
                        {['Location', 'Time', 'Skills', 'Remote'].map((tag, index) => (
                          <Chip 
                            key={tag} 
                            label={tag} 
                            size="small" 
                            sx={{ 
                              backgroundColor: alpha('#2196F3', 0.1), 
                              color: '#2196F3', 
                              border: `1px solid ${alpha('#2196F3', 0.3)}`,
                              fontWeight: 500,
                              borderRadius: '12px',
                              px: 2,
                              '&:hover': {
                                backgroundColor: alpha('#2196F3', 0.2),
                                transform: 'scale(1.05)',
                              }
                            }} 
                          />
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Box>
        </Fade>

        {/* Application Process - Simple Timeline */}
        <Fade in timeout={1400}>
          <Box mb={{ xs: 4, sm: 5, md: 6 }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: theme.palette.text.primary,
                fontWeight: 600,
                mb: 4,
                textAlign: 'center'
              }}
            >
              Application Process
            </Typography>
            
            <Box sx={{ maxWidth: 700, mx: 'auto' }}>
              {[
                { title: 'Submit Application', desc: 'Click Apply and write a brief message about your interest', time: '2 min' },
                { title: 'Organization Review', desc: 'The organization reviews your application and background', time: '2-5 days' },
                { title: 'Get Approved', desc: 'Receive confirmation with schedule and details', time: '1 day' },
                { title: 'Start Volunteering', desc: 'Begin your journey and make an impact', time: 'Immediate' },
              ].map((step, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 3, mb: 3, alignItems: 'flex-start' }}>
                  <Box sx={{ position: 'relative' }}>
                    <Avatar 
                      sx={{ 
                        width: 40, 
                        height: 40, 
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        zIndex: 2
                      }}
                    >
                      {index + 1}
                    </Avatar>
                    {index < 3 && (
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          top: 40,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 2,
                          height: 40,
                          bgcolor: 'rgba(0,0,0,0.1)',
                          zIndex: 1
                        }} 
                      />
                    )}
                  </Box>
                  <Box flex={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                        {step.title}
                      </Typography>
                      <Chip 
                        label={step.time} 
                        size="small" 
                        sx={{ 
                          backgroundColor: alpha(theme.palette.primary.main, 0.1), 
                          color: theme.palette.primary.main,
                          fontSize: '0.7rem'
                        }} 
                      />
                    </Box>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.5 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Fade>

        {/* Benefits - Simple List */}
        <Fade in timeout={1600}>
          <Box mb={{ xs: 4, sm: 5, md: 6 }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: theme.palette.text.primary,
                fontWeight: 600,
                mb: 4,
                textAlign: 'center'
              }}
            >
              Why Volunteer With Us
            </Typography>
            
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#4CAF50', width: 32, height: 32 }}>
                      <VolunteerActivism fontSize="small" />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                      Make an Impact
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, ml: 7 }}>
                    Contribute to meaningful causes and see the positive difference you make in your community.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#2196F3', width: 32, height: 32 }}>
                      <School fontSize="small" />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                      Develop Skills
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, ml: 7 }}>
                    Gain valuable experience, learn new skills, and enhance your resume through hands-on service.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#FF9800', width: 32, height: 32 }}>
                      <EmojiEvents fontSize="small" />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                      Earn Recognition
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, ml: 7 }}>
                    Receive certificates, badges, and acknowledgments for your volunteer contributions.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: '#9C27B0', width: 32, height: 32 }}>
                      <People fontSize="small" />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
                      Build Network
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, ml: 7 }}>
                    Connect with like-minded people and build lasting relationships in your community.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>

        {/* Safety Tips - Simple */}
        <Fade in timeout={1800}>
          <Box mb={{ xs: 4, sm: 5, md: 6 }}>
            <Box
              sx={{
                p: 4,
                borderRadius: '20px',
                background: alpha('#f44336', 0.05),
                border: '1px solid rgba(244, 67, 54, 0.2)',
                maxWidth: 800,
                mx: 'auto'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar sx={{ bgcolor: '#f44336', color: 'white' }}>
                  <Security fontSize="small" />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                  Safety Guidelines
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3, lineHeight: 1.6 }}>
                Your safety is our priority. Keep these guidelines in mind when volunteering:
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Verify organization legitimacy before committing',
                  'Meet in public places for initial meetings',
                  'Share your volunteer plans with friends/family',
                  'Report any concerns immediately'
                ].map((tip, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircle sx={{ color: '#4CAF50', fontSize: 20 }} />
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '0.9rem' }}>
                        {tip}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Fade>

       
      </Container>
    </Box>
  );
};

export default VolunteerGuide;
