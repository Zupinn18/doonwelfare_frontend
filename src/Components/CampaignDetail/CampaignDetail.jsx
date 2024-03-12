import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import './CampaignDetail.css';
import Faq from '../FAQ/Faq';
import Navbar from '../Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../LandingPage/Langing.css";
import "../LandingPage/Campaign.css";
import "../../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import gal1 from "../../assets/gal1.png"
import gal2 from "../../assets/gal2.png"
import gal3 from "../../assets/gal3.png"
import gal4 from "../../assets/gal4.png"
import gal5 from "../../assets/gal5.png"
import gal6 from "../../assets/gal6.png"
import gal7 from "../../assets/gal7.png"
import gal8 from "../../assets/gal8.png"
import gal9 from "../../assets/gal9.png"
import AOS from "aos";
import "aos/dist/aos.css";
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
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cert1 from '../../assets/certi1.png';
import cert2 from '../../assets/certi2.png';
import cert3 from '../../assets/certi3.png';
import cert4 from '../../assets/certi4.png';
import "../../style.css";
import Footer from "../Footer/footer";
import "slick-carousel/slick/slick.css";
import paytm from "../../assets/new_QrCode.jpeg"
import userImg from '../../assets/userImg.png';

const CampaignDetail = () => {
  const [cardColors,setColor] = useState(["#ac2b08", "#1bb7bc", "#d9d904","#dc3545"]);
  const [animationValues, setAnimationValues] = useState([0, 0, 0, 0]);
  const [campaignData, setCampaignData] = useState([]);

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

  const customAmount = [
      {
        donationAmount:"1000",
      },
      {
        donationAmount:"1800",
      },
      {
        donationAmount:"3000",
      },
  ];


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



    const [buttonText, setButtonText] = useState("Add Item to Donate");
    const [cartItems, setCartItems] = useState([]);
    const [campaign, setCampaign] = useState([]);
    const {id} = useParams();
    const [campaignQuantities, setCampaignQuantities] = useState({});
    const [totalCartAmount, setTotalCartAmount] = useState(0);
    const [customAmounts, setCustomAmounts] = useState({});
    const [showQuantityInput, setShowQuantityInput] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [recentDonors, setRecentDonors] = useState([]);
    const [product, setProduct] = useState([]);
    const [customRupees, setCustomRupees] = useState(0);

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

    const resetAmount = () => {
      setList(0);
      setButtonText("Add Item to Donate");
    };

    const fetchCampaignDetails = async () => {
        try {
          const response = await axios.get(
            "https://ngo-node.onrender.com/api/campaigns"
          );
    
          var currObj = response.data.filter(item => item._id === id);
    
          if (response.status === 200) {
            setCampaign(currObj);
          }
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(()=>{
        fetchCampaignDetails();
      },[])

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  
      const navigate = useNavigate();
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
      // useEffect(() => {
      //   const handleScroll = () => {
      //     // Check the scroll position and update the navbar background accordingly
      //   //   if (window.scrollY > 0) {
      //   //     setNavbarBackground("bg-dark"); // Change to bg-dark when scrolled
      //   //   } else {
      //   //     setNavbarBackground("transparent"); // Keep it transparent when at the top
      //   //   }
      //   // };
    
      //   window.addEventListener("scroll", handleScroll);
    
      //   return () => {
      //     // Clean up the event listener when the component unmounts
      //     window.removeEventListener("scroll", handleScroll);
      //   };
      // }, []);
    
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
            "https://ngo-node.onrender.com/api/items"
          );
         
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

    const handleCustomAmount= (amount) => {
      setCustomRupees(amount);
      setTotalCartAmount(amount);
    };

    const handleCustomAmountFix= (index) => {
      const fixMoney = customAmount[index].donationAmount;
      setCustomRupees(fixMoney);
      setTotalCartAmount(fixMoney);
    };

    // const handleCustomAmount = (campaignId, amount) => {
    //   setCustomAmounts((prevAmounts) => ({
    //     ...prevAmounts,
    //     [campaignId]: amount,
    //   }));
    // };
    
    const handlePaymentSuccess = (donorName) => {
      const currentTime = new Date().toLocaleString();
      const newDonor = { name: donorName, date: currentTime };
      // Add the new donor to the list of recent donors
      setRecentDonors([...recentDonors, newDonor]);
    };

    const handleButtonClick = () => {
      const totalAmount = cartItems.reduce((total, item) => total + item.totalAmount, 0) || totalCartAmount ;
      if(totalAmount<200){
        alert(`Minimum Donation Amount should be Rs. 200  `);
      }else{
        alert(`Total Donation Amount: Rs ${totalAmount}`);
        localStorage.setItem("amount", totalAmount);
        navigate("/cart"); // Replace "/donation" with the actual path to your donation page
      }
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

      // useEffect(()=>{
      //   setTotalCartAmount(customRupees);
      // },[customRupees, totalCartAmount]);
     
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

      useEffect(()=>{
        fetchCampaignData();
        fetchProducts();
      },[])

      const fetchCampaignData = async() =>{
        try{
          const campaign_Id = window.location.pathname.split('/').at(-1);

          const response = await axios.get(`https://ngo-node.onrender.com/api/campaign_data/${campaign_Id}`);

          if (response.status === 200) {
            // Update the campaigns state with the fetched data
            setCampaignData(response.data.data);
          } else {
            console.error("Failed to fetch campaigns Data:", response.data.data);
            // Handle error case if needed
          }
        }catch(error){
          console.error("Error fetching campaigns Data:", error);
        }
      }

      const [productdata, setProductData] = useState([]);

      const fetchProducts = async()=>{
        try{
          const campaign_Id = window.location.pathname.split('/').at(-1);

           const response = await axios.get("https://ngo-node.onrender.com/api/items");

          if (response.status === 200) {
            // Update the campaigns state with the fetched data
            setProduct(response.data);
          } else {
            console.error("Failed to fetch campaigns Data:", response.data.data);
            // Handle error case if needed
          }
        }catch(error){
          console.error("Error fetching campaigns Data:", error);
        }
      }

        //for current campaign product
        const id_camp = window.location.pathname.split('/').at(-1);
        const responseData = product.filter(item => item.campaignId._id === id_camp);
      
      // Landing cart code
      const [list, setList] = useState(0);
      const [note, setNote] = useState(false);
      const [navbarBackground, setNavbarBackground] = useState("transparent");
      const cardBackgroundColors = ["#FFFFFF"];
      const targetgroundColors = ["#AC2B08", "#1BB7BC", "#d9d904", "#DC3545"];
      const [showModal, setShowModal] = useState(false);
      const [selectedImage, setSelectedImage] = useState(null);

      const handleNote = () => {
        setNote(true);
      }
    
      // Function to move the campaign
      const moveCampaign = (index, direction) => {
        // Create a copy of the campaigns array
        const updatedCampaigns = [...campaigns];
        // Swap the positions based on the direction
        if (direction === 'up' && index > 0) {
          const temp = updatedCampaigns[index];
          updatedCampaigns[index] = updatedCampaigns[index - 1];
          updatedCampaigns[index - 1] = temp;
        } else if (direction === 'down' && index < updatedCampaigns.length - 1) {
          const temp = updatedCampaigns[index];
          updatedCampaigns[index] = updatedCampaigns[index + 1];
          updatedCampaigns[index + 1] = temp;
        }
        // Update the campaigns state with the new order
        setCampaigns(updatedCampaigns);
      };
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
   
    
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

       // date and month
  const d = new Date(Date.now());
  var year = d.getFullYear();

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const newMonth = new Date();
  let currMonth = month[newMonth.getMonth()];

  return (
    
        <div className='campaign-container'>
            <Navbar/>
            
        
        
        <div className='wrapper-campaign p-3'>
        
            <div className='campaign-main' justifyContent = 'center' >
                {/* Content */}
                <div className="d-block d-lg-none ">
                  <div className="p-3 mobile-view p-3" >
                    <div className="d-flex row gap-2">
                      <div className="box-image">
                      <p className='campagin-title' >{campaign[0]?.title}</p>
                        <span style={{ color: "red", fontSize: "10px", fontWeight: 700, textAlign: "center" }}>
                          Tax exempted under section 80G(5)(iii) of Income tax registration No AAICD1894QF20206
                        </span>

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
                          <button className="dropdown-btn" style={{background: "linear-gradient(to right, #ff9900, #ff6a00) #eb9006"}}>Assured</button>
                          <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)"}}>
                            
                            <p>
                              <strong>Animal Welfare Board Of India</strong>
                              <br />
                              Recognized by animal welfare organization
                            </p>
                          </div>
                        </div>

                        {/* Button 3 */}
                        <div className="dropdown">
                          <button className="dropdown-btn" style={{background: "linear-gradient(to right, #ff9900, #ff6a00) #eb9006"}}>Verified NGO</button>
                          <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)" }}>
                          <p>
                              <strong>Doon Animal Welfare Foundation</strong>
                              <br/>Regd. under Section(8)<br/>of the Companies Act-2013.
                            </p>
                          </div>
                        </div>
                      </div>



                      <div className="box-content">
                        <div className="cmn-sidebar bg-white p-2">
                          <div className="d-flex align-items-center payment-option">
                            <div className="container">
                              <div className="row">
                              <div className='campaign_image'>
                        <img src={campaign[0]?.imageUrl} width='100%' style={{
                            alignSelf:"center",
                        }} />
                        </div>
                                <div className="col-md-4" >
                                  <h6
                                    className="text-center glow"
                                    style={{
                                      fontWeight: 700,
                                      borderRadius: "50%",
                                      padding: "15px 5px 25px 5px",
                                      border: "4px solid gray",
                                      borderRight: "4px solid yellow",
                                      borderTop: "4px solid yellow",
                                      marginLeft: "50px",
                                      marginRight: "50px"
                                    }}
                                  >
                                    20% <br />
                                    <span>completed</span>{" "}
                                  </h6>
                                </div>
                                <div className="col-md-4">
                                  <h6 className="text-center ps-3" style={{ fontWeight: 700 }}>
                                  {currMonth} {year} <br />
                                    <span>Month</span>
                                  </h6>
                                </div>
                                {/* <div className="col-md-3">
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
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                </div>
                </div>
                <div className='campaign-content p-3' >
                  
                    <div className='campagin-first'>
                            
                        {/* campagin image */}
                        <div className='campaign_image p-5' >
                          <img src={campaign[0]?.imageUrl} width='100%' style={{
                              marginTop: "100px",
                              alignSelf: "center",
                              display: "block", // Ensure the image is displayed as a block element
                          }} />
                      </div>



                        {/* details */}
                        {/* <div className='cards-campaign' >
                          <div className='card-camp' >
                            <p>Amount</p>
                            <div className='card-money' >₹ {campaign[0]?.amount}</div>
                          </div>
                          <div className='card-camp'>
                            <p>Progress</p>
                            <div className='card-progress'>{campaign[0]?.progress}</div>
                          </div>
                          <div className='card-camp'>
                            <p>Requirements</p>
                            <div className='card-require'>{campaign[0]?.requirement}</div>
                          </div>
                        </div> */}


                        {/* products */}
                        <h2
                          className="text-left-product mb-5 product-head "
                          style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            marginTop:"20px"
                          }}
                        >
                          <span style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            padding: "10px",
                            color: "#ff6a00",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
                          }}>Product</span>

                             </h2>
                        <div className='products-section' style={{
                          marginTop:"-30px"
                        }} > 

                             {
                              responseData.map((item,index)=>(
                                <div className='product-card' key={index} >
                                {/* Image  */}
                                    <img src={item.imageUrl} className='product-img' width="100px" height="100px" style={{
                                      borderRadius:"10px"
                                    }} />

                                <div className='product-info' >
                                  {/* name */}
                                  <p className='product-name' >
                                    {item.name}
                                  </p>

                                  {/* <p className='product-description' >
                                    {item.description}
                                  </p> */}

                                  <div className='product-price' >
                                    {/* price */}
                                    <p style={{
                                      fontWeight:"700",
                                    }}
                                    >₹{item.amount}/unit</p>

                                    {/* button add */}
                                    {/* <button className='product-btn' >ADD +</button> */}
                                    <div className='product-btn' >
                                    {(!customAmounts[item._id] && campaignQuantities[item._id] === undefined) && (
                          <>
                            <button
                              className="btn btn-outline-secondary btn-sm "
                              onClick={() => handleQuantityChange(item._id, 1)}
                            style={{width: '150px', background:'#ff6a00', color: 'white', fontWeight: '700', fontSize: '20px'}}
                            >
                              ADD +
                            </button>
                          </>
                                )}

              {!customAmounts[item._id] && campaignQuantities[item._id] !== undefined && (
                <>
                  {(campaignQuantities[item._id] > 0) && (
                    <>
                      {!campaignQuantities[item._id] && (
                        <>
                          <input
                            type="number"
                            className="form-control form-control-lg text-center me-2"
                            placeholder="Enter custom Amount"
                            onChange={(e) => handleCustomAmountChange(item._id, parseInt(e.target.value, 10) || 0)}
                            style={{ width: '40px', fontSize:'20px',color: 'black' }}
                          />
                        </>
                      )}
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => handleQuantityChange(item._id, -1)}
                        style={{ background:'#ff6a00', fontWeight: '700', fontSize: '20px'}}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control form-control-lg text-center"
                        value={campaignQuantities[item._id]}
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => handleQuantityChange(item._id, 1)}
                        style={{ background:'#ff6a00', fontWeight: '700', fontSize: '20px',}}
                      >
                        +
                      </button>
                    </>
                  )}

                  {(campaignQuantities[item._id] === 0) && (
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleQuantityChange(item._id, 1)}
                      style={{width: '150px', alignSelf:"center" , background:'#ff6a00', color: 'white', fontWeight: '700', fontSize: '20px'}}
                    >
                      ₹{item.amount}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    ))
  }
</div>

              
                        {/* project */}
                        <h2
                          className="text-left mb-5"
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
                          }}>Project</span>
                             </h2>

                        {/* video */}
                        <iframe className='top-vid'
                            width="80%"
                            height="400"
                            src="https://www.youtube.com/embed/snuAvoQRN_w"
                            allowFullScreen
                            title="Doon Animal Welfare Trust Video"
                            style={{
                              alignSelf:"center",
                              marginTop:"-40px"
                            }}
                          ></iframe>

                         {/* <div style={{alignSelf:"center"}} >
                              <img src={paytm} alt="QR Code" style={{ width: '200px', height: '200px', marginLeft:"10px", marginTop: "20px" }} />
                        </div> */}

                          {/* content-text */}
                          <div className='campagin-text' style={{
                            width:"80%",
                            alignSelf:"center"
                          }} >
                            {/* <p style={{
                              width:"100%",
                              textAlign:"justify",
                            }}
                            >{campaign[0]?.description}</p> */}

                            {/* image 1 */}
                            <img src={campaignData?.imageUrl1} width='100%' style={{
                            alignSelf:"center",
                            marginBottom:"30px"
                            }} />
                            {/* description 1 */}
                             <p className='campaign-text-last' style={{
                              width:"100%",
                              textAlign:"justify"
                            }} >
                              {campaignData?.description1}
                            </p>

                            {/* image 2 */}
                            <img src={campaignData?.imageUrl2} width='100%' style={{
                            alignSelf:"center",
                            marginBottom:"30px"
                            }} />
                            {/* description 2 */}
                             <p className='campaign-text-last' style={{
                              width:"100%",
                              textAlign:"justify"
                            }} >
                              {campaignData?.description2}
                            </p>

                            {/* image 3 */}
                            <img src={campaignData?.imageUrl3} width='100%' style={{
                            alignSelf:"center",
                            marginBottom:"30px"
                            }} />
                            {/* description 3 */}
                             <p className='campaign-text-last' style={{
                              width:"100%",
                              textAlign:"justify"
                            }} >
                              {campaignData?.description3}
                            </p>


                            <p className='campaign-text-last' style={{
                              width:"100%",
                              textAlign:"justify"
                            }} >
                            <b>Doon Animal Welfare is like a safe place for over four thousand cows that really need help. Mrs. Milli Kaur work really hard to save and take care of these cows.</b>

                            <h4 className='mt-4' >About NGO</h4>
                            <p><b>Shri Krishna Dham Gaushala</b>, started in Dehradun, Uttarakhand, by founder <b>Mrs. Milli Kaur</b>. It is a special place for over 4000+ cows, including calves. They are experts at rescuing abandoned or sick cows. They not only give them medical help but also lots of love and care. Every day, they rescue cows and build strong connections with each one. 
                            They believe that every bit of money spent on these cows is like planting seeds of kindness.</p>
                            </p>
                          </div>

                          {/* awards, testimonials, etc. */}
          <div className="certificate-section" style={{ background: "white", overflow: "hidden",marginTop:"-60px", padding:"0px"}}>
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
              <Slider {...settings_certificate} style={{ maxWidth: "70% !important" }}>
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
          <div className="awards-section" style={{ background: "white", overflow: "hidden",marginTop:"-80px", padding:"0px"}}>
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
              <Slider {...settings} style={{ maxWidth: "70% !important" }}>
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

          <div className="test testimonial-section" style={{background: "white",overflow: "hidden",marginTop:"-80px", padding:"0px"}}>
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
              <Slider {...settings} style={{ maxWidth: "70% !important" }} >
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
                        
                    </div>
                </div>
                <div className='campaign-cart' style={{marginTop:"150px"}} >
                {/* cart for buying */}
                <div className="col-md-4">
                <div className="d-block d-lg-none"> {/* Show on small screens, hide on large screens */}
      
    </div>
    <>
    {  buttonText !== "Donate" && (
      
  <div className="col-md-4 mt-0 m-0 p-0 px-3 donation-box scrollable-donation-box">
    <div className="p-3 border bg-light" style={{ margin: "2px 40px 0px 20px" }}>
      <div className="d-flex row gap-2">
        <div className="box-image">
        <p className='campagin-title' >{campaign[0]?.title}</p>
          <span style={{ color: "red", fontSize: "13px", fontWeight: 700 }}>
            Tax exempted under section 80G(5)(iii) of Income tax registration No AAICD1894QF20206
          </span>

        </div>

       {/* Buttons in a row */}
       {/* <div className="button-row"> */}
          {/* Button 1 */}
          {/* <div className="dropdown">
            <button className="dropdown-btn">Tax benefit</button>
            <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)" }}>
              <p>
                <strong>Tax Benefits</strong>
                <br />
                Donations Exempted Under Section 80G & 12A
              </p>
            </div>
          </div> */}

          {/* Button 2 */}
          {/* <div className="dropdown">
            <button className="dropdown-btn" style={{background: "linear-gradient(to right, #ff9900, #ff6a00) #eb9006"}}>Assured</button>
            <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)"}}>
              
              <p>
                <strong>Animal Welfare Board Of India</strong>
                <br />
                Recognized by animal welfare organization
              </p>
            </div>
          </div> */}

          {/* Button 3 */}
          {/* <div className="dropdown">
            <button className="dropdown-btn" style={{background: "linear-gradient(to right, #ff9900, #ff6a00) #eb9006"}}>Verified NGO</button>
            <div className="dropdown-content" style={{ left: "50%", transform: "translateX(-50%)" }}>
            <p>
                <strong>Doon Animal Welfare Foundation</strong>
                 <br/>Regd. under Section(8)<br/>of the Companies Act-2013.
              </p>
            </div>
          </div> */}
        {/* </div> */}



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
                    {currMonth} {year} <br />
                      <span>Month</span>
                    </h6>
                  </div>
                  {/* <div className="col-md-4">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      {/* </div> */}
    </div>
    {/* Recent Donor Box */}
    <div className={`cart-box px-3 border bg-light ${isCartFixed ? 'fixed-cart-box' : ''}`} 
    style={{ margin: "2px 0px 0px 0px" }}> {/*t R b l*/}
    <p className="fw-bold fs-3">Items Added to Cart</p>
            {/* <div className="cart-items-container">
            <div className="cart-items-list">
              {cartItems.map((item, index) => (
                <p key={index} style={{fontWeight: 'bold'}}>
                  {item.campaignName}: {item.quantity} x Rs {item.totalAmount}
                </p>
              ))}
            </div>
          </div> */}
          <div className="">
            {/* Left Column */}
            <div className="">
              <p style={{ fontSize: "18px" }}>
                <strong>Total Cart value: </strong>Rs {totalCartAmount}
                <br />
              </p>
              {
                <>
                    <div style={{
                          display:"flex",
                          justifyContent:"space-between",
                          alignItems:"center",
                          padding:"8px 12px",
                          cursor:"pointer",
                        }}  >
                    {
                      customAmount.map((amount,index)=>(
                        <div style={{
                           height:"40px !important ",
                          border:"1px solid orange",
                          padding:"8px 8px",
                          borderRadius:"5px",
                        }} 
                        onClick={()=> handleCustomAmountFix(index)}
                         key={index}>
                        <p style={{marginTop:"8px"}} >₹{amount.donationAmount}</p>
                        </div>
                      ))
                    }
                    </div>
                           <input 
                              type="number"
                              className="form-control form-control-lg text-center me-2 ip "
                              placeholder="Enter custom Amount"
                              onClick={handleNote}
                              onChange={(e) => handleCustomAmount(parseInt(e.target.value, 10) || 0)}
                              style={{ width: '100%', fontSize:'20px',color: 'black' }}
                            />
                            <div className={`amount-note ${note === true ? "show":"not-show" } `}
                                  >Minimum Donation amount should be Rs. 200</div> 
                           </>  
              }
              <button
                  className={`btn Add to cart ${buttonText === "Add Item to Donate" ? "glow" : ""}`}
                  onClick={handleButtonClick}
                  style={{
                    width:"100%",
                    background: "linear-gradient(to right, #ff9900, #ff6a00) #eb9006",
                    color: "white",
                    fontWeight: "bold",
                    fontSize:"18px",
                    marginTop: "20px",
                    // marginLeft: "50px",
                    // marginRight: "auto",
                    marginBottom:"50px",
                    borderRadius: "0",
                    alignSelf:"center",
                  }}
                >
                  {buttonText}
                  <span></span>
                </button>

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
     <div className="recent-donor-box" style={{ margin: "-40px 0px 0px 0px", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h4 className="recent text-center" style={{ fontSize: "15px", marginBottom: "20px" }}>Recent Donors</h4>
        <div className="donor-item" >
          <ul className="donors" >
            {recentDonors.map((donor, index) => (
              <div key={index} className="donor-detail" style={{ marginBottom: "-5px", marginLeft:"20px" ,padding: "5px", borderRadius: "10px", backgroundColor: "rgb(255 204 160)", display: "flex", alignItems: "center" }}>
                <div className="donor-img" style={{ marginRight: "10px" }}>
                  <img src={userImg} alt="User Image" loading="lazy" width="50px" style={{ borderRadius: "50%", border: "2px solid #fff" }} />
                </div>
                <div className="donor-info">
                  <p className="donor-name" style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>{donor.email || "Anonymous"}</p>
                  <p className="donor-date" style={{ fontSize: "14px", color: "#6c757d", margin: "5px 0 0 0" }}>{new Date(donor.createdAt * 1000).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>

    <div className="col-md-6 p-5">
            <iframe className="vid" width="300" height="200" src="https://www.youtube.com/embed/Ydj-Fz6UGwY?si=R22XoljvKxJU0nX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{marginLeft:'20px'}}></iframe>
          </div>
      </div>
      
  </div>
</div>
)}</>
          <div className="container donate-container-mobile py-3 text-center">
           <><input
                              type="number"
                              className="form-control form-control-lg text-center me-2 ip "
                              placeholder="Enter custom Amount"
                              onChange={(e) => handleCustomAmount(parseInt(e.target.value, 10) || 0)}
                              style={{ width: '80%', fontSize:'14px',color: 'black', }}
                            /></>
            <Link className="nav-link" to="/donate" aria-current="page">
            <button
              className="btn glow fw-bold"
              style={{ background: "yellow" }}
              onClick={handleButtonClick}
            >
              Donate Now - ₹{totalCartAmount}
            </button>    
            </Link>
          </div>
              </div>
            </div>
            
            <Faq/>
        </div>
        </div>
        <Footer/>
    </div>
  );
};
export default CampaignDetail;