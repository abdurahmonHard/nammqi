import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import '../components/TabComponents/Tab.css'
import { tabitemsUz, tabitemsRu, tabitemsEn } from '../MenuData';
import i18n from '../i18n';


const onChange = (key) => {
  console.log(key);
};

const TabMenu = () => {
  const [items, setItems] = useState(tabitemsUz);


  useEffect(() => {
    if (i18n.language === 'uz') {
      setItems(tabitemsUz)
    }
    else if (i18n.language === 'ru') {
      setItems(tabitemsRu)
    }
    else if (i18n.language === 'en') {
      setItems(tabitemsEn)
    }
  }, [i18n.language])

  return (
    <div className='Tab-container'>
      <div className='w-full'>
        <h3 className='font-bold text-[#6c5ebf] text-4xl mb-2.5 text-center'>Fotogallereya</h3>
      </div>
      <Tabs className='text-[#696969]'
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        indicatorSize={(origin) => origin - 16}
      />
    </div>
  )
};





export default TabMenu;

