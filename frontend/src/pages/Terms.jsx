import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Divider,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import BlockIcon from '@mui/icons-material/Block';
import CopyrightIcon from '@mui/icons-material/Copyright';
import UpdateIcon from '@mui/icons-material/Update';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';


const TermsAndConditions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: <GavelIcon />,
      content: 'Welcome to Community Connect. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.',
      color: '#667eea'
    },
    {
      id: 'acceptance',
      title: '2. Acceptance of Terms',
      icon: <SecurityIcon />,
      content: 'By registering, accessing, or using Community Connect, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our platform.',
      color: '#764ba2'
    },
    {
      id: 'accounts',
      title: '3. User Accounts',
      icon: <PeopleIcon />,
      items: [
        'You must provide accurate and complete information when creating an account',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You agree to notify us immediately of any unauthorized use of your account',
        'You must be at least 18 years old to use this platform',
        'One user may only maintain one active account'
      ],
      color: '#f093fb'
    },
    {
      id: 'roles',
      title: '4. User Roles',
      icon: <PeopleIcon />,
      content: 'Our platform supports two types of users:',
      roles: [
        { title: 'Volunteers', description: 'Individuals who browse, apply for, and participate in volunteer opportunities' },
        { title: 'Organizers', description: 'Organizations or individuals who create and manage volunteer opportunities' }
      ],
      color: '#667eea'
    },
    {
      id: 'responsibilities',
      title: '5. User Responsibilities',
      icon: <SecurityIcon />,
      items: [
        'Provide truthful information in your profile and applications',
        'Honor commitments made to organizers',
        'Conduct yourself professionally during volunteer activities',
        'Report any safety concerns immediately',
        'Respect organizer policies and guidelines'
      ],
      color: '#764ba2'
    },
    {
      id: 'prohibited',
      title: '6. Prohibited Activities',
      icon: <BlockIcon />,
      items: [
        'Providing false or misleading information',
        'Harassing, abusing, or discriminating against other users',
        'Using the platform for illegal purposes',
        'Attempting to breach security measures',
        'Spamming or sending unsolicited communications',
        'Impersonating others'
      ],
      color: '#f093fb'
    },
    {
      id: 'intellectual',
      title: '7. Content and Intellectual Property',
      icon: <CopyrightIcon />,
      items: [
        'Users retain ownership of content they create',
        'By posting content, you grant us a license to display it on our platform',
        'You must not post copyrighted material without permission',
        'We reserve the right to remove inappropriate content'
      ],
      color: '#667eea'
    },
    {
      id: 'liability',
      title: '8. Limitation of Liability',
      icon: <GavelIcon />,
      content: 'Community Connect is not liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from your use of the platform. This includes but is not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.',
      color: '#764ba2'
    },
    {
      id: 'termination',
      title: '9. Termination',
      icon: <UpdateIcon />,
      content: 'We reserve the right to suspend or terminate your account at any time for violations of these terms or for any other reason at our sole discretion. You may also delete your account at any time.',
      color: '#f093fb'
    },
    {
      id: 'changes',
      title: '10. Changes to Terms',
      icon: <UpdateIcon />,
      content: 'We may modify these Terms and Conditions at any time. We will notify users of significant changes via email or through our platform. Continued use of the platform after changes constitutes acceptance of new terms.',
      color: '#667eea'
    },
    {
      id: 'contact',
      title: '11. Contact Information',
      icon: <ContactSupportIcon />,
      content: 'If you have any questions about these Terms and Conditions, please contact us at: support@communityconnect.com',
      color: '#764ba2'
    }
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
                p: { xs: 4, md: 6 },
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography
                  variant={isMobile ? "h4" : "h3"}
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
                  Terms and Conditions
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                  }}
                >
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Typography>
              </Box>

              <Divider sx={{ mb: 4 }} />

              {/* Content Sections */}
              <Box sx={{ lineHeight: 1.8 }}>
                {sections.map((section, index) => (
                  <Card
                    key={section.id}
                    sx={{
                      mb: 3,
                      background: 'rgba(255,255,255,0.8)',
                      border: `1px solid ${section.color}20`,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${section.color}15`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      {/* Section Header */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${section.color}, ${section.color}dd)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: `0 4px 12px ${section.color}30`,
                          }}
                        >
                          {section.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          component="h2"
                          sx={{
                            fontWeight: 700,
                            color: section.color,
                            fontSize: '1.1rem',
                          }}
                        >
                          {section.title}
                        </Typography>
                      </Box>

                      {/* Section Content */}
                      {section.content && (
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(0,0,0,0.7)',
                            lineHeight: 1.7,
                            fontSize: '1rem',
                            ml: 1,
                          }}
                        >
                          {section.content}
                        </Typography>
                      )}

                      {/* Section Items */}
                      {section.items && (
                        <List sx={{ ml: 1 }}>
                          {section.items.map((item, itemIndex) => (
                            <ListItem
                              key={itemIndex}
                              sx={{
                                py: 0.5,
                                px: 2,
                                borderRadius: '8px',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  background: `${section.color}10`,
                                },
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <Box
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: section.color,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={item}
                                primaryTypographyProps={{
                                  sx: {
                                    fontSize: '0.95rem',
                                    color: 'rgba(0,0,0,0.7)',
                                    lineHeight: 1.6,
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      )}

                      {/* Section Roles */}
                      {section.roles && (
                        <Box sx={{ mt: 2 }}>
                          {section.roles.map((role, roleIndex) => (
                            <Card
                              key={roleIndex}
                              sx={{
                                p: 2,
                                mb: 2,
                                background: `${section.color}08`,
                                border: `1px solid ${section.color}20`,
                                borderRadius: '8px',
                              }}
                            >
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontWeight: 600,
                                  color: section.color,
                                  mb: 1,
                                  fontSize: '1rem',
                                }}
                              >
                                <strong>{role.title}:</strong> {role.description}
                              </Typography>
                            </Card>
                          ))}
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Footer */}
              <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(102,126,234,0.2)' }}>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                  By using Community Connect, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
