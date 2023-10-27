import React from "react";
import logoUz from '../assets/images/logoUz.png'
import collect from '../assets/images/collect.png'
import footerPhoto1 from '../assets/images/footerPhoto1.jpg'
import footerPhoto2 from '../assets/images/footerPhoto2.jpg'
import footerPhoto3 from '../assets/images/footerPhoto3.jpg'
import footerPhoto4 from '../assets/images/footerPhoto4.jpg'
import footerPhoto5 from '../assets/images/footerPhoto5.jpg'
import footerPhoto6 from '../assets/images/footerPhoto6.jpg'
import footerPhoto7 from '../assets/images/footerPhoto7.jpg'
import footerPhoto8 from '../assets/images/footerPhoto8.jpg'


const Footer = ()=>{
  return(
    <div>

    
      <div className="footer-items-container bg-[#6c5ebf]">
        <div className="footer-items flex w-[94%] m-auto pt-[100px] pb-[60px]">
          <div className="footer-contact px-3 h-[282px]" >
            <div className="footer-icon w-[359px] h-[90px]">
              <img src={logoUz} alt="img"/>
            </div>
            <footer className="mt-8">
              <ul>
                <li className="text-white mb-2 flex items-center "> 
                  <div className="w-[36px] h-[36px]  rounded-sm bg-[#8175c8] text-center p-2 mr-2"> <i className='bx bx-home'></i></div>
                  Islom Karimov ko`chasi 12-uy
                </li>
              </ul>
              <ul>
                <li className="text-white mb-2 flex items-center">
                  <div className="w-[36px] h-[36px] rounded-sm bg-[#8175c8] text-center p-2 mr-2"><i className='bx bxs-phone'></i></div> 
                  69 234-15-23. 69 234 14 30
                </li>
              </ul>
              <ul>
                <li className="text-white mb-2 flex items-center">
                  <div className="w-[36px] h-[36px] rounded-sm bg-[#8175c8] text-center p-2 mr-2"><i className='bx bx-time-five'></i></div>
                  08:00-17:00
                </li>
              </ul>
              <ul>
                <li className="text-white mb-2 flex items-center">
                  <div className="w-[36px] h-[36px] rounded-sm bg-[#8175c8] text-center p-2 mr-2"><i className='bx bx-world'></i></div> 
                  nammqi_info@edu.uz
                </li>
              </ul>
            </footer>
          </div>
          <div className="footer-galareya w-[292px] h-[340px] mx-3 overflow-hidden">
            <div className="gallerey-title mb-6 font-bold text-3xl text-white pl-1">
              <h4>Galereyalar</h4>
            </div>
            <div className="photos ">
              <ul className="flex flex-wrap ">
                <li className="p-1.5 w-[32%]">
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto1} alt="img"/>
                  </a>
                </li>
                <li className="p-1.5 w-[32%]">
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto2} alt="img"/>
                  </a>
                </li>
                <li className="p-1.5 w-[32%]">
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto3} alt="img"/>
                  </a>
                </li>
                <li className="p-1.5 w-[32%]"> 
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto4} alt="img"/>
                  </a>
                </li>
                <li className="p-1.5 w-[32%]">
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto5} alt="img"/>
                  </a>
                </li>
                <li className="p-1.5 w-[32%]">
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto6} alt="img"/>
                  </a>
                </li>
                <li className="p-1.5 w-[32%]">
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto7} alt="img"/>
                  </a>
                </li>
                <li className="p-1.5 w-[32%]">
                  <a href="https://nammqi.uz/galleries/oqituvchi-va-murabbiylar-kuni">
                    <img src={footerPhoto8} alt="img"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btn">
        <div className="footer-content flex  w-[94%] m-auto py-8">
          <div className="footer-text">
            <p className="font-bold text-[#707070] px-3.5">
              © 2022 Namangan muhandislik-qurilish instituti. All right reserved.
            </p>
          </div>
          <div className="footer-link pl-9">
            <a href="https://www.uz/ru/res/visitor/index?id=41261">
              <img src={collect} alt="img"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;








