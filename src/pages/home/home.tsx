import React from "react";
import "./home.css";
import selfie from '../../assets/images/matt.png';

const Home = () => {

  return (
    <div className="root-home">
        <div className="title-home"> Welcome to my Website!  </div>
        <img src={selfie} className="image-selfie" />
        <div className="home-info" >I'm Matt, a software engineer dedicated to a life of learning in the ever changing world of technology. Feel free to explore and reach out to me if you have questions!  </div>
    </div>
  );
};

export default Home;
