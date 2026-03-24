import { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  Card,
  Avatar,
  Fade,
  alpha,
  Divider,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HistoryIcon from "@mui/icons-material/History";
import LockIcon from "@mui/icons-material/Lock";
import FeedbackIcon from "@mui/icons-material/Feedback";
import GroupsIcon from '@mui/icons-material/Groups';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import LayersIcon from '@mui/icons-material/Layers';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';

const ORANGE = '#e65100';
const ORANGE_LIGHT = '#fff3e0';
const DARK = '#1a1a2e';

const FAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      id: "panel1",
      icon: <PersonAddIcon sx={{ fontSize: 18 }} />,
      question: "How do I register on CommunityConnect?",
      answer: "To register, click on the 'Register' button in the navigation bar. You can choose to sign up as a Volunteer to find opportunities, or as an Organiser to post them. Fill in your details and verify your email to get started."
    },
    {
      id: "panel2",
      icon: <LoginIcon sx={{ fontSize: 18 }} />,
      question: "How do I log in to my account?",
      answer: "Click the 'Login' button at the top right of the page. Enter your registered email address and password. If you're already logged in, you'll be redirected to your dashboard automatically."
    },
    {
      id: "panel3",
      icon: <LockIcon sx={{ fontSize: 18 }} />,
      question: "What should I do if I forget my password?",
      answer: "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to reset your password. Follow the link in the email to create a new secure password."
    },
    {
      id: "panel4",
      icon: <PersonIcon sx={{ fontSize: 18 }} />,
      question: "How can I update my profile information?",
      answer: "Once logged in, navigate to your 'Profile' section from the top menu. Here you can update your contact details, professional skills, and preferences. Don't forget to click 'Save' to apply your changes."
    },
    {
      id: "panel5",
      icon: <VerifiedUserIcon sx={{ fontSize: 18 }} />,
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. All personal information is encrypted and stored securely using industry-standard protocols. We never share your private data with third parties without your explicit consent."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      
      {/* ── Header Section ──────────────────────────────── */}
      <Box sx={{ pt: '100px', pb: 6, backgroundColor: '#ffffff', borderBottom: '1px solid #eee' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{ color: ORANGE, fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', display: 'block', mb: 1 }}
            >
              Support Center
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                color: DARK,
                fontSize: { xs: '2.2rem', md: '3rem' },
                mb: 2,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#555',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                maxWidth: 650,
                mx: 'auto',
              }}
            >
              Find answers to common questions about volunteering, organising opportunities, and using our platform.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── FAQ Section ─────────────────────────────── */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Fade in timeout={800}>
          <Container maxWidth="md">
            <Box sx={{ mb: 4 }}>
              {faqData.map((faq, index) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleAccordionChange(faq.id)}
                  sx={{
                    mb: 2,
                    p: 1,
                    backgroundColor: '#ffffff',
                    border: '1px solid #eee',
                    borderRadius: '12px !important',
                    boxShadow: 'none',
                    transition: 'all 0.2s ease',
                    '&:before': { display: 'none' },
                    '&:hover': {
                      borderColor: ORANGE,
                      backgroundColor: '#fff',
                    },
                    '&.Mui-expanded': {
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      borderColor: ORANGE,
                      borderTop: `3px solid ${ORANGE}`,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: ORANGE }} />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        margin: '12px 0',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '6px',
                          backgroundColor: ORANGE_LIGHT,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: ORANGE,
                          flexShrink: 0,
                        }}
                      >
                        {faq.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: DARK,
                          fontSize: '1.05rem',
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 3, pl: 8 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        lineHeight: 1.8,
                        fontSize: '0.95rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>

            {/* Support Message */}
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                backgroundColor: '#ffffff',
                border: '1px solid #eee',
                borderRadius: '16px',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, color: DARK, mb: 1.5 }}>
                Still have questions?
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                We're here to help you get the most out of CommunityConnect.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => window.location.href = '/contact'}
                sx={{
                  borderColor: ORANGE,
                  color: ORANGE,
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 4,
                  py: 1.2,
                  '&:hover': {
                    backgroundColor: ORANGE,
                    color: 'white',
                    borderColor: ORANGE,
                  },
                }}
              >
                Contact Support Team
              </Button>
            </Box>
          </Container>
        </Fade>
      </Box>

    </Box>
  );
};

export default FAQ;
