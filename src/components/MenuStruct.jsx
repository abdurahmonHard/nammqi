import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {itemsUz, itemsRu, itemsEn} from '../MenuData'
import i18n from '../i18n';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const MenuStruct = () => {
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
    {/* {i18next
                .t("navData.faoliyat", { returnObjects: true })
                .map((item, i) => (
                  <MenuStructChild items={item} key={i} />
                ))} */}
      {items?.map((item, i) => {
        return <MenuStructChild items={item} key={i} />
      })}
      <div className="flex py-6 px-3.5 box-border w-[100px]">
        {/* <h1 onClick={selectUzb}>Uzb</h1> */}
        {i18n.language !== 'ru' && <button className="text-white border-r-2 px-2 w-12" onClick={selectRu}>Ru</button>}
        {i18n.language !== 'uz' && <button className={`text-white px-2 w-12 ${i18n.language === 'en' ? '':'border-r-2'}`} onClick={selectUz}>Uz</button>}
        {i18n.language !== 'en' && <button className="text-white pl-2" onClick={selectEng}>Eng</button>}
        {/* <h1>{t("navData.mainPage")}</h1> */}
      </div>
    </div>
  </>
}
const MenuStructChild = ({ items }) => {
  return <Dropdown menu={{ items, }} >
    <a onClick={(e) => e.preventDefault()} >
      <Space className="text-white flex py-6 uppercase px-3.5 cursor-pointer" >
        {items[0].title}
        <div className="pl-1 text-sm pt-[2px]">
          <DownOutlined />
        </div>
      </Space>
    </a>
  </Dropdown>
};


export default MenuStruct;