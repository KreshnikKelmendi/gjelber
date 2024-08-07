import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./components/pages/ContactPage";
import Header from "./components/header/Header";
import AdsPage from "./components/pages/AdsPage";
import ActivityPage from "./components/pages/ActivityPage";
import SinglePageOfActivity from "./components/pages/SinglePageOfActivity";
import VeprimtaritePage from "./components/pages/VeprimtaritePage";
import SinglePageOfAds from "./components/pages/SinglePageOfAds";
import KomisioniKomunal from "./components/pages/KomisioniKomunal";
import Bordi from "./components/pages/Bordi";
import Kryeshefi from "./components/pages/Kryeshefi";
import AboutUsPage from "./components/pages/AboutUsPage";
import AdsBanner from "./components/ads/AdsBanner";
import Footer from "./components/footer/Footer";
import HomePage from "./components/pages/HomePage";
import KornizaLigjore from "./components/pages/KornizaLigjore";
import StrukturaOrganizativeNdermarrjes from "./components/pages/StrukturaOrganizativeNdermarrjes";
import Zps from "./components/pages/Zps";

function App() {
  return (
    <>
   
   <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rrethNesh" element={<AboutUsPage />} />
            <Route path="/komisionikomunal" element={<KomisioniKomunal />} />
            <Route path="/korniza-ligjore" element={<KornizaLigjore />} />
            <Route path="/struktura-organizative-e-ndermarrjes" element={<StrukturaOrganizativeNdermarrjes />} />
            <Route path="/bordi" element={<Bordi />} />
            <Route path="/menaxhmenti-i-ndermarrjes" element={<Kryeshefi />} />
            <Route path="/aktivitetet" element={<ActivityPage />} />
            <Route path="/aktivitetet/:id" element={<SinglePageOfActivity />} />
            <Route path="/veprimtarite" element={<VeprimtaritePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/zyrtare-pergjegjese-per-sinjalizim" element={<Zps />} />
            <Route path="/shpalljet" element={<AdsPage />} />
            <Route path="/shpalljet/:id" element={<SinglePageOfAds />} /> 
          </Routes>
          <AdsBanner />
          <Footer />
          </BrowserRouter>
          
    </>
  );
}

export default App;
