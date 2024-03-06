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
            <div className="max-w-4xl mx-auto">
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
            <div className="max-w-4xl mx-auto">
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
            <p className='my-4'> 
              <a className='text-decoration-none' href={aplikimiPDFSrb} download="1.Konkursi 19.12.2023 gjuha-serbe zyrtare burimeve njerzore.pdf">
                SHIKO KONKURSIN NË GJUHËN SERBE - PDF
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePageOfAds;
