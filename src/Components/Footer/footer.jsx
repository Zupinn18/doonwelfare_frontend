import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/doon-logo.png";
import paytm from "../../assets/new_QrCode.jpeg"
import "./footer.css";

const linkStyle = {
  fontSize: "20px",
  textDecoration: "none",
  color: "white",
};

function Footer() {
  return (
    <footer className="text-white pt-3 text-center" style={{ position: 'relative', zIndex: 2 }}>
      <div className="overlay"></div>
      <div className="container py-4">
        <div className="row gx-2"> {/* Added the gx-2 class to reduce the horizontal gap */}
          <div className="col-md-3">
            {/* <img
              src={logo}
              alt="Logo"
              className="img-fluid footer-logo"
            /> */}
            <p className="fw-bold mt-3">
              DOON ANIMAL WELFARE(SHRI KRISHNA DHAM GAUSHALA) SHIMLA BYE PASS ROAD,<br /> GRAM HASANPUR, <br /> NEAR SHIVALIK COLLAGE DEHRADUN  248011 <br /> Uttrakhand, India
            </p>
          </div>
          <div className="col-md-3 fw-bold">
            <h5 className="fw-bold">Contacts</h5><br />
            <p className="fw-bold">
              +91-7900283333, 7900273333
              <br />
              doonanimalwelfare@gmail.com
            </p>
            <br></br>
            <h5 className="fw-bold">Social Media</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/doonanimalwelfare?mibextid=ZbWKwL" style={linkStyle}><i className="fa fa-facebook p-2 fw-bold"></i></a>
              <a href="https://instagram.com/doon_animalwelfare?igshid=OGQ5ZDc2ODk2ZA==" style={linkStyle}><i className="fa fa-instagram p-2 fw-bold"></i></a>
              <a href="https://youtube.com/@doonanimalwelfare4452?si=7PJZJZIDRS6CWdUv" style={linkStyle}><i className="fa fa-youtube p-2 fw-bold"></i></a>
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled fw-bold">
              <li>
                <Link to="/about-us" style={linkStyle}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-team" style={linkStyle}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/csr" style={linkStyle}>
                  CSR
                </Link>
              </li>
              <li>
                <Link to="/contact" style={linkStyle}>
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://youtube.com/@doonanimalwelfare4452?si=7PJZJZIDRS6CWdUv" style={linkStyle}>
                  Video
                </a>
              </li>
              <li>
                <Link to="/refund-policy" style={linkStyle}>
                  Refund policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={linkStyle}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-condition" style={linkStyle}>
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link to="/webstories" style={linkStyle}>
                  web stories
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 fw-bold">
            <h5 className="fw-bold">BANK ACCOUNT</h5>
            <p className="fw-bold">IDFC FIRST BANK<br />
              DOON ANIMAL WELFARE FOUNDATION<br />
              ACCOUNT NUMBER -10063703675<br />
              IFSC CODE IDFB0021231</p>
              {/* <img
              src={paytm}
              alt="Hi How Are You"
              className="img-fluid"
              style={{ maxWidth: "50%", height: "auto" }}
            /> */}
          </div>
        </div>
        <div className="row gx-2"> {/* Added the gx-2 class */}
          <div className="col-md-3 fw-bold"></div>
          <div className="col-md-3 fw-bold">
            {/* ... */}
          </div>
          <div className="col-md-3 fw-bold"></div>
        </div>
      </div>
      <div
        className="container-fluid text-center py-2 fw-bold"
      >
        <p>
          &copy; {new Date().getFullYear()} Doon Animal Welfare Foundation. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
