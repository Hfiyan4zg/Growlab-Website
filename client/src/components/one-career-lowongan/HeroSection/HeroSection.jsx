import React from "react";
import { images } from "../../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding,faBriefcase,faUserCircle } from '@fortawesome/free-solid-svg-icons';

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
  return formattedDate;
}

function HeroSection(props) {
  return (
    <div className="flex bg-black500 w-full  w-full ">
      <div className="relative flex  w-full justify-center md:justify-end">
        <img
          src={images.geometricShapeArtikelDesktop}
          alt=""
          className="hidden md:block "
        />
        <img
          src={images.geometricShapeArtikelMobile}
          alt=""
          className="block md:hidden"
        />

        <div className="justify-center flex flex-col absolute w-full left-0 w-fit md:ml-[100px]  z-10">
          <p className="max-w-[564px] text-[14px] font-light md:leading-[100px] lg:leading-[100px] md:text-left" style={{ color:'#888'}}>
                Karir  &nbsp; &gt; <span> &nbsp;Semua Lowongan &nbsp; &gt;</span> <span style={{ color: 'white', marginLeft:'5px' }}>{props.lowongan.nama_lowongan_pekerjaan}</span>
          </p>
          <div className="flex flex-col lg:my-0 md:p-0 md:h-full py-[123px] w-full h-[420px]">
            <h1 className="flex justify-center md:justify-start items-center text-center md:text-start text-[24px] md:text-[48px] font-bold leading-[36px] md:leading-[72px] text-whiteSmoke500 left-[100px] md:max-w-[572px] ">
              {props.lowongan.nama_lowongan_pekerjaan}
            </h1>
            <h6 className="text-[#DEDEDE] md:text-[16px] text-[14px] text-center md:text-start font-semibold">{props.lowongan.departemen.nama_departemen_pekerjaan}</h6>

            <div className="flex items-center gap-3 font-heebo md:text-[16px] md:justify-start justify-center text-[14px] text-[#DEDEDE] font-light">
              <FontAwesomeIcon icon={faBriefcase} />
              {props.lowongan.periode_pekerjaan.nama_periode_perkerjaan}{' '}
              <FontAwesomeIcon icon={faBuilding} />
              {props.lowongan.tipe_pekerjaan.nama_tipe__perkerjaan}{' '}
              <FontAwesomeIcon icon={faUserCircle} />
              {props.lowongan.jenjang_pekerjaan.nama_jenjang__pekerjaan}
            </div>
            
            <h6 className="text-center md:text-start font-heebo md:text-[16px] text-[14px] text-[#DEDEDE] font-light mt-10">
              Batas lamar :
            </h6>
            <h6 className="text-center md:text-start font-heebo text-[14px] md:text-[16px] text-[#DEDEDE] font-semibold">{formatDate(props.lowongan.batas_lamar)}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


