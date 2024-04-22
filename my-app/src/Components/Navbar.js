import React from 'react'
import gigalogo from '../Assets/giga logo.png'
import '../Style/Navbar.css';
import { useState } from 'react';
import { motion } from "framer-motion";
import { BiWallet } from 'react-icons/bi';
const Navbar = () => {

    const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [isStatsDropdownOpen, setIsStatsDropdownOpen] = useState(false);

  const handleHomeDropdownToggle = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
    setIsAuthorDropdownOpen(false);
    setIsExploreDropdownOpen(false);
    setIsStatsDropdownOpen(false);
  };

  const handleAuthorDropdownToggle = () => {
    setIsHomeDropdownOpen(false);
    setIsAuthorDropdownOpen(!isAuthorDropdownOpen);
    setIsExploreDropdownOpen(false);
    setIsStatsDropdownOpen(false);
  };

  const handleExploreDropdownToggle = () => {
    setIsHomeDropdownOpen(false);
    setIsAuthorDropdownOpen(false);
    setIsExploreDropdownOpen(!isExploreDropdownOpen);
    setIsStatsDropdownOpen(false);
  };

  const handleStatsDropdownToggle = () => {
    setIsHomeDropdownOpen(false);
    setIsAuthorDropdownOpen(false);
    setIsExploreDropdownOpen(false);
    setIsStatsDropdownOpen(!isStatsDropdownOpen);
  };
    
  return (
    <div className=' lg:max-w-[100%] md:max-w-[100%] max-w-[100%] '>


    <nav className=" bg-[#14141F] h-[100px] lg:max-w-[100%] md:max-w-[100%] max-w-[100%]">
  <div className=" px-2 sm:px-6 lg:px-8 pt-[1%] ">
  <div className=" lg:hidden  ">
       
       <button type="button" className="absolute flex items-end justify-center rounded-md p-2 lg:block block bg-black text-white focus:ring-white left-[80%] top-[3%]" aria-controls="mobile-menu" aria-expanded="false">
         <span className="absolute -inset-0.5"></span>
         <span className="sr-only">Open main menu</span>
      
         <svg className="block h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
      
         <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
       </button>
     </div>
    <div className="absolute   flex h-16 items-end justify-between">
     
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto ms-[30%]" src={gigalogo}alt="Your Company"/>

      

        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex pl-[100%] space-x-10 ms-[-50%] ">
          <input
      id="quick_search"
      className="ms-[-90%] me-[50px] pl-[30px] rounded-[30px] bg-[#343a40] h-[35px] lg:w-[370px] md:w-[180px]  placeholder-color text-[white] hide-border focus:border-none "
      name="quick_search"
      placeholder="Search item here..."
      type="text"
    />

<div className="relative lg:block md:hidden  "onMouseEnter={handleHomeDropdownToggle} onMouseLeave={handleHomeDropdownToggle}>
<a href="#" className="text-white rounded-md px-3 py-2 flex items-center group-hover:bg-gray-900 relative font-[800] font-[Raleway] text-[20px]  " aria-current="page">
  Home
  <svg className="ml-1 h-5 w-5 text-gray-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>

</a>
<motion.div
  className={`${isHomeDropdownOpen ? 'underline-animation' : ''}`}
  initial={false}
  animate={{ width: isHomeDropdownOpen ? '100%' : '0%'}}
  transition={{ duration: isHomeDropdownOpen ? 0.5 : 1.5, ease: "easeInOut" }}
 
></motion.div>
  <div className="absolute hidden text-white border border-gray-200 py-2  rounded-lg shadow-lg top-full left-0 mt-[5%] w-[200px] bg-[#14141F]"style={{ display: isHomeDropdownOpen ? 'block' : 'none' }}>
  
    <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 1</a>
    <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  " style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 2</a>
    <a href="#" className="block text-white-800 hover:text-white  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 3</a>
  </div>
</div>
<div className="relative lg:block md:hidden " onMouseEnter={handleAuthorDropdownToggle} onMouseLeave={handleAuthorDropdownToggle}>
              <a href="#" id="authorDropdown" className="text-white rounded-md px-3 py-2  flex items-center font-[800] font-[Raleway] text-[20px]">
                Author
                <svg id="authorDropdownIcon" className="ml-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
               
              </a>
              <motion.div
  className={`${isAuthorDropdownOpen ? 'underline-animation' : ''}`}
  initial={false}
  animate={{ width: isAuthorDropdownOpen ? '100%' : '0%'}}
  transition={{ duration: isAuthorDropdownOpen ? 0.5 : 1.5, ease: "easeInOut" }}
 
></motion.div>
              <div id="authorDropdownContent" className="absolute hidden text-white border border-gray-200 py-2  rounded-lg shadow-lg top-full left-0 mt-[5%] w-[200px] bg-[#14141F]" style={{ display: isAuthorDropdownOpen ? 'block' : 'none' }}>
              <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 1</a>
    <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  " style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 2</a>
    <a href="#" className="block text-white-800 hover:text-white  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 3</a>
              </div>
            </div>

<div className="relative lg:block md:hidden " onMouseEnter={handleExploreDropdownToggle} onMouseLeave={handleExploreDropdownToggle}>
  <a href="#" id="exploreDropdown" className="text-white rounded-md px-3 py-2 font-[800] font-[Raleway] text-[20px] flex items-center">
    Explore
    <svg id="exploreDropdownIcon" className="ml-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </a>
  <motion.div
  className={`${isExploreDropdownOpen ? 'underline-animation' : ''}`}
  initial={false}
  animate={{ width: isExploreDropdownOpen ? '100%' : '0%'}}
  transition={{ duration: isExploreDropdownOpen ? 0.5 : 1.5, ease: "easeInOut" }}
 
></motion.div>
  <div id="exploreDropdownContent" className="absolute hidden text-white border border-gray-200 py-2  rounded-lg shadow-lg top-full left-0 mt-[5%] w-[200px] bg-[#14141F]"style={{ display: isExploreDropdownOpen ? 'block' : 'none' }}>
  <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 1</a>
    <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  " style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 2</a>
    <a href="#" className="block text-white-800 hover:text-white  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 3</a>
  </div>
</div>

<div className="relative lg:block md:hidden "onMouseEnter={handleStatsDropdownToggle} onMouseLeave={handleStatsDropdownToggle}>
  <a href="#" id="statsDropdown" className="text-white rounded-md px-3 py-2 font-[800] font-[Raleway] text-[20px] flex items-center">
    Stats 
    <svg id="statsDropdownIcon" className="ml-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </a>

  <motion.div
  className={`${isStatsDropdownOpen ? 'underline-animation' : ''}`}
  initial={false}
  animate={{ width: isStatsDropdownOpen ? '100%' : '0%'}}
  transition={{ duration: isStatsDropdownOpen ? 0.5 : 1.5, ease: "easeInOut" }}
 
></motion.div>
  <div id="statsDropdownContent" className="absolute hidden text-white border border-gray-200 py-2  rounded-lg shadow-lg top-full left-0 mt-[5%] w-[200px] bg-[#14141F]"style={{ display: isStatsDropdownOpen ? 'block' : 'none' }}>
  <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 1</a>
    <a href="#" className="block text-white-800 hover:text-white hover:bg-blue-500  " style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 2</a>
    <a href="#" className="block text-white-800 hover:text-white  "style={{ transition: 'background-image 0.3s ease', backgroundImage: 'none', }} 
  onMouseEnter={(e) => e.target.style.backgroundImage = 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 56%, rgba(243,33,119,1) 65%)'}
  onMouseLeave={(e) => e.target.style.backgroundImage = 'none'}>Dropdown Item 3</a>
  </div>
</div>

          </div>
        </div>
      </div>
     
    </div>

  </div>

  <div className="lg:absolute absolute lg:left-[85%] lg:top-[6%] lg:right-[0%] md:left-[50%] left-[60%] md:top-[3%] top-[5%]  ">
     

       
     <div className="relative  ">
       <div className="">
         <button type="button" className=" lg:w-[200px] md:w-[200px] w-[40px] h-[35px] sm:rounded-[30px] text-[#ffffff] font-[800] font-[Raleway] text-[17px]  " style={{background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)'}}>
            
             <span className="hidden md:inline-block md:text-[20px]">Connect Wallet</span>
         <span className="md:hidden ">
         <BiWallet style={{ color: 'white', fontSize: '40px' }} className='px-[20%]'  /> {/* Wallet icon for small devices */}
         </span>
         </button>
       </div>
      
 
     </div>
   </div>

 
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
     
      <a href="#" className=" text-white  rounded-md px-3 py-2 text-base font-medium lg:block hidden" aria-current="page">Home</a>
      <a href="#" className="text-white block rounded-md px-3 py-2 text-base font-medium lg:block hidden">Author</a>
      <a href="#" className="text-white block rounded-md px-3 py-2 text-base font-medium lg:block hidden">Explore</a>
      <a href="#" className="text-white block rounded-md px-3 py-2 text-base font-medium lg:block hidden">Stats</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
