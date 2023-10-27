import React from "react"
import {data} from '../../MenuData'


const TabInfo = () => {
  return (
    <div className="Tab-Container">
      {data?.map((item, i) => (
        <img src={item} key={i} className="TabImg" alt='img'/>
      ))}
    </div>
  )
}

export default TabInfo;