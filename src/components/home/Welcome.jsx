import React from 'react'
import welcomeBanner from "../assets/newBorn.png"
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='w-full bg-[#FFF6E7] px-5 lg:px-10 py-8 lg:py-0 flex flex-col lg:flex-row justify-center items-center lg:h-[775px]'>
       <div className='lg:w-1/2'>
            <img src={welcomeBanner} alt='' className='w-60 lg:w-[557px] lg:h-[537px] object-cover' />
       </div>
       <div className='mt-8 lg:w-1/2'>
        <p className='lg:w-[257px] text-3xl lg:text-[48px] lg:leading-[48.48px] font-custom font-normal text-[#003249]'>Mirë se vini në <span className='text-[#6ADB84] font-bold font-custom'>Gjelbër</span></p>
        <p className='mt-5 text-lg font-custom leading-[25px] lg:text-[18px] font-normal text-justify tracking-tighter text-[#003249]'>
        Ndërmarrja Publike Lokale Publike Lokale “Gjelbër” Sh.A, është themeluar mbështetur në 
Ligjin Nr. 03/L-O87, "Për Ndërmarrjet Publike; Ligjit Nr. 04/L-111 për ndryshimin dhe 
plotësimin e Ligjit Nr. 03/LO87, "Për Ndërmarrjet Publike", Ligjit Nr. 05/L-009 për ndryshimin 
dhe plotësimin e Ligjit Nr. 03/L-087, "Për Ndërmarrjet Publike” i ndryshuar dhe plotësuar me 
Ligjin Nr. 04/L-111, po ashtu mbështetur në Ligjin Nr. 06/L- O16 për Shoqëritë Tregtare.
Kompania është themeluar nga Komuna e Prishtinës më 29.05.1964 me aktvendimin nr. 01-
10317 dhe është regjistruar në Gjykatën Ekonomike në Prishtinë më dt. 30.07.1964 me 
aktvendimin nr. 290/64 në emërtimin Drejtoria e Gjelbërimit dhe Objekteve Sportive, si dhe 
vendimi për rithemelimin e ndërmarrjes Publike Komunale –“Hortikultura” Prishtinë të dt. 
29.12.2005 me nr. 01.330-659. 
                <br /> <br /> 
                Më datë 06.09.2023, Komisioni i Aksionarëve të Ndërmarrjes Publike Lokale “Hortikultura” 
SH.A. ka votuar vendimin me numër protokolli 2196 për ndryshimin e statutit të ndërmarrjes. 
Me këtë vendim Komisioni po ashtu ka aprovuar ndryshimin e emrit në Ndërmarrja Publike 
Lokale “Gjelbër” SH.A. Më 07.09.2023 ka hyrë në fuqi Statuti i ri i ndërmarrjes.
        </p>
        <Link to="/rrethNesh"  onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <button className='border-[2px] border-[#6ADB84] rounded-[4px] mt-7 text-[#1E1E1E] hover:bg-[#6ADB84] hover:text-[#FFF6E7] hover:scale-110 duration-300 w-[164px] h-[40px] font-custom text-[16px] font-normal'>Shiko më shumë</button>
        </Link>
       </div>
    </div>
  )
}

export default Welcome