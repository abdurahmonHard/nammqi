import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {itemsUz, itemsRu, itemsEn} from '../MenuData'
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const MenuStruct = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const [items, setItems] = useState(itemsUz);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const selectUz = () => {
    changeLanguage('uz')
  }

  const selectRu = () => {
    changeLanguage('ru')
  }

  const selectEng = () => {
    changeLanguage('en')
  }

useEffect(()=> {
  if(i18n.language === 'uz') {
    setItems(itemsUz)
  } 
  else if(i18n.language === 'ru') {
    setItems(itemsRu)
  } 
  else if(i18n.language === 'en') {
    setItems(itemsEn)
  } 
},[i18n.language])
  return <>
    <div className="flex">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between  md:px-10">
          <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon className="text-white" name={open ? "close":'menu-outline'}></ion-icon>
          </div>
          <ul className={`md:flex md:item-center md:pb-0 pb-[50px]  absolute md:static bg-[#6c5ebf]  md:z-[30] z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 opacity-500':"top-[-420px]"} md:opacity-100`}>
            {items?.map((item, i) => {
              return <MenuStructChild items={item} key={i} />
            })}
          </ul>
        </div>
      </div>
      <div className='language_content'>
        <div className="navbar_lenguage flex py-6  px-3.5 box-border w-[100px]">
          {i18n.language !== 'ru' && <button className="text-white border-r-2 px-2 w-12" onClick={selectRu}>Ru</button>}
          {i18n.language !== 'uz' && <button className={`text-white px-2 w-12 ${i18n.language === 'en' ? '':'border-r-2'}`} onClick={selectUz}>Uz</button>}
          {i18n.language !== 'en' && <button className="text-white pl-2" onClick={selectEng}>Eng</button>}
        </div>
      </div>
    </div>
  </>
}
const MenuStructChild = ({ items, }) => {
  return <Dropdown menu={{ items, }} >
    <a onClick={(e) => e.preventDefault()} >
      <Space className="text-white flex py-6 uppercase px-3.5 cursor-pointer navbar_text_items" >
        {items[0].title}
        <div className="pl-1 text-sm pt-[2px]">
          <DownOutlined />
        </div>
      </Space>
    </a>
  </Dropdown>
};


export default MenuStruct;



// let Link =[
//   {name: "HOME", link:"/"},
//   {name: "SERVISE", link:"/"},
//   {name: "ABOUT", link:"/"},
//   {name: "BLOG", link:"/"},
//   {name: "CONTACT", link:"/"}
// ]
// const [open, setOpen] = useState(false);
// return(
//   <div className="shadow-md w-full fixed top-0 left-0">
//     <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//       <div className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
//           Design
//       </div>

//       <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
//         <ion-icon name={open ? "close":'menu-outline'}></ion-icon>
//       </div>


//       <ul className={`md:flex md:item-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-500':"top-[-400px]"} md:opacity-100`}>
//         {
//           Link?.map((link)=>(
//             <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
//               <a href={Link.link} className="text-grey-800 hover:text-grey-400 duration-500">{link.name}</a>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   </div>
// )