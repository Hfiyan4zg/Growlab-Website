import React, { useRef, useState } from "react";
import { data } from "../../../constants";

function ComunitySection() {
  const title = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = (e) => {
    const currentWheelPos = e.deltaY;

    if (currentWheelPos > prevScrollPos) {
      setScrolled(true);
    } else if (currentWheelPos < prevScrollPos) {
      setScrolled(false);
    }

    setPrevScrollPos(currentWheelPos);
  };

  return (
    <div
      onWheel={handleScroll}
      onClick={() => setScrolled((prev) => !prev)}
      className=" relative gap-[100px] flex flex-col overflow-y-scroll justify-start items-center  py-[80px] bg-komunitySection bg-no-repeat px-[5px] sm:px-[100px]  w-full 2xl:max-w-[1280px]  h-[836px] xl:h-[832px] bg-cover mt-[160px]  "
    >
      <div
        ref={title}
        className=" w-full  top-0 flex flex-col lg:flex-row gap-[50px] lg:gap-0 items-center lg:items-start justify-between  z-10"
      >
        <div className="flex flex-col h-[200px] lg:h-[340px]  overflow-hidden">
          {data.dataKomunitas.map((el, index) => (
            <div
              key={index}
              className={`${
                scrolled ? "-translate-y-full" : " translate-y-0"
              } gap-[52px] flex flex-col  items-center lg:items-start duration-300 min-h-[340px] `}
            >
              <div className="flex flex-col w-[472px] gap-[8px] lg:gap-[16px]">
                <h1 className=" text-whiteSmoke500 text-[22px] lg:text-[40px] text-center lg:text-start font-bold leading-[32px] lg:leading-[60px]">
                  {el.title}
                </h1>
                <p className="text-[16px] lg:text-[18px] font-light leading-[24px] lg:leading-[28px] text-whiteSmoke600 text-center lg:text-start">
                  Ayo bergabung dengan para penggerak industri kreatif untuk
                  bertukar ide, mendapatkan inspirasi, dan memperluas
                  jaringanmu.
                </p>
              </div>

              <button className="w-[260px] h-[54px] px-[64px] py-[16px] flex items-center rounded-[10px] justify-center bg-whiteSmoke500">
                <p className="text-black500 text-[16px] font-medium leading-[24px]">
                  Selengkapnya
                </p>
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col h-[432px] lg:h-[672px] overflow-hidden rounded-[10px]">
          {data.dataKomunitas.map((el, index) => (
            <img
              key={index}
              src={el.pic}
              alt="komunitas"
              className={`${
                index !== 0
                  ? scrolled
                    ? "-translate-y-full"
                    : " translate-y-0"
                  : "translate-y-0"
              } gap-[52px] flex flex-col duration-300 w-[358px] h-[488px] xl:w-[556px] xl:h-[672px] `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComunitySection;
