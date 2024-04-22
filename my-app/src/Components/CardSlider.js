import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import item3 from '../Assets/item3.jpg';
import item1 from '../Assets/item1.jpg';
import author1 from '../Assets/author-1.jpg';
import item4 from '../Assets/item4.jpg';
import item6 from '../Assets/item6.jpg';
import item5 from '../Assets/item5.jpg';
import item7 from '../Assets/item7.jpg';
import item8 from '../Assets/item8.jpg';
import anime4 from '../Assets/anim-4.GIF';
import item9 from '../Assets/item9.jpg';
import Running from '../Assets/Running.jpg';
import item10 from '../Assets/item10.jpg';
import static6 from '../Assets/static-6.jpg';
import author3 from '../Assets/author-3.jpg';
import anim5 from '../Assets/anim-5.GIF';
import author4 from '../Assets/author-4.jpg';

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [liked, setLiked] = useState(Array(8).fill(false));

  const cards = [
    { title: 'Delectus Antiendotoxin', description: '0.08 ETH 1/20', ItemImage: item3, ItemIcons: author1 },
    { title: 'Surfusion Underfalconer', description: '0.08 ETH 1/20', ItemImage: item1, ItemIcons: item4 },
    { title: 'Buccocervical #203', description: '0.08 ETH 1/20', ItemImage: item6, ItemIcons: item5 },
    { title: 'AnimeSailorCLub #304', description: '0.08 ETH 1/20', ItemImage: item8, ItemIcons: item7 },
    { title: 'The Truth', description: '0.08 ETH 1/20', ItemImage: anime4, ItemIcons: item9 },
    { title: 'Running Puppits', description: '0.08 ETH 1/20', ItemImage: Running, ItemIcons: item10 },
    { title: 'Green Frogman', description: '0.08 ETH 1/20', ItemImage: static6, ItemIcons: author3 },
    { title: 'Loop Donut', description: '0.08 ETH 1/20', ItemImage: anim5, ItemIcons: author4 },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? cards.length - 4 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === cards.length - 4 ? 0 : currentSlide + 1);
  };

  const handleLike = (index) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = !updatedLiked[index];
    setLiked(updatedLiked);
  };

  return (
    <div className=" relative flex justify-center items-center">
      <div className="overflow-hidden w-[1170px]">
        <div className="flex transition-transform lg:translate-x-full  gap-[20px]" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className=" lg:w-64 w-full lg:mx-2 mx-[15%]   flex-none gap-15 ">
              <div className="bg-[#242435] shadow-md rounded-[25px] p-4  h-[450px] w-[270px]">
                <img src={card.ItemIcons} alt='' className='w-[45px] h-[45px] rounded-[30px] mb-[10px]'/>
                <img src={card.ItemImage} alt='' className='w-[220px] h-[230px] rounded-[10px] mb-[5%] mx-[2px]'/>

                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-[17px] font-[Montserrat] mb-2 text-[white] text-start font-bold">{card.title}</h2>
                    <p className="text-[white] text-start text-gray-400">{card.description}</p>
                    <button className='text-[#5959F9]  ms-[-10%]  pb-[55%] text-[17px] font-[Montserrat]'>Place a bid</button>
                    <button className={`text-[#5959F9] pl-[50px] pt-[12%] text-[17px] ${liked[index] ? 'text-red-500' : ''}`} onClick={() => handleLike(index)}>
                    <FaHeart />
                  </button>
                  
                  </div>
                
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute left-[4%] top-[30%] transform -translate-y-1/2 bg-[black] bg-opacity-50 text-white p-2 rounded-[50%] z-10 mt-[5%] w-[50px] h-[50px] mt-[5%]" onClick={handlePrevSlide}>
        <FiChevronLeft className='absolute left-[30%] bottom-[30%] text-[20px] font-bold' />
      </button>
      <button className="absolute right-[5%] top-[30%] transform -translate-y-1/2 bg-[black] bg-opacity-50 text-white p-2 rounded-[50%] z-10 mt-[5%] w-[50px] h-[50px] " onClick={handleNextSlide}>
        <FiChevronRight className='absolute left-[30%] bottom-[30%] text-[20px] font-bold' />
      </button>
    </div>
  );
};

export default CardSlider;
