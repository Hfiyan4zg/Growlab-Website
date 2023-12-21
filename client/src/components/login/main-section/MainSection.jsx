import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { images } from "../../../constants";

function MainSection() {
  const [isHide, setIsHide] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center w-full  2xl:max-w-[1080px]">
      <h1 className="text-[32px] text-center font-medium leading-[72px] mt-[109px]">
        Masuk Akun
      </h1>
      <div className="w-full flex flex-col justify-center items-center mt-[70px]">
        <form className="flex flex-col gap-[52px] w-[208px] md:w-[538px] ">
          <input
            autoFocus
            required
            type="text"
            placeholder="Email"
            className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
          />
          <div className="relative">
            <input
              required
              type={isHide ? "password" : "text"}
              placeholder="Password"
              className="outline-none w-full h-[50px] bg-transparent text-[12px] md:text-[18px] font-medium leading-[24px] border-b-[2px] border-black"
            />
            <button
              onClick={() => setIsHide((prev) => !prev)}
              type="button"
              className="absolute right-2 h-[50px]  "
            >
              {/* {isHide ? (
                <HiEyeOff className="text-[20px]" />
              ) : (
                <HiEye className="text-[20px]" />
              )} */}
            </button>
            <div className="w-full flex justify-end mt-[10px]">
              <button
                type="button"
                className="text-[12px] md:text-[18px] font-medium leading-[24px] underline text-indigoDye500"
              >
                Lupa Password
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[49px]">
            <ButtonBlack500 TEXT_BUTTON={"Masuk"} WIDTH={"w-[160px]"} />
          </div>
        </form>

        <div className=" flex justify-center items-center gap-[8px] w-full mt-[48px]">
          <img
            src={images.lineWhiteSmoke}
            alt="line"
            className="w-[47px] md:w-[179px]"
          />
          <p className="w-[108px] md:w-[161px] text-[12px] md:text-[18px] font-medium leading-[24px] shrink-0">
            Atau masuk dengan
          </p>
          <img
            src={images.lineWhiteSmoke}
            alt="line"
            className="w-[47px] md:w-[179px]"
          />
        </div>

        <div className="w-[208px] md:w-[538px] mb-[414px]">
          <button className="flex justify-center items-center h-[64px] w-full bg-whiteSmoke600 rounded-[10px] mt-[48px] gap-[10px]">
            <img
              src={images.googleIcon}
              alt="google"
              className="w-[32px] h-[32px] object-cover"
            />
            <p className="text-[16px] font-medium leading-[24px]">Google</p>
          </button>

          <div className="w-full flex justify-center items-center mt-[60px]">
            <p className="text-[12px] md:text-[18px] font-medium leading-[24px]">
              Belum punya akun?{" "}
              <span className="text-indigoDye500 cursor-pointer ">Daftar</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
