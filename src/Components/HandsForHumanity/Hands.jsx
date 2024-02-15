import {React,useEffect} from 'react';
import Footer from '../Footer/footer';
import img1 from '../../assets/FoodandCloth.webp';
import img2 from '../../assets/FoodRelief.webp';
import img3 from '../../assets/HealthCheckup.webp';
import img4 from '../../assets/Rescue.webp';
import  './hands.css';

const Hands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardsData = [
    {
      id: 1,
      title: 'Flood relief program',
      description: 'This initiative aims to provide relief to communities affected by devastating floods. We offer support through the distribution of essential supplies, such as food, clean water, and shelter, to help those who have been affected by these natural disasters.',
      imageUrl: img1,
    },
    {
      id: 2,
      title: 'Food and clothes drive',
      description: 'Our food and clothes drive focuses on ensuring that the underprivileged have access to nutritious meals and clothing. By organizing food drives and collecting clothes donations, we help improve the well-being and dignity of those in need.',
      imageUrl: img2,
    },
    {
      id: 3,
      title: 'Health checkup camp',
      description: 'Our health checkup camp offers free medical services and health checkups to underserved communities. We provide medical professionals, diagnostic tests, and health education to help people understand and manage their health.',
      imageUrl: img3,
    },
    {
      id: 4,
      title: "Rescue drive for helpless people's (Prabhu ji)",
      description: "Among the destitute, the mentally ill are the least equipped to cope on the streets. Bizarre in their appearance and behavior, they seem scarcely human. Even an attempt to rescue is resisted by them as often their mode of defense is to fight off. Hands for humanity believes in their right to dignity and has been engaged in the mission of rehabilitating such sick persons and reuniting them with their family.",
      imageUrl: img4,
    },
  ];

  return (
    <>
      <div className="container" style={{ paddingTop: '120px' }}>
        <h2 className='fw-bold text-center py-3' >Hands for Humanity</h2>

        <div className="row">
          {cardsData.map(card => (
            <div key={card.id} className="col-md-6">
              <div className=" mb-4 rounded" style={{border:"1px solid black"}}>
                <img
                  src={card.imageUrl}
                  className="card-img-top"
                  alt={card.title}
                />
                <div className="card-hover">
                  <h5 className="card-title px-3 pt-3 fw-bold fs-4">{card.title}</h5>
                  <p className="card-text p-3">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hands;
