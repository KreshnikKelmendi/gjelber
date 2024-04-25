import React from 'react'
import flowerLogo from "../assets/Vector.png"
import Map from './Map'

const Contact = () => {
  return (
    <div className='lg:flex w-full px-5 lg:px-10 py-8'>
        <div className='lg:w-1/2 text-justify tracking-tighter'>
            <div className='w-full items-center justify-center h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
                <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
                <p className='font-custom text-3xl lg:text-[48px] font-normal mx-3'>Kontakti</p>
            </div>
            <div className='lg:w-[545px] mt-4'>
    <p className='lg:text-lg font-normal leading-[24px] text-[#003249]'>
        Për çdo informacion, hollësi apo detaje tjera të nevojshme mos ngurroni të na shkruani në e-mail adresën tonë zyrtare 
        <a href="mailto:info@gjelber.com">
            
            <b className='underline hover:text-[19px] hover:text-green-700 hover:duration-500'> info@gjelber.com </b>
        </a>
         si dhe në numrin tonë kontaktues për kujdes ndaj konsumatorit 
        <a href="tel:080040004">
           
            <b className='underline hover:text-[19px] hover:text-green-700 hover:duration-500'> 0 800 40 004</b>.
        </a>
    </p>
</div>

            {/* <div initial="hidden" className="w-full lg:w-1/2 flex">
        <form className="w-full mt-5 lg:mt-[50px] font-custom text-lg">
          <div className="mb-[11px]">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full lg:w-[548px] py-2 placeholder-[#8E8E8E] text-white focus:outline-none border-b border-[#737B7D] rounded-none"
              placeholder="Emri juaj"
              required
            />
          </div>
          <div className="mb-[11px]">
            <input
              type="text"
              id="company"
              name="company"
              className="w-full lg:w-[548px] py-2 placeholder-[#8E8E8E] text-white focus:outline-none border-b border-[#737B7D] rounded-none"
              placeholder="Rruga"
            />
          </div>
          <div className="mb-[11px]">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full lg:w-[548px] py-2 placeholder-[#8E8E8E] text-white focus:outline-none border-b border-[#737B7D] rounded-none"
              placeholder="Numri kontaktues"
            />
          </div>
          <div className="mb-[11px]">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full lg:w-[548px] py-2 placeholder-[#8E8E8E] text-white focus:outline-none border-[#737B7D] border-b rounded-none"
              placeholder="Email adresa"
              required
            />
          </div>
          <div  className="mb-[11px]">
            <textarea
              id="message"
              name="message"
              className="w-full lg:w-[548px] py-2 placeholder-[#8E8E8E] text-white focus:outline-none border-b border-[#737B7D] rounded-none"
              placeholder="Mesazhi..."
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mt-[1px]">
            <button
              className="w-full lg:w-[207px] text-black hover:bg-[#6ADB84] transition duration-500 ease-in-out border-[#6ADB84] hover:text-white text-base border font-medium font-custom1 py-2 px-4 rounded-none"
              type="submit"
            >
             Dërgo
            </button>
           
          </div>
        </form>
      </div> */}
        </div>

        <div className='lg:w-1/2 lg:mx-1 mt-5 lg:mt-0'>
            <Map />
        </div>
    </div>
  )
}

export default Contact
