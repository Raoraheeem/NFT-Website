import React from 'react';
import Item10 from '../Assets/item10.jpg';
import author1 from '../Assets/author-1.jpg';
import author4 from '../Assets/author-4.jpg';
import author7 from '../Assets/author-7.jpg';
import item4 from '../Assets/item4.jpg';
import col3 from '../Assets/col3.jpg';
import Claude from '../Assets/claude.jpg';
import Item5 from '../Assets/item5.jpg';
import author3 from '../Assets/author-3.jpg';
import author6 from '../Assets/author-6.jpg';
import Item9 from '../Assets/item9.jpg';
import Item7 from '../Assets/item7.jpg';
import First from '../Assets/1.png';
import Second from '../Assets/2.png';
import Third from '../Assets/3.png';
import Fourth from '../Assets/4.png';
import Fifth from '../Assets/5.png';
import Sixth from '../Assets/6.png';

const Seller = () => {
  // Sample seller data
  const sellers = [
    { id: 1, name: 'Monica Lucas', icon: author1, sellerdesc: "3.2 ETH",brand:First },
    { id: 2, name: 'Lori Hart', icon: author4, sellerdesc: "3.2 ETH",brand:Second },
    { id: 3, name: 'Gayle Hicks', icon: author7, sellerdesc: "3.2 ETH",brand:Third },
    { id: 4, name: 'Stacy Long', icon: item4, sellerdesc: "3.2 ETH",brand:Fourth },
    { id: 5, name: 'Mamie Barnett', icon: Item10, sellerdesc: "3.2 ETH",brand:Fifth },
    { id: 6, name: 'Jimmy Wright', icon: col3, sellerdesc: "3.2 ETH",brand:Sixth },
    { id: 7, name: 'Claude Banks', icon: Claude, sellerdesc: "3.2 ETH" },
    { id: 8, name: 'Ida Chapman', icon: Item5, sellerdesc: "3.2 ETH" },
    { id: 9, name: ' Nicholas Daniels', icon: author3, sellerdesc: "3.2 ETH" },
    { id: 10, name: 'Karla Sharp', icon: author6, sellerdesc: "3.2 ETH" },
    { id: 11, name: 'Franklin Greer', icon: Item9, sellerdesc: "3.2 ETH" },
    { id: 12, name: 'Fred Ryan', icon: Item7, sellerdesc: "3.2 ETH" }
    // Add more sellers as needed
  ];
  const topSellers = sellers.slice(0, 6);
  return (
    <div>
      <h1 className='mt-[5%] text-white text-[30px] font-bold font-[Montserrat]'>Top <span className="gradient-text font-bold font-[Montserrat]">Sellers</span></h1>
      <div className="relative left-[48%] w-[5%]  mb-[5%] mt-[2%] border-none text-hidden" style={{ background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%, rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)' }}>
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500"></span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 px-[11%]">
        {sellers.map((seller) => (
          <div key={seller.id} className="flex items-center justify-center text-white mb-[10px]">
            <span className='lg:mr-[5%] mr-[2%] font-bold font-[Monteserrat]'>{seller.id}.</span>
            <img src={seller.icon} alt='' className='w-[50px] h-[50px] rounded-[40px]' />
            <span className='ms-[18px]  text-start font-bold font-[Montserrat] text-[18px]'>{seller.name}</span>
      
            <span className='ms-[-35%] lg:mt-[18%] mt-[75%] text-center text-gray-400 font-[Montserrat]'>{seller.sellerdesc}</span>
          </div>
        ))}
      </div>
      {/* Card with only image */}
    <div className='grid lg:grid-cols-6 grid-cols-2 lg:gap-6 gap-10 lg:px-[10%] px-[10%]'>

    {topSellers.map((seller) => (
          <div key={seller.id} className="flex items-center justify-center text-white mt-[50%] bg-[#242435] lg:h-[150px] lg:w-[170px] w-[150px] h-[170px] rounded-[25px]">
            
            <img src={seller.brand} alt='' className='w-[50px] h-[50px] rounded-[40px]' />
           
          </div>
        ))}

    </div>
    </div>
  );
}

export default Seller;
