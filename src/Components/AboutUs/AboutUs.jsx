import React, { useEffect, useState } from "react";
import "./AboutUs.css"; // Create a CSS file for styling
import Footer from "../Footer/footer";
import img from "../../assets/about-us-web.webp";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // Add a delay before applying the "fade-in" class for animation
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     <Helmet>
        <title>Online Gaushala Donation | Save Cows in India</title>
        <meta name="At Doon Animal Welfare, you can easily donate online for cow's food, shelters, and support our Online Gaushala Donation initiative worldwide. We offer simple donation plans for your convenience." />
      </Helmet>
    <div className="about-us-container container-fluid text-center" style={{
      paddingTop:"120px"
    }}>
      <header>
        <img
          src={img}
          alt="Header"
        />
      </header>

      <section
        className={`about-us-section ${
          animate ? "fade-in" : ""
        } mt-5 container`}
      >
        <p className="fs-4" style={{ textAlign: "justify" }}>
        At the heart of the Doon Animal Welfare Foundation Initiative lies a profound dedication to the well-being and welfare of animals. Our mission is to transform the world into a place where animals are treated with unwavering compassion, respect, and dignity, where their rights are upheld and their lives enriched. Through our tireless efforts, we aim to have a positive influence on both animals and the communities we serve.
We work to safeguard and enrich the lives of animals in need by expertly rescuing them and finding them loving homes. We also ensure that they receive the care and attention they need to be healthy. Our team of skilled professionals is committed to ensuring that every animal in our care receives the highest standard of care, and we are constantly looking for new and creative ways to enhance their welfare.
        </p>
      </section>

      <section className="mission-section mt-5 container">
        <h1 className="fw-bold" style={{ fontSize: "45px" }}>
          The Mission Ahead
        </h1>
        <p className="fs-4" style={{ textAlign: "justify" }}>
          We aim to provide medical assistance and care to un-owned street
          animals in Dehradun who have been affected by illness or injury. Our
          goal is to encourage the community to safeguard and advocate for the
          well-being of all animals through their rescue and recovery. With an
          unwavering commitment to the protection, preservation, and improvement
          of animal lives in Dehradun, Doon Animal Welfare Foundation was established. Our
          core belief is to create a topographically, ecologically, and socially
          conducive environment that enables animals to live fearlessly.
          Initially, our mission was to safeguard at least 100,000 animals, but
          our goals have since expanded. Over the next decade, we aspire to
          safeguard the lives of 500,000 animals. To achieve this, we have set
          the following objectives: To safeguard animals from sickness, abuse,
          and starvation. To provide a safe environment for proper feeding and
          medical care, thus serving animals with dedication.
        </p>
      </section>

      <section className="kindness-section mt-5 container">
        <h1 className="fw-bold p-4" style={{ fontSize: "40px" }}>
          Extend Kindness to Those Who Need It Most
        </h1>
        <p className="fs-4" style={{ textAlign: "justify" }}>
          Our fundamental belief is that every living being, regardless of its
          species, be it dogs, cows, or any other creature, should be shown
          compassion and provided with protection. We are committed to creating
          a world where all animals are treated with dignity, recognizing their
          inherent worth. The widespread overconsumption and exploitation of
          animals have significantly contributed to the climate crisis and have
          led to unimaginable suffering among animals, exacerbating the global
          challenges we currently face. At our core, we rely on rescue as a
          vital strategy to swiftly alleviate the suffering of animals while
          also advocating for the safeguarding of all animals. By sharing the
          inspiring stories of their recovery and healing, our goal is to ignite
          empathy and inspire individuals to take action in order to protect and
          preserve the lives of animals.
        </p>
      </section>

      <section
        className="join-section p-2 container"
        style={{  background: "#FFA500", borderRadius: "30px" }}
      >
        <h1 className="fw-bold p-4" style={{ fontSize: "40px",color:'white' }}>Join Our Efforts</h1>
        <p  className="fs-4" style={{ textAlign: "center",color:'white' }}>Make this world a better place for animals.</p>
        <div className="button-container p-3">
          <button className="orange-button me-2">Donate</button>
          <button className="orange-button me-2">Volunteer</button>
          <button className="orange-button">Learn More</button>
        </div>
      </section>
      <div className="mt-5">
      <Footer/>
      </div>
      
    </div>
    </>
  );
};

export default AboutUs;
