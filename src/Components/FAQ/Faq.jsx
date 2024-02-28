import React, { useState } from 'react'
import './Faq.css';
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const faqData = [
    {
        question:"How can I donate?",
        answer:"Supporting fundraisers on DOON ANIMAL WELFARELife is easy. All you have to do is enter your chosen amount, select your payment method and click on ‘Donate Now’. You will then receive an email and WhatsApp message confirming your transaction summary",
    },
    {
        question:"What payment methods are accepted on DOON ANIMAL WELFARE ?",
        answer:"We accept all payment methods such as UPI, net banking, credit & debit cards, Paytm,PayPal, bank transfer, QR code or any other methods",
    },
    {
        question:"Where is DOON ANIMAL WELFARE located ?",
        answer:"DOON ANIMAL WELFARE(SHRI KRISHNA DHAM GAUSHALA) SHIMLA BYE PASS ROAD, GRAM HASANPUR, NEAR SHIVALIK COLLAGE DEHRADUN (248011) Uttrakhand, India ",
    },
    {
        question:"Are the donations to DOON ANIMAL WELFARE tax-deductible ?",
        answer:"Yes, all donations to DOON ANIMAL WELFAREfrom within India are tax-exempted under section 80G.",
    },
    {
        question:"How do I get an 80G tax-receipt for my donations ?",
        answer:"You will automatically get a tax-receipt for each of your donation via mail. Please make sure you enter the PAN number while donating. You can also write to us at doonanimalwelfarefoundation@gmail.com to receive a tax-receipt for your donation.",
    },
    {
        question:"How to claim Tax-Exemption for my contributions on DOON ANIMAL WELFARE ?",
        answer:` After you complete your donation successfully, you will find the 'GET 80G' button on the payment success page. Please fill in your PAN number, complete address, and name as per PAN and submit. Your 80G certificate will be generated and sent via email within 24 hours.
        Alternatively, you can get your 80G receipt in a few simple steps:      
        1.	Log in to your account using the same email ID you used for the donation
        2.	Go to ‘My Donations’
        3.	Choose the financial year for which you'd like the donation certificate
        4.	Click on ‘Download 80G Certificate’
        5.	Fill out the Form (if required)
        6.	Submit the form and 80G will get downloaded instantly
        Instead of receiving separate 80G certificates for each donation, you'll receive a consolidated 80G certificate via email covering all your donations made through our platform in the financial year. Further, The corresponding 10BE form that proves your eligibility for the tax deduction will also be consolidated. This way, you won't have to worry about multiple downloads and can save time.
        `,
    },
]

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
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
                }}>FAQs</span>
              </h2>
        <div>
            {faqData.map((item, index) => (
                    <div className="faq-item1" key={index}>
                    <div
                        className={`question faq-quest ${activeIndex === index ? 'open' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                            {item.question}
                            {
                                activeIndex === index ? <IoIosArrowDropup className='icon' /> : <IoIosArrowDropdown className='icon' />
                            }
                    </div>
                    <div className={`answer ${activeIndex === index ? 'open' : ''}`}>
                        {item.answer}
                    </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Faq