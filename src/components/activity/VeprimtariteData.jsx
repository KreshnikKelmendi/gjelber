import React from 'react';
import image1 from "../assets/komposti.png";
import image2 from "../assets/lulishtja.png";
import image3 from "../assets/deponiaDheu.png";
import image4 from "../assets/tregjet.png";
import image5 from "../assets/hapesiratPublike.png";
import image6 from "../assets/varrezat.png";
import pdfFile from "../assets/informata_per_NPL_Gjelber.pdf";

const VeprimtariteData = () => {
  const dataArray = [
    { 
        imageSrc: image1, 
        title: 'Njësia për mirëmbajtjen e Parkut të Gërmisë dhe Qendrës të Kompostimit', 
        titleColor: "#6ADB84", 
        descriptionColor: "#FFF6E7", 
        description: "Qendra e Kompostimit gjendet në fshatin Butovc afër Parkut të Gërmisë. Të gjitha mbetjet organike të grumbulluara nga mirëmbajtja e hapësirave gjelbruese si gjethet, degët dhe rrënjët e thata, dërgohen në Qendër të Kompostimit për tu shnëdrruar në kompost për tu përdorur për pleh dekorativ dhe pleh organik më pas në hapësirat e njejta.", 
        bgColor: 'bg-[#003249]' 
    },
    { 
        imageSrc: image2, 
        title: 'Lulishtja', 
        titleColor: "#6ADB84", 
        descriptionColor: "#003249", 
        description: "Njësia e 'Lulishtes' është zanafilla e ndërmarrjes tonë, e cila u krijua në vitin 1964 për qëllimin e kultivimit të luleve dhe fidaneve dekorative. Lulishtja gjendet në rrugën Fehmi Agani në Prishtinë, ka gjithësej 20 punëtorë, përfshirë kultivues dhe aranzhier. Me kapacitetin e saj, lulishtja arrin ti kultivoj deri në 700 mijë lule të llojeve të ndryshme, të cilat mbillen në hapësirat publike gjelbruese në qytet.", 
        bgColor: 'bg-[#FFF6E7]' 
    },
    { 
        imageSrc: image3, 
        title: 'Deponia e dheut', 
        titleColor: '#003249',
        descriptionColor: "#003249", 
        description: "Në bazë të vendimit të datës 11.10.2022 nga Komuna e Prishtinës, për dhënien e lokacioneve për shfrytëzim të deponisë së dheut, ndërmarrja 'Gjelbër' menaxhon me deponinë e njejtë duke bashkëpunuar me shumë kompani ndërtimore në hudhjen e dheut kualitativ në lokacionet e caktuara. Planifikohet që pas mbushjes së terrenit me dheun organik, këto lokacione të shnëdrrohen në parqe dhe hapësira rekreative.", 
        bgColor: 'bg-[#6ADB84]' 
    },
    { 
        imageSrc: image4, 
        title: 'Menaxhimi i tregjeve', 
        titleColor: '#006646',
        descriptionColor: "#003249", 
        description: "Njësia e 'Lulishtes' është zanafilla e ndërmarrjes tonë, e cila u krijua në vitin 1964 për qëllimin e kultivimit të luleve dhe fidaneve dekorative. Lulishtja gjendet në rrugën Fehmi Agani në Prishtinë, ka gjithësej 20 punëtorë, përfshirë kultivues dhe aranzhier. Me kapacitetin e saj, lulishtja arrin ti kultivoj deri në 700 mijë lule të llojeve të ndryshme, të cilat mbillen në hapësirat publike gjelbruese në qytet.", 
        bgColor: 'bg-[#FFF6E7]' 
    },
    { 
        imageSrc: image5, 
        title: 'Mirëmbajtja e hapësirave publike', 
        titleColor: '#006646',
        descriptionColor: "#003249", 
        description: "Ndërmarrja 'Gjelbër' është përgjegjëse për mirëmbajtjen e hapësirave publike në të gjithë territorin e Prishtinës. Kjo përfshin kujdesin për parqet, sheshet, zonat e gjelbra dhe të gjitha hapësirat e përdorura nga qytetarët. Ekipet tona të specializuara kryejnë punë të rregullta të kositjes, pastrimit, mbjelljes së luleve dhe bimëve dekorative, si dhe mirëmbajtjen e sistemeve të ujitjes. ", 
        bgColor: 'bg-[#6ADB84]' 
    },
    {
        imageSrc: image6, 
        title: 'Mirëmbajtja e varrezave', 
        titleColor: '#6ADB84',
        descriptionColor: "#003249", 
        description: "Në bazë të Marrëveshjes të datës 09.10.2006 për bartjen e përgjegjësive për shërbimeve të mirëmbajtjes së varrezave nga NPK 'Pastrimi', ndërmarrja Gjelbër mirëmbanë hapësirat e gjelbra në varrezat e qytetit si dhe kryen shërbime të varrimit. Njësia e veçantë e NPL 'Gjelbër'mirëmbanë varrezat muslimane, ato katolike dhe ortodokse, si dhe hebrenje.", 
        bgColor: 'bg-[#FFF6E7]' 
    }
  ];

  const handleViewPdf = (e) => {
    e.preventDefault();
    window.open(pdfFile, '_blank');
  };

  const handleDownloadPdf = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = "Info-per-NPL-Gjelber.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className='mt-10 lg:mt-24'>
        {dataArray.map((data, index) => (
          <div key={index} className={`flex flex-col gap-y-10 lg:gap-y-0 py-12 lg:py-0 lg:flex-row items-center px-10 lg:h-[576px] h-fit ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} ${data.bgColor}`}>
            <img
              src={data.imageSrc}
              alt="dataImage"
              className={`lg:w-1/2 lg:h-[347px] w-52 h-52 object-contain ${index % 2 === 0 ? '' : 'lg:order-1 order-2'}`}
            />
            <div className={`lg:w-1/2 font-custom mt-5 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-10' : ''}`}>
              <p style={{ color: data.titleColor }} className="font-bold font-custom text-2xl lg:text-[34px]">{data.title}</p>
              <p style={{ color: data.descriptionColor }} className="lg:w-[575px] w-fit lg:h-[175px] mt-4 lg:pr-10 text-justify leading-[25px] tracking-tighter lg:tracking-[0.5%] text-[#FFF6E7] text-base lg:text-[18px]">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* PDF Download Section */}
      <div className="bg-[#003249] py-16 lg:py-32 px-10">
        <div className=" mx-auto">
          <h2 className="text-3xl font-custom font-bold text-[#6ADB84] mb-6">Shkarkoni Raportin Tonë</h2>
          <p className="text-[#FFF6E7] mb-8 text-lg font-custom">
            Për më shumë informacione rreth veprimtarive tona, ju mund të shikoni ose shkarkoni raportin tonë të plotë në formatin PDF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleViewPdf}
              className="inline-flex items-center font-custom justify-center px-8 py-3 bg-[#6ADB84] text-[#003249] border-2 border-[#6ADB84] font-bold rounded-lg hover:bg-[#003249] hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Shiko Raportin
            </button>
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center font-custom justify-center px-8 py-3 bg-[#003249] text-[#6ADB84] border-2 border-[#6ADB84] font-bold rounded-lg hover:bg-[#6ADB84] hover:text-[#003249] transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Shkarko Raportin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VeprimtariteData;