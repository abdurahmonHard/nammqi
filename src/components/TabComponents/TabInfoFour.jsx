import React from "react"
import {dataFour} from '../../MenuData'

const TabInfoFour = () => {
  return (
    <div className="Tab-Container">
      {dataFour?.map((item, i) => (
        <img src={item} key={i} className="TabImg" alt='img'/>
      ))}
    </div>
  )
}

export default TabInfoFour;