import React from 'react'
import flowerLogo from "../assets/Vector.png"
import aboutUsImage from "../assets/rrethNeshImage.png"

const AboutUs = () => {
  return (
    <>
    <div className='flex flex-col lg:flex-row w-full px-5 lg:px-10 py-8'>
        <div className='lg:w-1/2'>
            <div className='w-full items-center justify-center h-[10vh] lg:h-[189px] rounded-[6px] flex bg-[#003249] text-white'>
                <img className='w-[33px] h-[40px] object-cover' src={flowerLogo} alt='' />
                <p className='font-custom text-3xl lg:text-[48px] text-[#FFF6E7] font-semibold mx-3'>Rreth Nesh</p>
            </div>
            <div className='lg:w-[575px] mt-4 font-custom tracking-tighter lg:tracking-[0.5%] text-[18px] leading-[25px] text-justify text-[#1E1E1E]'>
                <p>
                Komuna e Prishtinës është pronare e vetme e Ndërmarrjes “Gjelbër” Sh.A, në Prishtinë, me 
kapital publik.
Ndërmarrja Publike Lokale Publike Lokale “Gjelbër” Sh.A, është themeluar mbështetur në 
Ligjin Nr. 03/L-O87, "Për Ndërmarrjet Publike; Ligjit Nr. 04/L-111 për ndryshimin dhe 
plotësimin e Ligjit Nr. 03/LO87, "Për Ndërmarrjet Publike", Ligjit Nr. 05/L-009 për ndryshimin 
dhe plotësimin e Ligjit Nr. 03/L-087, "Për Ndërmarrjet Publike” i ndryshuar dhe plotësuar me 
Ligjin Nr. 04/L-111, po ashtu mbështetur në Ligjin Nr. 06/L- O16 për Shoqëritë Tregtare.
Kompania është themeluar nga Komuna e Prishtinës më 29.05.1964 me aktvendimin nr. 01-
10317 dhe është regjistruar në Gjykatën Ekonomike në Prishtinë më dt. 30.07.1964 me 
aktvendimin nr. 290/64 në emërtimin Drejtoria e Gjelbërimit dhe Objekteve Sportive, si dhe 
vendimi për rithemelimin e ndërmarrjes Publike Komunale –“Hortikultura” Prishtinë të dt. 
29.12.2005 me nr. 01.330-659
                
                </p>
            </div>
        </div>
        <div className='lg:w-1/2 justify-center items-center  lg:ml-2 mt-4 lg:mt-0 rounded-[6px]'>
            <img className='object-cover lg:p-0' src={aboutUsImage} alt='' /> 
        </div>
    </div>

    <p className='text-[#6ADB84] text-[34px] font-medium px-5 lg:px-10 lg:mt-12'>Misioni dhe Vizioni</p>
    <div className='flex flex-col px-5 lg:px-10 lg:flex-row mt-2'>
    
        <div className='lg:w-1/2 font-custom'>
            <p className='mt-4 text-[#1E1E1E] tracking-tighter lg:tracking-[0.5%] lg:w-[575px] text-justify text-[18px]'>
            Gjelber Sh.A. është e përkushtuar për të përmirësuar cilësinë e jetës në qytetin e Prishtinës 
            duke u kujdesur dhe duke kultivuar hapësirat e saj të gjelbra. Misioni ynë është të jemi gardiani 
            i shëndetit dhe mirëqenies mjedisore të qytetit, duke krijuar hapësira të gjelbëra të 
            qëndrueshme dhe jetëdhënëse që kontribuojnë në mirëqenien fizike dhe mendore të 
            komunitetit tonë. Përmes praktikave inovative, angazhimit të komunitetit dhe përkushtimit 
            ndaj konservimit të mjedisit, Gjelbër Sh.A. synon të krijojë dhe të ruajë hapësira të gjelbëra 
            që jo vetëm janë estetikisht të këndshme, por gjithashtu shërbejnë si qendra për rekreacioni, 
            biodiversitet dhe një ndjenjë krenarie komunitare.
            <br /> <br />
            Gjelbër Sh.A. parashikon një të ardhme për Prishtinën, ku çdo cep i qytetit ofron një pamje të
            bukur dhe të shëndetshme për qytetarët. Vizioni ynë është të jemi lider në peizazhin e 
            qëndrueshëm urban, duke vendosur standardet për menaxhimin e përgjegjshëm dhe efikas 
            të hapësirave të gjelbra. Ne aspirojmë të krijojmë një qytet ku parqet dhe zonat e gjelbra janë 
            ekosisteme dinamike, duke promovuar biodiversitetin, edukimin mjedisor dhe kohezionin e 
            komunitetit.
            </p>
        </div>
        <div className='lg:w-1/2 font-custom'>
            <p className='mt-4 text-[#1E1E1E] tracking-tighter lg:tracking-[0.5%] lg:w-[575px] lg:h-[225px] text-justify text-[18px]'>
            Përveç peizazhit të qytetit dhe mirëmbajtjes së hapësirave të gjelbra, misioni i ndërmarrjes 
është zgjërimi i fushëveprimtarisë së saj përmes aktiviteteve e projekteve të ndryshme për 
solucione të gjelbra urbane dhe praktikave mjedisore për të mbështetur qytetin në ruajtjen 
e mjedisit.
<br /> <br />
Pritoritet për ndërmarrjen do të jetë zhvillimi i çdo njësie funksionale me të cilën menaxhon 
dhe operon ndërmarrja, duke e rritur kontributin për komunitetin dhe profitin e ndërmarrjes. 
Zgjërimi i prodhimtarisë së bimëve dhe plehut organik, targetimi i projekteve inovative në 
lidhje me kauza për mjedis të qëndrueshëm në lidhje me përdorimin e dobishëm dhe tregtimi
i tyre në sektorin privat.
Me rëndësi të veçantë, do të trajtohet hartimi i projekteve dhe aktivitete për ngritjen e 
vetëdijësimit të brezave të ndryshëm në lidhje me kujdesin ndaj mjedisit dhe mirëqenien e 
komunitetit, duke përfshirë aktivitete edukativo-arsimore në bashkëpunim me drejtoritë 
përkatëse komunale, instituccione vendore, shoqata e organizata të huaja. 
            </p>
        </div>
    </div>
    </>
  )
}

export default AboutUs