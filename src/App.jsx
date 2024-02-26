import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Homepage/Home";
import "./style.css";
import Cart from "./Components/Cart/Cart";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurVision from "./Components/Our Vision/OurVision";
import Education from "./Components/Education/Education";
import AdoptAnimal from "./Components/AdoptAnimal/AdoptAnimal";
import MakeADonation from "./Components/MakeADonation/MakeADonation";
import FeedAnimal from "./Components/FeedAnimal/FeedAnimal";
import Campaign from "./Components/Campaign/Campaign";
import LandingPage from "./Components/LandingPage/LandingPage";
import Admin from "./Components/Admin/admin";
import Login from "./Components/Login/Login";
import Privacy from "./Components/Privacy/PrivacyPolicy";
import Term from "./Components/T&C/Term";
import RC from "./Components/R&C/RC";
import Hands from "./Components/HandsForHumanity/Hands";
import Contact from "./Components/ContactUs/Contact";
import Ourteam from "./Components/OurTeam/Ourteam";
import WhatsAppIcon from "./assets/whatsapp.webp";
import youtube from "./assets/youtube.png"
import InstagramIcon from "./assets/instagram.png"
import FacebookIcon from "./assets/facebook.png"
import PhoneIcon from "./assets/telephone.webp";
import CSR from "./Components/CSR/CSR";
import Blogs from "./Components/Blogs/Blogs";
import AllBlogs from "./Components/Blog/AllBlog";
import CampaignDetail from "./Components/CampaignDetail/CampaignDetail";
import ThankYou from './Components/Cart/ThankYou';
// import Sorry from './Components/Cart/Sorry_page';
import SorryPage from "./Components/Cart/SorryPage";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const renderNavbar = () => {
    const currentPathname = location.pathname;

    if (
      currentPathname === "/login" ||
      currentPathname === "/" ||
      currentPathname === "/cart" ||
      currentPathname === "/about-us" ||
      currentPathname === "/our-vision" ||
      currentPathname === "/donate" ||
      currentPathname === "/education-and-awareness-detail" ||
      currentPathname === "/adopt-animal" ||
      currentPathname === "/make-donation" ||
      currentPathname === "/feed-animal" ||
      currentPathname === "/privacy" ||
      currentPathname === "/refund-policy" ||
      currentPathname === "/terms-and-condition" ||
      currentPathname === "/helping-hand" ||
      currentPathname === "/contact" ||
      currentPathname === "/our-team" ||
      currentPathname === "/csr" ||
      currentPathname === "/blogs" || 
      currentPathname === "/campaign/:id"|| 
      currentPathname === "/thank-you" || 
      currentPathname === "/sorry"
    ) {
      return <Navbar />;
    } else {
      return null;
    }
  };

  return (
    <div>
    {renderNavbar()}
    {/* Floating Phone Icon */}
    <a href="tel:7900283333" className="floating-icon phone-icon ph " 
      style={{background:"#2196f3", border:"1px solid #2196f3", borderRadius:"0px 0px 10px 0px"}}>
      <img src={PhoneIcon} alt="Call Us" />
      </a>
      <div className="phone-name" >Phone
      <span className="triangle-left-ph" ></span>
        </div>

    {/* Floating WhatsApp Icon */}
    <a href="https://wa.me/7900283333" className="floating-icon whatsapp-icon wa " 
    style={{
        backgroundColor:"#4cb051",
      }} 
    >
      <img src={WhatsAppIcon}alt="WhatsApp"  />
    </a>
    <div className="whatsapp-name" >WhatsApp
    <span className="triangle-left-wa" ></span>
    </div>

    <a href="https://www.instagram.com/doon_animalwelfare?igsh=MW9lamd0eDg5aHN5Mg==" className="floating-icon instagram-icon ig " style={{
        backgroundColor:"rgba(217,40,144,255)",
      }} >
  <img src={InstagramIcon} alt="Instagram" />
    </a>
    <div className="instagram-name" >Instagram
    <span className="triangle-left-ig" ></span>
    </div>

    
    <a href="https://youtube.com/@doonanimalwelfare4452?si=GLWErr5sEX8bab5u" className="floating-icon youtube-icon yt "
    style={{
        backgroundColor:"red",
      }}
     >
      <img src={youtube} alt="YouTube" />
    </a>
    <div className="Youtube-name" >Youtube
    <span className="triangle-left-yt" ></span>
    </div>
    
      <a href="https://www.facebook.com/doonanimalwelfare?mibextid=ZbWKwL" className="floating-icon facebook-icon" 
      style={{
        backgroundColor:"#2596be",
        borderRadius:"0px 10px 0px 0px",
      }} >
        <img src={FacebookIcon} alt="Facebook" />
      </a>
      <div className="facebook-name" >Facebook
      <span className="triangle-left" ></span>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/donate" element={<Cart />} />
        <Route path="/education-and-awareness-detail" element={<Education />} />
        <Route path="/adopt-animal" element={<AdoptAnimal />} />
        <Route path="/make-donation" element={<MakeADonation />} />
        <Route path="/feed-animal" element={<FeedAnimal />} />
        {/* <Route path="/campaign/:id" element={<Campaign />} /> */}
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-and-condition" element={<Term />} />
        <Route path="/refund-policy" element={<RC />} />
        <Route path="/helping-hand" element={<Hands/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/our-team" element={<Ourteam/>} />
        <Route path="/csr" element={<CSR/>} />
        <Route path="/blogs/:id" element={<Blogs/>} />
        <Route path="/blogs" element={<AllBlogs/>} />
        <Route path="/campaign/:id" element={<CampaignDetail/> } />
        <Route path="/thank-you" element={<ThankYou/>} />
        <Route path="/sorry" element={<SorryPage/>} />

      </Routes>
    </div>
  );
}

export default App;
