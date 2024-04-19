import React from 'react'
import pdfIcon from "../assets/pdf.png"
import { kornizaLigjore } from '../data/kornizaLigjore'

const KornizaLigjore = () => {
  return (
    <>
    <div className='px-5 lg:px-[50px] py-5 lg:py-[50px]'>
        <p className='font-custom text-center text-3xl'>Korniza Ligjore</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-3 px-5 lg:px-[40px]">
    {kornizaLigjore?.map((law) => (
        <div className="blog-item bg-[#6ADB84] rounded-md overflow-hidden">
            <div className="p-4">
                <h5 className="mb-3 text-uppercase text-white font-custom">
                    {law?.name}
                </h5>
                    <a className="flex font-custom underline text-white text-uppercase text-decoration-none" href={law?.src} target="_blank" rel="noopener noreferrer">SHKARKO<img src={pdfIcon} alt='' className='w-5 h-5 mx-2 underline' /></a>
            </div>
        </div>
        ))}
    </div>

    </>
  )
}

export default KornizaLigjore