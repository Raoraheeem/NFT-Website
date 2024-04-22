import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import bannerimg from '../Assets/banner.jpg';
import Women from '../Assets/women.png';

const Banner = () => {
  return (
    <div className="bg-cover bg-center flex lg:h-[590px] md:h-[900px] h-[1600px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1" style={{backgroundImage: `url(${bannerimg})`}}>
      {/* Left Section */}
      <div className="w-[70%]  flex flex-col items-start lg:justify-start justify-end lg:ms-[10%] ms-[5%] mt-[3%] lg:order-1 order-1">
        {/* Animate the h1 element */}
        <motion.h1 
          className="text-white text-[70px] font-bold font-[Raleway] mb-2 lg:text-start text-end "
          initial={{ y: 100, opacity: 0 }} // Initial state (downward, hidden)
          animate={{ y: 0, opacity: 1 }} // Animation to move upwards and fade in
          transition={{ duration:2, delay: 1 }} // Animation transition with delay
        >
          COLLECT <br/>YOUR <br/> SUPER <br/> RARE NFT
        </motion.h1>
        <motion.p className="text-white text-[20px] font-[Raleway] font-medium mb-4 lg:text-center text-end"  initial={{  opacity: 0 }} // Initial state (downward, hidden)
          animate={{ opacity: 1 }} // Animation to move upwards and fade in
          transition={{ duration:2, delay: 3 }}>The World Largest digital marketplace.</motion.p>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:items-start items-end relative lg:right-[5%] right-[-40%]'>
          <div className="bg-left-image bg-cover bg-center flex-col  lg:items-start items-end lg:justify-start justify-end">
            {/* Content for the left part */}
            <motion.h1 initial={{  opacity: 0 ,x:10}} // Initial state (downward, hidden)
          animate={{ opacity: 1,x:0 }} // Animation to move upwards and fade in
          transition={{ duration:2, delay: 3 }} className="text-white text-4xl font-bold mb-2 font-[Raleway]">942215</motion.h1>
            <motion.p  initial={{  opacity: 0 ,x:10}} // Initial state (downward, hidden)
          animate={{ opacity: 1,x:0 }} // Animation to move upwards and fade in
          transition={{ duration:2, delay: 3 }} className="text-white text-[20px] font-[Montserrat] font-bold"> Collectibles</motion.p>
          </div>
          {/* Right Part with Background Image */}
          <div className="bg-right-image bg-cover bg-center flex-col lg:items-center items-end lg:justify-center justify-end  ">
            {/* Content for the right part */}
            <motion.h1 initial={{  opacity: 0,x:10 }} // Initial state (downward, hidden)
          animate={{ opacity: 1,x:0 }} // Animation to move upwards and fade in
          transition={{ duration:2, delay: 3 }} className="text-white text-4xl font-bold mb-2 font-[Raleway] lg:order-1 order-1">27k</motion.h1>
            <motion.p initial={{  opacity: 0,x:10 }} // Initial state (downward, hidden)
          animate={{ opacity: 1,x:0 }} // Animation to move upwards and fade in
          transition={{ duration:2, delay: 3 }} className="text-white text-[20px] font-[Montserrat] font-bold lg:order-2 order-2"> Auctions</motion.p>
          </div>
          <div className="bg-right-image bg-cover bg-center flex-col items-end justify-end">
            {/* Content for the right part */}
            <motion.h1  initial={{  opacity: 0,x:10 }} // Initial state (downward, hidden)
          animate={{ opacity: 1,x:0 }} // Animation to move upwards and fade in
          transition={{  duration:2, delay: 3}}  className="text-white text-4xl font-bold mb-2 font-[Raleway]">4k</motion.h1>
            <motion.p initial={{  opacity: 0,x:10 }} // Initial state (downward, hidden)
          animate={{ opacity: 1,x:0 }} // Animation to move upwards and fade in
          transition={{  duration:2, delay: 3}} className="text-white text-[20px] font-[Montserrat] font-bold"> NFT Artist</motion.p>
          </div>
          <motion.button
           initial={{ y: 20, opacity: 0 }} // Initial state (downward, hidden)
           animate={{ y: 0, opacity: 1 }} // Animation to move upwards and fade in
           transition={{ duration:2, delay: 4 }}  
            type="button" 
            className=" lg:w-[150px] md:w-[200px] w-[150px] h-[35px] lg:rounded-[30px] rounded-[30px] text-[#ffffff] font-[800] font-[Raleway] text-[17px] mb-[40%]  " 
            style={{background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)'}}
          >
            <span className=" md:inline-block md:text-[20px] pb-[50%] ">Explore</span>
          </motion.button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[70%]  flex lg:items-center items-end justify-end lg:order-2 order-2 md:mb-[50%]">
        <motion.img  initial={{ y: 100, opacity: 0 }} // Initial state (downward, hidden)
          animate={{ y: 0, opacity: 1 }} // Animation to move upwards and fade in
          transition={{ duration:2, delay: 1 }} src={Women} alt='' className='h-[500px] w-[400px] flex justify-end'/>
      </div>
    </div>
  );
};

export default Banner;
