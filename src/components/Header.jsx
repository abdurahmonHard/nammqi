import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import video from '../assets/images/video.mp4'
import { useTranslation } from "react-i18next";
import Card from './Card'

import { Carousel } from 'antd';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="Container">
        <Carousel autoplay>
          <div>
            <span className="object-cover text-white  text-center bg-current" >
              <img className="h-screen w-full " src={image1} alt='img'/>
            </span>
          </div>
          <div>
            <span className="object-cover text-white  text-center bg-current" >
              <img className="h-screen w-full" src={image2} alt='img'/>
            </span>
          </div>
          <div>
            <span  className="object-cover text-white  text-center bg-current" >
              <img className="h-screen w-full" src={image3} alt='img'/>
            </span>
          </div>
          <div>
            <span className="object-cover text-white  text-center bg-current" >
              <img className="h-screen w-full" src={image4} alt='img'/>
            </span>
          </div>
        </Carousel>
      </header>
      <div>
        <div className="object-cover">
          <video className="h-screen pt-4 pb-8 w-11/12 m-auto" width="800" height="400" controls >
          <source  src={video} type="video/mp4"/>
          </video>
        </div>
      </div>

      {/* CARDS */}

      <div>
        <div className="flex w-[94%] m-auto flex-wrap py-5 ">
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-3.5 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  {t("text")}
                </a>
              </h5>
            </div>
          </div>
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/' className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Hemis (O'qituvchi)
                </a>
              </h5>
            </div>
          </div>
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#6CABB8] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#6CABB8] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-calendar'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Dars jadvali
                </a>
              </h5>
            </div>
          </div>
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#6c5ebf] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#6c5ebf] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-book-open'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Elektron kutubxona
                </a>
              </h5>
            </div>
          </div>
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-notepad'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Video darslar
                </a>
              </h5>
            </div>
          </div>
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Moodle
                </a>
              </h5>
            </div>
          </div>
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-7"><i className='bx bx-world'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  DTM
                </a>
              </h5>
            </div>
          </div>
          <div className="px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-7"><i className='bx bx-network-chart'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Kontrakt.edu.uz
                </a>
              </h5>
            </div>
          </div>
          <div className="main-cards  px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-7"><i className='bx bx-network-chart'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Reyting tizimi
                </a>
              </h5>
            </div>
          </div>
          <div className="main-cards  px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-user'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  @NamMQI_rectori
                </a>
              </h5>
            </div>
          </div>
          <div className="main-cards  px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7  text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-7"><i className='bx bx-message-rounded-dots'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  Unilibrary - yagona elektron kutubxona
                </a>
              </h5>
            </div>
          </div>
          <div className="main-cards  px-3.5">
            <div className="w-[16.8rem] h-56 px-6 py-8 mb-7 text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] bg-[#fff]">
              <a href='https://student.nammqi.uz/dashboard/login' >
                <button className="p-1 outline-offset-4 outline-dashed outline-[3px] outline-[#add546] rounded-[100%] w-[7rem] h-[7rem] mb-5">
                  <ul className="bg-[#add546] w-full h-full rounded-[100%] leading-[6rem]">
                    <li className="text-white text-5xl pt-6"><i className='bx bx-book-open'></i></li>
                  </ul>
                </button> 
              </a>
              <h5 className="text-base font-bold">
                <a href='http://video.nammqi.uz/'  className="text-[#696969] hover:text-[#337ab7] no-underline hover:underline">
                  "TTJ"ga onlayn ariza (2-3-kurslar uchun)
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Card/>
    </div>
  );
};

export default Header;


                       