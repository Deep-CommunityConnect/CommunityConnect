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
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container maxWidth={isLargeDesktop ? "xl" : "lg"} sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Volunteer Guide
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Everything you need to know to make a difference in your community
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
              <Lightbulb fontSize={isDesktop ? "large" : "medium"} />
              Quick Start Guide
            </Typography>
            <Typography variant={isDesktop ? "body1" : "body2"} paragraph>
              New to volunteering? Follow these simple steps to get started on your journey:
            </Typography>
          </Grid>
          {isDesktop && (
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h2" color="primary.contrastText">6</Typography>
                <Typography variant="body2">Simple Steps</Typography>
              </Box>
            </Grid>
          )}
        </Grid>
        <Grid container spacing={isDesktop ? 4 : 2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>1</Typography>
              <Typography variant="body2">Create your profile and tell us about your interests</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>2</Typography>
              <Typography variant="body2">Browse available opportunities in your area</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>3</Typography>
              <Typography variant="body2">Apply for opportunities that match your skills</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" color="primary.contrastText" mb={1}>4-6</Typography>
              <Typography variant="body2">Get approved, complete service, track impact</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Finding Opportunities */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Search fontSize={isDesktop ? "large" : "medium"} />
          Finding the Right Opportunity
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Category fontSize="small" />
                  Browse by Category
                </Typography>
                <Typography variant="body2" paragraph>
                  Explore opportunities organized by cause areas like education, environment, healthcare, and more.
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip label="Education" size="small" variant="outlined" />
                  <Chip label="Environment" size="small" variant="outlined" />
                  <Chip label="Healthcare" size="small" variant="outlined" />
                  <Chip label="Animal Welfare" size="small" variant="outlined" />
                  {isDesktop && <Chip label="Senior Care" size="small" variant="outlined" />}
                  {isDesktop && <Chip label="Youth Programs" size="small" variant="outlined" />}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FilterList fontSize="small" />
                  Filter by Preferences
                </Typography>
                <Typography variant="body2" paragraph>
                  Use filters to find opportunities that match your availability, location, and skill level.
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  <Chip label="Location" size="small" icon={<LocationOn />} variant="outlined" />
                  <Chip label="Time" size="small" icon={<Schedule />} variant="outlined" />
                  <Chip label="Skills" size="small" variant="outlined" />
                  <Chip label="Remote" size="small" variant="outlined" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Application Process */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <HowToReg fontSize={isDesktop ? "large" : "medium"} />
          Application Process
        </Typography>
        <Card elevation={2} sx={{ p: isDesktop ? 4 : 3 }}>
          <CardContent sx={{ p: 0 }}>
            <Grid container spacing={isDesktop ? 4 : 2}>
              <Grid item xs={12} sm={6} md={4}>
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
                    Apply
                  </Typography>
                  <Typography variant="body2">
                    Submit your application with a brief message about why you're interested in the opportunity.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
                    Review
                  </Typography>
                  <Typography variant="body2">
                    The organization will review your application and may contact you for additional information.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
                    Confirmation
                  </Typography>
                  <Typography variant="body2">
                    Once approved, you'll receive confirmation details about your volunteer service.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Best Practices */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Star fontSize={isDesktop ? "large" : "medium"} />
          Best Practices
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Assignment fontSize="small" />
                  Before Volunteering
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Research the organization and mission" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Understand time commitments and requirements" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Prepare any necessary documents or training" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Ask questions about expectations" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PlayArrow fontSize="small" />
                  During Volunteering
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Be punctual and reliable" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Communicate openly with organizers" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Respect confidentiality and boundaries" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Document your experience and impact" primaryTypographyProps={{ variant: 'body2' }} />
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
                <Typography variant="h6">Do I need previous experience to volunteer?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Not necessarily! Many opportunities are perfect for beginners and provide training. 
                  Each opportunity listing will indicate the required skill level and any prerequisites.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How much time do I need to commit?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Time commitments vary widely from one-time events to ongoing weekly roles. 
                  You can filter opportunities by time commitment to find what fits your schedule.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Can I volunteer remotely?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes! Many organizations offer remote volunteering opportunities. Look for the "Remote" 
                  filter when browsing opportunities to find virtual roles.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How do I track my volunteer hours?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Your volunteer history is automatically tracked in your profile. You can view all 
                  completed opportunities, total hours served, and download certificates for your records.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>

      {/* Safety Guidelines */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Security fontSize={isDesktop ? "large" : "medium"} />
          Safety Guidelines
        </Typography>
        <Paper 
          elevation={2} 
          sx={{ 
            p: isDesktop ? 4 : 3, 
            bgcolor: "warning.light", 
            borderRadius: 2,
            borderLeft: isDesktop ? '6px solid' : '4px solid',
            borderLeftColor: 'warning.main'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Security color="warning" />
            Your Safety is Our Priority
          </Typography>
          <Typography variant="body2" paragraph>
            While volunteering is generally safe, please keep these guidelines in mind:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><Security color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Verify organization legitimacy" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><Security color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Meet in public places" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><Security color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Share plans with friends/family" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><Security color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Report any concerns" primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Recognition and Benefits */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <EmojiEvents fontSize={isDesktop ? "large" : "medium"} />
          Recognition and Benefits
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
              <VolunteerActivism sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Make an Impact
              </Typography>
              <Typography variant="body2">
                Contribute to meaningful causes and see the positive difference you make in your community.
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
              <School sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Develop Skills
              </Typography>
              <Typography variant="body2">
                Gain valuable experience, learn new skills, and enhance your resume through hands-on service.
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
              <TrendingUp sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Earn Recognition
              </Typography>
              <Typography variant="body2">
                Receive certificates, badges, and acknowledgments for your volunteer contributions.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Support */}
     
    </Container>
  );
};

export default VolunteerGuide;
