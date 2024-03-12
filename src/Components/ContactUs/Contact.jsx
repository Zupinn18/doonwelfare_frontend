import React, { useState,useEffect } from "react";
import Footer from "../Footer/footer";
import "./contact.css"; // Import a CSS file for styling
import Phone from "../../assets/phone.png";
import Mail from "../../assets/mail.png";
import Location from "../../assets/location.png";

const infoData = [
  {
    image:`${Phone}`,
    title:"Helpline Number",
    desc:"+917900273333, +917900283333"
  },
  {
    image:`${Mail}`,
    title:"Email Us",
    desc:"doonanimalwelfarefoundation@gmail.com"
  },
  {
    image:`${Location}`,
    title:"Address",
    desc:"Shimla by pass road gram hasanpur dehradun near shivalik college.(248011) "
  }
]

const Contact=()=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(formData);
  };


  return (
   
    <>  
    <div className="container contact-form-container px-5 text-center mb-5">
      <h2 className="fw-bold text-dark horizontal-line">Contact Us</h2>
     
      <div className="content-container">
      <p className="fs-6 fw-bold">The organization is dedicated to managing and expanding the foundational structures of cow shelters and promoting their care with your support and compassion.</p>
      <br/>
      <p className="fs-6 ">संगठन गोशालाओं के मौलिक संरचना के प्रबंधन और विस्तार को बढ़ावा देने के लिए समर्थन और दयालुता के साथ संगठित है, और आपके सहयोग और सहानुभूति के साथ उनकी देखभाल को बढ़ावा देने का काम कर रहा है। </p>
      </div>
      <form onSubmit={handleSubmit} className="text-start">
        <div >
          <label className="fw-bold fs-6">Name:</label>
          </div>
          <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-5 py-1"
          />
        </div>
        <div>
          <label className="fw-bold fs-6">Email Address:</label>
          </div>
          <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-5 py-1"
          />
        </div>
        <div>
          <label className="fw-bold fs-6">Phone Number:</label>
          </div>
          <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-5 py-1"
          />
        </div>
        <div>
          <label className="fw-bold fs-6">Message:</label>
          </div>
          <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-5 py-4"
          />
        </div>
        <button className="btn text-light fw-bold glow my-3" type="submit" style={{background:"orange"}}>Submit</button>
        
      </form>
      <h3 className="fw-bold mt-3 text-center horizontal-line"></h3>
      <div className="container">
     
      <div className="row">
          <div className="info-main" >
              {
                infoData.map((item,index)=>(
                  <div key={index} className="info-card" style={{
                    background:"white",
                    borderRadius:"10px",
                    padding:"12px 18px",
                    width:"30%",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    gap:"2px"
                  }} >
                      <img src={item.image} width="60px" height="60px" />
                      <p  style={{
                        fontSize:"18px",
                        fontWeight:"bold"
                      }}
                      >{item.title }</p>
                      <p>{item.desc}</p>
                  </div>
                ))
              }
          </div>
       
                    {/* <div className="col-12 col-md-6 fw-bold fs-5 text-center mx-auto">
                    <p>Gaushala Shimla Bypass Road,<br/>
            Gram Hinduwala Sabhawala,</p>
            <p>Dehradun - 248197</p> */}
        {/* </div> */}
      </div>
    </div>
    </div>
    <Footer />
   </>
  );
};

export default Contact;
