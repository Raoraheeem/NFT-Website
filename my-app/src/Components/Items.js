import React from 'react'
import CardSlider from '../Components/CardSlider'

const Items = () => {
  return (
    <div>
      <h1 className=' mt-[5%] text-white text-[30px] font-bold'>New <span className="gradient-text font-bold">Items</span></h1>
      <div className="relative left-[48%] w-[5%]  mb-[5%] mt-[2%] border-none text-hidden" style={{ background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%, rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)' }}>
  
  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500"></span>
</div>

<CardSlider/>
    </div>
  )
}

export default Items
