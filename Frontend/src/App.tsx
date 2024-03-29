import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { Home, ContactUs, AboutUs, Article, Donate, MeetTeam, Programs, Events, ProgramDetail, EventDetail, NotFound, ProgramCsrDetail, ArticleDetail } from "./Pages/index";
import { getSreenSize, ScreenSize } from "./utils/utils";

export const ScreenContext = createContext(getSreenSize());

const App: React.FC = () => {
   const [screenSize, setScreenSize] = useState<ScreenSize>(getSreenSize());
   useEffect(() => {
      window.addEventListener("resize", function (event) {
         // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
         setScreenSize(getSreenSize());
      });
   }, []);

   return (
      <ScreenContext.Provider value={screenSize}>
         <div className="min-h-[100vh] flex flex-col">
            <Router>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/donate' element={<Donate />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path='/program' element={<Programs />} />
                  <Route path='/program/:identifier/:slug' element={<ProgramDetail />} />
                  <Route path='/event' element={<Events />} />
                  <Route path='/article' element={<Article />} />
                  <Route path='/article/:id/:slug' element={<ArticleDetail />} />
                  <Route path='/event/:identifier/:slug' element={<EventDetail />} />
                  <Route path='/contact-us' element={<ContactUs />} />
                  <Route path="/program-csr" element={<Donate />} />
                  <Route path="/program-csr/:id/:slug" element={<ProgramCsrDetail />} />
                  <Route path="/team" element={<MeetTeam />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
               <Navbar />

               <Footer />
            </Router>
         </div>
      </ScreenContext.Provider>
   );
};

export default App;

