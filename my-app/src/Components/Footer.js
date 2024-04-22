import React from 'react';

const Footer = () => {
  return (
    <div className='grid lg:grid-cols-4 grid-cols-1 gap-5 mt-[20%]  font-bold font-[Raleway] bg-[#242435] lg:h-[400px] h-[1200px] pt-[5%] px-[10%]'>
      <div className="flex flex-col lg:text-start text-end">
        <h1 className='text-white text-[20px] mb-4 '>Marketplace</h1>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">All NFTs</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Art</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Music</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Domain Names</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Virtual World</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Collectibles</p>
      </div>
      <div className="flex flex-col lg:text-start text-end">
        <h1 className='text-white text-[20px] mb-4 '>Resources</h1>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal ">Help Center</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Partners</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Suggestions</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Discord</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Docs</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Newsletter</p>
      </div>
      <div className="flex flex-col lg:text-start text-end">
        <h1 className='text-white text-[20px] mb-4'>Community</h1>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Community</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Documentation</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Brand Assets</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Blog</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Forum</p>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Mailing list</p>
      </div>
      <div className="flex flex-col lg:text-end text-end">
        <h1 className='text-white text-[20px] mb-4'>Newsletter</h1>
        <p className="text-gray-400 mb-[2%] font-[Raleway] font-normal">Signup for our newsletter to get the latest news in your inbox.</p>
        {/* Add newsletter subscription form or any other content */}
        <div className="flex relative justify-end ">
          <input type='Email' className='bg-[#3A3A4A] mt-[7%] flex justify-end h-[35px] rounded-[50px] placeholder:text-white placeholder:text-[15px] border-none focus:outline-none text-white' placeholder='Enter Your Email' />
          <button className='text-white text-center bg-white mt-[7%] w-[240px] h-[35px] relative right-[20%] rounded-r-[20px] font-bold text-[25px]  ' style={{background: 'linear-gradient(90deg, rgba(16,129,232,1) 46%,  rgba(214,51,132,0.865983893557423) 65%, rgba(243,33,119,1) 50%)'}}>&#x2192;</button>
        </div>
        <p className='text-gray-400 mb-[2%] mt-[5%] text-[16px] font-[Raleway] font-normal'>Your Email is safe with us We don't Spam</p>
      </div> 
    </div>
  );
}

export default Footer;
