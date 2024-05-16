import React from 'react';
import FetchData from '../hooks/FetchData';
import noraCimili from "../assets/kryeshefiEkzekutiv.png"
import andiBelegu from "../assets/Andi - bio.jpeg"
import artaDuriqi from "../assets/Arta - bio.jpg"


const Kryeshefi = () => {
  // const apiUrl = "http://localhost:1337";
  // const { loading, error, data } = FetchData(`${apiUrl}/api/kryeshefi-ekzekutivs?populate=*`);

  // console.log("dataw", data);


  return (
    <div className=' px-5 lg:px-10 py-5 lg:mt-0 lg:py-8 bg-[#006646] h-[100%] lg:h-[100%]'>
      <div className='lg:w-1/2 items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#6ADB84] text-white'>
        <p className='font-custom text-2xl text-center lg:leading-[56.88px] text-[#003249] lg:text-[48px] font-normal mx-auto lg:px-[13%]'>
          Menaxhmenti i Ndërmarrjes
        </p>
      </div>
      <section className='w-full flex flex-col lg:flex-row mt-4 lg:mt-24'>
        <div>
          <img src={noraCimili} alt='' className='h-[400px] w-full lg:h-[72vh] object-cover rounded-md' />
          {/* {console.log("pdf", data?.data[0]?.attributes?.image?.data?.attributes?.url)} */}
        </div>
        <div className='lg:px-16'>
          <p className='text-3xl lg:text-[48px] font-custom text-[#6ADB84] font-medium'>Nora Cimili Gagica</p>
          <p className='font-custom text-[#6ADB84] mt-2 underline'>Kryeshefe Ekzekutive e Ndërmarrjes</p>
          <p className='text-[#FFF6E7] mt-4 lg:mt-6 text-justify tracking-tighter text-[18px] w-full lg:w-[650px] leading-[25px]'>
              Nora Cimili Gagica është zgjedhur Kryeshefe e ndërmarrjes “Gjelbër” në dhjetor të vitit 2022.
              Para emërimit të saj në këtë pozitë ishte e angazhuar si eksperte dhe konsulente në Efiçiencë të
              Energjisë në Fondacionin e Mijëvjeçarit të Kosovës si dhe organizata tjera të huaja, përderisa
              Zyra e Bashkimit Evropian në Prishtinë ishte shtëpia e saj e dytë për 10 vite.
              Nora ka përfunduar studimet në Inxhinieri Ndërtimore, si dhe ka përfunduar dy studime
              postdiplomike, masterin shkencor në Planifikim Urban dhe Hapësinorë si dhe masterin
              profesional në Efiçiencë të Energjisë në Ndërtesa në Fakultetin e Ndërtimtarisë dhe Arkitekturës
              në Universitetin e Prishtinës. <br /> <br />
              Përkushtimi i pandryshuar i Norës për të krijuar qytete më të gjelbra dhe më të qëndrueshme
              thekson vizionin e saj për një të ardhme të qëndrueshme. Përmes udhëheqjes së saj, ajo
              vazhdon të inspirojë ndryshime pozitive dhe të shtyjë inovacion në planifikim urban dhe
              ruajtjen e mjedisit.
          </p>
        </div>
      </section>

      <section className='w-full flex flex-col lg:flex-row mt-16 lg:mt-24'>
        <div>
          <img src={andiBelegu} alt='' className='h-[400px] w-full lg:h-[72vh] object-cover rounded-md' />
          {/* {console.log("pdf", data?.data[0]?.attributes?.image?.data?.attributes?.url)} */}
        </div>
        <div className='lg:px-16'>
          <p className='text-3xl lg:text-[48px] font-custom text-[#6ADB84] font-medium'>Andi Belegu</p>
          <p className='font-custom text-[#6ADB84] mt-2 underline'>Sekretar Korporativ i Ndërmarrjes</p>

          <p className='text-[#FFF6E7] mt-4 lg:mt-6 text-justify tracking-tighter text-[18px] w-full lg:w-[650px] leading-[25px]'>
          Andi Belegu, i është bashkangjitur ndërmarrjes “Gjelbër” si Sekretar 
          Korporativ në gusht të vitit 2023.
          Ka përfunduar Fakultetin Juridik të Nova Univerza në Lubjanë, Slloveni. Tani 
          është në përfundim të studimeve të nivelit Master në Universitetin Tor 
          Vergata në Romë duke u specializuar në Ekonominë e Bashkimit Evropian 
          dhe të Drejtën Biznesore.
          Për vite me radhë ai ka ushtruar funksione të ndryshme në institucione, 
          organizata dhe iniciativa të ndryshme qytetare.
          <br /> <br />
          Ndër organizatat ku Andi ka punuar dhe ka dhënë kontribut janë Fondi për të
          Drejtën Humanitare dhe Qendra për Trajnime dhe Studime Gjinore.
          Në biznes ka treguar sukses të madh si udhëheqës i agjensionit të 
          patundshmërive Anem Real Estate ku për vite me radhë ka mbajtur pozitën e
          Drejtorit Ligjor dhe Drejtorit për Planifikim dhe Zhvillim të biznesit. Nga 
          përvoja dhe shkollimi ai ka njohuri të zgjeruara të së drejtës, ekonomisë, 
          menaxhimit dhe planifikimit strategjik
          </p>
        </div>
      </section>

      <section className='w-full flex flex-col lg:flex-row mt-16 lg:mt-24'>
        <div>
          <img src={artaDuriqi} alt='' className='h-[400px] lg:h-[72vh] w-full lg:w-[72vh] object-cover rounded-md' />
          {/* {console.log("pdf", data?.data[0]?.attributes?.image?.data?.attributes?.url)} */}
        </div>
        <div className='lg:px-16'>
          <p className='text-3xl lg:text-[48px] font-custom text-[#6ADB84] font-medium'>Arta Duriqi</p>
          <p className='font-custom text-[#6ADB84] mt-2 underline'>Zyrtare Kryesore Financiare dhe e Thesarit</p>
          <p className='text-[#FFF6E7] mt-4 lg:mt-6 text-justify tracking-tighter text-[18px] w-full lg:w-[650px] leading-[25px]'>
              Arta Duriqi, i është bashkangjitur ndërmarrjes “Gjelbër” si Zyrtare Kryesore 
              Financiare dhe e Thesarit në shkurt në vitit 2024.
              Ajo ka të përfunduar studimet Bachelor në Universitetin e Prishtinës Hasan 
              Prishtina, në degën Ekonomi dhe Financa dhe është në përfundim të 
              Studimeve Master në të njëjtin universitet. <br /> <br />
              Arta ka një përvojë të jashtëzakonshme në themelimin, zhvillimin dhe 
              sistematizimin e sistemeve financiare, duke e dëshmuar këtë gjatë 
              udhëheqjes së departamenteve financiare në organizata të ndryshme 
              ndërkombëtare për më shumë se dy dekada.
              Gjithashtu, Arta është njohëse e shkëlqyeshme e sistemeve dhe rregulloreve 
              të ligjeve financiare, në nivelin lokal dhe ndërkombëtar
          </p>
        </div>
      </section>
    </div>
  );
};

export default Kryeshefi;
