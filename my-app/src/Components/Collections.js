import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import collectionImages1 from '../Assets/col1.jpg';
import collectionImages2 from '../Assets/col2.jpg';
import collectionImages3 from '../Assets/col8.jpg';
import collectionImages4 from '../Assets/col4.jpg';
import collectionImages5 from '../Assets/col7.jpg';
import collectionImages6 from '../Assets/col-9.jpg';
import collectionImages7 from '../Assets/col1.jpg';
import collectionImages8 from '../Assets/col8.jpg';
import author1 from '../Assets/author-1.jpg';
import author3 from '../Assets/author-3.jpg';
import author4 from '../Assets/author-4.jpg';
import author6 from '../Assets/author-6.jpg';
import author7 from '../Assets/author-7.jpg';
 // Import your collection images

const Collections = () => {
  // Sample collection data
  const collections = [
    { title: 'Sketchify', description: 'ECR-89', image: collectionImages1,icons:author1 },
    { title: 'Virtual land', description: 'ECR-73', image: collectionImages2 ,icons:author3 },
    { title: 'Paper Cut', description: 'ECR-75', image: collectionImages3,icons:author4 },
    { title: 'Cartoonism', description: 'ECR-65', image: collectionImages4,icons:author6 },
    { title: 'Abstraction', description: 'ECR-70', image: collectionImages5,icons:author7 },
    { title: 'Sketchify', description: 'ECR-85', image: collectionImages6,icons:author1 },
    { title: 'Cartoonism', description: 'ECR-90', image: collectionImages7,icons:author4 },
    { title: 'Sketchify', description: 'ECR-95', image: collectionImages8,icons:author3 },
    // Add more collections as needed
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      // If at the beginning of the collections, move to the end of the concatenated array
      if (prevSlide === 0) {
        return collections.length;
      }
      return prevSlide - 1;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      // If at the end of the concatenated array, move to the beginning of the collections
      if (prevSlide === collections.length) {
        return 0;
      }
      return prevSlide + 1;
    });
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className="overflow-hidden  lg:w-[1170px] w-[2000px]">
        <h1 className='mt-[5%] text-white text-[30px] font-bold'>Hot <span className="gradient-text">Collections</span></h1>
        <div className="relative left-[48%] w-[5%]  mb-[5%] mt-[2%] border-none text-hidden" style={{ background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%, rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)' }}>
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500"></span>
        </div>
        <div className="flex transition-transform -translate-x-full me-[0] gap-[18px] " style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
          {collections.concat(collections).map((collection, index) => (
            <div key={index} className="lg:w-[200px] w-[300px]  lg:mx-2 mx-[10px] flex-none  lg:gap-15 gap-4 lg:overflow-hidden overflow-none  ">
              <div className="bg-[#242435] shadow-md rounded-lg p-4 lg:h-[200px] relative border-[blue] border-[1px] lg:left-[0] left-[10%]  ">
                <img src={collection.image} alt={`Collection ${index}`} className="absolute top-0 left-0 w-full h-[55%] object-cover rounded-t-lg" />
                <img src={collection.icons} alt={`Collection ${index}`} className="absolute top-[45%] left-[40%] w-[50px] h-[50px] object-cover rounded-[50%]" />
                <h2 className="text-white font-bold mb-2 mt-[80%] font-[Montserrat]">{collection.title}</h2>
                <p className='text-gray-400 font-[Montserrat] '>{collection.description}</p>
             
                <div>
               
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute left-[3%] top-1/2 transform -translate-y-1/2 bg-[black] bg-opacity-50 text-white p-2 rounded-[50%] z-10 mt-[5%] w-[50px] h-[50px] mt-[5%]" onClick={handlePrevSlide}>
        <FiChevronLeft className='absolute left-[30%] bottom-[30%] text-[20px] font-bold' />
      </button>
      <button className="absolute right-[5%] top-1/2 transform -translate-y-1/2 bg-[black] bg-opacity-50 text-white p-2 rounded-[50%] z-10 mt-[5%] w-[50px] h-[50px] " onClick={handleNextSlide}>
        <FiChevronRight className='absolute left-[30%] bottom-[30%] text-[20px] font-bold' />
      </button>
    </div>
  );
}

export default Collections;
