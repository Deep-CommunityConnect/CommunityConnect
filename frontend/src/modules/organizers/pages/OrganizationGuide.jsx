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
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
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
  Business,
  School,
  TrendingUp,
  Search,
  HowToReg,
  Category,
  FilterList,
  Assignment,
  PlayArrow,
  Group,
  Campaign,
  Assessment,
  Handshake,
  Visibility,
  Edit,
  Delete,
  AddCircle,
  EventNote,
  Email,
  Phone,
  Language,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

const OrganizationGuide = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container maxWidth={isLargeDesktop ? "xl" : "lg"} sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Organization Guide
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Everything you need to know to successfully manage volunteer opportunities
        </Typography>
      </Box>

      {/* Quick Start Section */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: isDesktop ? 6 : 4, 
          mb: 4, 
          bgcolor: "primary.light", 
          color: "primary.contrastText",
          borderRadius: 2
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Business fontSize={isDesktop ? "large" : "medium"} />
              Quick Start Guide
            </Typography>
            <Typography variant={isDesktop ? "body1" : "body2"} paragraph>
              New to organizing? Follow these simple steps to get started with managing volunteer opportunities:
            </Typography>
          </Grid>
          {isDesktop && (
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h2" color="primary.contrastText">7</Typography>
                <Typography variant="body2">Simple Steps</Typography>
              </Box>
            </Grid>
          )}
        </Grid>
        <Grid container spacing={isDesktop ? 4 : 2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>1</Typography>
              <Typography variant="body2">Complete your organization profile</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>2</Typography>
              <Typography variant="body2">Create your first opportunity</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>3</Typography>
              <Typography variant="body2">Review volunteer applications</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>4-7</Typography>
              <Typography variant="body2">Manage, communicate, track, and grow</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Creating Opportunities */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <AddCircle fontSize={isDesktop ? "large" : "medium"} />
          Creating Effective Opportunities
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Assignment fontSize="small" />
                  Opportunity Details
                </Typography>
                <Typography variant="body2" paragraph>
                  Create compelling volunteer opportunities with clear descriptions, requirements, and impact statements.
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip label="Clear Title" size="small" variant="outlined" />
                  <Chip label="Detailed Description" size="small" variant="outlined" />
                  <Chip label="Requirements" size="small" variant="outlined" />
                  <Chip label="Impact Statement" size="small" variant="outlined" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Schedule fontSize="small" />
                  Scheduling & Logistics
                </Typography>
                <Typography variant="body2" paragraph>
                  Set clear schedules, locations, and capacity limits to ensure smooth volunteer coordination.
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip label="Time Commitment" size="small" icon={<Schedule />} variant="outlined" />
                  <Chip label="Location" size="small" icon={<LocationOn />} variant="outlined" />
                  <Chip label="Capacity" size="small" variant="outlined" />
                  <Chip label="Deadlines" size="small" variant="outlined" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Managing Applications */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Assessment fontSize={isDesktop ? "large" : "medium"} />
          Managing Applications
        </Typography>
        <Card elevation={2} sx={{ p: isDesktop ? 4 : 3 }}>
          <CardContent sx={{ p: 0 }}>
            <Grid container spacing={isDesktop ? 4 : 2}>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    1
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Review
                  </Typography>
                  <Typography variant="body2">
                    Evaluate volunteer applications based on skills, availability, and motivation.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    2
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Interview
                  </Typography>
                  <Typography variant="body2">
                    Conduct brief interviews to assess fit and answer volunteer questions.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    3
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Approve
                  </Typography>
                  <Typography variant="body2">
                    Send acceptance notifications and onboarding information to approved volunteers.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    4
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Onboard
                  </Typography>
                  <Typography variant="body2">
                    Provide training materials and schedule orientation sessions.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Communication Best Practices */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Campaign fontSize={isDesktop ? "large" : "medium"} />
          Communication Best Practices
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email fontSize="small" />
                  Before Volunteering
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Send detailed welcome emails" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Provide training materials in advance" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Share contact information and emergency procedures" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Set clear expectations and goals" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventNote fontSize="small" />
                  During & After
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Regular check-ins and feedback sessions" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Celebrate achievements and milestones" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Request feedback for improvement" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Send certificates and recognition" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Help fontSize={isDesktop ? "large" : "medium"} />
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={isDesktop ? 3 : 2}>
          <Grid item xs={12} md={6}>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How do I attract quality volunteers?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Create compelling opportunity descriptions, be specific about requirements, 
                  highlight the impact volunteers will make, and promote through multiple channels.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">What should I include in volunteer training?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Include organization overview, role-specific tasks, safety procedures, 
                  communication protocols, and impact measurement guidelines.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How do I handle volunteer conflicts?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Address issues promptly, mediate discussions privately, establish clear guidelines, 
                  and document resolutions. Consider involving HR for serious conflicts.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How can I measure volunteer impact?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Track hours served, beneficiaries reached, outcomes achieved, and collect 
                  testimonials. Use both quantitative metrics and qualitative stories.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>

      {/* Organization Profile Tips */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Business fontSize={isDesktop ? "large" : "medium"} />
          Organization Profile Tips
        </Typography>
        <Paper 
          elevation={2} 
          sx={{ 
            p: isDesktop ? 4 : 3, 
            bgcolor: "info.light", 
            borderRadius: 2,
            borderLeft: isDesktop ? '6px solid' : '4px solid',
            borderLeftColor: 'info.main'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Visibility color="info" />
            Make Your Profile Stand Out
          </Typography>
          <Typography variant="body2" paragraph>
            A complete organization profile helps attract the right volunteers and builds trust:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Professional logo and branding" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Clear mission statement" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Contact information" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Photos and videos" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Social media links" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Impact statistics" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Tools and Resources */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Handshake fontSize={isDesktop ? "large" : "medium"} />
          Tools and Resources
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                textAlign: "center", 
                p: isDesktop ? 3 : 2, 
                height: '100%',
                transition: '0.3s', 
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
              }}
            >
              <Edit sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Content Creation
              </Typography>
              <Typography variant="body2">
                Access templates for volunteer descriptions, emails, and social media posts.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                textAlign: "center", 
                p: isDesktop ? 3 : 2, 
                height: '100%',
                transition: '0.3s', 
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
              }}
            >
              <Assessment sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Impact Tracking
              </Typography>
              <Typography variant="body2">
                Measure and report volunteer impact with comprehensive analytics tools.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                textAlign: "center", 
                p: isDesktop ? 3 : 2, 
                height: '100%',
                transition: '0.3s', 
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
              }}
            >
              <Group sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Community Support
              </Typography>
              <Typography variant="body2">
                Connect with other organizers and share best practices in our community.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Support */}
      <Box textAlign="center" mt={isDesktop ? 8 : 6}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: isDesktop ? 6 : 4, 
            background: 'linear-gradient(135deg, primary.light 0%, primary.main 100%)',
            color: 'black',
            borderRadius: 3
          }}
        >
          <Typography variant={isDesktop ? "h4" : "h5"} gutterBottom>
            Need Organizer Support?
          </Typography>
          <Typography variant={isDesktop ? "body1" : "body2"} paragraph sx={{ mb: 3 }}>
            Our organizer success team is here to help you grow your volunteer program.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip 
              label="organizers@volunteerplatform.com" 
              variant="outlined" 
              sx={{ 
                color: 'black', 
                borderColor: 'black',
                '&:hover': { bgcolor: 'rgba(177, 101, 101, 0.1)' }
              }} 
            />
            <Chip 
              label="Organizer FAQ" 
              variant="outlined" 
              component={RouterLink}
              to="/faq"
              sx={{ 
                color: 'black', 
                borderColor: 'black',
                '&:hover': { bgcolor: 'rgba(177, 101, 101, 0.1)' }
              }} 
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default OrganizationGuide;
