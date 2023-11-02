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
    <div className="flex ">
        <div className="md:flex items-center justify-between md:px-0">
          <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon className="text-white" name={open ? "close":'menu-outline'}></ion-icon>
          </div>
          <ul className={`md:flex md:item-center md:pb-0 pb-[50px]  absolute md:static bg-[#6c5ebf]  md:z-[30] z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 opacity-500':"top-[-420px]"} md:opacity-100`}>
            {items?.map((item, i) => {
              return <MenuStructChild items={item} key={i} />
            })}
          </ul>
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
  return <Dropdown menu={{ items, }}  className='my-dropdown' >
    <a onClick={(e) => e.preventDefault()} >
      <Space className="text-white flex py-6 uppercase px-3.5 cursor-pointer navbar_text_items" >
        {items[0].title}
        <div className="text-sm pt-[2px]">
          <DownOutlined />
        </div>
      </Space>
    </a>
  </Dropdown>
};


export default MenuStruct;



