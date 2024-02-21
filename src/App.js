import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./components/pages/ContactPage";
import Header from "./components/header/Header";
import AdsPage from "./components/pages/AdsPage";
import ActivityPage from "./components/pages/ActivityPage";
import SinglePageOfActivity from "./components/pages/SinglePageOfActivity";
import VeprimtaritePage from "./components/pages/VeprimtaritePage";
import SinglePageOfAds from "./components/pages/SinglePageOfAds";

function App() {
  return (
    <>
   
   <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/aktivitetet" element={<ActivityPage />} />
            <Route path="/aktivitetet/:id" element={<SinglePageOfActivity />} />
            <Route path="/veprimtarite" element={<VeprimtaritePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shpalljet" element={<AdsPage />} />
            <Route path="/shpalljet/:id" element={<SinglePageOfAds />} />
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
