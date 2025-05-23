// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import flowerLogo from "../assets/Vector.png";
// import untitled from "../assets/Untitle2223d-1 1.png";
// import { Link } from 'react-router-dom';
// import { shpalljet } from '../data/shpalljet';
// import { apiUrl } from '../api/apiUrl';
// import FetchData from '../hooks/FetchData';

// const Ads = () => {
//     const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 1024);
//     const { loading, error, data } = FetchData(`${apiUrl}/api/shpalljets?populate=*`);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsLargeDevice(window.innerWidth >= 1024);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     // Sort the data array by the 'dataPublikimit' property
//     if (data?.data) {
//         data.data.sort((a, b) => new Date(b.attributes.dataPublikimit) - new Date(a.attributes.dataPublikimit));
//     }

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <>
//             <div className='lg:flex w-full px-5 lg:px-10 mt-8 lg:mt-0 lg:py-6'>
//                 <div className='lg:flex w-full'>
//                     <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
//                         <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
//                         <p className='font-custom text-3xl lg:text-[48px] font-normal mx-3'>Shpalljet</p>
//                     </div>
//                     <div className='hidden lg:block w-full h-[189px] mt-2 lg:mt-0 lg:ml-2'>
//                         <img className='h-full w-full object-cover rounded-[6px]' src={untitled} alt='' />
//                     </div>
//                 </div>
//             </div>

//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 mt-2 px-5 lg:px-10'>
//                 {data?.data?.map((column, index) => (
//                     <motion.div key={index} className='flex flex-col lg:flex-row'>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             style={{ backgroundColor: column?.attributes?.backgroundColor }}
//                             className={`lg:w-1/2 lg:h-[466px] h-fit py-10 grid rounded-tl-[6px] rounded-tr-[6px] lg:rounded-tr-none lg:rounded-bl-[6px] px-5 lg:py-20 items-center text-[${column.textColor}]`}
//                         >
//                             <p className={`lg:text-[20px] uppercase font-normal text-[${column.textColor}] lg:leading-[32.32px] font-custom`} style={{ color: column?.attributes?.textColor }}>{column?.attributes?.titulli}</p>
//                             <p className={`py-5 text-[15px] leading-[25px] font-custom `} style={{ color: column?.attributes?.textColor }}>
//                                 Ndërmarrja Publike Lokale “Gjelbër” SH.A shpall konkurs për...
//                             </p>
//                             <p className={`py-5 text-[12px] leading-[25px] font-custom text-gray-500`}>Data e publikimit: {column?.attributes?.dataPublikimit}</p>
//                             <Link to={`/shpalljet/${column.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
//                                 <button className={`border-[2px] rounded-[4px] px-8 py-1 font-medium text-[${column.buttonColor}] border-[${column.buttonColor}] hover:bg-white hover:text-black hover:border-none text-[16px] font-custom`}>Më shumë</button>
//                             </Link>
//                         </motion.div>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             className='bg-[#6ADB84] text-[22px] text-white items-center grid lg:w-1/2 w-full h-56 lg:h-[466px] text-center font-custom lg:rounded-tr-[6px] rounded-bl-[6px] lg:rounded-bl-none rounded-br-[6px]'
//                         >
//                             <img src={`${apiUrl}${column?.attributes?.image?.data[0]?.attributes?.url}`} alt='' className='h-56 lg:h-[466px] w-full object-cover' />
//                         </motion.div>
//                     </motion.div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Ads;






import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import flowerLogo from "../assets/Vector.png";
import untitled from "../assets/Untitle2223d-1 1.png";
import { Link } from 'react-router-dom';
import { shpalljet } from '../data/shpalljet';
import pdfIcon from "../assets/pdf.png"

const AnimatedAd = ({ column, index, isLargeDevice }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: inView ? index * 0.2 : 0 }}
            ref={ref}
            className='flex flex-col lg:flex-row'
            style={{ marginTop: isLargeDevice ? column.margin : 0 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ backgroundColor: column.background }}
                className={`lg:w-1/2 lg:h-[466px] 2xl:h-[530px] h-fit py-10 grid rounded-tl-[6px] rounded-tr-[6px] lg:rounded-tr-none lg:rounded-bl-[6px] px-5 lg:py-20  text-[${column.textColor}]`}
            >   
                 <p className={`text-[12px] w-fit leading-[25px] font-custom text-[${column.textColor}]`}>
                    {column.konkurs}
                </p>
                <p className={`lg:text-[18px] uppercase font-normal text-[${column.textColor}] lg:leading-[32.32px] font-custom`}>{column.title}</p>
               
                <p className={`py-5 text-[12px] leading-[25px] font-custom text-gray-300`}>Data e publikimit: <b>{column.publicationDate}</b></p>
                
                {column.aplikacioniPerPunesim && (
                <a className='text-[12px] text-blue-400 hover:text-white hover:scale-105 hover:duration-500' href={column.aplikacioniPerPunesim} target="_blank" rel="noopener noreferrer">
                    SHKARKO APLIKACIONIN PËR PUNËSIM
                </a>
                )}
                {column.aplikacioniNenBetim && (
                <a className='text-[12px] text-blue-400 hover:text-white hover:scale-105 hover:duration-500' href={column.aplikacioniNenBetim} target="_blank" rel="noopener noreferrer">
                    SHKARKO DEKLARATËN NËN BETIM
                </a>
                )}
                {column.aplikimiPDF && (
                <a className='flex underline text-[14px] text-blue-400 hover:text-white hover:scale-105 hover:duration-500 hover:no-underline' href={column.aplikimiPDF} target="_blank" rel="noopener noreferrer">
                    SHIKO MË SHUMË<img className="w-5 h-5 object-contain ml-[5px]" src={pdfIcon} alt="" />
                </a>
                )}
        
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-[#6ADB84] text-[22px] text-white justify-centeri items-center grid lg:w-1/2 w-full h-56 lg:h-[466px] text-center font-custom lg:rounded-tr-[6px] rounded-bl-[6px] lg:rounded-bl-none rounded-br-[6px]'
            >
                <img src={column.adsImage} alt='' className='h-56 lg:h-[466px] 2xl:h-[530px] w-full object-cover' />
            </motion.div>
        </motion.div>
    );
};

const Ads = () => {
    const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 1024);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

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
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className='lg:flex w-full px-5 lg:px-10 mt-8 lg:mt-0 lg:py-6'>
                <div className='lg:flex w-full'>
                    <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
                        <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
                        <p className='font-custom text-3xl lg:text-[48px] font-normal mx-3'>Shpalljet</p>
                    </div>
                    <div className='hidden lg:block w-full h-[189px] mt-2 lg:mt-0 lg:ml-2'>
                        <img className='h-full w-full object-cover rounded-[6px]' src={untitled} alt='' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 mt-2 px-5 lg:px-10'>
                {currentItems?.map((column, index) => (
                    <AnimatedAd key={index} column={column} index={index} isLargeDevice={isLargeDevice} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 mb-12">
                <nav className="inline-flex rounded-md shadow">
                    <button
                        onClick={() => {
                            if (currentPage > 1) paginate(currentPage - 1);
                        }}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        &laquo; 
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 border-t border-b border-gray-300 bg-white text-sm font-medium ${currentPage === number ? 'bg-blue-500 text-black' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            {number}
                        </button>
                    ))}
                    
                    <button
                        onClick={() => {
                            if (currentPage < totalPages) paginate(currentPage + 1);
                        }}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                         &raquo;
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Ads;