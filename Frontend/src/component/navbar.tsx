import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { iconMenuHamburger, logo } from '../assets';
import ActionButton from './actionButton';

const Navbar: React.FC = () => {
   const [isOpenNavBar, setToggleNavbar] = useState<Boolean>(false);
   const location = useLocation();
   const navLinks = [
      { to: "/", name: "Home" },
      { to: "/about-us", name: "About us" },
      { to: "/program", name: "Program" },
      { to: "/event", name: "Event" },
      { to: "/donate", name: "Donate" },
      { to: "article", name: "Article" },
      { to: "/contact-us", name: "Contact Us" }
   ];

   const handleScrollTo = () => {
      console.log("scroll to")
      const element = document.getElementById('nearestEvent');
      element?.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});
   }

   return (
      <nav className="flex fixed w-[100%] bg-white top-0 z-40">
         <div className="mx-auto flex flex-row justify-between items-center py-[5px] w-full max-w-[1238px]">
            <Link to={'/'}><img alt='' src={logo} className={'w-14 h-[52px] lg:w-[70px] lg:h-[65px] ml-[25px]'} /></Link>
            <div className="flex font-primary flex-row items-center">
               <div className="hidden lg:flex font-primary flex-row items-center">
                  {
                     navLinks.map(link => (
                        <Link key={link.name} className="px-[16px]" to={link.to}>{link.name}</Link>
                     ))
                  }
               </div>

               <div className='flex flex-row items-center'>
                  {
                     location.pathname != "/" ? (

                  <Link className="mx-[16px] z-10" to={location.pathname == "/" ? "/" : "/event"}>
                  <ActionButton title='Join the movement' />
               </Link>
                     ) : (
                        <button onClick={handleScrollTo} className="mx-[16px] z-10">
                           
                        <ActionButton title='Join the movement' />
                        </button>
                     )
                  }

                  <a onClick={() => setToggleNavbar(!isOpenNavBar)} className='lg:hidden mr-[25px] z-10'>
                     <img src={iconMenuHamburger} className="w-[21px] h-[12px] mx-[3px] my-[12px]" />
                  </a>

                  <div className={`lg:hidden flex flex-col bg-p-primary ${isOpenNavBar ? 'ml-[0px]' : 'ml-[100vw]'} w-[100vh] fixed h-[100%] pt-[80px] top-0 transition-all`}>
                     {
                        navLinks.map(link => (
                           <Link key={link.name} className="px-[16px] text-white text-[16px] py-[16px] leading-6" to={link.to} onClick={()=> setToggleNavbar(false)}>{link.name}</Link>
                        ))
                     }
                  </div>
               </div>

            </div>
         </div>
      </nav>
   );
};

export default Navbar;

interface InavBarState {
   isOpenSideBar: boolean;
}