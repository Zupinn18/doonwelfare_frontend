import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../Footer/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import doonlogo from "../../assets/doonlogo.webp";
import ProgressBar from "@ramonak/react-progress-bar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./Campaign.css";

const Campaign = () => {

  const { id } = useParams();
  const [list, setList] = useState(0);
  const [campaigns, setCampaigns] = useState([]);
  const buttonText = list === 0 ? "Add Item to Donate" : "Donate";
  const [customAmount, setCustomAmount] = useState(0);
  const [CampaignDetails, setCampaignDetails] = useState([]);
  const [campaignItems, setCampaignItems] = useState([]);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [itemQuantities, setItemQuantities] = useState({});
  const [inputCC,setInputCC] = useState(0);
  const [quickLinksCampaigns, setQuickLinksCampaigns] = useState([]);
  const [recentDonors, setRecentDonors] = useState([]);

  const navigate = useNavigate();
  const navigateAndReload = (campaignId) => {
    navigate(`/campaign/${campaignId}`);
    window.location.reload(); // This will reload the page
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateItemQuantity = (index, newQuantity) => {
    const newQuantities = [...itemQuantities];
    newQuantities[index] = newQuantity;
    setItemQuantities(newQuantities);
  };

  const donationBox = document.querySelector('.donation-box');
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', handleScroll);
  // Function to handle the scroll event
  function handleScroll() {
    // Get the position of the footer relative to the viewport
    const footerPosition = footer.getBoundingClientRect().top;
  
    // Determine when the scroll position reaches the footer
    if (footerPosition < window.innerHeight) {
      // Make the "donation-box" sticky
      donationBox.style.position = 'sticky';
      donationBox.style.bottom = '0';
    } else {
      // Remove sticky positioning
      donationBox.style.position = 'fixed';
    }
  }
  useEffect(() => {
    // Fetch campaigns and filter out the current open campaign
    const filteredCampaigns = campaigns.filter((campaign) => campaign._id !== id);
    // Take the first 3 campaigns for quick links
    const firstThreeCampaigns = filteredCampaigns.slice(0, 3);
    setQuickLinksCampaigns(firstThreeCampaigns);
    // ... (existing code)
  }, [campaigns, id]);
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get("https://ngo-node.onrender.com/api/campaigns");
      if (response.status === 200) {
        setCampaigns(response.data);
      }
      
    } catch (e) {
      console.log(e);
    }
  };
  
  const addItemToCart = (price) => {
    let totalAmount = list;
  campaignItems.forEach((item) => {
    const quantity = itemQuantities[item._id] || 0;
    totalAmount += parseFloat(item.amount) * quantity;
  });



  setList(totalAmount);
    
  };
  const increaseItemQuantity = (item) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));
  };

  const decreaseItemQuantity = (item) => {
    setItemQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item._id] || 0;
      if (currentQuantity > 0) {
        return { ...prevQuantities, [item._id]: currentQuantity - 1 };
      }
      return prevQuantities;
    });
  };
  
  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };
  
  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };
  const handleButtonClick = () => {
    if (buttonText === "Donate") {
      // Open an alert when the button text is "Donate"
      alert(`Donation Amount: ${list}`);
      localStorage.setItem("amount", list);
      navigate("/cart");
    } else {
      const itemsSection = document.getElementById("items");
  if (itemsSection) {
    itemsSection.scrollIntoView({ behavior: "smooth" });
  }
      // Handle other button functionality if needed
    }
  };

  const resetAmount = () => {
    setList(0);
    setCustomAmount(0);
  };


  const fetchCampaignDetails = async () => {
    try {
      const response = await axios.get(
        `https://ngo-node.onrender.com/api/campaigns/${id}`
      );
      if (response.status === 200) {
        setCampaignDetails(response.data);
        setList(response.data.amount || 0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCampaignItems = async () => {
    try {
      const response = await axios.get(
        "https://ngo-node.onrender.com/api/items"
      );
      
      if (response.status === 200) {
        const itemsForCampaign = response.data.filter(
          (item) => item.campaignId === id
        );
        setCampaignItems(itemsForCampaign);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const simulatedRecentDonors = [
      {
        id: 1,
        name: "Amit Patel",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Dehradun",
        amount: 50,
        date: "2023-10-20",
      },
      {
        id: 2,
        name: "Priya Sharma",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Bihar",
        amount: 25,
        date: "2023-10-19",
      },
      {
        id: 3,
        name: "Rajesh Kumar",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Delhi",
        amount: 100,
        date: "2023-10-18",
      },
      {
        id: 4,
        name: "Meena Gupta",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Mumbai",
        amount: 75,
        date: "2023-10-17",
      },
      {
        id: 5,
        name: "Suresh Singh",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Bihar",
        amount: 30,
        date: "2023-10-16",
      },
      {
        id: 6,
        name: "Neha Verma",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Delhi",
        amount: 60,
        date: "2023-10-15",
      },
      {
        id: 7,
        name: "Vikram Singh",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Mumbai",
        amount: 40,
        date: "2023-10-14",
      },
      {
        id: 8,
        name: "Pooja Malhotra",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Delhi",
        amount: 55,
        date: "2023-10-13",
      },
      {
        id: 9,
        name: "Sanjay Khanna",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Delhi",
        amount: 70,
        date: "2023-10-12",
      },
      {
        id: 10,
        name: "Kavita Sharma",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Delhi",
        amount: 35,
        date: "2023-10-11",
      },
      {
        id: 11,
        name: "Arun Joshi",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Delhi",
        amount: 85,
        date: "2023-10-10",
      },
      {
        id: 12,
        name: "Deepika Verma",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        location: "Delhi",
        amount: 45,
        date: "2023-10-09",
      },
      // Add more donor objects with "amount" and "date" properties as needed
    ];
    
    

    // Update the state with the simulated recent donor data
    setRecentDonors(simulatedRecentDonors);
    fetchCampaignDetails();
    fetchCampaignItems();
    fetchCampaignamount();
    fetchCampaigns();
  }, []);
  return (
    <>
      
      <nav className={`navbar navbar-expand-lg ${navbarBackground} fixed-navbar`} style={{ fontSize: "22px", backgroundColor: "#f7f7f7", transition: "background-color 0.3s" }}>
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img className="img" src={doonlogo} style={{ height: "80px" }} alt="" />
    </Link>
    <div className="navbar-center">
      <Link className="navbar-brand logo" to="/">
        <img src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699429780/omj1vcbbqz6xgvczpq1b.webp" className="img" style={{ height: "80px", filter: "drop-shadow(2px 4px 6px black)" }} alt="" />
      </Link>
    </div>
    <div className="col-md-12 text-center">
            <h3 style={{ fontWeight: 700, color: "black" }}>
              Campaign Amount: ₹{CampaignDetails.amount || 0}
            </h3>
          </div>
    <div className="ml-auto">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/donate" aria-current="page">
            <a className="nav-link donate-button" href="#" style={{ backgroundColor: "#FE6104", color: "white", padding: "5px 10px", borderRadius: "5px", fontWeight: 700, animation: "glow 1s infinite alternate", transition: "transform 1s, box-shadow 2s", boxShadow: "0px 0px 10px rgba(255, 165, 0, 0.8)" }}>
              Donate Now
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>






      <div className="main-section pb-5" style={{ backgroundColor: "#FFEDDE"}}>
        <div className="container mt-0 mt-md-5 pt-md-1">
          <p className="fw-bold fs-2 mt-0  mt-md-5 pt-5">
            {/* <span style={{ fontSize: "18px", color: "red", }}>
            जहां गायें खुश हैं, वहां धन अधिक होता है। जहां गायों को दुख होता है, वहां धन कम होता है।<br></br>
            </span> */}
            {CampaignDetails?.title}
          </p>

          <img className="col-md-8" src={CampaignDetails?.imageUrl} alt="" />
        </div>

        <div id="items"  className="row m-0">
          <div className="col-md-8 ">
            <div className="container mt-5">
            <div className="row m-0">
            {
              CampaignDetails?.title == "Ambulance"? 
               <div className="container">
                <div className="row bg-light pt-5 mt-5 text-center ambulanceitem">
                  <img className="ambu-img" src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699443308/kp1cvvfklbql8jkj56by.webp" alt="" />
                  <h3 style={{fontWeight:"700",marginTop:"10px"}}>Ambulance</h3>
                  <p style={{fontWeight:"700",marginTop:"10px",lineHeight:"1.5"}}>You an help in saving lives by donating an amount for the ambulance.<br></br> You can donate an amount to help us ensuring this continuing ambulance service</p>
                  <div className="p-3 m-0" style={{backgroundColor:"lightgray"}}>
                  <p style={{fontWeight:"700"}}>Rs33333 Amount Recieved Out of Rs1170000</p>
                  <div className="px-5">
                  <ProgressBar completed={10} maxCompleted={100}barContainerClassName="contain" ></ProgressBar>
                  </div>
                  </div>
                  <div className="container mt-5 text-center">
                  <button className="btn glow me-5" style={{backgroundColor:"yellow"}}
                  onClick={()=>{
                    let amount = list + 1100;
                    setList(amount);
                  }}>
                    Rs1100/Package
                  </button>
                  <input className="mt-3" type="number" placeholder="Enter Amount" onChange={(e)=>setInputCC(parseFloat(e.target.value))}/>
                  <button className="btn my-3 bg-primary text-light fw-bold" onClick={()=>{
                    let am = list + inputCC;
                    setList(am);
                  }}>Add Custom Amount</button>
                  </div>
                  
                  
                  
                </div>
                </div>
            
              : 
              campaignItems?.map((item, index) => (
                <div className="col-md-5 p-2 m-2 border bg-light" key={item._id}>
                  <div className="d-flex row gap-2">
                    <div className="box-image">
                      <img
                        className="img-fluid"
                        style={{ height: "300px", width: "100%" }}
                        src={item.imageUrl}
                        alt="Box 1"
                      />
                    </div>
                    <div className="box-content">
                      <p className="fw-bold fs-5 name">{item.name}</p>
                      <p className="description">{item.description}</p>
                      <div className="mt-1 justify-content-center">
                        <button
                          className="btn "
                          onClick={() => increaseItemQuantity(item)}
                          style={{ backgroundColor: "red", color: "white", marginRight: "10px" }}
                        >
                          +
                        </button>
                        {itemQuantities[item._id] || 0}
                        <button
                          className="btn "
                          onClick={() => decreaseItemQuantity(item)}
                          style={{ backgroundColor: "blue", color: "white", marginLeft: "10px" }}
                        >
                          -
                        </button>
                        
                        <button
                          className="btn mob-btn glow"
                          onClick={() =>
                            addItemToCart(parseFloat(item.amount) * (itemQuantities[item._id] || 0))
                          }
                          style={{ backgroundColor: "red", color: "white", marginLeft: "30px" }}
                        >
                        Donate | Rs {parseFloat(item.amount) * (itemQuantities[item._id] || 0)}
                        </button>
                      </div>
                      <div className="mt-3 custom">
                        <input
                          type="number"
                          onChange={(e) => setCustomAmount(parseFloat(e.target.value))}
                          placeholder="Custom Amount" 
                        />
                        <button
                          className="btn mt-2 text-center"
                          onClick={() => {
                            let newamount = customAmount + list;
                            setList(newamount);
                          }}
                          style={{ backgroundColor: "rgb(235, 235, 6)", color: "black", marginLeft: "10px" }}
                        >
                          Donate Custom Amount
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              
            }
  
</div>

            </div>

            <div className="container mt-5 text-center" style={{ position: "relative",margin:"0 auto" }}>
            <div id="top">
  <header class="ribbon-container">
    <h2 class="ribbon">
      <a class="ribbon-content text-light fw-bold">  Sheltering Thousands of Helpless Animals</a>
    </h2>
  </header>
</div>
<div id="top" className="mt-3">
  <header class="ribbon-container">
    <h2 class="ribbon">
      <a class="ribbon-content text-light fw-bold "> Providing Over 30 Lakh KG of Fodder Monthly</a>
    </h2>
  </header>
</div>
<div id="top" className="mt-3">
  <header class="ribbon-container">
    <h2 class="ribbon">
      <a class="ribbon-content text-light fw-bold ">  Committed to Animal Welfare, Not Milk Sales</a>
    </h2>
  </header>
</div>
<div id="top" className="mt-3">
  <header class="ribbon-container">
    <h2 class="ribbon">
      <a class="ribbon-content text-light fw-bold">   Government-Certified and Approved Organization</a>
    </h2>
  </header>
</div>

</div>

    <div className="container mt-5 text-center">
      <div className="scanner bg-light"style={{borderRadius:"12px"}}>
      <div className="row text-center  p-5">
      <h2 style={{fontWeight:"700",color:"black"}}>Scan and Pay</h2>
      <p style={{fontWeight:"700"}}>Scan below QR & Donate using<br/>
                                    Google Pay, PhonePe, Paytm or UPI</p>
      <img src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699418779/toxchp7gvg2wvdvvwpaq.jpg" alt="" style={{height:"auto",width:"240px",textAlign:"center", margin:"0 auto",border:"2px solid black"}}/>
      <p className="mt-3"><span style={{fontWeight:"700"}}>Upi ID :</span> 9634047935@ybl</p>
      <p><span style={{fontWeight:"700"}}>Upi Number:</span> 9634047935</p>
      <div className="row mt-3 text-center">
        <div className="col text-center"><img className="m-0 p-0" src="https://www.doghomefoundation.com/wp-content/themes/ngo/images/phonepe-upi.svg" alt="" style={{width:"50px",filter:" drop-shadow(2px 4px 6px black)"}}/></div>
        <div className="col text-center"><img className="m-0 p-0" src="https://www.doghomefoundation.com/wp-content/themes/ngo/images/gpay-upi.svg" alt="" style={{width:"50px",filter:" drop-shadow(2px 4px 6px black)"}}/></div>
        <div className="col text-center"><img className="m-0 p-0" src="https://www.doghomefoundation.com/wp-content/themes/ngo/images/bhim-upi.svg" alt="" style={{width:"50px",filter:" drop-shadow(2px 4px 6px black)"}}/></div>
        <div className="col text-center"><img className="m-0 p-0" src="https://www.doghomefoundation.com/wp-content/themes/ngo/images/paytm.svg" alt="" style={{width:"50px",filter:" drop-shadow(2px 4px 6px black)"}}/></div>
       
      </div>
      </div>
      </div>
    </div>
            {/* Cause section */}
            {
               CampaignDetails?.title == "Ambulance"? <div className="container mt-5">
              <div className="container mt-5">
  <p className="fw-bold fs-2" style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>
    Our Ambulance
  </p>
  
  <p>
    We have undertaken significant financial responsibilities, and we are in dire need of your help. The expenses we have incurred include:
  </p>

  <ul>
    <li>
      <strong>Ambulance Charges:</strong> We've spent a staggering 920,000 on ambulance services, which are essential for providing emergency medical assistance to those in need. Our ambulances are often the first responders in times of crisis, and we must ensure they are well-equipped and fully operational.
    </li>
    <li>
      <strong>Hydraulic Charges:</strong> To maintain our fleet of vehicles and ensure their safety, we have invested 200,000 in hydraulic maintenance. These vehicles are essential for transporting patients safely and efficiently, and their reliability is non-negotiable.
    </li>
    <li>
      <strong>RTO (Road Transport Office) Expenses:</strong> A sum of 50,000 has been spent on meeting the legal requirements and necessary permits for our vehicles. This ensures that we can continue to operate within the boundaries of the law while providing vital services to our community.
    </li>
  </ul>

  <p>
    The total amount of these expenses is a substantial 1,170,000, and it has placed a considerable strain on our organization's finances. We are proud of the work we do in our community, but we are currently facing a financial shortfall that threatens our ability to continue providing these crucial services.
  </p>

  <p>
    This is where we humbly request your support. Your generous donation can make a significant difference in helping us cover these expenses and continue our mission to save lives and serve those in need. Every contribution, no matter the size, is greatly appreciated and will go directly towards these vital vehicle expenses.
  </p>
</div>

               
              
             </div>:<div className="container mt-5">
               <p className="fw-bold fs-2" style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>
                { (id == "6571c72e00fc94b3a8a81ea5")? "This Winter, Help Them Keep Thousands Of Gaumatas Warm ":"Our Cause: A Better Life for Animals"}
               </p>
               
               <p style={{ textAlign: "justify" }}>
               { (id == "6571c72e00fc94b3a8a81ea5")? "As winter approaches and we find warmth and comfort in our homes, we often forget about those on the streets who are struggling to make it through the day. Especially those who can’t even express the pain and discomfort they are in - animals. Doon animal welfare Trust now wants to continue its service by helping thousands of cows get blankets this winter. These blankets will protect them from the harsh and bitter cold and help them stay safe even on the streets. They helped over 1000 cows get blankets last winter, and this time, they want to do more with your support. Winter has already begun and it’s only going to get older now, which means all the cows on  shelter will have to brave the cold. We don’t want them to suffer through these few months, and with your support, we can reach out to so many more cows in need.Donate blankets for cows today to give these voiceless and innocent animals a safe winter. Let them not struggle in the bitter cold any longer. You can be the reason they survive. Cows are God, te ever-giving nourisher who helps sustain life. Our gaumata deserves to be treated with respect and dignity. Unfortunately, so many of them are left to fend for themselves when they are old, injured or sick. At Doon animal welfare Trust, we do our best to ensure no cow in Dehradun is left helpless":
               "At the heart of our mission lies a deep commitment to ensuring a better life for animals. We believe in a world where every creature, no matter how big or small, deserves to live in safety, comfort, and with the opportunity to thrive. Our organization is dedicated to safeguarding the welfare of animals, from the tiniest of insects to majestic wildlife and cherished pets. We advocate for their rights, provide essential care, and strive to create a society where compassion and empathy for animals are at the forefront. Each day, countless animals face adversity, from the perils of abandonment and abuse to the challenges of finding food and shelter in an unforgiving world. We stand as a beacon of hope for these voiceless beings, working tirelessly to rescue, rehabilitate, and rehome those in need. Our efforts extend beyond immediate rescue; we endeavor to foster a profound change in attitudes and behaviors towards animals. Through education, awareness campaigns, and community engagement, we seek to inspire empathy and kindness towards animals. We believe that by nurturing a sense of responsibility and respect for all living creatures, we can build a more compassionate society where animals are cherished companions, not forgotten or discarded. Our cause is a testament to the belief that our world is interconnected, and the well-being of animals is intricately linked to the well-being of humanity. We invite you to join us on this remarkable journey towards a brighter, more compassionate future for animals, where they can live the lives they truly deserve. Together, we can make a profound difference and create a world where animals can experience the love, care, and respect that is their birthright."}
                
               </p>
             </div>
            }
           

            {/* Video section */}
            {  CampaignDetails?.title == "Ambulance"?  <div className="container mt-5">
              <p className="fw-bold fs-2"style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>Watch Our Impact</p>
            
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="w-100 embed-responsive-item"
                  src="https://www.youtube.com/embed/snuAvoQRN_w"
                  title="Doon animal welfare foundation introduction (uttrakhand 2nd largest gaushala)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  style={{ height: "400px" }}
                ></iframe>
              </div>
            </div> : <div className="container mt-5">
              <p className="fw-bold fs-2"style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>Watch Our Impact</p>
            
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="w-100 embed-responsive-item"
                  src="https://www.youtube.com/embed/snuAvoQRN_w"
                  title="Doon animal welfare foundation introduction (uttrakhand 2nd largest gaushala)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  style={{ height: "400px" }}
                ></iframe>
              </div>
              <p>
                India is home to more than 19.34 million stray cattle. We're
                dedicated to making their lives better.
              </p>
            </div>

            }
          

            {/* What We Do section */}
            <div className="container mt-5">
              <p className="fw-bold fs-2" style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>Our Commitment to Animal Welfare</p>
              
              <p >
                At the core of our organization lies an unwavering dedication to
                the cause of animal welfare. We are committed to upholding the
                rights and well-being of animals in every corner of the world.
                Our mission is not just a statement but a way of life, one that
                reflects our profound belief in the intrinsic value of all
                living beings. We stand as guardians of those who cannot speak
                for themselves, tirelessly advocating for their rights, safety,
                and protection. Our commitment extends to every facet of animal
                welfare, from rescuing and rehabilitating abused and abandoned
                animals to championing legislative changes that provide them
                with legal safeguards. We work tirelessly to ensure that animals
                have access to shelter, food, medical care, and love. We foster
                a culture of empathy and compassion, striving to educate society
                about the importance of treating animals with kindness and
                respect. We recognize that the path to comprehensive animal
                welfare is a collective effort, and we collaborate with
                like-minded individuals, organizations, and communities to drive
                positive change. Our commitment transcends borders, and we work
                relentlessly to address the unique challenges that animals face
                in different environments and contexts. Through our unwavering
                dedication, we aspire to create a world where animals are no
                longer subjected to cruelty, exploitation, or neglect. Our
                commitment to animal welfare is not just a promise but a
                lifelong journey, and we invite all who share our values to join
                us in making this vision a reality. Together, we can be the
                voice for those who cannot speak and ensure a brighter, more
                compassionate future for all creatures, great and small.
              </p>
            </div>

            {/* Gallery section */}
            { CampaignDetails?.title == "Ambulance"? 
            <div className="container mt-5">
            <p className="fw-bold fs-2" style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>Photo Gallery</p>
           
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide style={{padding:"10px 100px"}}>
                <img className="w-100 " src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699430509/tzc5zklln59wnpcqamdj.webp" alt="" style={{height:"500px" ,width:"auto"}}/>
              </SwiperSlide>
              <SwiperSlide style={{padding:"10px 100px"}}>
                <img className="w-100" src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699430824/uwefagna4pjv2jtiw5e4.webp" alt="" style={{height:"500px" ,width:"auto"}}/>
              </SwiperSlide>
              <SwiperSlide style={{padding:"10px 100px"}}>
                <img className="w-100" src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699430873/j2jh7fqskyefdu5k6yjz.webp" alt="" style={{height:"500px" ,width:"auto"}}/>
              </SwiperSlide>
             
            </Swiper>
          </div>
          : <div className="container mt-5">
              <p className="fw-bold fs-2" style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>Photo Gallery</p>
             
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                
              >
                <SwiperSlide>
                  {
                    (id == "6571c72e00fc94b3a8a81ea5")?   <img className="w-100 " src="https://res.cloudinary.com/dfwct3edy/image/upload/v1703170171/IMG_20231207_200449_x9ccpf.jpg" alt="" /> :   <img className="w-100 " src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699443581/ttriknaxihm8pl18x4kl.webp" alt="" />
                  }
                 
                </SwiperSlide>

                <SwiperSlide>
                {
                    (id == "6571c72e00fc94b3a8a81ea5")?   <img className="w-100 " src="https://res.cloudinary.com/dfwct3edy/image/upload/v1703170172/IMG_20231207_200717_ef9zhx.jpg" alt="" /> :   <img className="w-100 " src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699443683/izpnieo5kjwsmpekceuz.webp" alt="" />
                  }

                </SwiperSlide>
                <SwiperSlide>
                {
                    (id == "6571c72e00fc94b3a8a81ea5")?   <img className="w-100 " src="https://res.cloudinary.com/dfwct3edy/image/upload/v1703170172/IMG_20231207_200821_imhgbj.jpg" alt="" /> :   <img className="w-100 " src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699430873/j2jh7fqskyefdu5k6yjz.webp" alt="" />
                  }

                </SwiperSlide>
               
              </Swiper>
            </div>}
            

            {/* About Us section */}
            <div className="container mt-2">
              <p className="fw-bold fs-2" style={{color:"#FF6400",borderBottom:"3px dotted #FF6400"}}>About Us</p>
        
              <p style={{ textAlign: "justify" }}>
                At DOON ANIMAL WELFARE FOUNDATION, our story is woven into the tapestry of
                support for animal welfare. Founded on the principles of
                compassion and commitment, we are a beacon of hope for animals
                in need. Our journey began with a simple yet profound
                realization – that every living being, regardless of its
                species, deserves love, care, and protection. We are not just an
                organization; we are a community of animal lovers, advocates,
                and champions. Our purpose is clear: to stand as a united force
                against cruelty and indifference towards animals. We firmly
                believe that our world becomes a better place when we extend our
                care and empathy to all its inhabitants, including our furry,
                feathered, and finned friends. Our mission is multifaceted. We
                rescue and rehabilitate animals in distress, providing them with
                a second chance at life. We work tirelessly to create awareness
                about animal welfare, educating individuals and communities on
                the importance of treating animals with kindness and respect.
                Through advocacy and outreach, we strive to influence policies
                and practices that safeguard animal rights. Our commitment to
                animal welfare is unwavering, and it finds expression in every
                initiative we undertake. We collaborate with like-minded
                organizations, volunteers, and supporters who share our passion
                for creating a more compassionate world. Together, we form a
                powerful alliance that drives change, inspires empathy, and
                nurtures a brighter future for animals. As we move forward on
                our journey, we invite you to be a part of our mission. Join us
                in supporting animal welfare, for together, we can create a
                world where animals live free from suffering and experience the
                love and care they so rightfully deserve.
              </p>
            </div>

            <div className="container  mt-5">
            <p className="fw-bold fs-2" style={{ color: "#FF6400", borderBottom: "3px dotted #FF6400" }}>
    Certificate 
  </p>
  <div className="row">
                <div className="col-md-3 cert"> <img  src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699431027/mbzqkcelpg9joajpaexg.webp" alt="" /></div>
                <div className="col-md-3  cert"> <img src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699431085/n5pxlwmaqcjec2u2are5.webp" alt="" /></div>
                <div className="col-md-3 cert"> <img src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699431174/bxuaqapi4inlcokfpmtp.webp" alt="" /></div>
                <div className="col-md-3 cert"> <img src="https://res.cloudinary.com/dfwct3edy/image/upload/v1700335186/WhatsApp_Image_2023-11-07_at_5.28.26_PM_n8qdza.jpg" alt="" /></div>
                 </div>

              </div>

              <div className="container ">
  <p className="fw-bold fs-2" style={{ color: "#FF6400", borderBottom: "3px dotted #FF6400" }}>
    Top Donors
  </p>
  <div className="donors-container">
    <div className="row donors-row">
      {recentDonors.map((donor) => (
        <div key={donor.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="p-1 text-center" style={{ background: "rgb(254, 97, 4)", borderRadius: "12px", color: "white" }}>
            <h5 className="mt-2 p-0 m-0">{donor.name} (Rs {donor.amount})</h5>
            <p className="p-0 m-0">
              <span style={{ fontWeight: "bold" }}>{donor.location}</span> | {donor.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



              <div className="container ">
  <p className="fw-bold fs-2 mt-" style={{ color: "#FF6400", borderBottom: "3px dotted #FF6400" }}>
    Recent Donors
  </p>
  <div className="donors-container">
    <div className="row donors-row">
      {recentDonors.map((donor) => (
        <div key={donor.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="p-1 text-center " style={{ background: "rgb(254, 97, 4)", borderRadius: "12px", color: "white" }}>
         
         
          <h5 className="mt-2 p-0 m-0">{donor.name} (Rs {donor.amount})</h5>
            <p className="p-0 m-0"><span style={{fontWeight:"bold"}}>{donor.location}</span> | {donor.date}</p>
      
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    

          </div>
          

          <div className="col-md-4 m-0 p-0 donation-box" style={{position:"fixed",right:0,top:200,zIndex:1}}>
            <div
              className="p-3 border bg-light"
              style={{ margin: "10px 80px 0px 0px" }}
            >
              <div className="d-flex row gap-2" >
                <div className="box-image">
                  <span
                    style={{
                      color: "red",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    Tax exempted under section 80G(5)(iii) of Income tax registration No AAICD1894QF20206
                  </span><br/>Hooves in Harmony, Hearts in Devotion: Serving Cows, Our Lifelong Commitment
                </div>
                <div className="box-content">
                
                  <div class="cmn-sidebar bg-white border p-2 ">
                  
                    <div class="d-flex align-items-center payment-option">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                    <h6 className="text-center glow" style={{fontWeight:700, borderRadius:"50%", padding:"15px 5px 25px 5px",border:"4px solid gray", borderRight:"4px solid yellow",borderTop:"4px solid yellow" }}>20% <br></br><span>completed</span> </h6>
                    </div>
                    <div className="col-md-4">
                    <h6 className="text-center ps-5" style={{fontWeight:700}}>January 2024 <br></br><span>Month</span></h6></div>
                    <div className="col-md-4">
                  { 
                    (id == '6571c72e00fc94b3a8a81ea5') ?  <h6 className="text-center ps-5" style={{fontWeight:700}}>2000 Blanket <br></br> <span> Total  Required</span></h6> : <h6 className="text-center ps-5" style={{fontWeight:700}}>20 Lakh KG <br></br> <span> Total Fodder Required</span></h6>
                  }
                    {/* <h6 className="text-center ps-5" style={{fontWeight:700}}>20 Lakh KG <br></br> <span> Total Fodder Required</span></h6> */}
                    </div>
                    </div>
                    </div>
                    </div>
                  </div>
                  <p className="fw-bold fs-3">Items Added to Cart</p>
                  <p style={{fontSize:"18px"}}>
                    <strong>Cart value : </strong>Rs {list}
                  </p>
                  <button
                    className= {`btn Add to cart  ${buttonText === "Add Item to Donate" ? "glow" : ""}`}
                    onClick={handleButtonClick}
                    style={{ backgroundColor: "#ebeb06", color: "Black", fontWeight: "bold" }}
                  >
                    {buttonText}
                  </button>
                  {/* Conditionally render another button if buttonText is "Donate" */}
                  {buttonText === "Donate" && (
                    <button
                      className="btn Add to cart mx-3"
                      onClick={resetAmount}
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>

              <div className="container">
            
                <div className="row">
                <h4 className="mt-3">Quick Links</h4>
                {quickLinksCampaigns.map((campaign) => (
                <div
                  key={campaign._id}
                  className="col-md-3 p-0 mx-2"
                  onClick={() => navigateAndReload(campaign._id)}
                >
                  <img
                    src={campaign.imageUrl} // Replace with your image URL
                    alt={campaign.title}
                    height="80px"
                  />
                  <div>
                    <p className="text-center mt-3" style={{ fontWeight: 700 }}>
                      {campaign.title}
                    </p>
                  </div>
                </div>
              ))}


                </div>
                </div> 
          </div>

          <div className="text-center mobile-donate" style={{position:"fixed",bottom:0,padding:"20px"}}>
          {/* <p className="fw-bold fs-3">Items Added to Cart</p> */}
                  <p style={{fontSize:"20px"}}>
                    <strong>Cart value : </strong>Rs {list}
                  </p>
                  <button
                    className={`btn Add to cart  ${buttonText === "Add Item to Donate" ? "glow" : ""}`}
                    onClick={handleButtonClick}
                    style={{ backgroundColor: "yellow", color: "black",fontWeight: "bold" }}
                  >
                    {buttonText}
                  </button>
                  {/* Conditionally render another button if buttonText is "Donate" */}
                  {buttonText === "Donate" && (
                    <button
                      className="btn Add to cart mx-3"
                      onClick={resetAmount}
                      style={{ backgroundColor: "red", color: "white" }}
                    >
                      Reset
                    </button>
                  )}
          </div>

         

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Campaign;
