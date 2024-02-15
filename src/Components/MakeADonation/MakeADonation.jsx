import {React,useEffect} from 'react';
import Footer from "../Footer/footer";
import Cart from "../Cart/Cart";
import image from "../../assets/A2100591.webp"; // Replace with your image URL

const MakeADonation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="pt-5 bg-dark">
        <div className="container-fluid mt-5" style={{backgroundColor:"#ffedde"}}>
        <div className="row">
          <div className="col-md-8 p-5">
            {/* Image and text section */}
            <h2 className="mb-3 text-dark" style={{ fontWeight: 700 }}>
              Your Support Matters
            </h2>
            <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
              <div className="mb-4">
                <img
                  src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699439885/jz8jaes1ecljva4v2unf.webp"
                  alt="Adopt Animals"
                  className="img-fluid"
                  style={{ maxWidth: "80%", borderRadius: "12px" }}
                />
              </div>
              <div>
                <p style={{ fontWeight: 400, fontSize: "18px" }}>
                  At Doon Animal Welfare Foundation, we are committed to the well-being and protection of animals. Your generous donations play a crucial role in helping us fulfill this mission. When you donate to animal welfare, you're not just giving money; you're giving hope, care, and a chance at a better life to animals in need.
                </p>
                <div className="mt-4">
              <h3 className="mb-3 text-dark" style={{ fontWeight: 700 }}>
                Why Donate to Animal Welfare?
              </h3>
              <ul>
                <li>
                  <strong>Save Lives:</strong> Your donation directly contributes to saving and improving the lives of animals. It helps provide food, shelter, medical care, and essential resources to animals who have suffered neglect, abandonment, or abuse.
                </li>
                <li>
                  <strong>Support Rescues:</strong> We work tirelessly to rescue animals from distressing situations, whether they are homeless, injured, or facing other challenges. Your donation empowers us to continue these rescue efforts.
                </li>
                <li>
                  <strong>Promote Responsible Ownership:</strong> Education and awareness programs are essential for encouraging responsible pet ownership and preventing cruelty to animals. Your contribution supports these vital initiatives.
                </li>
                <li>
                  <strong>Create a Better World:</strong> Your donation not only benefits individual animals but also contributes to building a more compassionate society. It sends a powerful message that we care about the welfare of all living beings.
                </li>
              </ul>
            </div>
            
            {/* How Your Donation Helps */}
            <div className="mt-4">
              <h3 className="mb-3 text-dark" style={{ fontWeight: 700 }}>
                How Your Donation Helps
              </h3>
              <ul>
                <li>
                  <strong>Food and Nutrition:</strong> Your support ensures that animals in our care receive nutritious meals, promoting their health and well-being.
                </li>
                <li>
                  <strong>Medical Care:</strong> Donations help cover the costs of veterinary care, vaccinations, spaying and neutering, and treatment for injured or sick animals.
                </li>
                <li>
                  <strong>Shelter:</strong> We provide safe and comfortable shelter for animals awaiting adoption. Your donation helps maintain these facilities.
                </li>
                <li>
                  <strong>Rescue Operations:</strong> When disasters strike or animals are in immediate danger, your donation enables us to launch rescue operations and provide urgent assistance.
                </li>
                <li>
                  <strong>Education and Advocacy:</strong> Donations support educational programs that teach the importance of kindness and respect for animals, fostering a culture of empathy and compassion.
                </li>
              </ul>
            </div>
                {/* Add more text as needed */}
              </div>
            </div>

            {/* Why Donate to Animal Welfare? */}
            
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

export default MakeADonation;
