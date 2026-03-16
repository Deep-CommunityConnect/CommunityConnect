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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper sx={{ p: { xs: 3, md: 5 } }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <HelpOutlineIcon 
            sx={{ 
              fontSize: { xs: 40, md: 50 }, 
              color: 'primary.main', 
              mb: 2 
            }} 
          />
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h1" 
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Find answers to common questions about volunteering, organizing opportunities, and using our platform.
          </Typography>
        </Box>

        {/* FAQ Accordion */}
        <Box sx={{ mt: 4 }}>
          {faqData.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleAccordionChange(faq.id)}
              sx={{
                mb: 2,
                '&:before': {
                  display: 'none',
                },
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: { xs: '12px 0', md: '16px 0' },
                  },
                }}
              >
                <Typography 
                  variant="h6" 
                  component="h2"
                  sx={{ 
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 500,
                    lineHeight: 1.3,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Footer Info */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Still have questions?{' '}
            <Typography
              component="a"
              href="/contact"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Contact our support team
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default FAQ;
