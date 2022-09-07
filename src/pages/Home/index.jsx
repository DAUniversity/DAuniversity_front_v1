import React from "react";
import WeWant from "../../components/home/WeWant";
import AboutUs from "../../components/home/AboutUs";
import FirstAnnouncement from "../../components/home/FirstAnnouncement";
import Footer from "../../components/home/Footer";
import NounsSale from "../../components/home/NounsSale";
import Faq from "../../components/home/Faq";
import InspiredBy from "../../components/home/InspiredBy";
import JoinUs from "../../components/home/JoinUs";
import SocialNetworks from "../../components/home/SocialNetworks";

export const Home = () => {

  return (
    <div className="App">
      <NounsSale />
      <FirstAnnouncement />
      <AboutUs />
      <WeWant />
      <Faq />
      <InspiredBy />
      <JoinUs />
      <SocialNetworks />
      <Footer />
    </div>
  );
}

export default Home;
