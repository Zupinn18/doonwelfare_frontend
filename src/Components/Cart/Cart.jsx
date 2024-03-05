import React, { useRef, useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayPalPayement from "../PayPalPayement/PaypalPayement";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import qr from "../../assets/new_QrCode.jpeg";
import FormHelperText from '@mui/material/FormHelperText';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import Footer from  "../Footer/footer";
import './Cart.css';
import ThankYou from './ThankYou'; // Import ThankYou component
import SorryPage from "./SorryPage";// Import Sorry component

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const oid = uuidv4(); // Generates a unique order ID

const Cart = () => {


  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [orderId,setOrderId] = useState(oid);
  const [amountInRupees, setAmountInRupees] = useState(""); // Amount in Rupees
  const [amountInDollars, setAmountInDollars] = useState(""); 
  const [paytmPaymentUrl, setPaytmPaymentUrl] = useState('');
  const [token,setToken] = useState('');
  const [note, setNote] = useState(false);
  const [payments, setPayments] = useState([]);

  const handleNote = () => {
    if(note==false){
      setNote(true);
    }
  }

  
  const [dollarFormData, setDollarFormData] = useState({
    dollarAmount: "", // Dollar amount input field
  });

  useEffect(() => {
    // Retrieve the 'amount' variable from localStorage
    const amountFromStorage = localStorage.getItem("amount");

    // Check if 'amountFromStorage' is not null or undefined
    if (amountFromStorage !== null && amountFromStorage !== undefined) {
      // Set the 'amountInRupees' with the value from localStorage
      setAmountInRupees(amountFromStorage);
      
      // Calculate the 'amountInDollars' based on the Rupees amount
      const rupeesAmount = parseFloat(amountFromStorage);
      const exchangeRate = 75; // Exchange rate from Rupees to Dollars
      setAmountInDollars((rupeesAmount / exchangeRate).toFixed(2)); // Fixed to 2 decimal places
    }
  }, []);
  // async function callApiAfterSuccessfulTransaction() {
  //   try {
  //     // Make an API call using axios or any other HTTP library
  //     const apiResponse = await axios.post('https://ngo-node.onrender.com/api/paytm/success', {
  //       orderId: orderId,
  //       // Include any other data you need to send to the API
  //     });
  
  //     // Handle the API response as needed
  //     console.log('API Response:', apiResponse.data);
  //   } catch (error) {
  //     console.error('Error calling API after successful transaction:', error);
  //   }
  // }

const makePayment = (txnToken) => {
  var config = {
      "root":"",
      "style": {
        "bodyBackgroundColor": "#fafafb",
        "bodyColor": "",
        "themeBackgroundColor": "#0FB8C9",
        "themeColor": "#ffffff",
        "headerBackgroundColor": "#284055",
        "headerColor": "#ffffff",
        "errorColor": "",
        "successColor": "",
        "card": {
          "padding": "",
          "backgroundColor": ""
        }
      },
      "data": {
        "orderId": orderId,
        "token": txnToken,
        "tokenType": "TXN_TOKEN",
        "amount": amountInRupees /* update amount */
      },
      "payMode": {
        "labels": {},
        "filter": {
          "exclude": []
        },
        "order": [
            "CC",
            "DC",
            "NB",
            "UPI",
            "PPBL",
            "PPI",
            "BALANCE"
        ]
      },
      "website": "DEFAULT",
      "flow": "DEFAULT",
      "merchant": {
        "mid": "DOONAN17084437757649",
        "redirect": false
      },
      "handler": {
        "transactionStatus":
function transactionStatus(paymentStatus){
  if (paymentStatus === 'TXN_SUCCESS') {
    // Transaction was successful, make API call here
    callApiAfterSuccessfulTransaction();
  }
        },
        "notifyMerchant":
function notifyMerchant(eventName,data){
        
        }
      }
  };


//   if (window.Paytm && window.Paytm.CheckoutJS) {
//    window.Paytm.CheckoutJS.init(config).
// then(function onSuccess() {
// window.Paytm.CheckoutJS.invoke();
// }).catch(function onError(error) {
// console.log("Error => ", error);
// });
//   }
}
  
  const handleRupeesAmountChange = (e) => {
    const { value } = e.target;
    setAmountInRupees(value);
    
    const newOrderId = uuidv4();
    setOrderId(newOrderId);
    // Calculate and update the corresponding Dollar amount
    const rupeesAmount = parseFloat(value);
    const exchangeRate = 75; // Exchange rate from Rupees to Dollars
    setAmountInDollars((rupeesAmount / exchangeRate).toFixed(2)); // Fixed to 2 decimal places
  };
 // Default to Indian Rupee
const handleDollarAmountChange = (e) => {
  const { name, value } = e.target;
  setDollarFormData({ ...dollarFormData, [name]: value });
};

// Handle submission of the dollar amount form
const handleDollarAmountSubmit = (e) => {
  e.preventDefault();
  // You can perform any necessary actions when the dollar amount form is submitted.
};

// const handlePaytmPayment = async () => {
  
//   try {
    
//     const { data } = await axios.post('https://ngo-node.onrender.com/api/paytm/initiateTransaction', {
//       orderId: orderId,
//       amount: amountInRupees,
//       email: formData.email,
//       mobileNumber: formData.mobileNumber,
//       type:formData.type,
//       name: formData.name,
//       panNo: formData.panNo,
//       state:  formData.state
//     });
    
//     const responseString = data.response; // Assuming that data.response is a JSON string
    
//     try {
//       const responseObject = JSON.parse(responseString);
//       if (responseObject.body && responseObject.body.txnToken) {
//         const txnToken =  await responseObject.body.txnToken;
//         setToken(txnToken);

//         await makePayment(txnToken);
//       } else {
//         console.error("Failed to get txnToken from the response.");
//       }
//     } catch (error) {
//       console.error("Error parsing the response as JSON:", error);
//     }
    

    
//     setPaytmPaymentUrl(data.paymentUrl);
//   } catch (error) {
//     console.error('Failed to initiate Paytm payment:', error);
//   }
// };



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsRef = useRef(null);

  const [formData, setFormData] = useState({
    amount: "",
    mobileNumber: "",
    name: "",
    email: "",
    panNo: "",
    state: "",
    type: "once"
  });

  useEffect(() => {
    // Retrieve the 'amount' variable from localStorage
    const amountFromStorage = localStorage.getItem("amount");

    // Check if 'amountFromStorage' is not null or undefined
    if (amountFromStorage !== null && amountFromStorage !== undefined) {
      // Set the 'formData.amount' with the value from localStorage
      setFormData({ ...formData, amount: amountInDollars });
    }
  }, []); // Empty dependency array to run this effect only once

  // ... rest of your component code ...

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    if(amountInRupees<100 || amountInDollars<1){
      alert("Min. Donation amount should be Rs 100 or 1$ ");
    }else{
      // Move to the next step
      if (currentStep < 2) {
        setCurrentStep(currentStep + 1);
      }
    }
  };




const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const handleRazorpayPayment = async () => {
  try {
    // Load the Razorpay checkout script
    const scriptLoaded = await initializeRazorpay();
    
    if (!scriptLoaded) {
      throw new Error('Razorpay SDK Failed to load');
    }

    // Convert the amount from rupees to paisa (smallest unit)
    const amountInPaisa = amountInRupees * 100;

    // Make API call to create Razorpay order
    const response = await fetch('https://ngo-node.onrender.com/api/razorpay_order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        amount: amountInPaisa, // Pass the amount in paisa
        currency: 'INR', 
        receipt: 'receipt_id', 
        name: formData.name, // Pass the payer's name
      }), 
    });

    if (!response.ok) {
      const contact = formData.mobileNumber;
      await sendWhatsAppNotificationPaymentFailed(contact);
      navigate('/sorry');
      throw new Error('Failed to create Razorpay order');
    }

    const order = await response.json();

    const options = {
      key: 'rzp_live_4RuB24CIThT3o6', // Enter your Razorpay Key ID
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: formData.name, // Use the name from the form
      email: formData.email, // Use the email from the form
      contact: formData.mobileNumber, // Use the mobile number from the form
      handler: function (response) {
        console.log('succeeded');
        console.log(response);

        // Most important step to capture and authorize the payment. This can be done of Backend server.
        const succeeded = crypto.HmacSHA256(`${order.id}|${response.razorpay_payment_id}`, keySecret).toString() === response.razorpay_signature;

        // If successfully authorized. Then we can consider the payment as successful.
        if (succeeded) {
          console.log("Payment Completed Successfully");
          navigate('/thank-you');
        } else {
          console.log("Error while completing Payment ");
        }
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      modal: {
        confirm_close: true, // this is set to true, if we want confirmation when clicked on cross button.
        // This function is executed when checkout modal is closed
        // There can be 3 reasons when this modal is closed.
        ondismiss: async (reason) => {
          const {
            reason: paymentReason, field, step, code,
          } = reason && reason.error ? reason.error : {};
          // Reason 1 - when payment is cancelled. It can happend when we click cross icon or cancel any payment explicitly. 
          if (reason === undefined) {
            console.log('cancelled');
            navigate('/sorry');
            // handlePayment('Cancelled');
          } 
          // Reason 2 - When modal is auto closed because of time out
          else if (reason === 'timeout') {
            console.log('timedout');
            navigate('/sorry');
            // handlePayment('timedout');
          } 
          // Reason 3 - When payment gets failed.
          else {
            console.log('failed');
            navigate('/sorry');
          }
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();



    // const phoneNo = formData.mobileNumber;
    // await sendWhatsAppNotification(phoneNo);
    //validation check and send whatsapp notifications

  } catch (error) {
    // const contact = formData.mobileNumber;
    // await sendWhatsAppNotificationPaymentFailed(contact);
    navigate('/sorry');
    console.error('Error processing Razorpay payment:', error);
  }
};

// const verifyPayment = async(response)=>{
//   try {
//     console.log("Verify payment m aaya frontend ");
//     // const phoneNo = formData.mobileNumber;
//     // await sendWhatsAppNotification(phoneNo);
//     const verfiyUrl = "http://localhost:8888/api/verify";
//     const {data} = await axios.post(verfiyUrl, response);
//     navigate('thank-you');
//     console.log("payment verification status is ", data);
//   } catch (error) {
//     //  const contact = formData.mobileNumber;
//     //  await sendWhatsAppNotificationPaymentFailed(contact);
//     navigate('/sorry');
//     console.log(`Error occured while verifying payment`);
//   }
// }

// const handleSuccessfulPayment = () => {
//   setPaymentStatus('captured');
//   history.push('/thank-you');
// };

// Function to handle failed payment
// const handleFailedPayment = () => {
//   setPaymentStatus('failed');
//   history.push('/sorry');
// };

// Assuming you have a function to process Razorpay payment and call the appropriate function based on payment status
// const processRazorpayPayment = async () => {
//   try {
//     // Process payment and determine status
//     axios.get('https://ngo-node.onrender.com/api/razorpay_payments')
//     .then(response => {
//       // Set the payments state with the fetched data
//       if (response.data.items[0].status === 'Captured') {
//         // handleSuccessfulPayment();
//         //  const phoneNo = response.data.items[0].status.contact;
//         // await sendWhatsAppNotification(phoneNo);
//         navigate('/thank-you');
//       } else if(response.data.items[0].status === 'Failed') {
//         navigate('/sorry');
//       }
//       setPayments(response.data.items);
//     })
//     .catch(error => {
//       // Handle errors
//       console.error('Error fetching payments:', error);
//     });
//     console.log("payment data", payments);
//   } catch (error) {
//     console.error('Error processing payment:', error);
//     // handleFailedPayment();
//     navigate('/sorry');
//   }
// };

// useEffect(() => {
//   // Call your function to process Razorpay payment when component mounts
//   processRazorpayPayment();
// }, []);
//send whatsapp message for successfull payments
async function sendWhatsAppNotification(phoneNo) {
  try {

    // Make a POST request to Interkart API to send WhatsApp message
    const response = await axios.post('https://api.interakt.ai/v1/public/message/', {
      "countryCode": "+91",
      "phoneNumber": `${phoneNo}`,
      "fullPhoneNumber": "", // Optional, Either fullPhoneNumber or phoneNumber + CountryCode is required
      "callbackData": "Congratulations for placing your order",
      "type": "Template",
      "template": {
          "name": "thanks_message_to_donor_",
          "languageCode": "en",
          "bodyValues": [
              "hello",
              "21"
          ],
          "buttonValues": {
            
          }
      }
  }, {
      headers: {
        'Authorization': 'Basic Mzc5YnZSc2M2VHVNSzBLbHRnclZjNTZCSXlhejdQdGwyeFNJM1dUUnZCNDo=',
        'Content-Type': 'application/json'
      }
    });

    // console.log('WhatsApp notification sent successfully:', response);
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error.message);
  }
}

//send whatsapp message for unsuccessfull payments
async function sendWhatsAppNotificationPaymentFailed(phoneNo) {
  try {

    // Make a POST request to Interkart API to send WhatsApp message
    const response = await axios.post('https://api.interakt.ai/v1/public/message/', {
      "countryCode": "+91",
      "phoneNumber": `${phoneNo}`,
      "fullPhoneNumber": "", // Optional, Either fullPhoneNumber or phoneNumber + CountryCode is required
      "callbackData": "Congratulations for placing your order",
      "type": "Template",
      "template": {
          "name": "payment_failed_messages",
          "languageCode": "en",
          "bodyValues": [
              "hello",
              "21"
          ],
          "buttonValues": {
            
          }
      }
  }, {
      headers: {
        'Authorization': 'Basic Mzc5YnZSc2M2VHVNSzBLbHRnclZjNTZCSXlhejdQdGwyeFNJM1dUUnZCNDo=',
        'Content-Type': 'application/json'
      }
    });

    // console.log('WhatsApp notification sent successfully:', response);
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error.message);
  }
}


  
  
  const containerStyle = {
    paddingTop: "100px", // Light Gray
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF", // Blue
    color: "#FFFFFF", // White
  };

  const cardStyle = {
    backgroundColor: "orange", // White
    border: "1px solid #E0E0E0", // Light Gray
    padding: "20px",
    width: "400px", // Adjust the width as needed
    textAlign: "center",
  };

  const inputStyle = {
    marginBottom: "10px", // Add padding between heading and input
    width: "100%",
    padding: "8px",
  };

  const labelStyle = {
    textAlign: "left", // Left-align labels
    display: "block", // Make labels a block element
    marginBottom: "5px", // Add spacing between labels and inputs
  };

  const tabStyle = {
    cursor: "pointer",
    marginRight: "10px",
    fontWeight: "bold",
    color: "black",
    fontSize: "16px", // Smaller font size
    padding: "5px 10px", // Add padding
    backgroundColor: currentStep === 1 ? "#F5F5F5" : "transparent", // Background color for active tab
  };

  const textStyle = {
    color: "#333333", // Dark Gray
  };

  // List of Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const initialOptions = {
    clientId:
      "AYL0wTeaFtreIZ_KZK3qmNL0dvDKj-jUjYfp5ah3_oVRme_CQJseerGNg4muOmUdjayTXgZ3et_hnbUC",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div>
      <div className="mb-5" style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ width: "550px" }}
          style={{
            marginTop: "150px",
            backgroundColor: "#FAF9F6",
            padding: "20px",
            borderRadius: "70px 0px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Donate Now" {...a11yProps(0)} />
              <Tab label="QR SCAN" {...a11yProps(1)} />
              <Tab label="International Payment" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={2} >
            <PayPalScriptProvider options={initialOptions}>
              <div>
                <div>
                  <p
                    onClick={() => {
                      setValue(0);
                    }}
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      background: "white",
                      fontSize: "20px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Donating from within India? Click here
                  </p>
                  <p style={{ padding: "10px", fontSize: "18px" }}>
                    We are an FCRA-registered entity and can accept
                    international donations. `All donations are processed over a
                    secure payment gateway.
                  </p>
                  <form onSubmit={handleSubmit}  >
                    <FormControl fullWidth className="mt-3">
                      <InputLabel id="donation-type-label">
                        Donation Type
                      </InputLabel>
                      <Select
                        labelId="donation-type-label"
                        id="donation-type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                      >
                        <MenuItem value="once">Donate Once</MenuItem>
                        <MenuItem value="monthly">Donate Monthly</MenuItem>
                      </Select>
                    </FormControl>

                    <div className="d-flex mt-3 justify-content-between">
                      <div>
                      <TextField
                        id="outlined-basic"
                        label="Amount ($)"
                        variant="outlined"
                        type="number"
                        name="amount"
                        value={amountInDollars}
                        onChange={(e) => setAmountInDollars(e.target.value)}
                        onClick={handleNote}
                      />
                      <div className={`amount-dollar ${note === true ? "show":"not-show" } `}>Min. Donation amount should be $ 1</div>  
                      </div>
              
                      <TextField
                        id="outlined-basic"
                        label="Mobile Number"
                        variant="outlined"
                        type="number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="d-flex gap-3 mt-3 justify-content-between">
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                   
                
                    <FormControl fullWidth className="mt-3">
                      <InputLabel id="demo-simple-select-label">
                        Select State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      >
                        {indianStates.map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                 
                  
                 
                    <div className="d-flex justify-content-center mt-4">
                      {currentStep === 2 ? (
                        <PayPalPayement amount={amountInDollars} />
                      ) : (
                        <Button variant="contained" type="submit" fullWidth>
                          Proceed
                        </Button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </PayPalScriptProvider>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div>
              <p style={{ fontWeight: 700, fontSize: "20px" }}>
                Scan and Pay as Anonymous
              </p>
            </div>
            <img
              className="img-fluid"
              src={qr}
              alt="scanner"
              style={{ border: "2px solid black" }}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={0}>
           
              <div>
                <div>
                  <div>
                    <p
                      onClick={() => {
                        setValue(2);
                      }}
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        background: "white",
                        fontSize: "20px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Donating from outsite India? Click here
                    </p>
                    <p></p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth className="mt-3">
                      <InputLabel id="donation-type-label">
                        Donation Type
                      </InputLabel>
                      <Select
                        labelId="donation-type-label"
                        id="donation-type"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                      >
                        <MenuItem value="once">Donate Once</MenuItem>
                        <MenuItem value="monthly">Donate Monthly</MenuItem>
                      </Select>
                    </FormControl>
                    <div className="d-flex mt-3 justify-content-between">
                      <div>
                      <TextField
                        id="outlined-basic"
                        label="Amount (₹)"
                        variant="outlined"
                        type="number"
                        name="amount"
                        value={amountInRupees}
                        onChange={handleRupeesAmountChange} 
                        onClick={handleNote}
                      />
                      <div className={`amount-dollar ${note === true ? "show":"not-show" } `}>Min. Donation amount should be Rs 100</div> 
                      </div>
                      <TextField
                        id="outlined-basic"
                        label="Mobile Number"
                        variant="outlined"
                        type="number"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="d-flex gap-3 mt-3 justify-content-between">
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <FormControl fullWidth className="mt-3">
                      <InputLabel id="demo-simple-select-label">
                        Select State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      >
                        {indianStates.map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                        className="mt-3"
                        id="outlined-basic"
                        label="Pan Card Number"
                        variant="outlined"
                        type="text"
                        name="panNo"
                        value={formData.panNo}
                        onChange={handleInputChange}
                        fullWidth
                      
                      />
                       <FormHelperText className="fw-bold fs-7" style={{color:'var(--primary)'}}>(manadatory for 80 g certificate only.)</FormHelperText>

                    <div className="d-flex justify-content-center mt-4">
                      {currentStep === 2 ? (
                       <Button
                       variant="contained"
                       fullWidth
                       style={{ backgroundColor: 'green', color: 'white' }}
                       onClick={handleRazorpayPayment} // Call your function to initiate Razorpay payment
                     >
                       Pay with Razorpay
                     </Button>
                                        
                      ) : (
                        <Button variant="contained" type="submit" fullWidth>
                          Proceed
                        </Button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Cart;