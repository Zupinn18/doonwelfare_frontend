import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import './CampaignDetail.css';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import paytm from "../../assets/new_QrCode.jpeg";
import userImg from '../../assets/userImg.png';
import "../LandingPage/Langing.css";
import "../LandingPage/Campaign.css";

const CampaignDetail = () => {


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
    <div className='campaign-container' >
        <div>
            <Navbar/>
        </div>
        <div className='wrapper-campaign'>
            <div className='campaign-main' >
                {/* Content */}
                <div className='campaign-content' >
                    <div className='campagin-first' >
                        {/* campagin image */}
                        <img src={campaign[0]?.imageUrl} width='40%' style={{
                            marginTop:"150px",
                            alignSelf:"center"
                        }} />
                        {/* Campagin Title */}
                        <p className='campagin-title' >{campaign[0]?.title}</p>

                        {/* details */}
                        <div className='cards-campaign' >
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
                        </div>

                        {/* video */}
                        <iframe
                            width="80%"
                            height="400"
                            src="https://www.youtube.com/embed/snuAvoQRN_w"
                            frameBorder="0"
                            allowFullScreen
                            title="Doon Animal Welfare Trust Video"
                            style={{
                              alignSelf:"center"
                            }}
                          ></iframe>

                          {/* content-text */}
                          <div className='campagin-text' >
                            <p style={{
                              width:"100%",
                              textAlign:"justify",
                            }}
                            >{campaign[0]?.description}</p>
                            <img src={campaign[0]?.imageUrl} width='50%' style={{
                            alignSelf:"center",
                            marginBottom:"30px"
                            }} />
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
                        
                    </div>
                </div>
                {/* cart idhar */}
                <div className='campaign-cart' >
                
                </div>
            </div>
            <Faq/>
        </div>
        <Footer/>
    </div>
  )
}

export default CampaignDetail