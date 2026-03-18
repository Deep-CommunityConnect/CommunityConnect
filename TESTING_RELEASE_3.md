# CommunityConnect - Testing Release 3 Notes

## Overview
Release 3 introduces a major set of new features spanning across both the frontend and backend. The primary focus of this release is the introduction of a new Blogging engine, comprehensive User/Organization Guides, an Opportunity Feedback system, and crucial UI/UX overhauls to enhance the entire user experience.

## ✨ New Features & Enhancements

### 📝 Blogging Engine
* **Blog APIs**: Added comprehensive REST APIs for organizations and users to create, manage, and read blog posts.
* **Blog Editor Component**: Integrated a robust blog editor component allowing organizers to create and edit content seamlessly.
* **Blog Listing Pages**: Implemented full blog listing and detail pages with live API integration so volunteers can consume organizational updates, announcements, and stories.

### 🤝 Engagement & Feedback
* **Opportunity Feedback Feature**: Volunteers can now provide direct feedback and comments on opportunities they've engaged with.
* **Deactivate Opportunities**: Organizers now have the flexibility to explicitly deactivate an opportunity when it's closed, rather than being forced to permanently delete the record.
* **Application Tracing**: Included the 'applied at' timestamp directly within the organization's applicant view for improved pipeline tracking.

### 📚 Content & Resources
* **Guides & Resources**: Added dedicated resource pages, including official, tailored **Organization Guides** and **Volunteer Guides** to assist new users in onboarding to CommunityConnect.
* **FAQ Redesign**: Executed a comprehensive design update for the FAQ page to ensure information is accessible and visually appealing.

### 🛠 UI & Core System Improvements
* **Navbar Redesign**: Complete visual structural overhaul of the navigation bar for both desktop and mobile layouts, introducing nested "Resources" menus and a modernized aesthetic.
* **Live API Transition**: The frontend configuration was securely updated to replace the local API URL with our live production URL.
* **React Strict Mode & Routing Fixes**: Hardened frontend stability by reintegrating Strict Mode and patching edge cases in the Private/Protected Routing loops.
* **Organization View Fixes**: Resolved pagination constraints and validation bugs occurring within the organization list views.
* **Repository Maintenance**: Cleaned up the repository by eliminating stagnant media directories, updating the default JSON data collections, and refreshing `requirements.txt` alongside `.gitignore`.

## 🧪 Testing Guidance
* **End-to-End Blog Flow**: Log in as an Organizer to create a new blog post. Subsequently, log in as a Volunteer to verify you can comfortably read and navigate the newly published blog post via the blog listing page.
* **Feedback Mechanism**: Log in as a Volunteer, navigate to a past opportunity, and submit feedback. Verify this behaves correctly and securely persists in the backend. 
* **Guide Navigation**: Use the freshly redesigned Navbar to navigate to the "Organization Guide" and "Volunteer Guide" respectively, verifying they render the appropriate content based on user roles contexts. 
* **API Validation**: Verify that the application correctly functions against the newly mapped live API server without CORS or unresolved promise errors.
