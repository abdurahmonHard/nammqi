import React from "react"
import {dataAll} from '../../MenuData'
import './Tab.css'

const TabInfoAll = () => {
  return (
    <div className="Tab-Container">
      {dataAll?.map((item, i) => (
        <img src={item} key={i} className="TabImg"  alt='img' />
      ))}
    </div>
  )
}

export default TabInfoAll;



