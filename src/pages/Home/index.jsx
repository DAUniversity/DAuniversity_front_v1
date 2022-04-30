import React from "react";
import AboutUs from "../../components/home/AboutUs";
import FirstAnnouncement from "../../components/home/FirstAnnouncement";
import Footer from "../../components/home/Footer";
import NounsSale from "../../components/home/NounsSale";
import SocialNetworks from "../../components/home/SocialNetworks";


function Home() {
  return (
    <div className="App">
      <NounsSale />
      <FirstAnnouncement />
      <AboutUs />
      <SocialNetworks />
      <Footer />
    </div>
  );
}

export default Home;
