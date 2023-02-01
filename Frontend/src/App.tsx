import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { Home, ContactUs, AboutUs, Article } from "./Pages/index";
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
      <div className="min-h-[100vh]">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/article" element={<Article />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Navbar />

          <Footer />
        </Router>
      </div>
    </ScreenContext.Provider>
  );
};

// export function ProtectionRouter(props: any) {

//   if(localStorage.getItem('project-salt'))
//   {
//     return props.children
//   }else{
//     return <Navigate to='/' />
//   }
// }

export default App;
