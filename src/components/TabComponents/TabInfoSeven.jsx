import React from "react"
import {dataSeven} from '../../MenuData'

const TabInfoSeven = () => {
  return (
    <div className="Tab-Container">
      {dataSeven?.map((item, i) => (
        <img src={item} key={i} className="TabImg"  alt='img'/>
      ))}
    </div>
  )
}

export default TabInfoSeven;