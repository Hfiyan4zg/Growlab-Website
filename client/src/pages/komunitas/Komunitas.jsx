import React from "react";
import HeroSection from "../../components/komunitas/hero-section/HeroSection";
import BenefitSection from "../../components/komunitas/benefit-section/BenefitSection";
import JoincomunitySection from "../../components/komunitas/joincomunity-section/JoincomunitySection";
import ArticleSection from "../../components/komunitas/article-section/ArticleSection";

function Komunitas() {
  return (
    <div className=" flex flex-col justify-center items-center shrink-0">
        <HeroSection/>
        <BenefitSection/>
        <JoincomunitySection/>
        <ArticleSection/>        
    </div>
  );
}

export default Komunitas;