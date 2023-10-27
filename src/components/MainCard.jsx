import React from "react";
import Footer from "./Footer";
import olatiImg from "../assets/images/onatilImg.jpg"
import Counter from './Counter'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'
import imgs1 from '../assets/images/imgs1.jpg'
import imgs2 from '../assets/images/imgs2.jpg'
import imgs3 from '../assets/images/imgs3.jpg'
import imgs4 from '../assets/images/imgs4.jpg'
import imgs5 from '../assets/images/imgs5.jpg'
import imgs6 from '../assets/images/imgs6.jpg'
import imgs7 from '../assets/images/imgs7.jpg'
import imgs8 from '../assets/images/imgs8.jpg'
import imgs9 from '../assets/images/imgs9.jpg'
import imgs10 from '../assets/images/imgs10.jpg'
import imgs11 from '../assets/images/imgs11.jpg'
import Tab from "./TabMenu";
import TabMenu from "./TabMenu";

import { useTranslation } from "react-i18next";



const MainCard =()=>{
  const { t } = useTranslation();
  return(
    <>
      <div>
        <div className="card-title text-center">
          <h3 className="text-[#6c5ebf] pb-5 text-4xl font-bold leading-10">
            {t("mainCard.news")}
          </h3>
        </div>
        <div className="flex flex-wrap w-[94%] m-auto">
          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img1} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  {t("mainCard.text1")}
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="flex items-center py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img2} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  NamMQI va Belarus davlat transport universiteti o‘rtasida hamkorlik memorandumi imzolandi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img3} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Minskda Oʼzbekiston va Belarus oliy taʼlim muassasalari rektorlari anjumanining ochilish marosimi boʼlib oʼtdi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img4} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Prezident Shavkat Mirziyoev hududlar rivoji, aholi turmushi bilan tanishish maqsadida Qashqadaryo viloyatiga joʼnab ketdi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img5} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Stritbol bo‘yicha viloyat bosqichi yakuniga yetdi. NamMQI jamoalari sovrinli o‘rinlarni egalladi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img6} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Ayni paytda Toshkentda "Yoshlar huquqlari: imkoniyatlar va himoya qilish mexanizmlari" mavzusida xalqaro forum bo‘lib o‘tmoqda.
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img7} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[rgb(51,122,183)] no-underline hover:underline">
                  NamMQI vakili “Faol tadqiqotchi” ko’krak nishoni bilan taqdirlandi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img8} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Namangan muhandislik-qurilish instituti 1-sonli talabalar turar joyida yashovchi yoshlar bilan "Students Party" ko'ngilochar dasturi o'tkazildi.
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem]  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img9} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  NamMQI dekan o‘rinbosari loyiha muallifi bo‘lgan “Hilol” to‘plami taqdimoti bo‘lib o‘tdi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img10} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  «Besh tashabbus olimpiadasi» voleybol bo‘yicha viloyat bosqichida NamMQI jamoasi uchinchi o‘rinni egalladi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem]  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img11} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4 max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Stajyor-o‘qituvchiga vazir sovg‘asi topshirildi
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3.5">
            <div className="w-[16.8rem] h-auto  mb-3.5 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login'>
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img className="transition duration-300 ease-in-out hover:scale-110" src={img12} alt="img" />
                </div>
              </a>
              <h5 className="text-base font-bold p-4  max-w-full h-[134px]  text-clip overflow-hidden">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Ayni paytda Toshkentda "Yoshlar huquqlari: imkoniyatlar va himoya qilish mexanizmlari" mavzusida xalqaro forum bo‘lib o‘tmoqda.
                </a>
              </h5>
              <div className="border border-[#f0f0f0] border-t-1 border-l-0 border-r-0 border-b-0">
                <div className="date flex py-2.5 px-4 border border-blue-900 border-t-0 border-l-0 border-r-0 border-b-2">
                  <div className="flex items-center text-[#696969]">
                    <span className="text-2xl pr-1"><i className='bx bx-calendar'></i></span>
                      21.10.2023
                  </div>
                  <div className="flex items-center text-[#696969]">
                    <span className="pl-1"><i className='bx bx-low-vision'></i></span>
                      92
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ELONLAR CARDS */}
        <div className="elonlar-card w-full bg-[#f5f8fa] py-3">
          <div className="card-title text-center">
            <h3 className="text-[#6c5ebf] pb-5 text-4xl font-bold leading-10">
              E'lonlar
            </h3>
          </div>
          <div className="flex flex-wrap w-[94%] m-auto">
            <div className="px-3.5  py-3">
              <div className="w-[367.3px] m-auto h-[530px]   mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div>
                  <img src={imgs1} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      Institutda mini-futbol bo'yicha "Rektor kubogi" ga start berildi
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5  py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div>
                  <img src={imgs2} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      DIQQAT E'LON
                    </h5>
                  </div>
                  <div className="">
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5  py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img src={imgs3} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      Davlat tili haqidagi testga tayyormisiz?
                    </h5>
                  </div>
                  <div className="">
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img src={imgs4} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      1 000 nafar talaba-o‘quvchilarni xalqaro IELTS sertifikatiga bepul o‘qitish rejalashtirilmoqda
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img src={imgs5} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      2024-yil uchun doktorantura va mustaqil izlanuvchilikka hujjat qabul qilish muddati uzaytirildi!
                    </h5>
                  </div>
                  <div>
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img src={imgs6} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      E'LON!!!
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img src={imgs8} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      “El-yurt umidi” jamg‘armasi 2023 yilgi 2-ochiq stipendiya tanlovini e'lon qiladi!
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img src={imgs9} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      DIQQAT, E'LON
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img className="w-full h-[340px]"  src={imgs10} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      Xakimov Mirolimjon Murodiljonovichning falsafa doktori (PhD) ilmiy darajasini olish muhokamasi.
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center "><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img className="w-full h-[365px]" src={imgs11} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      Siz Koreyaga ishga yoki o’qishga bormoqchisiz?
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center "><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div >
                  <img  src={imgs7} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      E'LON!!!
                    </h5>
                  </div>
                  <div >
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3.5 py-3">
              <div className="w-[367.3px] h-[530px]  mb-3.5 shadow-[0_0_20px_1px_rgba(0,0,0,0.2)] transition duration-500 ease-in-out hover:shadow-[0_0_20px_15px_rgba(0,0,0,0.1)] gray:hover:shadow-gray/50 bg-[#fff]">
                <div className="">
                  <img className="" src={olatiImg} alt="img" 
                  />
                </div>
                <div className="p-6">
                  <div>
                    <h5 className="text-base font-bold text-[#696969]">
                      E'LON!!!
                    </h5>
                  </div>
                  <div className="">
                    <div className="kalendar pb-3.5">
                      <span className="text-[#ffb400] flex items-center"><i className='bx bx-time-five mr-1'></i> окт 21, 2023</span>
                    </div>
                    <div className="card-button">
                      <button className="bg-[#6c5ebf] hover:bg-[#ffb400] py-2 px-7 rounded-sm transition font-bold">
                        <a href="https://nammqi.uz/davlat-tili-haqidagi-testga-tayyormisiz" className="text-white">Batafsil</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
          <TabMenu/>
          <Counter/>
          <Footer/>
      </div>
    </>
  )
}

export default MainCard;
