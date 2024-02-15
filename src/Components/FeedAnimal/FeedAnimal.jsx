import {React,useEffect} from 'react';
import Footer from "../Footer/footer";
import Cart from "../Cart/Cart";
import image from "../../assets/A2100712.webp"; // Replace with your image URL

const FeedAnimal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-dark pt-5">
        <div className="container-fluid mt-5" style={{ backgroundColor: "#ffedde" }}>
          <div className="row">
            <div className="col-md-8 p-5">
              {/* Image and text section */}
              <h2 className="mb-3 text-dark" style={{ fontWeight: 700 }}>
                Feed the Animals
              </h2>
              <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
                <div className="mb-4">
                  <img
                    src="https://res.cloudinary.com/dpfgbij4e/image/upload/v1699442946/lwnsy9khiijguolgjwnk.webp"
                    alt="Feed Animals"
                    className="img-fluid"
                    style={{ maxWidth: "80%", borderRadius: "12px" }}
                  />
                </div>
                <div>
                  <p style={{ fontWeight: 400, fontSize: "18px" }}>
                    At Doon Animal Welfare Foundation, we believe that every animal deserves love, care, and a second chance at life. Our "Feed the Animals" program provides you with a unique opportunity to make a meaningful impact on the lives of these gentle, intelligent creatures.
                  </p>
                  <br></br>
                  <p style={{ fontWeight: 700, fontSize: "18px" }}>
                    Why Feed the Animals?
                  </p>
                  <p style={{ fontWeight: 400, fontSize: "18px" }}>
                    <span style={{ fontWeight: 700, fontSize: "18px" }}>1. Provide Nourishment:</span> Your support helps us provide essential nutrition to animals in our care. Many of these animals have been rescued from challenging situations, and your contribution ensures they receive the nourishment they require.
                    <br />
                    <br />
                    <span style={{ fontWeight: 700, fontSize: "18px" }}>
                      2. Support Animal Welfare:</span> By feeding the animals, you actively support our mission to protect and enhance the welfare of all animals. Your commitment allows us to continue our efforts to rescue and care for animals in need.
                  </p>

                  <br></br>
                  <p style={{ fontWeight: 700, fontSize: "18px" }}>
                    How to Contribute
                  </p>
                  <p style={{ fontWeight: 400, fontSize: "18px" }}>
                    <span style={{ fontWeight: 700, fontSize: "18px" }}>1. Make a Donation:</span> You can make a donation to our "Feed the Animals" program. Your contribution will go directly towards providing food and nourishment to the animals in our shelter.
                    <br />
                    <br />
                    <span style={{ fontWeight: 700, fontSize: "18px" }}>
                      2. Receive Updates:</span> As a supporter, you'll receive regular updates and photos of the animals you are helping to feed. You'll get to see the positive changes your support brings to their lives.
                  </p>

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

export default FeedAnimal;
