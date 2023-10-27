import React from "react"
import {dataFive} from '../../MenuData'

const TabInfoFive = () => {
  return (
    <div className="Tab-Container">
      {dataFive?.map((item, i) => (
        <img src={item} key={i} className="TabImg" alt='img'/>
      ))}
    </div>
  )
}

export default TabInfoFive;