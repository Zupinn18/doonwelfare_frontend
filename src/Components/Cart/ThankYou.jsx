import React from 'react';
import pdf from '../../assets/80G.pdf'

const ThankYou = () => {
  return (
    <div className='container' style={{
        display:"flex",
    }} >
    <div style={{
      marginTop:"130px",
      marginBottom:"200px"
    }} >
       <p style={{
            fontWeight:"600",
            fontSize:"16px"
        }} >Dear Donors,</p>
        <p style={{
          fontWeight:"bold",
          fontSize:"25px",
          marginLeft:"500px"
        }} >!!Hare Krishna!!</p>
        <p>
        I hope this message finds you in good health and high spirits. We are reaching out once again to express our continued gratitude for your incredible support to Doon Animal Welfare.
        Your recent donation is not just a financial contribution; it is a lifeline for the animals under our care.Your generosity enables us to uphold our commitment to providing essential care, medical attention, and a nurturing environment for those who rely on us.
        <br/><br/>The impact of your kindness reverberates through the lives of countless furry companions, offering them a chance at a better, more compassionate future.Your belief in our mission gives us the strength to persevere in the face of challenges and to continue advocating for the voiceless.
        As we move forward, we want to assure you that your donation is being utilized with the utmost responsibility and efficiency. We remain committed to transparency, and we will keep you informed about the specific ways your support is making a positive impact.
        <br/><br/>Your contribution is not just a donation; it is an investment in creating a world where animals are treated with the love and care they deserve. We are immensely grateful for your partnership in our mission.
        <br/>Once again, thank you for being an integral part of the Doon Animal Welfare family. Your compassion is a beacon of hope for animals in need, and we are privileged to have you by our side.<br/>
       <br/>With warm regards,<br/>
       <br/><b>Milli Kaur</b> <br/>
       <br/><b>Doon Animal Welfare</b>  
        </p>

      <button
        style={{
          backgroundColor:"orange",
          borderRadius:"5px",
          padding:"8px 12px",
          border:"none",
        }}
      >
        <a href={pdf} style={{
          textDecoration:"none",
          color:"white",
          fontWeight:"bold",
          }} download>Download 80G Certificate</a>
      </button>
    </div>
    </div>
  );
};

export default ThankYou;
