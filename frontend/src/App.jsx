import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from "./Pages/Homepage";
import Login from './Pages/login';
import Tickets from "./Pages/Tickets/Tickets";
import AboutUs from './Pages/AboutUs/AboutUs';
import Venues from './Pages/Venues';
import ConferenceVenues from './Pages/venues/Conference';
import WeddingVenues from './Pages/venues/Wedding';
import BirthdayVenues from "./Pages/venues/Birthday";
import ConcertVenues from "./Pages/venues/Concert";
import WorkshopsVenues from "./Pages/venues/Workshops";
import PrivateVenues from "./Pages/venues/Private";
import RetirementVenues from "./Pages/venues/Retirement";
import SeminarsVenues from "./Pages/venues/Seminars";
import GraduationVenues from "./Pages/venues/Graduation";
import BookVenue from './Pages/venues/Booking';
import ApplicationForm from './Pages/ApplicationForm';
import Dashboard from './Pages/dashboard';
import ContactUs from './Pages/ContactUs/ContactUs';
import ReportProblem from './Pages/Reports/ReportProblem';
import FAQ from './Pages/FAQ/FAQ';
import ReportVenue from './Pages/Reports/ReportVenue';
import ForgotPassword from './Pages/ForgotPassword';
import TicketsBooking from './Pages/Tickets/TicketsBooking';
import EventTypes from './Pages/EventTypes';
import AccountSettings from './Pages/AccountSettings';
import ManageBooking from './Pages/ManageBooking';
import ChangePassword from './Pages/ChangePassword';
import { AuthContext } from './context/AuthContext';
import Review from './Pages/Review';
import ResetPassword from './Pages/ResetPassword';
import Payment from './Pages/Tickets/Payment';
import EditProfile from './Pages/EditProfile';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  
  // Get admin status from user context
  const isAdmin = user?.isAdmin || false;

  // Hide Footer on login and forgot-password pages
  const hideFooter =
    location.pathname.startsWith('/login') ||
    location.pathname === '/login/forgot-password';

  return (
    <div className="container">
      <div className="h-navbar">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Homepage isAdmin={isAdmin} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/book" element={<TicketsBooking />} />
        <Route path="/event-types" element={<EventTypes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venues/conference" element={<ConferenceVenues />} />
        <Route path="/venues/wedding" element={<WeddingVenues />} />
        <Route path="/venues/birthday" element={<BirthdayVenues />} />
        <Route path="/venues/concert" element={<ConcertVenues />} />
        <Route path="/venues/workshops" element={<WorkshopsVenues />} />
        <Route path="/venues/private" element={<PrivateVenues />} />
        <Route path="/venues/retirement" element={<RetirementVenues />} />
        <Route path="/venues/seminars" element={<SeminarsVenues />} />
        <Route path="/venues/graduation" element={<GraduationVenues />} />
        <Route path="/book-venue" element={<BookVenue />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/report-problem" element={<ReportProblem />} />
        <Route path="/report-venue" element={<ReportVenue />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/account-settings/change-password" element={<ChangePassword />} />
        <Route path="/account-settings/edit-profile" element={<EditProfile />} />
        <Route path="/manage-booking" element={<ManageBooking />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/review" element={<Review />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
