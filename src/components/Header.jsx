import React from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import { useTranslation } from "react-i18next";
import Card from './Card'
import '../../src/App.css'

import { Carousel } from 'antd';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="Container w-full">
        <Carousel autoplay>
          <div className='header_content'>
            <span className="object-cover text-white   text-center bg-current" >
              <img className="header_img h-screen w-full " src={image1} alt='img'/>
            </span>
          </div>
          <div className='header_content '>
            <span className="object-cover text-white  text-center bg-current" >
              <img className="header_img h-screen w-full" src={image2} alt='img'/>
            </span>
          </div>
          <div className='header_content '>
            <span  className="object-cover text-white  text-center bg-current" >
              <img className="header_img h-screen w-full" src={image3} alt='img'/>
            </span>
          </div>
          <div className='header_content '>
            <span className="object-cover text-white  text-center bg-current" >
              <img className="header_img h-screen w-full" src={image4} alt='img'/>
            </span>
          </div>
        </Carousel>
      </header>
      <div className='w-full'>
        <div className='main_cards_container '>
          <div className="video_content text-center flex justify-between flex-wrap gap-7 box-border w-full">
            <video className="pt-4 pb-8 w-full" controls >
            <source  src={"https://nammqi.uz/kriditmodultizimihaqida.mp4"} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
      <div  className='w-full'>
        <div className='main_cards_container'>
          <div className="first_card flex justify-between flex-wrap gap-7 box-border pb-16">
            <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <div className="card_mains">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.hemis")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.hemises")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#6CABB8] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#6CABB8] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-calendar'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.dars")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#6c5ebf] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#6c5ebf] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-book-open'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.Electron")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-notepad'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.video")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.moodle")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-7"><i className='bx bx-world'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.dtm")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-7"><i className='bx bx-network-chart'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.edu")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-7"><i className='bx bx-network-chart'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold w-[90%] m-auto flex flex-wrap justify-center">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.diplom")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.tizim")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8   text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-7"><i className='bx bx-message-rounded-dots'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="text-base font-bold">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                    {t("headerCard.rector")}
                  </a>
                </h5>
              </div>
            </div>
            <div className="card_mains">
              <div className="main_card w-[16.8rem] flex flex-col box-border min-w-260 overflow-hidden max-w-275  max-md:-3 h-56  py-8  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
                <a href='https://student.nammqi.uz/dashboard/login' >
                  <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                    <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                      <li className="text-white text-5xl pt-6"><i className='bx bx-book-open'></i></li>
                    </ul>
                  </button> 
                </a>
                <h5 className="first_card_text text-base font-bold w-[90%] m-auto flex flex-wrap">
                  <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7]   no-underline hover:underline">
                    {t("headerCard.library")}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card/>
    </div>
  );
};

export default Header;


                       