import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import health from "../../assets/A2100617.webp"
import image from "../../assets/A2100685.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Vision = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sectionStyle = {
    padding: "20px", // Adjust the padding between sections
    display: "flex",
    alignItems: "center", // Vertically center the content
  };

  const imgStyle = {
    height: "400px", // Adjust the image height
    width: "100%", // Make images fill the width of the container
    objectFit: "cover", // Maintain aspect ratio and cover the container
  };

  return (
    <>
     <Helmet>
        <title>Donate to Gaushala - Save 4000+ Cows at Krishna Dham Gaushala</title>
        <meta name="description" content="Our Gaushala rescue and provide shelter to cows, giving healthcare facilities. Donate to Gaushala for a better life to animals who cannot Speak." />
      </Helmet>
    <div className="vision-container container-fluid text-center " style={{backgroundColor:"#f5e5d4",   paddingTop:"120px"}} >
      <header>
        <img
          src="https://doonanimalwelfare.org/assets/images/gallery/Last-banner.webp"
          alt="Header"
        />
      </header>

      <section
        className={`vision-section ${animate ? "fade-in" : ""} container`}
        style={sectionStyle}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://doonanimalwelfare.org/assets/images/gallery/site-visit.webp"
              alt="Rescue and Rehabilitation"
              className="img-fluid"
              style={imgStyle}
            />
          </div>
          <div className="col-md-6 text-left">
            <h2 className="fw-bold">Rescue and Rehabilitation</h2>
            <p className="fs-4">
              We rescue and provide shelter to animals in distress, offering
              them a safe haven where they can heal, recover, and regain their
              strength. Our dedicated team of caregivers ensures that each
              animal receives the care and attention it needs.
            </p>
          </div>
        </div>
      </section>

      {/* Repeat the pattern for the remaining sections */}
      <section
        className={`vision-section ${animate ? "fade-in" : ""} container`}
        style={sectionStyle}
      >
        <div className="row">
          <div className="col-md-6 text-right">
            <h2 className="fw-bold">Animal Health Care</h2>
            <p className="fs-4">
            We offer medical care, vaccinations, and regular check-ups to the animals under our care. Our veterinary services aim to alleviate suffering, prevent diseases, and promote the overall health of animals.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699439256/zjum5wfkkqrtqxrl5ogp.webp"
              alt="Education and Awareness"
              className="img-fluid"
              style={imgStyle}
            />
          </div>
        </div>
      </section>

      {/* Adoption Programs */}
      <section
        className={`vision-section ${animate ? "fade-in" : ""} container`}
        style={sectionStyle}
      >
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699439645/umukulqrpgyvvb4x37ct.webp"
              alt="Adoption Programs"
              className="img-fluid"
              style={imgStyle}
            />
          </div>
          <div className="col-md-6 text-left">
            <h2 className="fw-bold">Adoption Programs</h2>
            <p className="fs-4">
              Through our adoption initiatives, we strive to find loving and
              forever homes for rescued animals. We believe that every animal
              deserves a second chance at happiness and a loving family to call
              its own.
            </p>
          </div>
        </div>
      </section>

      {/* Education and Awareness */}
      <section
        className={`vision-section ${animate ? "fade-in" : ""} container`}
        style={sectionStyle}
      >
        <div className="row">
          <div className="col-md-6 text-right">
            <h2 className="fw-bold">Education and Awareness</h2>
            <p className="fs-4">
              We conduct educational programs, workshops, and awareness campaigns
              to promote responsible pet ownership, animal welfare, and the importance
              of treating animals with kindness and empathy.
            </p>
            <Link to="/education-and-awareness-detail">View Our Education Program</Link>
          </div>
          <div className="col-md-6">
            <img
              src="https://doonanimalwelfare.org/assets/images/gallery/hands-for-humanity.jpg"
              alt="Education and Awareness"
              className="img-fluid"
              style={imgStyle}
            />
          </div>
        </div>
      </section>

      {/* Advocacy and Policy Reform */}
      <section
        className={`vision-section ${animate ? "fade-in" : ""} container`}
        style={sectionStyle}
      >
        <div className="row ">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/gradient-world-mental-health-day-background_23-2149604961.jpg?w=740&t=st=1695060009~exp=1695060609~hmac=eb4bc4d8015732297e74e6d96672a0cfe9c642aac90fbbe6ed7ec46af9c72548"
              alt="Advocacy and Policy Reform"
              className="img-fluid"
              style={imgStyle}
            />
          </div>
          <div className="col-md-6 text-left">
            <h2 className="fw-bold">Advocacy and Policy Reform</h2>
            <p className="fs-4">
              We work towards influencing policies and advocating for the rights
              of animals at local, regional, and national levels. We believe that
              strong animal protection laws are essential for ensuring the welfare
              of animals.
            </p>
          </div>
        </div>
      </section>

      <div className="pt-5"> {/* Add padding before footer */}
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Vision;
