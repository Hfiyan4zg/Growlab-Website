import React from "react";
import { pengajarPic } from "../../../../constants";

function ProfilePengajar() {
  return (
    <div className="flex flex-col items-start gap-[24px] ">
      <h1 className="text-[18px] md:text-[24px] font-bold leading-[28px] md:leading-[36px]">
        Belajar Langsung dari Ahlinya
      </h1>
      <div className="flex flex-col md:flex-row gap-[24px] p-[24px] justify-center items-center shadow-customSm w-full ">
        <div className=" w-[326px] md:w-[200px] h-[326px] md:h-[200px] ">
          <img
            src={pengajarPic.profilePengajar1}
            alt="profile"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-[16px] items-start">
          <div className="flex flex-col gap-[8px] items-start">
            <h1 className="text-[18px] md:text-[22px] text-black500 font-bold leading-[28px] md:leading-[32px]">
              Joe Hernandez
            </h1>
            <h2 className="text-[14px] md:text-[16px] font-medium text-indigoDye500 leading-[20px] md:leading-[24px]">
              Business Development Lead at Growlab
            </h2>
          </div>
          <div className=" w-[300px] md:w-[428px] h-[120px] overflow-hidden">
            <p className=" text-[14px] md:text-[16px] font-light leading-[20px] md:leading-[24px] text-black400 line-clamp-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              facilis ullam ab sequi, voluptatum suscipit minima eveniet
              adipisci commodi itaque earum odio hic praesentium ipsum velit
              fuga. Adipisci, ab aut animi tenetur atque suscipit iure deleniti!
              Deleniti dicta asperiores rerum iste autem quam sequi
              reprehenderit ad, vitae, laboriosam magnam officia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePengajar;
