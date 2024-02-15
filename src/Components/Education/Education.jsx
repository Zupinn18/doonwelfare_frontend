import {React,useEffect} from 'react';
import Footer from "../Footer/footer";
import pdfFile from "../../assets/test.pdf"; // Replace with your PDF file path

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="education-container container-fluid">
      <div className="row py-5">
        {/* Left Section - Display PDF File */}
        <div className="col-md-6">
          <h2 style={{paddingLeft:"20px"}}>List of Schools</h2>
          <div>
            <embed src={pdfFile} type="application/pdf" width="80%" height="600px" style={{paddingLeft:"10px"}} />
          </div>
        </div>

        {/* Right Section - Text and Bullet Points */}
        <div className="col-md-6">
          <h2>Education and Awareness</h2>
          <p style={{fontSize:"22px"}}>
          We have organized more than 150 events for awareness and protection for stray animals in various schools, colleges and other work space including.
          </p>

          <ul style={{fontSize:"22px"}}>
            <li>Trade fares</li>
            <li>Pacific mall</li>
            <li>Times Square mall</li>
            <li>Various branches of State Bank</li>
            <li>India IDFC bank branches</li>
            <li>Devbhoomi College</li>
            <li>UIT</li>
            <li>DAV College</li>
            <li>Rajhans public school dehradun</li>
            <li>Social balooni public school dehradun</li>
            <li>Holy Angel School,Doiwala</li>
            <li>Sheifield School, Vikasnagar</li>
            <li>Shivalik School, Vikasnagar</li>
            <li>Praksah Niketan, Rourkee and various other schools and colleges.</li>
          </ul>
        </div>
      </div>

      
    </div>
    <Footer />
    </>
  );
};

export default Education;
