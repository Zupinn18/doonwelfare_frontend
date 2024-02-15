import {React,useEffect} from 'react';
import Footer from '../Footer/footer'
import img1 from  '../../assets/m.webp'
import img2 from '../../assets/f.webp'
import team from '../../assets/team.webp'
const Ourteam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="container" style={{paddingTop:"120px"}}>
    <div className="row">
    <h2 className='text-center fw-bold '>Our Team</h2>
    <div className="col-md-6 ">
    <img className='mb-3' src={img1} alt="" />
    <p className='text-center fw-bold fs-5 p-3'style={{background:"orange"}}>Ashwani kumar (Founder & Trustee)</p>
    </div>
    <div className="col-md-6 " >
    <img className='mb-3' src={img2} alt="" />
    <p className='text-center fw-bold fs-5 p-3'style={{background:"orange"}}>Jagjot Kaur (Founder & Trustee)</p>
    </div>
    <div className="col-md-8 mt-3 text-center" style={{margin:"0 auto"}}>
      <img className='mb-3' src={team} alt="" />
      <p className='text-center fw-bold fs-5 p-3'style={{background:"orange"}}>Our Hardworking and Dedicated Team Members</p>
    </div>

    </div>

    </div>
    <Footer/>
    </>
 
  )
}

export default Ourteam