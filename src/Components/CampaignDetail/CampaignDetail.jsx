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
                        <img src={campaign[0]?.imageUrl} width='80%' style={{
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
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/snuAvoQRN_w"
                            frameBorder="0"
                            allowFullScreen
                            title="Doon Animal Welfare Trust Video"
                          ></iframe>

                          {/* content-text */}
                          <div className='campagin-text' >
                            <p>{campaign[0]?.description}</p>
                            <img src={campaign[0]?.imageUrl} width='60%' style={{
                            marginTop:"150px",
                            alignSelf:"center"
                            }} />
                            <p>
                            Join our animal welfare association's campaign to protect and advocate for the well-being of all animals. 
                            Through our initiatives, we strive to promote responsible pet ownership by encouraging adoption from shelters 
                            and advocating for spaying and neutering programs to control the population of stray animals. Our campaign 
                            also focuses on <b>educating communities</b> about the proper care and treatment of pets, including providing resources 
                            for nutrition, exercise, and healthcare. Furthermore, we actively lobby for stronger laws and regulations to 
                            prevent animal cruelty and exploitation, ensuring that every creature is treated with compassion and respect. 
                            By joining our cause, you become the voice for those who cannot speak for themselves, helping to create a world 
                            where animals live free from harm and neglect. Make a difference today and stand with us in our mission to 
                            protect the paws and claws of all creatures, great and small.
                            </p>
                          </div>
                        
                    </div>
                </div>
                {/* cart idhar */}
                <div className='campaign-cart' >
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
        margin: "0px 40px 10px 20px",
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
    <div className="col-md-6">
            <iframe className="vid" width="300" height="200" src="https://www.youtube.com/embed/Ydj-Fz6UGwY?si=R22XoljvKxJU0nX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{marginLeft:'20px'}}></iframe>
          </div>
      </div>
      
  </div>
  
)}
</div>
                </div>
            </div>
            <Faq/>
        </div>
        <Footer/>
    </div>
  )
}

export default CampaignDetail