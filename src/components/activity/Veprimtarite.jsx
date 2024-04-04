import React from 'react'
import flowerLogo from "../assets/Vector_veprimtarite.png";
import circle from "../assets/circle.png"
import VeprimtariteData from './VeprimtariteData';
import MaintenanceActivities from './MaintenanceActivities';

const Veprimtarite = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row w-full px-5 lg:px-10 py-8'>
        <div className='lg:w-1/2'>
            <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#6ADB84] text-white'>
                <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
                <p className='font-custom text-3xl lg:text-[48px] text-[#006646] font-semibold mx-3'>Veprimtaritë</p>
            </div>
            <div className='lg:w-[575px]  mt-4 font-custom tracking-tighter lg:tracking-[0.5%] text-[18px] leading-[25px] text-justify text-[#003249]'>
                <p>
                Në sferën e saj të veprimtarisë ndërmarrja është përgjegjëse për projektimin, ngritjen dhe 
                mirëmbajtjen e hapësirave të gjelbra në Komunën e Prishtinës. Për këtë arsye para se të 
                gjithash do të jetë përgjegjëse për:   
                </p>
                <MaintenanceActivities />
            </div>
            
        </div>
        
        <div className='lg:w-1/2 bg-[#6ADB84] justify-center items-center grid lg:mx-2 mt-4 lg:mt-0 rounded-[6px]'>
            <img className='object-cover p-5 lg:p-0' src={circle} alt='' />
        </div>
    </div>
    <div className=''>
        <VeprimtariteData />
    </div>
    </>
  )
}

export default Veprimtarite