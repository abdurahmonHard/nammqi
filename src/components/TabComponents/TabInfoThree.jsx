import React from "react"
import {dataThree} from '../../MenuData'

const TabInfoThree = () => {
  return (
    <div className="Tab-Container">
      {dataThree?.map((item, i) => (
        <img src={item} key={i} className="TabImg" alt='img'/>
      ))}
    </div>
  )
}

export default TabInfoThree;