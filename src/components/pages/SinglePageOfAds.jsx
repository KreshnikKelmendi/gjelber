// import React from 'react';
// import { useParams } from 'react-router-dom';
// import aplikacioniPunesimit from "../assets/aplikacioniPerPunesim.pdf"
// import aplikacioniNenBetim from "../assets/deklarata.pdf"
// import { shpalljet } from '../data/shpalljet';
// import pdfIcon from "../assets/pdf.png"
// import { apiUrl } from '../api/apiUrl';
// import FetchData from '../hooks/FetchData';

// const SinglePageOfAds = () => {
//   const { id } = useParams();
//   const { loading, error, data } = FetchData(`${apiUrl}/api/shpalljets/${id}?populate=*`);


// console.log("gree", data);

//   return (
//     <div className="lg:p-10 font-custom">
//       <div className="bg-white shadow-lg rounded-md p-5">
//         <h6 className="font-bold text-lg uppercase mb-3">Konkurs për pozitën : <span className='underline p-2'>{data?.data?.attributes?.titulli}</span></h6>
//         <p className="text-[#6ADB84]">Data e publikimit: {data?.data?.attributes?.dataPublikimit}</p>
//         <div className="mt-4">
//           <p>
//             Në bazë të nenit 8 të Ligjit të Punës nr.03/L-212, Rregullores mbi organizimin dhe sistematizimin 
//             e vendeve dhe detyrave të punës nr.1292 të datë:16.06.2023 si dhe 
//             Rregullores për procedurat e rekrutimit, si dhe vendimit për anulimin e 
//             konkursit me nr 308 të dt 01.02.2024 mardhënien kontraktuale dhe avansim në detyrë në ndërmarrje 
//             me nr.1338 të datë:20.06.2023, NPL”Gjelbër” Shpall këtë:
//           </p>
//           <ul className="list-disc list-inside text-gray-700 my-4">
//             <li><strong><b>Titulli i Pozitës:</b></strong> {data?.data?.attributes?.titulli}</li>
//             <li><strong><b>Kontrata:</b></strong> {data?.data?.attributes?.kontrata}</li> 
//             <li><strong><b>Orari:</b></strong> {data?.data?.attributes?.orari}</li>
//             <li><strong><b>Paga:</b></strong> {data?.data?.attributes?.paga}</li>
//             <li><strong><b>Vendi:</b></strong> {data?.data?.attributes?.vendi}</li> 
//           </ul>
//           <section className="py-8">
//             <div className="">
//               <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Kualifikimet dhe Përgatitja Profesionale</h6>
//               <ul className="list-disc list-inside text-gray-700 my-4">
//                 <li> <b>Niveli i shkollimit: </b>{data?.data?.attributes?.diploma}</li>
//                 <li><b>Përvoja e punës: </b>{data?.data?.attributes?.pervojaPunes}</li>
//                 {data?.data?.attributes?.patentShoferi && (
//                   <li><b>Patent Shoferi: </b>{data?.data?.attributes?.patentShoferi}</li>
//                 )}
//                 {data?.data?.attributes?.kushtetKualifikimit && (
//                   <li><b>Kushtet e kualifikimit: </b>{data?.data?.attributes?.kushtetKualifikimit}</li>
//                 )}
               
//                 {/* {njohjaLigjeve && <li>{njohjaLigjeve}</li>} */}
//                 {data?.data?.attributes?.aftesiOrganizative && (
//                   <li><b>Aftësi Organizative: </b>{data?.data?.attributes?.aftesiOrganizative}</li>
//                 )}
//                 {/* {shkathtesi && <li>{shkathtesi}</li>}
//                 {shkathtesiKompjuterike && <li>{shkathtesiKompjuterike}</li>}
//                 {gjuhaAngleze && <li>{gjuhaAngleze}</li>} */}
//               </ul>
//             </div>
//           </section>

//           <section className="py-8">
//             <div className=" mx-auto">
//               <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Detyrat dhe Përgjegjësitë Kryesore</h6>
//               <ul className="list-disc list-inside text-gray-700 my-4">
//               {data?.data?.attributes?.detyra1 && (
//                   <li>{data?.data?.attributes?.detyra1}</li>
//                 )}
//                 {data?.data?.attributes?.detyra2 && (
//                   <li>{data?.data?.attributes?.detyra2}</li>
//                 )}
//                 {data?.data?.attributes?.detyra3 && (
//                   <li>{data?.data?.attributes?.detyra3}</li>
//                 )}
//                {data?.data?.attributes?.detyra4 && (
//                   <li>{data?.data?.attributes?.detyra4}</li>
//                 )}
//                {data?.data?.attributes?.detyra5 && (
//                   <li>{data?.data?.attributes?.detyra5}</li>
//                 )}
//                 {data?.data?.attributes?.detyra6 && (
//                   <li>{data?.data?.attributes?.detyra6}</li>
//                 )}
//                 {data?.data?.attributes?.detyra7 && (
//                   <li>{data?.data?.attributes?.detyra7}</li>
//                 )}
//                 {data?.data?.attributes?.detyra8 && (
//                   <li>{data?.data?.attributes?.detyra8}</li>
//                 )}
//               </ul>
//             </div>
//           </section>

//           <section className="py-8">
//             <div className=" mx-auto">
//               <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Informata për Procedurën e Konkurimit</h6>
//               <ul className="list-disc list-inside text-gray-700 my-4">
//                 <li>Aplikantët e interesuar për këtë vend pune duhet të bashkangjesin këto dokumente:</li>
//                 <ul className="ml-8">
//                   <li>Aplikacionin e plotësuar</li>
//                   <li>CV e aplikantit;</li>
//                   <li>Diplomën e shkollimit</li>
//                   <li>Dëshminë mbi përvojën e punës, referencat si dhe certifikata tjera profesionale;</li>
//                   <li>Deklaratën nën Betim;</li>
//                   <li>Certifikatën që nuk është nën hetime (jo më e vjetër se 6 muaj);</li>
//                   <li>Kopjen e letërnjoftimit.</li>
//                 </ul>
//               </ul>
//                {data?.data?.attributes?.proceduraAplikimit && (
//                   <p className='py-6'>{data?.data?.attributes?.proceduraAplikimit}</p>
//                 )}
//                  {data?.data?.attributes?.datatAplikimit && (
//                   <p className='py-6'>{data?.data?.attributes?.datatAplikimit}</p>
//                 )}
//             </div>
//           </section>

        

//           {aplikacioniNenBetim && (
//             <p className='my-2'> 
//               <a className='underline text-blue-400' href={aplikacioniNenBetim} download="ApplicationForm.pdf">
//                 SHKARKO DEKLARATËN NËN BETIM
//               </a>
//             </p>
//           )}

//           {aplikacioniPunesimit && (
//             <p className='my-4'> 
//               <a className='underline text-blue-400' href={aplikacioniPunesimit} download="Application.pdf">
//                 SHKARKO APLIKACIONIN PËR PUNËSIM
//               </a>
//             </p>
//           )}

      
//           {data?.data?.attributes?.aplikacioniPDF?.data?.length > 0 && (
//             <p className='my-4 flex'>
//               {/* Link to open the PDF file in a new tab */}
//               <a
//                 className='underline cursor-pointer text-blue-400 hover:text-green-700'
//                 href={`${apiUrl}${data?.data?.attributes?.aplikacioniPDF?.data[0]?.attributes?.url}`}
//                 target='_blank'
//                 rel='noreferrer'
//                 download='Application.pdf'
//               >
//                 SHIKO KONKURSIN NË PDF 
//               </a>
//               {/* PDF icon image */}
//               <img src={pdfIcon} className='w-6 h-6 ml-1 object-contain' alt='' />
//             </p>
//           )}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePageOfAds;




import React from 'react';
import { useParams } from 'react-router-dom';
import { shpalljet } from '../data/shpalljet';
import pdfIcon from "../assets/file.png"

const SinglePageOfAds = () => {
  const { id } = useParams();
  const ad = shpalljet?.find((ad) => ad.id == id);

  if (!ad) {
    return <div className='justify-content-center align-items-center text-center'>SHPALLJA NUK U GJET</div>;
  }

  const {
    title,
    publicationDate,
    headingTop,
    titulliPozites,
    kontrata,
    orari,
    paga,
    vendi,
    diploma,
    patentShofer,
    pervojaPunes,
    kushtetKualifikimit,
    njohjaLigjeve,
    aftesiOrganizative,
    shkathtesi,
    shkathtesiKompjuterike,
    gjuhaAngleze,
    detyra1,
    detyra2,
    detyra3,
    detyra4,
    detyra5,
    detyra6,
    detyra7,
    detyra8,
    detyra9,
    detyra10,
    detyra11,
    aplikacioniPlotesuar,
    diplomaNevojshme,
    aplikoni,
    rekrutimi,
    aplikacioniNenBetim,
    aplikacioniPerPunesim,
    aplikimiPDF,
    aplikimiPDFSrb
  } = ad;

  console.log("aplikimiPDF:", aplikimiPDF);

  return (
    <div className="lg:p-10 font-custom">
      <div className="bg-white shadow-lg rounded-md p-5">
        <h6 className="font-bold text-lg uppercase mb-3">Konkurs për pozitën : <span className='underline p-2'>{title}</span></h6>
        <p className="text-[#6ADB84]">Data e publikimit: {publicationDate}</p>
        <div className="mt-4">
          <p>{headingTop}</p>
          <ul className="list-disc list-inside text-gray-700 my-4">
            <li><strong><b>Titulli i Pozitës:</b></strong> {titulliPozites}</li>
            <li><strong><b>Kontrata:</b></strong> {kontrata}</li>
            <li><strong><b>Orari:</b></strong> {orari}</li>
            <li><strong><b>Paga:</b></strong> {paga}</li>
            <li><strong><b>Vendi:</b></strong> {vendi}</li>
          </ul>
          <section className="py-8">
            <div className="max-w-4xl">
              <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Kualifikimet dhe Përgatitja Profesionale</h6>
              <ul className="list-disc list-inside text-gray-700 my-4">
                <li>{diploma}</li>
                {patentShofer && <li>{patentShofer}</li>}
                <li>{pervojaPunes}</li>
                {kushtetKualifikimit && <li>{kushtetKualifikimit}</li>}
                {njohjaLigjeve && <li>{njohjaLigjeve}</li>}
                {aftesiOrganizative && <li>{aftesiOrganizative}</li>}
                {shkathtesi && <li>{shkathtesi}</li>}
                {shkathtesiKompjuterike && <li>{shkathtesiKompjuterike}</li>}
                {gjuhaAngleze && <li>{gjuhaAngleze}</li>}
              </ul>
            </div>
          </section>

          <section className="py-8">
            <div className=" mx-auto">
              <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Detyrat dhe Përgjegjësitë Kryesore</h6>
              <ul className="list-disc list-inside text-gray-700 my-4">
                <li>{detyra1}</li>
                <li>{detyra2}</li>
                <li>{detyra3}</li>
                <li>{detyra4}</li>
                <li>{detyra5}</li>
                <li>{detyra6}</li>
                <li>{detyra7}</li>
                {detyra8 && <li>{detyra8}</li>}
                {detyra9 && <li>{detyra9}</li>}
                {detyra10 && <li>{detyra10}</li>}
                {detyra11 && <li>{detyra11}</li>}
              </ul>
            </div>
          </section>

          <section className="py-8">
            <div className=" mx-auto">
              <h6 className="font-semibold text-center uppercase text-gray-800 mb-8">Informata për Procedurën e Konkurimit</h6>
              <ul className="list-disc list-inside text-gray-700 my-4">
                <li>Aplikantët e interesuar për këtë vend pune duhet të bashkangjesin këto dokumente:</li>
                <ul className="ml-8">
                  <li>{aplikacioniPlotesuar}</li>
                  <li>CV e aplikantit;</li>
                  <li>{diplomaNevojshme}</li>
                  <li>Dëshminë mbi përvojën e punës, referencat si dhe certifikata tjera profesionale;</li>
                  <li>Deklaratën nën Betim;</li>
                  <li>Certifikatën që nuk është nën hetime (jo më e vjetër se 6 muaj);</li>
                  <li>Kopjen e letërnjoftimit.</li>
                </ul>
              </ul>
              <p className='py-6'>{aplikoni}</p>
              <p className='py-6'>{rekrutimi}</p>
            </div>
          </section>

          {aplikacioniNenBetim && (
            <p className='my-2'> 
              <a className='underline text-blue-400' href={aplikacioniNenBetim} download="ApplicationForm.pdf">
                SHKARKO DEKLARATËN NËN BETIM
              </a>
            </p>
          )}

          {aplikacioniPerPunesim && (
            <p className='my-4'> 
              <a className='underline text-blue-400' href={aplikacioniPerPunesim} download="Application.pdf">
                SHKARKO APLIKACIONIN PËR PUNËSIM
              </a>
            </p>
          )}

          {aplikimiPDF && ( 
            <p className='my-4 flex'> 
           
              <a className='underline text-blue-400' href={aplikimiPDF} download="Application.pdf">
                SHIKO KONKURSIN NË PDF
              </a>
              <img src={pdfIcon} className='w-6 h-6 object-contain' alt=''/>
            </p>
          )}

          {aplikimiPDFSrb && ( 
            <p className='my-4 flex'> 
              <a className='underline text-blue-400' href={aplikimiPDFSrb} download="SRB-Application.pdf">
                SHIKO KONKURSIN NË GJUHËN SERBE - PDF
              </a>
              <img src={pdfIcon} className='w-6 h-6 object-contain' alt=''/>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePageOfAds;
