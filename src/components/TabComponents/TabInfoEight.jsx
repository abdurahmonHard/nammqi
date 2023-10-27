import React from "react"
import {dataEight} from '../../MenuData'

const TabInfoEight = () => {
  return (
    <div className="Tab-Container">
      {dataEight?.map((item, i) => (
        <img src={item} key={i} className="TabImg" alt='img'/>
      ))}
    </div>
  )
}

export default TabInfoEight;