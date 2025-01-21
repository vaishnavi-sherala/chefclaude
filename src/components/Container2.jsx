const Container2 = () => {
  return (
    <div className="container__slider2">
      <style>{`
        .container__slider2 {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 600px;
          padding: 10px;
          border-radius: 10px;
        
          margin: 20px auto;
          box-sizing: border-box;
        }

        .container__slider2 h1 {
          font-size: 25px;
          font-weight: bold;
          margin-bottom: 15px;
          text-align: center;
        }

        .container__slider2 p {
          font-size: 16px;
          line-height: 1.5;
          color: black;
          text-align: justify;
          margin: 0;
        }
      `}</style>
      <h1>About</h1>
      <p>
        Chef Claude is a highly skilled and passionate culinary professional known for his exceptional ability to create innovative and visually stunning dishes. With years of experience in various prestigious kitchens, Chef Claude has honed his skills in French and contemporary cuisine, bringing both tradition and innovation to every plate. His approach to cooking emphasizes the importance of using fresh, high-quality ingredients and the artistry involved in food presentation.
      </p>
    </div>
  );
};

export default Container2;
