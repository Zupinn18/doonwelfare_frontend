import React, { useEffect, useState } from "react";
import "../../style.css";
import Footer from "../Footer/footer";
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../../assets/A2100617.webp";
import image2 from "../../assets/A2100671.webp";
import image3 from "../../assets/A2100809.webp";
import image4 from "../../assets/A2100885.webp";
import image13 from "../../assets/A2100591.webp";
import image14 from "../../assets/A2100712.webp";
import gal1 from "../../assets/gal1.png"
import gal2 from "../../assets/gal2.png"
import gal3 from "../../assets/gal3.png"
import gal4 from "../../assets/gal4.png"
import gal5 from "../../assets/gal5.png"
import gal6 from "../../assets/gal6.png"
import gal7 from "../../assets/gal7.png"
import gal8 from "../../assets/gal8.png"
import gal9 from "../../assets/gal9.png"
import gal10 from "../../assets/gal10.png"
import gal11 from "../../assets/gal11.png"
import b1img from '../../assets/IMG_2926.png';
import b2img from '../../assets/IMG_2928.png';
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import aw1 from '../../assets/aw1.png';
import aw2 from '../../assets/aw2.png';
import aw3 from '../../assets/aw3.png';
import aw4 from '../../assets/aw4.png';
import aw5 from '../../assets/aw5.png';
import Slider from 'react-slick';
import tm1 from '../../assets/tsm1.png'
import tm2 from '../../assets/tsm2.png'
import tm3 from '../../assets/tsm3.png'
import tm4 from '../../assets/tsm4.png'
import tm5 from '../../assets/tsm5.png'
import tm6 from '../../assets/tsm6.png'
import tm7 from '../../assets/tsm7.png'
import tm8 from '../../assets/tsm8.png'
import tm9 from '../../assets/tsm9.png'
import adopt from '../../assets/adopt.png'
import makedona from '../../assets/make_a_dona.png'
import providefood from '../../assets/provide_food.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cert1 from '../../assets/certi1.png';
import cert2 from '../../assets/certi2.png';
import cert3 from '../../assets/certi3.png';
import cert4 from '../../assets/certi4.png';

const Home = () => {

  const [cardColors,setColor] = useState(["#ac2b08", "#1bb7bc", "#d9d904","#dc3545"]);

  const navigate = useNavigate();

  const testimonials = [
    {
      image: tm1,
    },
    {
      image: tm2,
    },
    {
      image: tm3,
    },
    {
      image: tm4,
    },
    {
      image: tm5,
    },
    {
      image: tm6,
    },
    {
      image: tm7,
    },
    {
      image: tm8,
    },
    {
      image: tm9,
    }
  ];

  const gallery = [
    {
      image: gal1,
    },
    {
      image: gal2,
    },
    {
      image: gal3,
    },
    {
      image: gal4,
    },
    {
      image: gal5,
    },
    {
      image: gal6,
    },
    {
      image: gal7,
    },
    {
      image: gal8,
    },
    {
      image: gal9,
    }
  ];
  const gallery_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2, // Number of slides to show at a time
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const awards = [
    {
      image: aw1,
    },
    {
      image: aw2,
    },
    {
      image: aw3,
    },
    {
      image: aw4,
    },
    {
      image: aw5,
    }
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const certificate = [
    {
      image: cert1,
    },
    {
      image: cert2,
    },
    {
      image: cert3,
    },
    {
      image: cert4,
    }
  ];
  const settings_certificate = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Set up auto sliding after 2 seconds
    const interval = setInterval(() => {
      handleNextSlide();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  };


  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
      interval: 2000, // Set the desired interval in milliseconds
      // Other options if needed
    });
  });
  const textValues = [
    "On site treatment",
    "Adoption Successfuly",
    "Cow's Rescued.",
    "Volunteer.",
  ];
  const containerStyle = {
    backgroundColor: "#F5F5F5",
    padding: "0px", // Light Gray
  };

  const buttonStyle = {
    backgroundColor: "var(--primary)", // Blue
    border: "0px",
    color: "white", // White
    fontWeight: "bold",
    fontSize: "20px",
  };

  const buttonStyle2 = {
    backgroundColor: "var(--primary)", // Blue
    border: "0px",
    padding: "10px 20px",
    color: "white", // White
    fontWeight: "bold",
  };

  const cardStyle = {
    backgroundColor: "#FFFFFF", // White
    border: "1px solid #E0E0E0", // Light Gray
    marginBottom: "20px",
  };

  const textStyle = {
    color: "black",
    fontSize: "16px",
    fontWeight: "500",
  };


  const navigateToAdopt = () => {
    navigate("adopt-animal");
  };
  const navigateToDonate = () => {
    navigate("make-donation");
  };
  const navigateToFood = () => {
    navigate("feed-animal");
  };
  const [animationValues, setAnimationValues] = useState([0, 0, 0, 0]);
 
  useEffect(() => {
    // Define the target values for each card
    const targetValues = [55000, 1000, 4000, 500]; // Adjust to your desired final numbers

    // Initialize an array to store timers
    const timers = [];

    // Loop through the target values and set up timers for each card
    targetValues.forEach((targetValue, index) => {
      const incrementValue = targetValue / 100; // Adjust the increment for smoother animation
      let currentValue = 0;
      const timer = setInterval(() => {
        currentValue += incrementValue;

        // Create a new array with the updated animation values
        setAnimationValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = currentValue;
          return newValues;
        });

        // When the target value is reached, clear the timer
        if (currentValue >= targetValue) {
          clearInterval(timer);
          setAnimationValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = targetValue; // Ensure the final value is exactly the targetValue
            return newValues;
          });
        }
      }, 5); // Adjust the interval for smoother or faster animation

      timers.push(timer);
    });

    // Clear all timers when the component unmounts
    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, []);

  return (
    <>
    <div className="" style={{overflowX:'hidden'}}>
      <div className="container-fluid home-header" style={containerStyle}>
        <div
          id="carouselExampleControls"
          className="carousel slide position-relative slider-container"
          data-bs-ride="carousel"
          data-interval="1000"
          style={{zIndex: "1"
          
        }}
        >
          {/* Carousel Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-overlay"></div>
              <img
                src={b1img}
                className="d-block w-100 dull-image"
                alt="Animal Welfare"
              />
              {/* <div className="carousel-caption text-bright">
                <h2>Help Us Feed the Hungry</h2>
                <p>Your donations ensure no animal goes to bed hungry.</p>
                <Link to="/donate"> 
              
              <a style={{backgroundColor:'var(--primary)',color:'white',fontSize:'24px', fontWeight:"700", borderRadius:"50px"}} className="btn-donate">Donate Now</a>             
            </Link>
              </div> */}
            </div>
            <div className="carousel-item">
              <div className="carousel-overlay"></div>
              <img
                src={b2img}
                className="d-block w-100 dull-image"
                alt="Help Animals"
              />
              {/* <div className="carousel-caption text-bright">
  <div className="caption-content">
    <h2>Support Animal Welfare</h2>
    <p>Together, we make their lives better.</p>
    <Link to="/donate"> 
    <a style={{ backgroundColor: 'var(--primary)', color: 'white', fontSize: '24px', fontWeight: '700', borderRadius: '50px' }} className="btn-donate">Support Now</a>
        </Link>
  </div>
</div> */}

            </div>
            <div className="carousel-item">
              <div className="carousel-overlay"></div>
              <img
                src={image4}
                className="d-block w-100 dull-image"
                alt="Animal Care"
              />
              <div className="carousel-caption text-bright">
                <h2>Join Our Cause</h2>
                <p>Help us care for those who cannot speak.</p>
                <Link to="/donate"> 
                <a style={{backgroundColor:'var(--primary)',color:'white',fontSize:'24px', fontWeight:"700", borderRadius:"50px"}} className="btn-donate">Help Now</a>
                </Link>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div
          className="container "
          data-aos="fade-up"
          style={{  width: "100%" }}
        >
          <p className=" text-center fw-bolder fs-5 mb-5 py-5 " 
          style={{
            borderBottom:"3px solid orange",
          }}>
            <h2 className="text-center fw-bolder fs-1 mb-1 py-5"
            style={{color: "black", }}
          >Support Our Mission to Help Animals</h2>
            <br></br>      
            <span className="fs-5 p-3 text" style={{
            color:"#FF6400",
           
            borderRadius:"40px",
          }}>"गावो ममाग्रतो नित्यं गावः पृष्ठत एव च। गावो मे सर्वतश्चैव गवां मध्ये वसाम्यहम्॥ सुरूपा बहुरूपाश्च विश्वरूपाश्च मातरः। गावो मामुपतिष्ठन्तामिति नित्यं प्रकीर्तयेत्॥"
              </span>  
          </p>

         
        
          <div className="row">
            {/* Card 1 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 d-flex"
              data-aos="fade-right"
            >
              <div className="card" style={cardStyle}>
                <img
                  src={adopt}
                  className="card-img-top"
                  alt="Adopt a Cow"
                />
                <div className="container d-flex row mx-auto text-center" style={{ color: "black" }}>
                  <p className="card-title fs-4 fw-bolder ">Adopt an Animal</p>
                  <p className="card-text mx-0 px-0" style={textStyle}>
                    Give a loving home to a rescued animal. Your support
                    provides shelter and care.
                    
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary btn-block"
                    style={{
                      border: "0px",
                      color: "white", // White
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginBottom:"10px",
                    }}
                    onClick={navigateToAdopt}
                  >
                    Adopt Now
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 d-flex"
              data-aos="fade-up"
            >
              <div className="card" style={cardStyle}>
                <img
                  src={makedona}
                  className="card-img-top"
                  alt="Make a Donation"
                />
                <div className="container d-flex row mx-auto text-center" style={{ color: "black" }}>
                  <p className="card-title fs-4 fw-bolder">Make a Donation</p>
                  <p className="card-text mx-0 px-0" style={textStyle}>
                    Your donation helps provide food, medical care, and shelter
                    for animals in need.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary btn-block"
                    style={{
                    backgroundColor: "red", // Blue
                    border: "0px",
                    color: "white", // White
                    fontWeight: "bold",
                    fontSize: "20px",
                    alignItems:"baseline"   
                  }}
                    onClick={navigateToDonate}
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="col-lg-4 col-md-6 col-sm-12 d-flex"
              data-aos="fade-left"
            >
              <div className="card" style={cardStyle}>
                <img
                  src={providefood}
                  className="card-img-top"
                  alt="Provide Food"
                />
                <div className="container d-flex row mx-auto text-center" style={{ color: "black" }}>
                  <p className="card-title fs-4 fw-bolder">Provide Food</p>
                  <p className="card-text mx-0 px-0" style={textStyle}>
                    Help feed hungry animals in our care. Your support ensures
                    they never go to bed hungry. 
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary btn-block"
                    style={{
                      backgroundColor: "green", // Blue
                      border: "0px",
                      color: "white", // White
                      fontWeight: "bold",
                      fontSize: "20px",
                    
                    }}
                    onClick={navigateToFood}
                  >
                    Feed Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5">
          <p className="fs-1 fw-bolder text-center py-3 mb-5" style={{
            borderBottom:"3px solid orange ",
          }}>
            <h2 className="fs-1 fw-bolder text-center py-2" style={{
            color: "Black",
            marginBottom: "-50px",
          }}>Our Work</h2>
            <br></br>
            <span className="fs-5 p-3 text" style={{
            color:"#FF6400",
            borderRadius:"40px",
          }}>"पशुओं के लिए काम करना, एक कविता की तरह है,
          उनकी बेहद मूज़म आवाज़ों को हम सुनाते हैं,
          उनकी सुन्दरता को हम सजाते हैं,
          पशुओं के साथ हमारा जीवन गीत होता है।"
              </span>  
          </p>
          <div className="row">
            {animationValues.map((value, index) => (
              <div className="col-md-3" key={index}>
                <div className="card-box">
                  <div
                    className="animation-card px-2 py-3 text-center"
                    style={{
                      backgroundColor: cardColors[index],
                      
                      color: "white",
                    }}
                  >
                    <h2
                      className="text-center"
                      style={{ fontWeight: 700, color: "white" }}
                    >
                      <CountUp end={value} duration={5} />+
                    </h2>
                    <h3
                      className="card-text text-center"
                      style={{ fontWeight: 700 , fontSize: "26px" }}
                    >
                      {textValues[index]}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-lg-5 py-2" style={{ color: "black",background:"bisque" ,borderRadius:"22px"}}>
          {/* Importance of Cows Section */}
          <div className="row" style={{ justifyContent: "center",alignItems:"center" }}>
            <div className="col-lg-6 col-md-12 mb-4" data-aos="zoom-in">
              {/* Left side (Image) */}
              <img src={image13} className="img-fluid" alt="Cow Importance" style={{borderRadius:"22px"}}/>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="zoom-in">
              {/* Right side (Text Paragraph) */}
              <div className="mb-4 ">
                <h2
                  className="mb-3 fs-2 fw-bolder ps-3"
                  style={{ color: "var(--primary)" }}
                >
                  Importance of Cows in Society
                </h2>
                <ul>
                  <li>
                    <p className="txt"  style={{ fontSize:"16px" }}>
                      Cows hold a special place in many societies around the
                      world. They are revered for their numerous contributions
                      and importance in our lives. In many cultures, cows
                      symbolize purity, divinity, and prosperity.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p  className="txt" style={{ fontSize:"16px" }}>
                      One of the most significant roles of cows is as a source
                      of milk, a staple in the human diet. Milk provides
                      essential nutrients and is the basis for various dairy
                      products like butter, yogurt, and cheese.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p  className="txt" style={{ fontSize:"16px" }}>
                      Cows also play a crucial role in agriculture, providing
                      draught power for farming. Their dung serves as valuable
                      organic fertilizer, promoting soil health and crop
                      productivity.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p className="txt"  style={{ fontSize:"16px" }}>
                      Additionally, cows are a source of leather, which is used
                      for clothing, accessories, and various industrial
                      purposes. They are revered in some religions and are often
                      protected and cared for in special shelters.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p  className="txt" style={{ fontSize:"16px" }}>
                      In summary, the importance of cows in society extends
                      beyond their economic value. They are cultural symbols,
                      providers of essential resources, and respected members of
                      our communities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="container mt-2 px-lg-5 py-2" style={{ color: "black",background:"bisque" ,borderRadius:"22px"}}>
          {/* Importance of Cows Section */}
          <div className="row" style={{ justifyContent: "center",alignItems:"center" }}>
            <div className="col-lg-6 col-md-12 mb-4" data-aos="zoom-in">
              {/* Left side (Image) */}
              <img src={image14} className="img-fluid" alt="Cow Importance" style={{borderRadius:"22px"}}/>
            </div>
            <div className="col-lg-6 col-md-12" data-aos="zoom-in">
              {/* Right side (Text Paragraph) */}
              <div className="mb-4 ">
                <h2
                  className="mb-3 fs-2 fw-bolder ps-3"
                  style={{ color: "var(--primary)" }}
                >
                  Cow Donation In India - Cows in Need</h2>
                <p>In India, many people are helping stray cows through Cow Donation. Cows are important in our culture, and these efforts show kindness and care. People give support to shelters and places that take care of stray cows. This helps the cows stay safe and healthy. The idea behind cow donation is to follow our cultural values of being kind and doing what is right. By helping these cows, people are connecting tradition with being compassionate. It is like a symbol of goodness, where individuals bring together our cultural beliefs and a practical way to help animals. This act of cow donation is creating a tradition of care that will last for a long time.</p>
              <span style={{color: "black"}}> <h3> Help and Save Gaumata, Donate to Cows in Need </h3></span>
              </div>
            </div>
          </div>
        </div>
        
        
          <div className="container mt-3 gallery-section" style={{ overflow: "hidden"}}>
          <div className="row">
            <div className="col-12 pt-3">
              <h2
                className="text-left mb-3"
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  
                }}
              >
                <span style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  padding: "10px",
                  color: "Black",
                  borderRadius: "10px",
                  
                }}>Image gallery</span>
              </h2>
            </div>


            <div className="col-12">
              <Slider {...gallery_settings} style={{ maxWidth: "100% !important" }}>
               {/*  {certificates.map((certificate, index) => (
                  <div key={index} className="certificate-card-wrapper text-center">
                    <div
                      className="certificate-card"
                      style={{ backgroundImage: `url(${certificate.image})`,height: "400px",width:'400px', backgroundSize: "cover", backgroundPosition: "center" }}
                    ></div>
                  </div> 
                ))} */}
                
                <div>
                  <h3><img src={gal1} alt="image1"/></h3>
                </div>
                <div>
                  <h3><img src={gal2} alt="image2"/></h3>
                </div>
                <div>
                  <h3><img src={gal3} alt="image3"/></h3>
                </div>
                <div>
                  <h3><img src={gal4} alt="image4"/></h3>
                </div>
                <div>
                  <h3><img src={gal5} alt="image4"/></h3>
                </div>
                

              </Slider>


            
            </div>
          </div>
          </div>
        {/* <div class="container mt-5">
  <h2 class="text-dark fs-1" style={{ borderBottom: "2px solid black", fontWeight: "700" }}>
    IMAGE GALLERY
  </h2>
  <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel" >
    <ol class="carousel-indicators">
      <li data-bs-target="#imageCarousel" data-bs-slide-to="0" ></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="1" ></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="2"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="3"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="4"class="active"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="5"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="6"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="7"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="8"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="9"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="10"></li>
      <li data-bs-target="#imageCarousel" data-bs-slide-to="11"></li>
    </ol>
                    
    <div class="carousel-inner">
      <div class="carousel-item  d-flex align-items-center">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src={gal1} class="w-100" alt="gal1" />
          </div>
          <div class="col-md-6">
            <img src={gal2} class="w-100" alt="Image 2" />
          </div>
        </div>
      </div>
      <div class="carousel-item d-flex align-items-center">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src={gal3} class="w-100" alt="Image 3" />
          </div>
          <div class="col-md-6">
            <img src={gal4} class="w-100" alt="Image 4" />
          </div>
        </div>
      </div>
      <div class="carousel-item active d-flex align-items-center">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src={gal5} class="w-100" alt="Image 3" />
          </div>
          <div class="col-md-6">
            <img src={gal6} class="w-100" alt="Image 4" />
          </div>
        </div>
      </div>
      <div class="carousel-item d-flex align-items-center">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src={gal7} class="w-100" alt="Image 3" />
          </div>
          <div class="col-md-6">
            <img src={gal8} class="w-100" alt="Image 4" />
          </div>
        </div>
      </div>
      <div class="carousel-item d-flex align-items-center">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src={gal9} class="w-100" alt="Image 3" />
          </div>
          <div class="col-md-6">
            <img src={gal10} class="w-100" alt="Image 4" />
          </div>
        </div>
      </div>
      <div class="carousel-item d-flex align-items-center">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <img src={gal11} class="w-100" alt="Image 3" />
          </div>
          <div class="col-md-6">
            <img src={gal3} class="w-100" alt="Image 4" />
          </div>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#imageCarousel" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#imageCarousel" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</div> */}



        {/* Call to Action */}
        
      </div>

      {/* <div className="testimonial-section mt-5">
        <div className="container">
          <div className="row">
          <div className="col-12">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Testimonials
          </h2>
          </div> 
          <div className="col-12">
          <div className="testimonial-container">
           
           
          </div>         
          </div>
          
        </div>
      </div>
      </div> */}

      <div className="container mt-5" style={{background:"bisque"}}>
          {/* About Section */}
          <div className="py-2">
            <p className=" fw-bold text-center" data-aos="zoom-in"
            style={{
              fontSize:"28px",
              color:"red",
              borderBottom:"3px dotted black",
              
            }}>
              About the Doon Animal Welfare Foundation
            </p>

            <p className="fs-6 px-lg-5 px-2 pb-lg-5"  style={{textAlign:'justify',color:'black', borderRadius:"12px"}} data-aos="fade">
              Founded in the year 2017, the Doon Animal Welfare Foundation stands as
              a beacon of hope for animals in India. As a registered
              non-governmental organization (NGO), our unwavering commitment
              lies in the welfare of all creatures, great and small. Our
              overarching mission encompasses not merely a casual glance at
              their plight but rather a dedicated, comprehensive approach to
              their well-being. Our journey began with the realization that
              countless animals faced unimaginable challenges and adversities in
              their daily lives. Our hearts went out to these voiceless beings,
              and we embarked on a mission that is driven by compassion and
              fueled by a deep-seated empathy for the most vulnerable members of
              our society – the animals. Our primary objective is to provide
              immediate assistance to animals in distress. We firmly believe
              that no living being should have to suffer needlessly, and thus,
              we respond promptly to their calls for help. Whether it's a
              wounded stray dog, a malnourished cow, or an abandoned kitten, our
              dedicated team of volunteers is always ready to provide comfort,
              medical care, and shelter to these animals in their hour of need.
              But our commitment doesn't stop there. We understand that the
              journey towards a better life for these animals is an ongoing
              process. Therefore, we offer continuous care and protection to
              ensure that they not only survive but thrive. We strive to create
              an environment where abandoned and homeless animals can rediscover
              happiness, health, and security. Our shelters provide a safe haven
              for these creatures, protecting them from harm and creating a
              sanctuary where they can live fearlessly. Our vision for the
              future is resolute and ambitious. Over the next ten years, we
              aspire to extend our protective umbrella to encompass 500,000
              street animals. This is not just a numerical goal; it is a
              testament to our unwavering commitment to making a lasting,
              transformative impact on the lives of these animals. We envision a
              world where every street animal is free from suffering, where
              their existence is marked by love, care, and dignity. In essence,
              the Doon Animal Welfare Foundation is more than an organization; it is
              a heartfelt promise to the animals that they will never walk alone
              in their journey through life. It is a pledge to make the world a
              better place for them, where compassion and empathy reign supreme.
              Together, hand in paw, with the support of our compassionate
              community, we are determined to write a brighter and more humane
              chapter for the animals we hold so dear.
            </p>
          </div>

          {/* Animal Care Section */}
          <div className="container">

          <div className="row mt-5 pt-5" data-aos="zoom-out">
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card bg-dark text-white">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/snuAvoQRN_w"
                  frameBorder="0"
                  allowFullScreen
                  title="Doon Animal Welfare Trust Video"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card bg-light">
                <div
                  className="card-body"
                  style={{  color: "black" }}
                >
                  <p className="lead text-justify" style={textStyle}>
                    Doon Animal Welfare Trust is a dedicated non-governmental
                    organization (NGO) committed to the health and well-being of
                    animals. Founded in 2017, our mission is to provide
                    immediate assistance to animals in distress and ensure their
                    ongoing care and protection.
                  </p>
                  <p className="lead text-justify" style={textStyle}>
                    We believe in creating a safe and nurturing environment for
                    all animals, including abandoned, homeless, and street
                    animals. Our goal is to protect and improve the lives of
                    these vulnerable beings, allowing them to live without fear
                    and suffering.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
                      
          </div> 

        </div>

        
          <div className="container mt-3 certificate-section" style={{ background: "white", overflow: "hidden"}}>
          <div className="row">
            <div className="col-12 pt-3">
              <h2
                className="text-left mb-3"
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                <span style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  padding: "10px",
                  color: "#ff6a00",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
                }}>CERTIFICATES</span>
              </h2>
            </div>
            <div className="col-12">
              <Slider {...settings_certificate} style={{ maxWidth: "100% !important" }}>
               {/*  {certificates.map((certificate, index) => (
                  <div key={index} className="certificate-card-wrapper text-center">
                    <div
                      className="certificate-card"
                      style={{ backgroundImage: `url(${certificate.image})`,height: "400px",width:'400px', backgroundSize: "cover", backgroundPosition: "center" }}
                    ></div>
                  </div> 
                ))} */}
                
                <div>
                  <h3><img src={cert1} alt="image1"/></h3>
                </div>
                <div>
                  <h3><img src={cert2} alt="image2"/></h3>
                </div>
                <div>
                  <h3><img src={cert3} alt="image3"/></h3>
                </div>
                <div>
                  <h3><img src={cert4} alt="image3"/></h3>
                </div>
                

              </Slider>
            </div>
          </div>
          </div>
          <div className="container mt-3 awards-section" style={{ background: "white", overflow: "hidden"}}>
          <div className="row">
            <div className="col-12 pt-3">
              <h2
                className="text-left mb-3"
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                <span style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  padding: "10px",
                  color: "#ff6a00",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
                }}>AWARDS</span>
              </h2>
            </div>
            <div className="col-12">
              <Slider {...settings} style={{ maxWidth: "100% !important" }}>
               {/*  {certificates.map((certificate, index) => (
                  <div key={index} className="certificate-card-wrapper text-center">
                    <div
                      className="certificate-card"
                      style={{ backgroundImage: `url(${certificate.image})`,height: "400px",width:'400px', backgroundSize: "cover", backgroundPosition: "center" }}
                    ></div>
                  </div> 
                ))} */}
                
                <div>
                  <h3><img src={aw1} alt="image1"/></h3>
                </div>
                <div>
                  <h3><img src={aw2} alt="image2"/></h3>
                </div>
                <div>
                  <h3><img src={aw3} alt="image3"/></h3>
                </div>
                <div>
                  <h3><img src={aw4} alt="image4"/></h3>
                </div>
                <div>
                  <h3><img src={aw5} alt="image4"/></h3>
                </div>
                

              </Slider>


            
            </div>
          </div>
          </div>

          <div className="test container mt-3 testimonial-section" style={{background: "white",overflow: "hidden"}}>
          <div className="row">
            <div className="col-12 pt-3">
              <h2
                className="text-left mb-3"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adding shadow here
                  color: "orange", // Text color
                }}
              >
                <span style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  padding: "10px",
                  color: "#ff6a00",
                }}>TESTIMONIALS</span>
              </h2>
            </div>
            <div className="col-12">
              <Slider {...settings} >
               {/*  {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card-wrapper text-center">
                    <div
                      className="testimonial-card"
                      style={{ backgroundImage: `url(${testimonial.image})`,height: "400px",width:'400px', backgroundSize: "cover", backgroundPosition: "center" }}
                    ></div>
                  </div> 
                ))} */}
                
                <div>
                  <h3><img src={tm1} alt="image1"/></h3>
                </div>
                <div>
                  <h3><img src={tm2} alt="image2"/></h3>
                </div>
                <div>
                  <h3><img src={tm3} alt="image3"/></h3>
                </div>
                <div>
                  <h3><img src={tm4} alt="image4"/></h3>
                </div>
                <div>
                  <h3><img src={tm5} alt="image5"/></h3>
                </div>
                <div>
                  <h3><img src={tm6} alt="image6"/></h3>
                </div>
                <div>
                  <h3><img src={tm7} alt="image7"/></h3>
                </div>
                <div>
                  <h3><img src={tm8} alt="image8"/></h3>
                </div>
                <div>
                  <h3><img src={tm9} alt="image8"/></h3>
                </div>

              </Slider>
            </div>
          </div>
          </div>
        <div className="container-fluid p-5  mt-5 text-center" style={{color:'var(--primary)'}}>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <p className="fs-3 fw-bold mb-4 text-dark" >
                Together, we can make this world a safe haven for animals!
              </p>
              <p className="lead fs-5 text-black fw-normal w-70 mx-auto" >
                Animals are living beings just like us. They too need care and
                protection, for they can feel pain just like us. So, come
                forward to support the voiceless and uphold their rightful
                welfare.
              </p>
              <div className="mt-5 d-flex justify-content-center" >
                <a
                  href="#"
                  className="btn  px-3 py-2 mx-3"
                  style={buttonStyle2}
                >
                  Support Us
                </a>
                <a
                  href="#"
                  className="btn px-3 py-2 mx-3"
                  style={buttonStyle2}
                >
                  Give Feedback
                </a>

                <a
                  href="#"
                  className="btn  px-3 py-2 mx-3"
                  style={buttonStyle2}
                >
                  Conduct a Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
    </>
  );
};

export default Home;
