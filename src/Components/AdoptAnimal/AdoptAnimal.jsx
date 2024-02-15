import {React,useEffect} from 'react';
import Footer from "../Footer/footer";
import Cart from "../Cart/Cart";
import image from "../../assets/A2100809.webp"; // Replace with your image URL

const AdoptAnimal = () => {
  return (
    <>
    
      <section className="pt-5 bg-dark" >
        <div className="container-fluid mt-5" >
        <div className="row"  style={{backgroundColor:"#ffedde"}}>
          <div className="col-md-8 p-5"> 
            {/* Image and text section */}
            <h2 className="mb-3 text-dark" style={{fontWeight:700}}>Adopt a Cow</h2>
            <div style={{background:"white", padding:"20px", borderRadius:"12px"}}>
            <div className="mb-4">
              <img
                src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699443931/taqsdbaepc1p5qrxybni.webp"
                alt="Adopt Animals"
                className="img-fluid"
                style={{ maxWidth: "80%",borderRadius: "12px"}}
              />
            </div>
            <div>
              <p style={{fontWeight:400, fontSize:"18px"}}>
              At Doon Animal Welfare Foundation, we believe that every animal deserves love, care, and a second chance at life. Our "Adopt a Cow" program provides you with a unique opportunity to make a meaningful impact on the lives of these gentle, intelligent creatures.
              </p>
              <br></br>
              <p style={{fontWeight:700, fontSize:"18px"}}>
              Why Adopt a Cow?
              </p>
              <p style={{fontWeight:400, fontSize:"18px"}}>
              <span style={{fontWeight:700, fontSize:"18px"}} >1. Provide a Loving Home:</span> When you adopt a cow, you offer them a safe and loving environment. Many of these cows have faced neglect or mistreatment in the past, and your support gives them a chance to experience care and compassion.
<br />
<br/><span style={{fontWeight:700, fontSize:"18px"}} >
2. Ensure Proper Care:</span> Your contribution goes towards providing essential care, including nutritious food, clean water, and regular veterinary check-ups. It ensures that they live a healthy and comfortable life.
<br />
<br/><span style={{fontWeight:700, fontSize:"18px"}} >
3. Support Animal Welfare: </span>By adopting a cow, you actively support our mission to protect and improve the welfare of all animals. Your commitment helps us continue our efforts to rescue and care for animals in need.
              </p>
              
              <br></br>
              <p style={{fontWeight:700, fontSize:"18px"}}>
              The Adoption Process
              </p>
              <p style={{fontWeight:400, fontSize:"18px"}}>
              <span style={{fontWeight:700, fontSize:"18px"}} >1. Choose Your Cow: </span>  Browse through our selection of cows available for adoption. Each cow has its unique personality and story. You can select the one that resonates with you the most.<br />
<br/><span style={{fontWeight:700, fontSize:"18px"}} >
2. Make a Contribution:</span> Your adoption fee helps cover the costs of food, shelter, and medical care for your chosen cow. It is a vital part of their well-being.
<br />
<br/><span style={{fontWeight:700, fontSize:"18px"}} >
3. Receive Updates:</span>As an adopter, you'll receive regular updates and photos of your cow's progress. You'll get to witness the positive changes your support brings to their life.
              <br></br><br></br>
              <span style={{fontWeight:700, fontSize:"18px"}} >4. Visit Your Cow:</span> If you wish, you can schedule visits to our shelter to spend time with your adopted cow. It's a rewarding experience to see the direct impact of your support.</p>
              
              
              {/* Add more text as needed */}
            </div>
            </div>
          </div>
          <div className="col-md-4 p-5 mt-5">
            <Cart />
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdoptAnimal;
