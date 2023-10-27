import React from 'react';
import {Tabs}  from 'antd';
import {items} from '../MenuData'
import '../components/TabComponents/Tab.css'

const onChange = (key) => {
  console.log(key);
};



const TabMenu = () => {
  return (
    <div>
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      indicatorSize={(origin) => origin - 16}
    />

  </div>
  )
  


};
export default TabMenu;

