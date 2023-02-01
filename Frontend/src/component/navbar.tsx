import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { iconMenuHamburger, logo } from '../assets';
import ActionButton from './actionButton';

const Navbar: React.FC = () => {
   const [isOpenNavBar, setToggleNavbar] = useState<Boolean>(false);
   const navLinks = [
      { to: "/", name: "Home" },
      { to: "/about-us", name: "About us" },
      { to: "/program", name: "Program" },
      { to: "/", name: "Event" },
      { to: "/donate", name: "Donate" },
      { to: "/", name: "Article" },
      { to: "/contact-us", name: "Contact Us" }
   ];

   return (
      <nav className="flex fixed w-[100%] bg-white top-0 z-40">
         <div className="mx-auto flex flex-row justify-between items-center py-[5px] w-full max-w-[1238px]">
            <Link to={'/'}><img src={logo} className={'w-14 h-[52px] lg:w-[70px] lg:h-[65px] ml-[8px]'} /></Link>
            <div className="flex font-primary flex-row items-center">
               <div className="hidden lg:flex font-primary flex-row items-center">
                  {
                     navLinks.map(link => (
                        <Link key={link.name} className="px-[16px]" to={link.to}>{link.name}</Link>
                     ))
                  }
               </div>

               <div className='flex flex-row items-center'>
                  <Link className="px-[16px] z-10" to="/contact-us">
                     <ActionButton title='Join the movement' />
                  </Link>

                  <a onClick={() => setToggleNavbar(!isOpenNavBar)} className='lg:hidden mr-[25px] z-10'>
                     <img src={iconMenuHamburger} className="w-[21px] h-[12px]" />
                  </a>

                  <div className={`lg:hidden flex flex-col bg-p-primary ${isOpenNavBar ? 'ml-[100vw]' : 'ml-auto'} w-[100vh] fixed h-[100%] pt-[80px] top-0 transition-all`}>
                     {
                        navLinks.map(link => (
                           <Link key={link.name} className="px-[16px] text-white text-[16px] py-[16px] leading-6" to={link.to}>{link.name}</Link>
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