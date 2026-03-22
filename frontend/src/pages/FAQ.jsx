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
  Chip,
  Fade,
  alpha,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SecurityIcon from "@mui/icons-material/Security";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EventNoteIcon from "@mui/icons-material/EventNote";
import HistoryIcon from "@mui/icons-material/History";
import LockIcon from "@mui/icons-material/Lock";
import FeedbackIcon from "@mui/icons-material/Feedback";

const FAQ = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqCategories = [
    { name: "Getting Started", icon: <PersonAddIcon />, color: "#4CAF50" },
    { name: "Volunteering", icon: <EventNoteIcon />, color: "#2196F3" },
    { name: "Account", icon: <SecurityIcon />, color: "#FF9800" },
    { name: "Support", icon: <ContactSupportIcon />, color: "#9C27B0" },
  ];

  const getFAQIcon = (index) => {
    const icons = [
      <PersonAddIcon />,
      <PersonAddIcon />,
      <EventNoteIcon />,
      <EventNoteIcon />,
      <EventNoteIcon />,
      <HistoryIcon />,
      <LockIcon />,
      <QuestionAnswerIcon />,
      <EventNoteIcon />,
      <EventNoteIcon />,
      <SecurityIcon />,
      <FeedbackIcon />,
    ];
    return icons[index] || <QuestionAnswerIcon />;
  };

  const getCategoryColor = (index) => {
    const colors = ["#4CAF50", "#4CAF50", "#2196F3", "#2196F3", "#2196F3", "#2196F3", "#FF9800", "#2196F3", "#2196F3", "#2196F3", "#9C27B0", "#9C27B0"];
    return colors[index] || "#2196F3";
  };

  const faqData = [
    {
      id: "panel1",
      question: "How do I register as a volunteer?",
      answer: "To register as a volunteer, click on the 'Register' button on the login page. Fill in your personal details, create a password, and submit the form. Once registered, you can log in and start browsing volunteer opportunities."
    },
    {
      id: "panel2",
      question: "How can I become an organizer?",
      answer: "To become an organizer, register on the platform and then contact our support team to request organizer privileges. Alternatively, you can register directly as an organizer if you have an invitation code from an existing organization."
    },
    {
      id: "panel3",
      question: "How do I apply for a volunteer opportunity?",
      answer: "Browse available opportunities on the home page, click on any opportunity that interests you to view details, and then click the 'Apply' button. Your application will be sent to the organizer for review."
    },
    {
      id: "panel4",
      question: "Can I edit my application after submitting?",
      answer: "Once an application is submitted, you cannot edit it directly. However, you can contact the organizer through the platform to request changes or withdraw your application and submit a new one."
    },
    {
      id: "panel5",
      question: "How do I create a volunteer opportunity as an organizer?",
      answer: "As an organizer, navigate to your dashboard and click on 'Create Opportunity'. Fill in all the required details including title, description, location, dates, and requirements. Your opportunity will be visible to volunteers once published."
    },
    {
      id: "panel6",
      question: "How can I track my volunteer history?",
      answer: "Go to your profile and click on 'History' or navigate to the 'History' section from the main menu. You'll see all your past and current volunteer activities, including application status and completion records."
    },
    {
      id: "panel7",
      question: "What should I do if I forget my password?",
      answer: "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to reset your password. Follow the link in the email to create a new password."
    },
    {
      id: "panel8",
      question: "How do I contact an organizer about an opportunity?",
      answer: "When viewing an opportunity detail page, you'll find a 'Contact Organizer' button. Click it to send a message directly to the organizer through our messaging system."
    },
    {
      id: "panel9",
      question: "Can I volunteer for multiple opportunities simultaneously?",
      answer: "Yes, you can apply for multiple opportunities as long as the schedules don't conflict. However, we recommend focusing on one or two opportunities at a time to ensure quality commitment."
    },
    {
      id: "panel10",
      question: "How are volunteer hours tracked and verified?",
      answer: "Organizers track and verify volunteer hours through the platform. Once you complete an opportunity, the organizer will confirm your hours, which will then appear in your volunteer history and profile."
    },
    {
      id: "panel11",
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. All personal information is encrypted and stored securely. We only share necessary information with organizers for the purpose of volunteer matching and communication."
    },
    {
      id: "panel12",
      question: "How do I report an issue or provide feedback?",
      answer: "You can report issues or provide feedback through the 'Contact' page or by using the feedback form in your profile. Our support team will respond within 24-48 hours."
    }
  ];

  return (
    <Box 
      sx={{ 
        minHeight: '90vh', 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        py: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }
      }}
    >
      <Fade in timeout={800}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Avatar
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 60, md: 80 },
                bgcolor: 'white',
                mx: 'auto',
                mb: 3,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              }}
            >
              <HelpOutlineIcon 
                sx={{ 
                  fontSize: { xs: 30, md: 40 }, 
                  color: theme.palette.primary.main 
                }} 
              />
            </Avatar>
            <Typography 
              variant={isMobile ? "h4" : "h3"} 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                color: 'white',
                mb: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Find answers to common questions about volunteering, organizing opportunities, and using our platform.
            </Typography>
          </Box>

          {/* Category Chips */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap', gap: 1 }}>
            {faqCategories.map((category, index) => (
              <Chip
                key={index}
                icon={category.icon}
                label={category.name}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  },
                }}
              />
            ))}
          </Box>

          {/* FAQ Accordion */}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={10} sx={{ mx: 'auto' }}>
              <Paper
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <Box sx={{ mt: 2 }}>
                  {faqData.map((faq, index) => (
                    <Fade in timeout={800 + index * 100} key={faq.id}>
                      <Accordion
                        expanded={expanded === faq.id}
                        onChange={handleAccordionChange(faq.id)}
                        sx={{
                          mb: 2,
                          background: alpha(getCategoryColor(index), 0.05),
                          border: `1px solid ${alpha(getCategoryColor(index), 0.2)}`,
                          borderRadius: '12px !important',
                          '&:before': {
                            display: 'none',
                          },
                          boxShadow: 'none',
                          '&:hover': {
                            background: alpha(getCategoryColor(index), 0.08),
                            transform: 'translateY(-1px)',
                            transition: 'all 0.3s ease',
                          },
                          '&.Mui-expanded': {
                            background: alpha(getCategoryColor(index), 0.1),
                            border: `1px solid ${alpha(getCategoryColor(index), 0.3)}`,
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon 
                              sx={{ 
                                color: getCategoryColor(index),
                                fontSize: '1.5rem'
                              }} 
                            />
                          }
                          sx={{
                            '& .MuiAccordionSummary-content': {
                              margin: { xs: '12px 0', md: '16px 0' },
                            },
                            '&.Mui-expanded': {
                              margin: { xs: '16px 0', md: '20px 0' },
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                            <Avatar
                              sx={{
                                width: 36,
                                height: 36,
                                bgcolor: getCategoryColor(index),
                                boxShadow: `0 4px 12px ${alpha(getCategoryColor(index), 0.3)}`,
                              }}
                            >
                              {getFAQIcon(index)}
                            </Avatar>
                            <Typography 
                              variant="h6" 
                              component="h2"
                              sx={{ 
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: 600,
                                lineHeight: 1.3,
                                color: theme.palette.text.primary,
                                flex: 1,
                              }}
                            >
                              {faq.question}
                            </Typography>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: { xs: 2, md: 3 } }}>
                          <Typography 
                            variant="body1"
                            sx={{ 
                              color: theme.palette.text.secondary,
                              lineHeight: 1.7,
                              fontSize: { xs: '0.95rem', md: '1rem' },
                              pl: { xs: 0, md: 5 },
                            }}
                          >
                            {faq.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Fade>
                  ))}
                </Box>

                {/* Footer Info */}
                <Box sx={{ mt: 4, pt: 3, textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                    <ContactSupportIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Still have questions?
                    </Typography>
                  </Box>
                  <Typography
                    component="a"
                    href="/contact"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: '8px',
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.15),
                        transform: 'translateY(-1px)',
                        boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
                      },
                    }}
                  >
                    Contact our support team
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </Box>
  );
};

export default FAQ;
