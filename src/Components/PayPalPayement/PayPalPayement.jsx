import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = ({amount}) => {
  const [orderID,setOrderID]=useState(null);

  const serverUrl = "https://ngo-node.onrender.com//"; // Define your server URL here
  const createOrder = async (data, actions) => {
    try {
      const response = await fetch(`${serverUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: {
            currency: "USD",
            amount:amount,
          },
        }),
      });

      const order = await response.json();
      setOrderID(order.id)
      return order.id;
    } catch (error) {
      console.error("Failed to create order:", error);
      // Handle error as needed
      throw error;
    }
  };

  const onApprove = async (data, actions) => {
    
    try {
      const response = await fetch(
        `${serverUrl}/api/orders/${orderID}/capture`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      // Handle the response from your server as needed
      console.log("Capture response:", result);

      // You can perform additional actions here after the capture is successful

      return result; // Return the response from your server
    } catch (error) {
      console.error("Failed to capture order:", error);
      // Handle error as needed
      throw error;
    }
  };

  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PayPalPayment;
