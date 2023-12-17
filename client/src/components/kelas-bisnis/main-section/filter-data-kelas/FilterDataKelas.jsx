import React, { useMemo, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function FilterDataKelas({
  kategori,
  setKategori,
  // handleKategori,
  level,
  setLevel,
  setPage,
  setHarga,
  // handleLevel,
  harga,
}) {
  const navigate = useNavigate();

  const [kategoriFilter, setKategoriFilter] = useState([]);

  const fetchKategori = useMemo(() => {
    setKategoriFilter(kategori);
  }, [kategori]);
  // checkFilter({ kategor: 2 });

  const handleChangeKategori = (id) => {
    const newKategori = kategori.map((el) => {
      if (el.id === id) {
        return { ...el, bool: !el.bool };
      }
      return el;
    });
    console.log(newKategori);
    const forUrl = newKategori
      .filter((el) => el.bool === true)
      .map((el) => el.nama);
    console.log(forUrl);
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");

    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    const levelValue = searchParams.get("level")?.toString().split(",");
    const hargaValue = searchParams.get("harga")?.toString().split(",");

    navigate(
      `?${new URLSearchParams({
        page: 1,
        kategori: forUrl,
        level: levelValue || "",
        harga: hargaValue || "",
      })}`
    );
    console.log(kategoriValue);
    setKategori(newKategori);
    setPage(0);
  };

  const handleChangeLevel = (id) => {
    const newLevel = level.map((el) => {
      if (el.id === id) {
        return { ...el, bool: !el.bool };
      }
      return el;
    });
    const forUrl = newLevel
      .filter((el) => el.bool === true)
      .map((el) => el.nama);
    console.log(forUrl);
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");
    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    let hargaValue = searchParams.get("harga")?.toString().split(",");

    navigate(
      `?${new URLSearchParams({
        page: 1,
        kategori: kategoriValue || "",
        level: forUrl,
        harga: hargaValue || "",
      })}`
    );
    console.log({ newLevel, forUrl });
    setLevel(newLevel);
    setPage(0);
  };

  const handleChangeHarga = (id) => {
    const newHarga = harga.map((el) => {
      if (el.id === id) {
        return { ...el, bool: !el.bool };
      }
      return el;
    });
    const forUrl = newHarga
      .filter((el) => el.bool === true)
      .map((el) => el.hargaMax);
    console.log(forUrl);
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    let pageValue = searchParams.get("page");
    let kategoriValue = searchParams.get("kategori")?.toString().split(",");
    let levelValue = searchParams.get("level")?.toString().split(",");

    navigate(
      `?${new URLSearchParams({
        page: 1,
        kategori: kategoriValue || "",
        level: levelValue || "",
        harga: forUrl,
      })}`
    );
    setHarga(newHarga);
    setPage(0);
  };

  return (
    <>
      <div className="hidden md:flex flex-col gap-[32px]  h-full ">
        <h1 className="text-[22px] font-medium leading-[32px]">Filter</h1>
        <div className="flex flex-col rounded-[10px] shadow-customSm">
          <div className="p-[24px] w-[280px] ">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="text-[22px] font-medium leading-[32px]"
                    >
                      Kategori
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={0}>
                  <ul className="gap-[16px] mb-[24px]">
                    {kategoriFilter?.map((el, index) => (
                      <li
                        key={index}
                        className="gap-[12px] flex justify-start items-center"
                      >
                        <input
                          id={el.nama}
                          type="checkbox"
                          checked={!!el.bool}
                          onChange={() => handleChangeKategori(el.id)}
                        />
                        <label
                          htmlFor={el.nama}
                          className="text-[16px] font-light leading-[24px]"
                        >
                          {el.nama}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-[24px] w-[280px] ">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="text-[22px] font-medium leading-[32px]"
                    >
                      Level
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={0}>
                  <ul className="gap-[16px] mb-[24px] ">
                    {level.map((el, index) => (
                      <li
                        key={index}
                        className="gap-[12px] flex justify-start items-center"
                      >
                        <input
                          id={el.nama}
                          type="checkbox"
                          checked={!!el.bool}
                          onChange={() => handleChangeLevel(el.id)}
                        />
                        <label
                          htmlFor={el.nama}
                          className="text-[16px] font-light leading-[24px]"
                        >
                          {el.nama}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-[24px] w-[280px] ">
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="text-[22px] font-medium leading-[32px]"
                    >
                      Harga
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={0}>
                  <ul className="gap-[16px] mb-[24px]  ">
                    {harga.map((el, index) => (
                      <li
                        key={index}
                        className="gap-[12px] flex justify-start items-center"
                      >
                        <input
                          id={el.hargaMax}
                          checked={!!el.bool}
                          onChange={() => handleChangeHarga(el.id)}
                          type="checkbox"
                        />
                        <label
                          htmlFor={el.hargaMax}
                          className="text-[16px] font-light leading-[24px]"
                        >
                          {el.hargaMin === 0 ? (
                            <p className="w-[190px]">Gratis</p>
                          ) : (
                            <p className="w-[190px]">
                              Rp {el.hargaMin?.toLocaleString("id-ID")} - Rp{" "}
                              {el.hargaMax?.toLocaleString("id-ID")}
                            </p>
                          )}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterDataKelas;
