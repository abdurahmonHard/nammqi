import React, { useState, useEffect } from "react";
import achivements from '../assets/images/achievements.jpg'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const counter = async (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      await setTimeout(() => {
        setCount(count)
      }, 1000);
    }
  }
  const counter2 = async (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      await setTimeout(() => {
        setCount2(count)
      }, 1000);
    }
  }
  const counter3 = async (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      await setTimeout(() => {
        setCount3(count)
      }, 1000);
    }
  }
  const counter4 = async (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      await setTimeout(() => {
        setCount4(count)
      }, 1000);
    }
  }

  useEffect(() => {
    counter(0, 366)
    counter2(0, 9636)
    counter3(0, 1331)
    counter4(0, 2388)
  }, [])

  return (
    <div className="pb-32 pt-4">
      <div className="counter-items relative">
        <img className="bg-cover bg-center object-cover h-[235px]  w-full" src={achivements} alt="img" />
        <div className="absolute bg-[rgba(0,0,0,.7)] w-full bottom-0 left-0">
          <div className="counters flex justify-between items-center w-[90%] h-[235px] m-auto py-5 ">
            <div className="counts text-center w-[292px] px-3.5">
              <p className="text-[#ffb400] text-6xl pb-8"><i className='bx bx-user'></i></p>
              <span className="text-white font-bold text-5xl">
                {count}
              </span>
              <p className="text-white font-bold text-2xl pt-3">Professor o'qituvchilar</p>
            </div>
            <div className="counts text-center w-[262px] px-3.5">
              <p className="text-[#ffb400] text-6xl pb-8"><i className='bx bx-user'></i></p>
              <span className="text-white font-bold text-5xl">
                {count2}
              </span>
              <p className="text-white font-bold text-2xl pt-3">Talabalar soni</p>
            </div>
            <div className="counts text-center w-[292px] px-3.5">
              <p className="text-[#ffb400] text-6xl pb-8"><i className='bx bx-pencil'></i></p>
              <span className="text-white font-bold text-5xl">
                {count3}
              </span>
              <p className="text-white font-bold text-2xl pt-3" >Bitiruvchilar</p>
            </div>
            <div className="counts text-center w-[292px] px-3.5">
              <p className="text-[#ffb400] text-6xl pb-8"><i className='bx bx-book' ></i></p>
              <span className="text-white font-bold text-5xl ">
                {count4}
              </span>
              <p className="text-white font-bold text-2xl pt-3">Kitob fondi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;




