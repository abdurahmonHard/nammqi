import React from "react"
import {dataSix} from '../../MenuData'

const TabInfoSix = () => {
  return (
    <div className="Tab-Container">
      {dataSix?.map((item, i) => (
        <img src={item} key={i} className="TabImg" alt='img'/>
      ))}
    </div>
  )
}

export default TabInfoSix;