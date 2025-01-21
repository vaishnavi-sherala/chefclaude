import React from 'react';
import sampleImage from '../images/founder.jpg';

const Container4 = () => {
  return (
    <section className="container4">
      <div className="content-wrapper">
        <h2 className='font-size'><style>{`.font-size{
          text-align: center;
        font-size:25px}`}</style>Our Founder</h2>
        {/* Left Content: Image */}
        <div className="image-section">
          <img src={sampleImage} alt="Sample" />
        </div>

        {/* Right Content: Text */}
        <div className="text-section">
          <h2>Claude Le Tohic</h2>
          <p>
          Claude Le Tohic is a French chef and restaurateur who earned a three Michelin star rating in Las Vegas for his work at Joel Robuchon, in the MGM Grand Hotel. In 2023, Le Tohic led Team USA to win the award of World Champion at the International Catering Cup (ICC) competition. In 2021, Le Tohic received a Michelin Star for his work at O' by Claude Le Tohic, in Union Square, San Francisco. In 2010, he was named Best Chef: Southwest by the James Beard Foundation.
          </p>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        .container4 {
        
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 70px;
        
    
        }

        

        .image-section {
          flex: 1;
          min-width: 300px;
            text-align: center;
        }

        .image-section img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .text-section {
          
          min-width: 250px;
        
        }

        .text-section h2 {
          font-size: 25px;
            text-align: center;
          margin-bottom: 15px;
          color: #333;
        }


        @media (max-width: 700px) {
          .content-wrapper {
            flex-direction: column;
          }

          .text-section h2 {
            text-align: center;
          }

          .cta-button {
            display: block;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Container4;
