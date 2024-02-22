import React from 'react';
import image1 from "../assets/komposti.png";
import image2 from "../assets/lulishtja.png";
import image3 from "../assets/deponiaDheu.png"
import image4 from "../assets/tregjet.png"
import image5 from "../assets/hapesiratPublike.png"
import image6 from "../assets/varrezat.png"

const VeprimtariteData = () => {
  const dataArray = [
    { 
        imageSrc: image1, 
        title: 'Qendra e Kompostit', 
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
        description: "Njësia e “Lulishtes” është zanafilla e ndërmarrjes tonë, e cila u krijua në vitin 1964 për qëllimin e kultivimit të luleve dhe fidaneve dekorative. Lulishtja gjendet në rrugën Fehmi Agani në Prishtinë, ka gjithësej 20 punëtorë, përfshirë kultivues dhe aranzhier. Me kapacitetin e saj, lulishtja arrin ti kultivoj deri në 700 mijë lule të llojeve të ndryshme, të cilat mbillen në hapësirat publike gjelbruese në qytet.", 
        bgColor: 'bg-[#FFF6E7]' 
    },
    { 
        imageSrc: image3, 
        title: 'Deponia e dheut', 
        titleColor: '#003249',
        descriptionColor: "#003249", 
        description: "Në bazë të vendimit të datës 11.10.2022 nga Komuna e Prishtinës, për dhënien e lokacioneve për shfrytëzim të deponisë së dheut, ndërmarrja “Gjelbër” menaxhon me deponinë e njejtë duke bashkëpunuar me shumë kompani ndërtimore në hudhjen e dheut kualitativ në lokacionet e caktuara. Planifikohet që pas mbushjes së terrenit me dheun organik, këto lokacione të shnëdrrohen në parqe dhe hapësira rekreative.", 
        bgColor: 'bg-[#6ADB84]' 
    },
    { 
        imageSrc: image4, 
        title: 'Menaxhimi i tregjeve', 
        titleColor: '#006646',
        descriptionColor: "#003249", 
        description: "Njësia e “Lulishtes” është zanafilla e ndërmarrjes tonë, e cila u krijua në vitin 1964 për qëllimin e kultivimit të luleve dhe fidaneve dekorative. Lulishtja gjendet në rrugën Fehmi Agani në Prishtinë, ka gjithësej 20 punëtorë, përfshirë kultivues dhe aranzhier. Me kapacitetin e saj, lulishtja arrin ti kultivoj deri në 700 mijë lule të llojeve të ndryshme, të cilat mbillen në hapësirat publike gjelbruese në qytet.", 
        bgColor: 'bg-[#FFF6E7]' 
    },
    { 
        imageSrc: image5, 
        title: 'Mirëmbajtja e hapësirave publike', 
        titleColor: '#006646',
        descriptionColor: "#003249", 
        description: "Your trusted partner for high-quality outsourcing services. Whether you're a small business owner looking to free some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed. We have the expertise and experience to help you succeed. Whether you're a small business owner looking to free up some time or a large corporation seeking to streamline your processes and increase efficiency, we have the expertise and experience to help you succeed.", 
        bgColor: 'bg-[#6ADB84]' 
    },
    {
        imageSrc: image6, 
        title: 'Mirëmbajtja e varrezave', 
        titleColor: '#6ADB84',
        descriptionColor: "#003249", 
        description: "Në bazë të Marrëveshjes të datës 09.10.2006 për bartjen e përgjegjësive për shërbimeve të mirëmbajtjes së varrezave nga NPK “Pastrimi”, ndërmarrja Gjelbër mirëmbanë hapësirat e gjelbra në varrezat e qytetit si dhe kryen shërbime të varrimit. Njësia e veçantë e NPL “Gjelbër”mirëmbanë varrezat muslimane, ato katolike dhe ortodokse, si dhe hebrenje.", 
        bgColor: 'bg-[#FFF6E7]' 
    }
  ];

  return (
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
  );
};

export default VeprimtariteData;
