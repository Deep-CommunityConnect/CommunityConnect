import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Privacy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const privacySections = [
    {
      id: 'panel1',
      title: 'Information We Collect',
      icon: '📋',
      content: [
        'Personal Information: Name, email address, phone number, date of birth, and profile details when you register',
        'Account Information: Username, password, and authentication credentials',
        'Contact Details: Address, city, country, and contact preferences',
        'Professional Information: Skills, experience, education, and work history',
        'Usage Data: Pages visited, features used, time spent on platform, and interaction patterns',
        'Device Information: IP address, browser type, operating system, and device identifiers',
        'Communication Data: Messages sent, applications submitted, and feedback provided'
      ]
    },
    {
      id: 'panel2',
      title: 'How We Use Your Information',
      icon: '🔒',
      content: [
        'Service Provision: To provide and maintain our volunteer matching platform',
        'Account Management: To create and manage your user account and profile',
        'Opportunity Matching: To connect volunteers with relevant volunteer opportunities',
        'Communication: To facilitate communication between volunteers and organizations',
        'Platform Improvement: To analyze usage patterns and improve our services',
        'Safety and Security: To monitor for fraudulent activity and protect user accounts',
        'Customer Support: To respond to inquiries and provide technical assistance',
        'Legal Compliance: To comply with applicable laws and regulations'
      ]
    },
    {
      id: 'panel3',
      title: 'Data Sharing and Disclosure',
      icon: '🔄',
      content: [
        'With Organizations: Your profile and application information is shared with organizations you apply to',
        'Public Profile: Basic profile information may be visible to other registered users',
        'Service Providers: Third-party services for payment processing, email delivery, and analytics',
        'Legal Requirements: When required by law, court order, or government request',
        'Business Transfers: In case of merger, acquisition, or sale of our business',
        'Safety Purposes: To protect the rights, property, or safety of our users or others',
        'With Your Consent: When you explicitly authorize us to share specific information'
      ]
    },
    {
      id: 'panel4',
      title: 'Data Security Measures',
      icon: '🛡️',
      content: [
        'Encryption: All data transmissions use SSL/TLS encryption protocols',
        'Access Controls: Strict authentication and authorization systems',
        'Regular Audits: Periodic security assessments and vulnerability testing',
        'Data Minimization: We collect only information necessary for our services',
        'Employee Training: Regular privacy and security training for all staff members',
        'Secure Storage: Encrypted databases with access logging and monitoring',
        'Incident Response: Procedures for handling and reporting security breaches'
      ]
    },
    {
      id: 'panel5',
      title: 'Your Privacy Rights',
      icon: '👤',
      content: [
        'Access Rights: Request copies of your personal information we hold',
        'Correction Rights: Request corrections to inaccurate or incomplete information',
        'Deletion Rights: Request deletion of your personal information (with exceptions)',
        'Portability Rights: Request transfer of your data to another service provider',
        'Restriction Rights: Object to or limit processing of your personal information',
        'Opt-Out Rights: Decline marketing communications and certain data uses',
        'Complaint Rights: File complaints with privacy authorities about our practices'
      ]
    },
    {
      id: 'panel6',
      title: 'Cookies and Tracking Technologies',
      icon: '🍪',
      content: [
        'Essential Cookies: Required for basic site functionality and security',
        'Performance Cookies: Collect information on how visitors use our website',
        'Functional Cookies: Remember your preferences and personalization choices',
        'Targeting Cookies: Used to deliver relevant content and advertisements',
        'Analytics Tools: Google Analytics and similar services for traffic analysis',
        'Local Storage: Browser storage for user preferences and session data',
        'Device Fingerprinting: Unique device identification for security purposes'
      ]
    },
    {
      id: 'panel7',
      title: 'Third-Party Services',
      icon: '🌐',
      content: [
        'Payment Processors: Stripe, PayPal, and other payment gateway services',
        'Email Services: SendGrid, Mailgun, or similar email delivery platforms',
        'Cloud Hosting: AWS, Google Cloud, or other infrastructure providers',
        'Analytics Services: Google Analytics, Mixpanel, or similar tracking tools',
        'Social Media: Facebook, Twitter, LinkedIn integration features',
        'Mapping Services: Google Maps for location-based opportunities'
      ]
    },
    {
      id: 'panel8',
      title: 'Data Retention',
      icon: '⏰',
      content: [
        'Active Accounts: Information retained while your account remains active',
        'Inactive Accounts: Data retained for 2 years after last login, then deleted',
        'Application Records: Kept for 7 years for legal and reference purposes',
        'Communication Logs: Retained for 1 year unless required for legal reasons',
        'Analytics Data: Aggregated and anonymized after 26 months',
        'Deleted Content: Removed from active databases but may exist in backups for 30 days'
      ]
    },
    {
      id: 'panel9',
      title: 'International Data Transfers',
      icon: '🌍',
      content: [
        'Global Service: Our platform operates internationally and processes data globally',
        'Adequate Protection: We ensure equivalent protection standards for international transfers',
        'Standard Contractual Clauses: Use of EU Standard Contractual Clauses for EU data',
        'Privacy Shield: Participation in applicable privacy frameworks (e.g., Privacy Shield)',
        'Local Compliance: Adherence to regional privacy laws (GDPR, CCPA, etc.)',
        'User Consent: Explicit consent for international data transfers where required'
      ]
    },
    {
      id: 'panel10',
      title: 'Policy Updates',
      icon: '📝',
      content: [
        'Regular Reviews: This privacy policy is reviewed annually',
        'Material Changes: Significant updates will be communicated via email and platform notices',
        'Effective Date: Changes take effect 30 days after notification',
        'Continued Use: Continued platform use constitutes acceptance of updated policy',
        'Archive Access: Previous versions available upon request',
        'Feedback Process: Users can provide input on proposed privacy changes'
      ]
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
              <Box sx={{ textAlign: 'center', mb: 4 }}>
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
                  Privacy Policy
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
                  Your privacy is important to us. Learn how we collect, use, and protect your information.
                </Typography>
              </Box>

              {/* Content Sections */}
              <Box sx={{ lineHeight: 1.8 }}>
                {privacySections.map((section) => (
                  <Accordion
                    key={section.id}
                    expanded={expanded === section.id}
                    onChange={handleChange(section.id)}
                    sx={{
                      mb: 2,
                      background: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(102,126,234,0.1)',
                      '&:before': {
                        display: 'none',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        '& .MuiAccordionSummary-content': {
                          margin: 0,
                        },
                        '& .MuiAccordionSummary-expandIconWrapper': {
                          color: '#667eea',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a2e' }}>
                          {section.icon} {section.title}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ p: 3 }}>
                        {Array.isArray(section.content) ? (
                          <List sx={{ ml: 2, mt: 1 }}>
                            {section.content.map((item, index) => (
                              <ListItem
                                key={index}
                                sx={{
                                  py: 0.5,
                                  px: 2,
                                  borderRadius: '8px',
                                  transition: 'all 0.2s ease',
                                  '&:hover': {
                                    background: 'rgba(102,126,234,0.05)',
                                  },
                                }}
                              >
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <Box
                                    sx={{
                                      width: 8,
                                      height: 8,
                                      borderRadius: '50%',
                                      background: '#667eea',
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
                        ) : (
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'rgba(0,0,0,0.7)',
                              lineHeight: 1.7,
                              ml: 1,
                            }}
                          >
                            {section.content}
                          </Typography>
                        )}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>

              {/* Footer */}
              <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(102,126,234,0.2)' }}>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Privacy;
