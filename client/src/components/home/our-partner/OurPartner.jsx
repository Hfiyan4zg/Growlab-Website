import React, { useState } from "react";
import { partnerLogo } from "../../../constants";

function OurPartner() {
  const [partner, setPartner] = useState([
    {
      pic: partnerLogo.compasBiru,
    },
    {
      pic: partnerLogo.modalku,
    },
  ]);

  return (
    <div className=" mt-[160px] hidden lg:flex flex-col justify-center items-center gap-[52px]">
      <h1 className="text-[40px] font-bold leading-[60px]">Partner Kami</h1>
      <div className="flex gap-[24px] ">
        {partner.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-[24px] rounded-[10px] shadow-customSm bg-whiteSmoke500"
          >
            <img src={logo.pic} alt="partner " className="w-[256px] h-[92px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartner;