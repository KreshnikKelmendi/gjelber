import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import flowerLogo from "../assets/Vector.png";
import untitled from "../assets/Untitle2223d-1 1.png";
import { Link } from 'react-router-dom';
import { shpalljet } from '../data/shpalljet';
import pdfIcon from "../assets/pdf.png"

const AnimatedAd = ({ column, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: inView ? index * 0.1 : 0 }}
            ref={ref}
            className='h-full'
        >
            <div className='h-full relative group'>
                {/* Main card */}
                <div className='h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100'>
                    {/* Background pattern */}
                    <div className='absolute inset-0 opacity-5'>
                        <div className='absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full -translate-y-16 translate-x-16'></div>
                        <div className='absolute bottom-0 left-0 w-24 h-24 bg-green-400 rounded-full translate-y-12 -translate-x-12'></div>
                    </div>

                    {/* Content */}
                    <div className='relative h-full flex flex-col p-6'>
                        {/* Header with accent */}
                        <div className='mb-4'>
                            <div className='flex items-center justify-between mb-3'>
                                <span className='px-3 py-1 bg-[#FFF6E7] text-black text-xs font-bold rounded-full'>
                                    {column.konkurs}
                                </span>
                                <div className='w-8 h-8 rounded-full bg-green-500 flex items-center justify-center'>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 leading-tight mb-3'>
                                {column.title}
                            </h3>
                        </div>

                        {/* Date section */}
                        <div className='mb-6 flex-grow'>
                            <div className='flex items-center p-3 bg-gray-50 rounded-xl'>
                                <div className='w-10 h-10 bg-[#6ADB84] rounded-lg flex items-center justify-center mr-3'>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-xs text-gray-500 font-medium'>Data e publikimit</p>
                                    <p className='text-sm font-bold text-gray-900'>{column.publicationDate}</p>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className='space-y-3'>
                            {column.aplikacioniPerPunesim && (
                                <a 
                                    className='block w-full text-center bg-[#003249] hover:bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' 
                                    href={column.aplikacioniPerPunesim} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <div className='flex items-center justify-center'>
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Aplikacioni për punësim
                                    </div>
                                </a>
                            )}
                            
                            {column.aplikacioniNenBetim && (
                                <a 
                                    className='block w-full text-center bg-[#003249] hover:bg-green-700 text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl' 
                                    href={column.aplikacioniNenBetim} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <div className='flex items-center justify-center'>
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Deklarata nën betim
                                    </div>
                                </a>
                            )}
                            
                            {column.aplikimiPDF && (
                                <a 
                                    className='flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg' 
                                    href={column.aplikimiPDF} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img className="w-5 h-5 mr-2" src={pdfIcon} alt="" />
                                    Shiko më shumë
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Decorative corner */}
                    <div className='absolute top-0 right-0 w-16 h-16 bg-gray-100 rounded-bl-2xl'></div>
                </div>
            </div>
        </motion.div>
    );
};

const Ads = () => {
    const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 1024);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // 3x3 grid

    useEffect(() => {
        const handleResize = () => {
            setIsLargeDevice(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(shpalljet.length / itemsPerPage);
    
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = shpalljet.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='w-full overflow-x-hidden'>
            {/* Header */}
            <div className='w-full px-5 lg:px-10 mt-8 lg:mt-0 lg:py-8'>
                <div className=' mx-auto'>
                    <div className='relative overflow-hidden rounded-3xl bg-[#003249] shadow-2xl'>
                        {/* <div className='absolute inset-0 bg-black bg-opacity-20'></div> */}
                        {/* <div className='absolute top-0 right-0 w-32 h-32 lg:w-64 lg:h-64 bg-white bg-opacity-10 rounded-full -translate-y-16 lg:-translate-y-32 translate-x-16 lg:translate-x-32'></div> */}
                        {/* <div className='absolute bottom-0 left-0 w-24 h-24 lg:w-48 lg:h-48 bg-white bg-opacity-10 rounded-full translate-y-12 lg:translate-y-24 -translate-x-12 lg:-translate-x-24'></div> */}
                        
                        <div className='relative flex items-center justify-center py-8 lg:py-12 px-5 lg:px-10'>
                            <div className='flex items-center space-x-4 lg:space-x-6'>
                                <div className=' p-3 lg:p-4 rounded-2xl backdrop-blur-sm'>
                                    <img className='w-8 h-10 lg:w-10 lg:h-12 object-cover' src={flowerLogo} alt='' />
                                </div>
                                <div className='text-center lg:text-left'>
                                    <h1 className='font-custom text-3xl lg:text-4xl xl:text-6xl font-bold text-white mb-2'>
                                        Shpalljet
                                    </h1>
                                    <p className='text-blue-100 text-sm lg:text-lg xl:text-xl font-medium'>
                                        Konkurset dhe mundësitë e reja
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className='mx-auto px-5 lg:px-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 mt-8 lg:mt-12'>
                    {currentItems?.map((column, index) => (
                        <AnimatedAd key={index} column={column} index={index} />
                    ))}
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-12 lg:mt-16 mb-16 lg:mb-20 px-4">
                    <nav className="inline-flex rounded-2xl shadow-xl bg-white border border-gray-200 overflow-hidden">
                        <button
                            onClick={() => {
                                if (currentPage > 1) paginate(currentPage - 1);
                            }}
                            disabled={currentPage === 1}
                            className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 border-r border-gray-200"
                        >
                            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`px-4 lg:px-6 py-2 lg:py-3 text-sm font-bold transition-all duration-200 border-r border-gray-200 last:border-r-0 ${
                                    currentPage === number 
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                {number}
                            </button>
                        ))}
                        
                        <button
                            onClick={() => {
                                if (currentPage < totalPages) paginate(currentPage + 1);
                            }}
                            disabled={currentPage === totalPages}
                            className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        >
                            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Ads;