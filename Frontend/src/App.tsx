import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { Home, ContactUs, AboutUs, Article, Donate, MeetTeam } from "./Pages/index";
import { getSreenSize, ScreenSize } from "./utils/utils";

export const ScreenContext = createContext(getSreenSize());

const App: React.FC = () => {
   const [screenSize, setScreenSize] = useState<ScreenSize>(getSreenSize());
   useEffect(() => {
      window.addEventListener("resize", function (event) {
         setScreenSize(getSreenSize());
      });
   }, []);

   return (
      <ScreenContext.Provider value={screenSize}>
         <div className="min-h-[100vh]">
            <Router>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/article" element={<Article />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/program-csr/:id" element={<Donate />} />
                  <Route path="/program-csr/:id" element={<Donate />} />
                  <Route path="/program-csr" element={<Donate />} />
                  <Route path="/team" element={<MeetTeam />} />
               </Routes>
               <Navbar />

               <Footer />
            </Router>
         </div>
      </ScreenContext.Provider>
   );
};

export default App;
