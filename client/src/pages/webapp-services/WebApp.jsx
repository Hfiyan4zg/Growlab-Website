import React from "react";
<<<<<<< HEAD
// import HowWeDo from "../../components/layanan/webapp/how-we-do/HowWeDo";
=======
>>>>>>> 7e0b7ed (fix gambar herosection)
import JoinSection from "../../components/layanan/webapp/join-section/JoinSection";
import Faq from "../../components/layanan/webapp/faq/Faq";
// import LanggananSection from "../../components/layanan/webapp/langganan/LanggananSection";
import HeroSection from "../../components/layanan/webapp/hero-section/HeroSection";
import ServiceSection from "../../components/layanan/webapp/service-section/ServiceSection";
import HowtodoitSection from "../../components/layanan/webapp/howtodoit-section/HowtodoitSection";

const WebApp = () => {
  return (
    <div className=" flex flex-col justify-center items-center shrink-0">
      <HeroSection />
      <ServiceSection />
      <HowtodoitSection />
<<<<<<< HEAD
      {/* <HowWeDo /> */}
      {/* <LanggananSection /> */}
=======
      <LanggananSection />
>>>>>>> 7e0b7ed (fix gambar herosection)
      <Faq />
      <JoinSection />
    </div>
  );
};

export default WebApp;
