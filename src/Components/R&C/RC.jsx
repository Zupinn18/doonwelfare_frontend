import {React,useEffect} from 'react';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/Navbar';

function RC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container" style={{ paddingTop: "150px"}}>
        <h3 className='fw-bold'>Return and Refund Policy</h3>
        
        <p>
          Thank you for choosing to shop with Doon Animal Welfare. If, for any reason, you are not entirely satisfied with your purchase, we encourage you to review our policy regarding refunds and returns.
        </p>

        <h4>Interpretation and Definitions</h4>
        <p>
          To ensure clarity, certain terms used in this policy are defined as follows:
        </p>
<div className="container">
        <ul>
          <li>
            <strong>Company:</strong> Refers to Doon animal welfare foundation, located at Gaushala Shimla Bypass Road,
Gram Hinduwala Sabhawala,
Dehradun - 248197, referred to as "the Company," "We," "Us," or "Our" in this Agreement.
          </li>
          <li>
            <strong>Goods:</strong> Denotes the products made available for sale on our platform.
          </li>
          <li>
            <strong>Orders:</strong> Signify your requests to purchase Goods from us.
          </li>
          <li>
            <strong>Service:</strong> Pertains to our website.
          </li>
          <li>
            <strong>Website:</strong> Refers to Doon animal welfare foundation website, accessible at https://www.doonanimalwelfarefoundation.org/.
          </li>
          <li>
            <strong>You:</strong> Encompasses individuals accessing or utilizing the Service, along with companies or legal entities on behalf of whom such individuals are utilizing the Service, as relevant.
          </li>
        </ul>
        </div>  
        <h4 className='mt-3'>Your Order Cancellation Rights</h4>
        <p>
          You possess the right to cancel your order within 7 days without being obliged to state a reason.
        </p>

        <p>
          You have until 7 days from when you received the Goods or when a third party, not being the carrier, took possession of the delivered product, to cancel your order.
        </p>

        <p>
          To cancel your order, notify us clearly through:
        </p>
    <div className="container">
        <ul>
          <li>
            Sending an email to doonanimalwelfare@gmail.com
          </li>
          <li>
            Visiting our website at https://www.doonanimalwelfaredoundation.org/contact.
          </li>
          <li>
            Contacting us via phone at +91 84001 51995.
          </li>
        </ul>
        </div>
        <p>
          We will refund you within 14 days of receiving the returned Goods using the same payment method used for the Order, without any additional fees.
        </p>

        <h4>Conditions for Returns</h4>
        <p>
          For Goods to be eligible for a return:
        </p>
        <div className="container">
        <ul>
          <li>
            They must have been purchased within the last 7 days.
          </li>
          <li>
            Goods made to your specifications or customized, those naturally unsuitable for return due to their nature, items with expired dates, and unsealed health or hygiene-related products are not returnable.
          </li>
        </ul>
        </div>
        <p>
          We retain the discretion to refuse returns that do not meet these criteria, and please note that items on sale are non-refundable, unless prohibited by applicable law.
        </p>

        <h4>Returning Goods</h4>
        <p>
          You are responsible for the cost and risk of returning Goods to us. Send the Goods to this address:
        </p>

        <p>
        Gaushala Shimla Bypass Road,<br/>
Gram Hinduwala Sabhawala,<br/>
Dehradun - 248197
        </p>

        <p>
          Please use an insured and trackable mail service to return items, as we cannot be held responsible for lost or damaged Goods during return shipping.
        </p>

        <h4>Gifts</h4>
        <p>
          For Goods marked as gifts and directly shipped to you, a gift credit for the product's value will be issued upon receiving the returned item. If the Goods were not marked as gifts during purchase or were shipped to the gift giver for later presentation to you, we will issue the refund to the gift giver.
        </p>

        <h4>Contact Us</h4>
        <p>
          For inquiries concerning our Returns and Refunds Policy, reach us through:
        </p>

        <div className="container">
        <ul className='pb-5'>
          <li>
            Email at doonanimalwelfare@gmail.com
          </li>
          <li>
            Visiting our website: https://www.doonanimalwelfaredoundation.org/.
          </li>
          <li>
            Contacting us at +91-7900283333, 7900273333.
          </li>
        </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RC;
