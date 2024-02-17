import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import "../../style.css";
import Footer from "../Footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { Modal } from "react-bootstrap";
import doonlogo from "../../assets/doonlogo.webp";
import paytm from "../../assets/new_QrCode.jpeg"
import image from '../../assets/landing_page_img2.png';
import image2 from '../../assets/IMG_2928.png';
import news1 from '../../assets/news_11zon.webp';
import tm1 from '../../assets/tsm1.png'
import tm2 from '../../assets/tsm2.png'
import tm3 from '../../assets/tsm3.png'
import tm4 from '../../assets/tsm4.png'
import tm5 from '../../assets/tsm5.png'
import tm6 from '../../assets/tsm6.png'
import tm7 from '../../assets/tsm7.png'
import tm8 from '../../assets/tsm8.png'
import tm9 from '../../assets/tsm9.png'
import cert1 from '../../assets/certi1.png';
import cert2 from '../../assets/certi2.png';
import cert3 from '../../assets/certi3.png';
import cert4 from '../../assets/certi4.png';
import ns1 from '../../assets/ns1.png'
import ns2 from '../../assets/ns2.png'
import ns3 from '../../assets/ns3.png'
import ns4 from '../../assets/ns4.png'
import ns5 from '../../assets/ns5.png'
import ns6 from '../../assets/ns6.png'
import ns7 from '../../assets/ns7.png'
import ns8 from '../../assets/ns8.png'
import ns9 from '../../assets/ns9.png'
import ns10 from '../../assets/ns10.png'
import aw1 from '../../assets/aw1.png';
import aw2 from '../../assets/aw2.png';
import aw3 from '../../assets/aw3.png';
import aw4 from '../../assets/aw4.png';
import aw5 from '../../assets/aw5.png';
import lp1 from '../../assets/lp1.png'
import lp2 from '../../assets/lp2.png'
import lp3 from '../../assets/lp3.png'
import "./Langing.css";
import "./Campaign.css";
import userImg from '../../assets/userImg.png';
// Import images and other assets as needed

const LandingPage = () => {
  
  const [list, setList] = useState(0);
  const [buttonText, setButtonText] = useState("Add Item to Donate");

  const resetAmount = () => {
    setList(0);
    setButtonText("Add Item to Donate");
  };

  const news = [
    {
      image: ns1,
    },
    {
      image: ns2,
    },
    {
      image: ns3,
    },
    {
      image: ns4,
    },
    {
      image: ns5,
    },
    {
      image: ns6,
    },
    {
      image: ns7,
    },
    {
      image: ns8,
    },
    {
      image: ns9,
    },
    {
      image: ns10,
    }
  ];
  const news_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
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
    autoplay: true,
    autoplaySpeed: 2500,
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
  const { id } = useParams();
  const [animationValues, setAnimationValues] = useState([0, 0, 0, 0]);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const cardBackgroundColors = ["#FFFFFF"];
  const targetgroundColors = ["#AC2B08", "#1BB7BC", "#d9d904", "#DC3545"];
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [campaignQuantities, setCampaignQuantities] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [customAmounts, setCustomAmounts] = useState({});
  const [showQuantityInput, setShowQuantityInput] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [recentDonors, setRecentDonors] = useState([]);


  // const buttonText = list === 0 ? "Add Item to Donate" : "Donate";
  // const [quickLinksCampaigns, setQuickLinksCampaigns] = useState([]);

  // const navigateAndReload = (campaignId) => {
  //   navigate(`/campaign/${campaignId}`);
  //   window.location.reload(); // This will reload the page
  // };
  // const handleButtonClick = () => {
  //   if (buttonText === "Donate") {
  //     alert(`Donation Amount: ${list}`);
  //     localStorage.setItem("amount", list);
  //     navigate("/cart");
  //   } else {
  //     const itemsSection = document.getElementById("items");
  //     if (itemsSection) {
  //       itemsSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // };
  // ...
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };
  const navigate = useNavigate();
  const textValues = [
    "On site treatment",
    "Adoption Successfuly",
    "Cow's Rescued.",
    "Volunteer.",
  ];

  const recentActivitiesImages = [

    // Add more image URLs as needed
  ];

  const [featuredCampaigns, setfeaturedCampaigns] = useState([]);

  // This useEffect runs once when the component is mounted
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
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the navbar background accordingly
      if (window.scrollY > 0) {
        setNavbarBackground("bg-dark"); // Change to bg-dark when scrolled
      } else {
        setNavbarBackground("transparent"); // Keep it transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyle = {
    textDecoration: "none", // Remove text decoration
    color: "white !important", // Use the default text color
  };

  useEffect(() => {
    // Add a scroll event listener to change the navbar background color
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  const handleScroll = () => {
    // Check the scroll position and update the navbar background accordingly
    if (window.scrollY > 0) {
      setNavbarBackground("white");
    } else {
      setNavbarBackground("transparent");
    }
  };

  const [isCartFixed, setIsCartFixed] = useState(false);

  useEffect(() => {
    const cartPlaceholder = document.querySelector('.cart-placeholder');
    const cartBox = document.querySelector('.cart-box');

    const handleScroll = () => {
      const cartPlaceholderTop = cartPlaceholder.getBoundingClientRect().top;
      if (cartPlaceholderTop <= 0) {
        setIsCartFixed(true);
      } else {
        setIsCartFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get(
        "https://ngo-node.onrender.com/api/campaigns"
      );
      console.log("API Response:", response);
      if (response.status === 200) {
        const campaignsWithAmount = response.data.map((campaign) => {
          return {
            ...campaign,
            amount: campaign.amount || 0, // Ensure a default value in case 'amount' is not present
            requirements: campaign.requirements || "", 
          };
        });
  
        setfeaturedCampaigns(campaignsWithAmount);
      } else {
        console.error("Failed to fetch campaigns:", response.data);
      }
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };
  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleQuantityChange = (campaignId, change) => {
    setCampaignQuantities((prevQuantities) => ({
      ...prevQuantities,
      [campaignId]: Math.max(0, (prevQuantities[campaignId] || 0) + change),
    }));
  };


const handleCustomAmountChange = (campaignId, amount) => {
  setCustomAmounts((prevAmounts) => ({
    ...prevAmounts,
    [campaignId]: amount,
  }));
};

const handlePaymentSuccess = (donorName) => {
  const currentTime = new Date().toLocaleString();
  const newDonor = { name: donorName, date: currentTime };
  // Add the new donor to the list of recent donors
  setRecentDonors([...recentDonors, newDonor]);
};


const handleButtonClick = () => {
  const totalAmount = cartItems.reduce((total, item) => total + item.totalAmount, 0);
  alert(`Total Donation Amount: Rs ${totalAmount}`);
  localStorage.setItem("amount", totalAmount);
  navigate("/cart"); // Replace "/donation" with the actual path to your donation page
  setShowQuantityInput(!showQuantityInput);
  setShowQuantities(!showQuantities);
};


  

  useEffect(() => {
    // Update total cart amount when campaignQuantities or featuredCampaigns change
    const updatedTotalCartAmount = featuredCampaigns.reduce(
      (total, campaign) => total + (campaignQuantities[campaign._id] || 0) * campaign.amount,
      0
    );
    setTotalCartAmount(updatedTotalCartAmount);
  }, [campaignQuantities, featuredCampaigns]);

  useEffect(() => {
    // Update cart details when campaignQuantities change
    const updatedCartItems = featuredCampaigns.map((campaign) => {
      const quantity = campaignQuantities[campaign._id] || 0;
      const totalAmount = quantity * campaign.amount;
      return {
        campaignName: campaign.title,
        quantity,
        totalAmount,
      };
    });
    setCartItems(updatedCartItems);
  }, [campaignQuantities, featuredCampaigns]);

  useEffect(() => {
    // Update cart details when campaignQuantities or customAmounts change
    const updatedCartItems = featuredCampaigns.map((campaign) => {
      const quantity = campaignQuantities[campaign._id] || 0;
      const totalAmount = customAmounts[campaign._id] || quantity * campaign.amount;
      return {
        campaignName: campaign.title,
        quantity,
        totalAmount,
      };
    });
  
    // Calculate the total cart amount based on custom amounts
    const updatedTotalCartAmount = updatedCartItems.reduce(
      (total, item) => total + item.totalAmount,
      0
    );
    
    setTotalCartAmount(updatedTotalCartAmount);
    setCartItems(updatedCartItems);
  }, [campaignQuantities, customAmounts, featuredCampaigns]);
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsCartFixed(true);
      } else {
        setIsCartFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  useEffect(() => {
    axios.get('https://ngo-node.onrender.com/api/razorpay_payments')
      .then(response => {
        // Extract email and status from the fetched data, filtering by status 'captured'
        const filteredDonors = response.data.items.map(item => ({
          email: item.upi.vpa ? item.upi.vpa.split('@')[0].replace(/\d/g, '') : "Anonymous",
          status: item.status,
          createdAt: item.created_at // assuming the timestamp field is named "created_at"
        })).filter(donor => donor.status === 'captured');
        
        // Set the recent donors state with the filtered data
        setRecentDonors(filteredDonors);
      })
      .catch(error => {
        console.error('Error fetching donors:', error);
      });
  }, []);
  
  return (
    <>
  <div className="col-md-8 scrollable">    
    <Helmet>
        <title>Gaushala Donation | Donate for Cows at Shri Krishna Dham</title>
        <meta name="You can donate for cows for a month, a year or a lifetime. This will help us to save thousands of cows, who are injured and sick. " />
      </Helmet>
      <nav
        className={`navbar navbar-expand-lg ${navbarBackground} fixed-navbar`}
        style={{
          fontSize: "22px",
          paddingTop: "0px",
          paddingBottom: "0px",
          backgroundColor: "#F7F7F7",
          transition: "background-color 0.3s",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
             loading="lazy"
              className="img"
              src={doonlogo}
              style={{ height: "80px" }}
              alt=""
            />
          </Link>

          <Link className="navbar-brand logo" to="/">
            <img
             loading="lazy"
              src={logo}
              className="img"
              style={{
                height: "90px",
                filter: "drop-shadow(2px 4px 6px black)",
              }}
              alt=""
            />
          </Link>

          <div className="ml-auto">
            <ul className="navbar-nav mb-2">
              <li className="nav-item">
                <Link className="nav-link" to="/donate" aria-current="page">
                  <a
                    className="nav-link donate-button fs-5 "
                    href="#"
                    style={{
                      backgroundColor: "#FE6104",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontWeight: 700,
                      fontSize:"25px",
                      animation: "glow 1s infinite alternate",
                      transition: "transform 1s, box-shadow 2s",
                      boxShadow: "0px 0px 10px rgba(255, 165, 0, 0.8)", // Orange box shadow color
                    }}
                  >
                    Donate Now
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="imageSlider"
        className="mt-5 carousel  carousel-nav slide"
        data-bs-ride="carousel"
        style={{
          marginBottom: "-50px !important", // Adjust the negative value to reduce margin
          // Or use paddingBottom:
          // paddingBottom: "10px", // Adjust the value to reduce padding
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active mt-5">
            <img
             loading="lazy"
              src={lp3} // Replace with your image URL
              className="d-block w-100 "
              alt="Slide 1"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="carousel-overlay d-flex align-items-center justify-content-center">
              {/* <div className="carousel-caption text-center">
                <h3 className="mb-4" style={{ fontSize: "48px" }}>
                  Helping Animals
                </h3>
                <p className="mb-4" style={{ fontSize: "30px" }}>
                  Support our mission to provide a better life for animals in
                  need.
                </p>
                <Link className="nav-link" to="/donate" aria-current="page">
                <button className="btn btn-primary gradient-button slider-btn">
                  Donate Now
                </button>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
             loading="lazy"
              src={lp2} // Replace with your image URL
              className="d-block w-100 mt-5"
              alt="Slide 2"
              style={{
                objectFit: "cover",
                margintop: "50px"
              }}
            />
            <div className="carousel-overlay d-flex align-items-center justify-content-center">
              {/* <div className="carousel-caption text-center">
                <h3 className="mb-4" style={{ fontSize: "48px" }}>
                  Rescue and Care
                </h3>
                <p className="mb-4" style={{ fontSize: "30px" }}>
                  We rescue and provide care to animals in distress.
                </p>
                <Link className="nav-link" to="/donate" aria-current="page">
                <button className="btn btn-primary gradient-button slider-btn">
                  Donate Now
                </button>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
             loading="lazy"
              src={lp1} // Replace with your image URL
              className="d-block w-100 mt-5"
              alt="Slide 2"
              style={{
                objectFit: "cover",
                margintop: "50px"
              }}
            />
            <div className="carousel-overlay d-flex align-items-center justify-content-center">
              {/* <div className="carousel-caption text-center">
                <h3 className="mb-4" style={{ fontSize: "48px" }}>
                  Rescue and Care
                </h3>
                <p className="mb-4" style={{ fontSize: "30px" }}>
                  We rescue and provide care to animals in distress.
                </p>
                <Link className="nav-link" to="/donate" aria-current="page">
                <button className="btn btn-primary gradient-button slider-btn">
                  Donate Now
                </button>
                </Link>
              </div> */}
            </div>
          </div>
          {/* <div className="carousel-item">
            <img
             loading="lazy"
              src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699440194/rgwp6vvtc30yax2u479x.webp" // Replace with your image URL
              className="d-block w-100"
              alt="Slide 3"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="carousel-overlay d-flex align-items-center justify-content-center">
              <div className="carousel-caption text-center">
                <h3 className="mb-4" style={{ fontSize: "48px" }}>
                  Animal Welfare
                </h3>
                <p className="mb-4" style={{ fontSize: "30px" }}>
                  Join us in promoting animal welfare and compassion.
                </p>
                <Link className="nav-link" to="/donate" aria-current="page">
                <button className="btn btn-primary gradient-button slider-btn">
                  Donate Now
                </button>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#imageSlider"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#imageSlider"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
          
      

      <div className="container-fluid bg-light" style={{borderBottom:"3px solid orange"}}>
      <div className="container my-5 py-0">
        <div className="row">
          <h2 style={{ fontWeight: 700, color: "black" }}>Make a Donation</h2>
          <h2 style={{ fontSize: "22px", fontWeight: 700 }}>
            Featured Campaign
          </h2>
          <div className="row mt-3">
            {featuredCampaigns.map((campaign, index) => (
              <div className="col-md-6 mb-5 px-4" key={index}>
                <div
                  style={{
                    backgroundColor:
                      cardBackgroundColors[index % cardBackgroundColors.length],
                    boxShadow: "10px 5px 5px black",
                  }}
                  className="d-flex"
                >
                  <div className="row no-gutters">
                    <div className="col-md-12 p-0">
                      <img
                        loading="lazy"
                        src={campaign.imageUrl}
                        className="card-img"
                        alt={campaign.title}
                        style={{ maxHeight: "400px" }}
                      />
                    </div>
                    <div
                      className="col-md-12 d-flex align-items-center"
                      style={{
                        backgroundColor:
                          cardBackgroundColors[
                            index % cardBackgroundColors.length
                          ],
                      }}
                    >
                      <div className="card-body text-center" style={{ color: "black" }}>
                        <h5
                          className="card-title text-dark mt-2"
                          style={{
                            fontWeight: 700,
                            fontSize: "22px",
                          }}
                        >
                          {campaign.title}
                        </h5>
                        <p
                          className="card-text text-dark mt-3"
                          style={{ fontWeight: 500, fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', lineHeight: '1.5em' }}
                        >
                          {showFullDescription ? campaign.description : campaign.description.slice(0, 40)}
                        </p>
                        
                        <button
                          className="btn btn-link"
                          onClick={toggleDescription}
                        >
                          {showFullDescription ? 'Read Less' : 'Read More'}
                        </button>
                        <p
                          className="card-text text-dark mt-3"
                          style={{ fontWeight: 500, fontSize: "16px" }}
                        >
                          Amount: ₹{campaign.amount || 0}
                        </p>
                        <p
                      className="card-text text-dark mt-3"
                      style={{ fontWeight: 500, fontSize: "16px" }}
                    >
                      {campaign.requirements}
                    </p>
                        <div className="progress mt-3" style={{ height: '10px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: `${(campaign.progress / campaign.outOf) * 100}%`, backgroundColor: '#ff6a00', color: '#ff6a00' }} aria-valuenow={campaign.progress} aria-valuemin="0" aria-valuemax={campaign.outOf}>{campaign.progress} / {campaign.outOf} </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-3">
                        
                        {(!customAmounts[campaign._id] && campaignQuantities[campaign._id] === undefined) && (
                          <>
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => handleQuantityChange(campaign._id, 1)}
                            style={{width: '50%', background:'#ff6a00', color: 'white', fontWeight: '700', fontSize: '20px'}}
                            >
                              ₹{campaign.amount}
                            </button>
                          </>
                        )}
                        
                        {!customAmounts[campaign._id] && campaignQuantities[campaign._id] !== undefined && (
                          <>
                          
                            {(campaignQuantities[campaign._id] > 0) && (
                              <>
                              {!campaignQuantities[campaign._id] && (
                                  <>
                                  <input
                                    type="number"
                                    className="form-control form-control-lg text-center me-2"
                                    placeholder="Enter custom Amount"
                                    onChange={(e) => handleCustomAmountChange(campaign._id, parseInt(e.target.value, 10) || 0)}
                                    style={{ width: '50%', fontSize:'20px',color: 'balck' }}
                                  />
                                 </>
                                )}
                                <button
                                  className="btn btn-outline-secondary btn-lg me-2"
                                  onClick={() => handleQuantityChange(campaign._id, -1)}
                                  style={{ background:'#ff6a00', fontWeight: '700', fontSize: '20px'}}
                                  
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  className="form-control form-control-lg text-center"
                                  value={campaignQuantities[campaign._id]}
                                  readOnly
                                />
                                <button
                                  className="btn btn-outline-secondary btn-lg ms-2"
                                  onClick={() => handleQuantityChange(campaign._id, 1)}
                                  style={{ background:'#ff6a00', fontWeight: '700', fontSize: '20px',}}
                                >
                                  +
                                </button>
                              </>
                            )}

                            {(campaignQuantities[campaign._id] === 0) && (
                              <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => handleQuantityChange(campaign._id, 1)}
                              style={{width: '50%', background:'#ff6a00', color: 'white', fontWeight: '700', fontSize: '20px'}}
                            >
                              ₹{campaign.amount}
                            </button>
                            )}
                          </>
                        )}

                        {!campaignQuantities[campaign._id] && (
                            <input
                              type="number"
                              className="form-control form-control-lg text-center me-2"
                              placeholder="Enter custom Amount"
                              onChange={(e) => handleCustomAmountChange(campaign._id, parseInt(e.target.value, 10) || 0)}
                              style={{ width: '50%', fontSize:'20px',color: 'balck' }}
                            />
                          )}
                      </div>

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>




<div className="container mt-5 news-section" style={{background: "white",overflow: "hidden"}}>
          <div className="row">
            <div className="col-12 pt-3">
              <h2
                className="text-left mb-1"
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
                }}>NEWS</span>
              </h2>
            </div>
            <div className="col-12" style={{borderBottom:"3px solid orange"}}>
              <Slider {...news_settings} >
               {/*  {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card-wrapper text-center">
                    <div
                      className="testimonial-card"
                      style={{ backgroundImage: `url(${testimonial.image})`,height: "400px",width:'400px', backgroundSize: "cover", backgroundPosition: "center" }}
                    ></div>
                  </div> 
                ))} */}
                        {/* {news.map((item, index) => (
                  <div key={index} className="news-card-wrapper text-center" onMouseEnter={() => openModal(item.image)}>
                    <div
                      className="news-card"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        height: '400px',
                        width: '400px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    ></div>
                  </div>
                ))} */}
                <div>
                  <h3><img src={ns1} alt="image1"/></h3>
                </div>
                <div>
                  <h3><img src={ns2} alt="image2"/></h3>
                </div>
                <div>
                  <h3><img src={ns3} alt="image3"/></h3>
                </div>
                <div>
                  <h3><img src={ns4} alt="image4"/></h3>
                </div>
                <div>
                  <h3><img src={ns5} alt="image5"/></h3>
                </div>
                <div>
                  <h3><img src={ns6} alt="image6"/></h3>
                </div>
                <div>
                  <h3><img src={ns7} alt="image7"/></h3>
                </div>
                <div>
                  <h3><img src={ns8} alt="image8"/></h3>
                </div>
                <div>
                  <h3><img src={ns9} alt="image8"/></h3>
                </div>
                <div>
                  <h3><img src={ns10} alt="image8"/></h3>
                </div>

              </Slider>
              {/* Modal for image popup */}
            {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000, // Ensure the modal is above other elements
              },
              content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                background: 'transparent',
                maxWidth: '90%', // Adjusted maxWidth
                maxHeight: '90%', // Adjusted maxHeight
          },
        }}
      >
        <img src={currentImage} alt="Popup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Modal> */}
            </div>
          </div>
          </div>





      <div className="container mt-5" >
        <div className="row">
          <div className="col-md-6">
            
            <iframe className="vid" width="460" height="400" src="https://www.youtube.com/embed/1vRly8XxjVc?si=kHND_3_qJPV8jr5F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-md-6">
            <h2 className="text-dark">
              <strong>About Us</strong>
            </h2>
            <span style={{ fontSize: "22px", fontWeight: "700" }}>
              Who we are?
            </span>
            <p className="mt-2" style={{ fontSize: "17px" }}>
              Doon Animal Welfare Foundation is committed to serving all members of the
              community, both human and animal. We firmly believe that every
              life is valuable and deserving of respect, and we work tirelessly
              to ensure that all beings are treated with the dignity and care
              they deserve. Through our expert rescues and adoptions, we strive
              to protect and enhance the lives of animals in need, providing
              them with the love, attention, and medical care they require to
              thrive. Our team of experienced professionals is dedicated to
              ensuring that every animal in our care receives the highest
              quality of care, and we are constantly seeking new and innovative
              ways to improve their welfare.<br/>{" "}
            </p>
            
          </div>
        </div>
      </div>
      <div className="container mt-1">
        <p style={{ textAlign: "justify", fontSize: "16px" }}>
        Donating for animals is a compassionate and impactful way to make a positive difference in the lives of sentient beings. Here are several reasons why donating for animals is important:
        <ul>
          <li><strong>Alleviating Suffering:</strong> Many animals face cruelty, abuse, neglect, and exploitation. Donations contribute to rescue efforts, veterinary care, and rehabilitation programs that alleviate the immediate suffering of animals in distress.</li>
          <li><strong>	Supporting Animal Rescue:</strong> Donations help fund rescue operations for animals in emergencies, disasters, and abusive situations. Animal welfare organizations often rely on financial support to conduct timely and effective rescues.</li>
          <li><strong>	Providing Medical Care:</strong> Animals, may require medical attention due to injuries, illnesses, or malnutrition. Donations contribute to veterinary care, surgeries, vaccinations, and other essential medical treatments.</li>
          <li><strong>	Funding Rehabilitation Programs:</strong> For animals that have been rescued or rehabilitated, donations help provide necessary care, shelter, and support to help them recover physically and mentally.</li>
          <li><strong>Promoting Humane Education:</strong>	 Doon animal welfare organizations engage in educational initiatives to raise awareness about responsible pet ownership, Mother Cow, and the ethical treatment of animals. Donations support these educational programs, fostering a culture of compassion and responsibility.</li>
          <li><strong>	Fostering Sustainable Solutions:</strong> Donations enable organizations to develop sustainable solutions to animal welfare challenges. This includes addressing root causes, implementing community-based programs, and promoting ethical practices in industries that impact animals.</li>
          <li><strong>	Rescuing Animals from Cruel Industries:</strong> Many animals suffer in industries such as factory farming, animal testing, and entertainment. Donations support efforts to rescue animals from these environments and advocate for alternatives that prioritize their well-being.</li>
          <li><strong>	Creating a More Compassionate Society:</strong> Supporting animal welfare through donations contributes to the building of a more compassionate and empathetic society. It sends a message that all living beings deserve respect, care, and protection.</li>
        </ul>
        </p>
        <br/><p style={{ textAlign: "justify", fontSize: "16px" }}>Donating for animals is a powerful and direct way to contribute to the well-being of animals, support DOON ANIMAL WELFARE organizations that advocate for their rights, and work towards creating a world where animals are treated with compassion and dignity.

Our mision

"Doon Animal Welfare is dedicated to spearheading a comprehensive movement that proactively tackles the enduring challenges faced by cows. Our mission centers on establishing shelters nationwide to provide sustenance, care, and affection to aging, injured, and abandoned cows and cats. Extending our compassion, we also support saints, poor, and orphan children. At the core of our mission is the promotion of awareness for cow protection, coupled with fervent advocacy against cruelty to cows. Our overarching goal is to foster a collective sense of responsibility for the well-being of these gentle creatures within society."

"“Our dedicated efforts focus on:
        </p>
      </div>
      <div className="container" >
        <div className="row cert">
          {animationValues.map((value, index) => (
            <div className="col-md-3" key={index}>
              <div className=" position-relative">
                {/* <div
                  className="card-overlay"
                  style={{ backgroundColor: cardBackgroundColors[index] }}
                >
                  <h4 style={{ fontWeight: "700" }}>Contribute Now</h4>
                  <p>
                    We are continously evolving to providing better care to
                    animal you can also help them by donating.
                  </p>
                </div> */}
                <div
                  className="card-body pt-3"
                  style={{
                    height: "70px",
                    borderRadius:"40px",
                    backgroundColor: targetgroundColors[index],
                  }}
                >
                  <h2
                    className="fs-1 text-center "
                    style={{ fontWeight: 700, color: "white" }}
                  >
                    <CountUp end={value} duration={5} />+
                  </h2>
                  <h3
                    className="fs-3 text-center"
                    style={{ fontWeight: 700, color: "white"}}
                  >
                    {textValues[index]}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
                    
      {/* <div className="container mt-5">
        <p className="fw-bold fs-2">Our Cause: A Better Life for Animals</p>
        <p className="fw-semibold fs-5" style={{ color: "orange" }}>
          "प्राणियों के संरक्षण में आपका हाथ हो, उनकी जिन्दगी को सुखमय बनाने का
          बहाना हो।"
        </p>
        <hr />
        <p style={{ textAlign: "justify", fontSize: "16px" }}>
          At the heart of our mission lies a deep commitment to ensuring a
          better life for animals. We believe in a world where every creature,
          no matter how big or small, deserves to live in safety, comfort, and
          with the opportunity to thrive. Our organization is dedicated to
          safeguarding the welfare of animals, from the tiniest of insects to
          majestic wildlife and cherished pets. We advocate for their rights,
          provide essential care, and strive to create a society where
          compassion and empathy for animals are at the forefront. Each day,
          countless animals face adversity, from the perils of abandonment and
          abuse to the challenges of finding food and shelter in an unforgiving
          world. We stand as a beacon of hope for these voiceless beings,
          working tirelessly to rescue, rehabilitate, and rehome those in need.
          Our efforts extend beyond immediate rescue; we endeavor to foster a
          profound change in attitudes and behaviors towards animals. Through
          education, awareness campaigns, and community engagement, we seek to
          inspire empathy and kindness towards animals. We believe that by
          nurturing a sense of responsibility and respect for all living
          creatures, we can build a more compassionate society where animals are
          cherished companions, not forgotten or discarded. Our cause is a
          testament to the belief that our world is interconnected, and the
          well-being of animals is intricately linked to the well-being of
          humanity. We invite you to join us on this remarkable journey towards
          a brighter, more compassionate future for animals, where they can live
          the lives they truly deserve. Together, we can make a profound
          difference and create a world where animals can experience the love,
          care, and respect that is their birthright.
        </p>
      </div> */}
      
      <div className="container mt-3 certificate-section" style={{ background: "white", overflow: "hidden"}}>
          <div className="row">
            <div className="col-12 pt-3">
              <h2
                className="text-left mb-2"
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
                className="text-left mb-2"
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
          <div className="container mt-5 testimonial-section" style={{background: "white",overflow: "hidden"}}>
          <div className="row">
            <div className="col-12 pt-3">
              <h2
                className="text-left mb-2"
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

          <Link className="nav-link" to="/donate" aria-current="page">
          <div className="container donate-container-mobile py-3 text-center">
            <button
              className="btn glow fw-bold"
              style={{ background: "yellow" }}
              onClick={handleButtonClick}
            >
              Donate Now - ₹{totalCartAmount}
            </button>    
          </div>
        </Link>
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            <p className="fw-bold fs-2 ">Our Recent Activites</p>
            <p className="fs-3 fw-bold" style={{ color: "orange" }}>
              "प्राणियों के लिए किए जाने वाले कार्य, हमारे दिल की गहराइयों से
              निकले उपहार हैं।"
            </p>
            <hr />
          </div>
          

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            autoplay={true}
            autoplaySpeed={1000}
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1200, // Adjust the breakpoint as needed
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 992, // Adjust the breakpoint as needed
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768, // Adjust the breakpoint as needed
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {recentActivitiesImages.map((image, index) => (
              <div
                key={index}
                className="center-slide"
                onClick={() => openModal(image)}
              >
                <img
                 loading="lazy"
                  src={image}
                  height="300px"
                  width="auto"
                  alt={`Recent Activity ${index + 1}`}
                />
              </div>
            ))}
            
          </Slider>
        </div>
      </div>
      

      {/* Modal for displaying the selected image */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
           loading="lazy"
            src={selectedImage}
            alt="Selected Image"
            style={{ width: "100%" }}
          />
        </Modal.Body>
      </Modal>

      </div>
      


  <div className="col-md-4">
    {buttonText !== "Donate" && (
  <div className="col-md-4 mt-0 m-0 p-0 donation-box scrollable-donation-box">
    <div className="p-3 border bg-light" style={{ margin: "2px 40px 0px 20px" }}>
      <div className="d-flex row gap-2">
        <div className="box-image">
          <span style={{ color: "red", fontSize: "18px", fontWeight: 700 }}>
            Tax exempted under section 80G(5)(iii) of Income tax registration No AAICD1894QF20206
          </span>
          <br />Hooves in Harmony, Hearts in Devotion: Serving Cows, Our Lifelong Commitment
        </div>

       {/* Buttons in a row */}
       <div className="button-row">
          {/* Button 1 */}
          <div className="dropdown">
            <button className="dropdown-btn">Tax benefit</button>
            <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)" }}>
              <p>
                <strong>Tax Benefits</strong>
                <br />
                Donations Exempted Under Section 80G & 12A
              </p>
            </div>
          </div>

          {/* Button 2 */}
          <div className="dropdown">
            <button className="dropdown-btn">Assured</button>
            <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)" }}>
              
              <p>
                <strong>Animal Welfare Board Of India</strong>
                <br />
                Recognized by animal welfare organization
              </p>
            </div>
          </div>

          {/* Button 3 */}
          <div className="dropdown">
            <button className="dropdown-btn">Verified NGO</button>
            <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)" }}>
            <p>
                <strong>Doon Animal Welfare Foundation</strong>
                 <br/>Regd. under Section(8)<br/>of the Companies Act-2013.
              </p>
            </div>
          </div>
        </div>



        <div className="box-content">
          <div className="cmn-sidebar bg-white border p-2">
            <div className="d-flex align-items-center payment-option">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h6
                      className="text-center glow"
                      style={{
                        fontWeight: 700,
                        borderRadius: "50%",
                        padding: "15px 5px 25px 5px",
                        border: "4px solid gray",
                        borderRight: "4px solid yellow",
                        borderTop: "4px solid yellow",
                      }}
                    >
                      20% <br />
                      <span>completed</span>{" "}
                    </h6>
                  </div>
                  <div className="col-md-4">
                    <h6 className="text-center ps-3" style={{ fontWeight: 700 }}>
                      January 2024 <br />
                      <span>Month</span>
                    </h6>
                  </div>
                  <div className="col-md-4">
                    {id === "6571c72e00fc94b3a8a81ea5" ? (
                      <h6 className="text-center ps-2" style={{ fontWeight: 700 }}>
                        2000 Blanket <br />
                        <span>Total Required</span>
                      </h6>
                    ) : (
                      <h6 className="text-center ps-3" style={{ fontWeight: 700 }}>
                        20 Lakh KG <br />
                        <span>Total Fodder Required</span>
                      </h6>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    {/* Recent Donor Box */}
    <div className={`cart-box  p-3 border bg-light ${isCartFixed ? 'fixed-cart-box' : ''}`} 
    style={{ margin: "2px 40px 0px 20px" }}> {/*t R b l*/}
    <p className="fw-bold fs-3">Items Added to Cart</p>
            <div className="cart-items-container">
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <p key={index} style={{fontWeight: 'bold'}}>
                  {item.campaignName}: {item.quantity} x Rs {item.totalAmount}
                </p>
              ))}
            </div>
          </div>
          <div className="row mb-5 ">
            {/* Left Column */}
            <div className="col-md-6">
              <p style={{ fontSize: "18px" }}>
                <strong>Total Cart value: </strong>Rs {totalCartAmount}
                <br />
              </p>
              <button
                  className={`btn Add to cart burst-12 ${buttonText === "Add Item to Donate" ? "glow" : ""}`}
                  onClick={handleButtonClick}
                  style={{
                    background: "linear-gradient(to right, #ff9900, #ff6a00) #eb9006",
                    color: "white",
                    fontWeight: "bold",
                    fontSize:"13px",
                    marginTop: "20px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "0"
                  }}
                >
                  {buttonText}
                  <span>Add item to Donate</span>
                </button>

            </div>
            
            {/* Right Column */}
            <div className="col-md-6">
            <img src={paytm} alt="QR Code" style={{ width: '150px', height: '150px', marginLeft:"10px", marginTop: "20px" }} />
            </div>
          </div>
          {buttonText === "Donate" && (
            <button
              className="btn Add to cart mx-3"
              onClick={() => {
                setCampaignQuantities({});
                setTotalCartAmount(0);
                setCartItems([]);
                setButtonText("Add Item to Donate");
              }}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Reset
            </button>
            
          )}
      <div className="recent-donor-box" 
      style={{ 
        margin: "0px 0px 0px 0px",
        }}>
      <h4 className="recent text-center" style={{fontSize: "15px"}}>Recent Donors</h4>
      <div className="donor-item" >
        <ul className="donors" >
          {recentDonors.map((donor, index) => (
            <div key={index} className="donor-detail"  >
                <div className="donor-img" >
                  <img src={userImg} alt="User Image" loading="lazy" width="30px" />
                </div>
                <div className="donor-info" >
                  <p className="donor-name" >{donor.email || "Anonymous"}</p>
                  <p className="donor-date" >{new Date(donor.createdAt * 1000).toLocaleString()}</p>
                </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
    <div className="col-md-6 j">
            <iframe className="vid" width="400" height="200" src="https://www.youtube.com/embed/Ydj-Fz6UGwY?si=R22XoljvKxJU0nX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{marginLeft:'20px'}}></iframe>
          </div>
      </div>
      
  </div>
  
)}
</div>
<Footer />
    </>
  );
};

export default LandingPage;
