import React from "react";
import imgNammqi from "../assets/images/ImgNammqi.jpg"
import imgNammqi1 from "../assets/images/imgNammqi1.jpg"
import imgNammqi3 from "../assets/images/imgNammqi3.jpg"
import imgNammqi2 from "../assets/images/imgNammqi2.jpg"
import imgNammqi4 from "../assets/images/imgNammqi4.jpg"
import imgNammqi5 from "../assets/images/imgNammqi5.jpg"
import imgNammqi6 from "../assets/images/imgNammqi6.jpg"
import institut from "../assets/images/institute.png"
import MainCard from "./MainCard";
import { useTranslation } from "react-i18next";


const Card = () => {
  const { t } = useTranslation();
  return(
    <div className="main-content">
      <div className="w-full m-0 bg-[#f5f8fa] py-6 ">
        <div className="card-title text-center">
          <h3 className="text-[#6c5ebf] pb-5 text-4xl font-bold leading-10">
            {t("Card.title")}
          </h3>
        </div>
        <div className="w-full"> 
          <div className="second_main_container">
            <div className="second_card_item flex flex-wrap gap-7 box-border pb-16">
              <div className="second_card_main">
                <div className="second_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 p-6  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-[#fff]">
                  <div className="w-full flex justify-center">
                    <a href='https://student.nammqi.uz/dashboard/login' >
                      <img className="w-48" src={imgNammqi} alt="img"/>
                    </a>
                  </div>
                  <div>
                    <h5 className="text-base font-bold h-20 pt-2 overflow-hidden">
                      <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                        {t("Card.text1")}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="second_card_main">
                <div className="second_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 p-6  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-[#fff]">
                  <div className="w-full flex justify-center">
                    <a href='https://student.nammqi.uz/dashboard/login' >
                      <img className="w-48" src={imgNammqi1} alt="img"/>
                    </a>
                  </div>
                  <div>
                    <h5 className="text-base font-bold h-20 pt-2 overflow-hidden">
                      <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                        {t("Card.text2")}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="second_card_main">
                <div className="second_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 p-6  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-[#fff]">
                  <div className="w-full flex justify-center"> 
                    <a href='https://student.nammqi.uz/dashboard/login' >
                      <img className="w-48" src={imgNammqi2} alt="img"/>
                    </a>
                  </div>
                    <div>
                      <h5 className="text-base font-bold h-20 pt-2 overflow-hidden ">
                        <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7]   no-underline hover:underline">
                          {t("Card.text3")}
                        </a>
                      </h5>
                    </div>
                </div>
              </div>
              <div className="second_card_main">
                <div className="second_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 p-6  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-[#fff]">
                  <div className="w-full flex justify-center">
                    <a href='https://student.nammqi.uz/dashboard/login' >
                      <img className="w-48" src={imgNammqi3} alt="img"/>
                    </a>
                  </div>
                  <div>
                    <h5 className="text-base font-bold h-20 pt-2 overflow-hidden ">
                      <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                        {t("Card.text4")}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="second_card_main">
                <div className="second_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 p-6  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-[#fff]">
                  <div className="w-full flex justify-center  ">
                    <a href='https://student.nammqi.uz/dashboard/login' >
                      <img className="w-48" src={imgNammqi4} alt="img"/>
                    </a>
                  </div>
                  <div>
                    <h5 className="text-base font-bold h-20 pt-2 overflow-hidden">
                      <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                        {t("Card.text5")}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="second_card_main">
                <div className="second_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 p-6  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-[#fff]">
                  <div className="w-full  flex justify-center ">
                    <a href='https://student.nammqi.uz/dashboard/login' >
                      <img className="w-48" src={imgNammqi5} alt="img"/>
                    </a>
                  </div>
                  <div>
                    <h5 className="text-base font-bold h-20 pt-2 overflow-hidden">
                      <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                        {t("Card.text6")}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="second_card_main">
                <div className="second_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 p-6  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-[#fff]">
                  <div className="w-full flex justify-center ">
                    <a href='https://student.nammqi.uz/dashboard/login' >
                      <img className="w-48" src={imgNammqi6} alt="img"/>
                    </a>
                  </div>
                  <div>
                    <h5 className="text-base font-bold h-20 pt-2 overflow-hidden">
                      <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                        {t("Card.text7")}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full">
          <div className="second_main_container">
            <div className="text-center flex justify-between flex-wrap gap-7 box-border w-full pt-5 pb-28">
              <img className="w-[74.5%] h-auto" src={t("content.contentImg")} alt="img"/>
            </div>
          </div>
        </div>
        <div>
          <div className="card-title text-center">
            <h3 className="text-[#6c5ebf] pb-5 text-4xl font-bold leading-10">
              {t("CardSecond.title")}
            </h3>
          </div>
        <div className="w-full">
          <div className="main_cards_container">
            <div className="flex justify-between flex-wrap gap-7 box-border pb-16">
              <div className="card_mains">
                <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56 py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                  <a href='https://student.nammqi.uz/dashboard/login' >
                    <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                      <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                        <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                      </ul>
                    </button> 
                  </a>
                  <h5 className="main_card_text text-base font-bold w-48 m-auto flex justify-center">
                    <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                      {t("CardSecond.text1")}
                    </a>
                  </h5>
                </div>
              </div>
              <div className="card_mains">
                <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56 py-8 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                  <a href='https://student.nammqi.uz/dashboard/login' >
                    <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                      <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                        <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                      </ul>
                    </button> 
                  </a>
                  <h5 className="main_card_text text-base font-bold w-48 m-auto flex justify-center">
                    <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                      {t("CardSecond.text2")}
                    </a>
                  </h5>
                </div>
              </div>
              <div className="card_mains">
                <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56 py-8 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                  <a href='https://student.nammqi.uz/dashboard/login'>
                    <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                      <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                        <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                      </ul>
                    </button> 
                  </a>
                  <h5 className="main_card_text text-base font-bold w-48 m-auto flex justify-center">
                    <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                      {t("CardSecond.text3")}
                    </a>
                  </h5>
                </div>
              </div>
              <div className="card_mains">
                <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56 py-8 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                  <a href='https://student.nammqi.uz/dashboard/login'>
                    <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                      <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                        <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                      </ul>
                    </button> 
                  </a>
                  <h5 className="main_card_text text-base font-bold w-48 m-auto flex justify-center">
                    <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                      {t("CardSecond.text4")}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Institut-img py-5 w-full">
        <div className="institut-about-content flex bg-[#6c5ebf] w-full">
          <div className="left-content w-1/2 m-auto pt-[100px] pl-9 pb-[80px] pr-4 ">
            <div className="left_content">
              <div className="left flex mb-10">
                <div className="mr-8 ">
                  <button className="p-1  outline outline-[1px] outline-[#fff] rounded-[100%] w-[100px] h-[100px]">
                    <ul className="bg-[#6c5ebf] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-calendar'></i></li>
                    </ul>
                  </button> 
                </div>
                <div className="text_content">
                  <h4 className=" text-white  font-bold text-2xl flex flex-wrap">
                    {t("About.aboutuviversty1")}
                  </h4>
                </div>
              </div>
            </div>
          <div className="left_content">
            <div className="left flex mb-10 ">
              <div className="mr-8">
                <button className="p-1  outline outline-[1px] outline-[#fff] rounded-[100%] w-[100px] h-[100px]">
                  <ul className="bg-[#6c5ebf] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-calendar'></i></li>
                  </ul>
                </button> 
              </div>
              <div className="text_content">
                <h4 className=" text-white  font-bold text-2xl flex flex-wrap">
                  {t("About.aboutuviversty2")}
                </h4>
              </div>
            </div>
          </div>
          <div className="left_content">
            <div className="left flex mb-10">
              <div className="mr-8">
                <button className="p-1 outline outline-[1px] outline-[#fff] rounded-[100%] w-[100px] h-[100px]">
                  <ul className="bg-[#6c5ebf] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-calendar'></i></li>
                  </ul>
                </button> 
              </div>
              <div className="text_content">
                <h4 className=" text-white  font-bold text-2xl flex flex-wrap">
                  {t("About.aboutuviversty3")}
                </h4>
              </div>
            </div>
          </div>
          <div className="left_content">
            <div className="left flex mb-10">
              <div className="mr-8">
                <button className=" outline outline-[1px] outline-[#fff] rounded-[100%] w-[100px] h-[100px]">
                  <ul className="bg-[#6c5ebf] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-calendar'></i></li>
                  </ul>
                </button> 
              </div>
              <div className="text_content">
                <h4 className=" text-white  font-bold text-2xl flex flex-wrap">
                  {t("About.aboutuviversty4")}
                </h4>
              </div>
            </div>
          </div>
          <div className="left_content">
            <div className="left flex mb-10">
              <div className="mr-8">
                <button className="outline outline-[1px] outline-[#fff] rounded-[100%] w-[100px] h-[100px]">
                  <ul className="bg-[#6c5ebf] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-calendar'></i></li>
                  </ul>
                </button> 
              </div>
              <div className="text_content">
                <h4 className=" text-white  font-bold text-2xl">
                  {t("About.aboutuviversty5")}
                </h4>
              </div>
            </div>
          </div>
          </div>
          <div className="right w-1/2 m-0">
            <img className="image"  src={institut} alt="img"/>
          </div>
        </div>
      </div>
      <MainCard/>
    </div>
  )
}

export default Card;


