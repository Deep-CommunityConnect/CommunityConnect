import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

// Layout & Common components (kept synchronous for immediate rendering)
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProtectedRoute from "./ProtectedRoute";

// Pages: Lazy loaded to decrease main bundle size
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Terms = lazy(() => import("../pages/Terms"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Landing = lazy(() => import("../pages/Landing"));
const Login = lazy(() => import("../modules/authentication/pages/Login"));
const Register = lazy(() => import("../modules/authentication/pages/Register"));
const Home = lazy(() => import("../modules/users/pages/Home"));
const Profile = lazy(() => import("../modules/users/pages/Profile"));
const VolunteerHistory = lazy(() => import("../modules/users/pages/VolunteerHistory"));
const OrganizationDetail = lazy(() => import("../modules/users/pages/OrganizationDetail"));
const OpportunityDetail = lazy(() => import("../modules/users/pages/OpportunityDetail"));

// Organizer Pages: Lazy loaded
const OrganizerProfile = lazy(() => import("../modules/organizers/pages/OrganizerProfile"));
const MyOpportunities = lazy(() => import("../modules/organizers/pages/MyOpportunities"));
const PendingApplications = lazy(() => import("../modules/organizers/pages/PendingApplications"));
const CreateOpportunity = lazy(() => import("../modules/organizers/pages/CreateOpportunity"));
const OrganizerHistory = lazy(() => import("../modules/organizers/pages/OrganizerHistory"));
const OrgOpportunityDetail = lazy(() => import("../modules/organizers/pages/OrgOpportunityDetail"));
const UpdateOpportunity = lazy(() => import("../modules/organizers/pages/UpdateOpportunity"));
const VolunteerDetail = lazy(() => import("../modules/organizers/pages/VolunteerDetail"));
const PreviousOpportunity = lazy(() => import("../modules/organizers/pages/PreviousOpportunity"));

// Fallback loader component while routes are downloading
const SuspenseLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </Box>
);

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {!hideLayout && <Navbar />}

      <Box sx={{ flex: 1 }}>{children}</Box>

      {!hideLayout && <Footer />}
    </Box>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Suspense fallback={<SuspenseLoader />}>
          <Routes>
            {/* Authentication */} 
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            
            {/* Public landing page */}
            <Route path="/" element={<Landing />} />

            {/* Volunteer */} 
            <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } /> 
            <Route path="/profile" element={ <ProtectedRoute> <Profile /> </ProtectedRoute> } /> 
            <Route path="/history" element={ <ProtectedRoute> <VolunteerHistory /> </ProtectedRoute> } /> 
            <Route path="/opportunity/:id" element={ <ProtectedRoute> <OpportunityDetail /> </ProtectedRoute> } /> 
            <Route path="/organization/:id" element={ <ProtectedRoute> <OrganizationDetail /> </ProtectedRoute> } />
            
            {/* Organizer */} 
            <Route path="/org/profile" element={ <ProtectedRoute> <OrganizerProfile /> </ProtectedRoute> } /> 
            <Route path="/org/opportunities" element={ <ProtectedRoute> <MyOpportunities /> </ProtectedRoute> } /> 
            <Route path="/org/pending" element={ <ProtectedRoute> <PendingApplications /> </ProtectedRoute> } /> 
            <Route path="/org/history" element={ <ProtectedRoute> <OrganizerHistory /> </ProtectedRoute> } /> 
            <Route path="/org/create" element={ <ProtectedRoute> <CreateOpportunity /> </ProtectedRoute> } /> 
            <Route path="/org/opportunity/:id" element={ <ProtectedRoute> <OrgOpportunityDetail /> </ProtectedRoute> } /> 
            <Route path="/org/opportunity/update/:id" element={ <ProtectedRoute> <UpdateOpportunity /> </ProtectedRoute> } /> 
            <Route path="/org/volunteer/:id" element={ <ProtectedRoute> <VolunteerDetail /> </ProtectedRoute> } />
            <Route path="/org/previous-opportunities" element={ <ProtectedRoute> <PreviousOpportunity /> </ProtectedRoute>} />

            {/* Static Pages */} 
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </BrowserRouter>
  );
};

export default AppRoutes;