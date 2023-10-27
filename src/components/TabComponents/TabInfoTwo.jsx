import React from "react"
import {dataTwo} from '../../MenuData'

const TabInfoTwo = () => {
  return (
    <div className="Tab-Container">
      {dataTwo?.map((item, i) => (
        <img  src={item} key={i} className="TabImg" alt='img'/>
      ))}
    </div>
  )
}

export default TabInfoTwo;