import React from 'react';
import { BiWallet, BiPlusCircle, BiDollarCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import '../Style/Work.css';

const Works = () => {
  // Define data for each card
  const cardsData = [
    {
      icon: <BiWallet className="text-white text-[400px] mb-4 w-full h-full mt-[7%] mb-[10%]" />,
      title: 'Set up your Wallet',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    },
    {
      icon: <BiPlusCircle className="text-white text-[25px] mb-4 w-full h-full mt-[7%]  mb-[10%]" />,
      title: 'Add Your NFTS',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    },
    {
      icon: <BiDollarCircle className="text-white text-[40px] mb-4 w-full h-full mt-[7%]  mb-[10%]" />,
      title: 'Sell Your NFTS',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className='text-white text-[40px] mt-[5%] mb-[0%] font-bold'>
        How it <span className="gradient-text font-bold">Works</span>
      </h1>
      <div className="relative left-[45%] w-[10%]  mb-[5%] mt-[2%] border-none text-hidden" style={{ background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%, rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)' }}>
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500"></span>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {/* Map over cardsData array and render each card dynamically */}
        {cardsData.map((card, index) => (
          <div key={index} className="bg-[#14141F] rounded-[4%] shadow-md p-4 border-[1px] border-[#7D7D80] flex flex-col items-center py-[25%] lg:w-[95%] w-[90%]">
            {/* Icon */}
          <div style={{ background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%, rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)' }} className='w-[60px] h-[70px] '>  {card.icon}</div>
            {/* Card Content */}
            <motion.h2 className="text-[20px] font-bold mb-2 text-white text-[25px] font-[Montserrat] mt-[10%] ">{card.title}</motion.h2>
            <p className="text-gray-300 text-center px-[7%] py-[5%] font-[Raleway]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
