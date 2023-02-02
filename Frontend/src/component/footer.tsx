import React from 'react'
import { Link } from 'react-router-dom'
import { iconFacebook, iconInstagram, iconLinkedin, iconTwitter, iconYoutube, logoBig, logoSalt } from '../assets'

const Footer: React.FC = () => {

   const links = [
      {
         name: 'Privacy Policy',
         link: '#'
      },
      {
         name: 'Partner Policy',
         link: '#'
      },
      {
         name: 'Terms and Conditions',
         link: '#'
      },
      {
         name: 'Article',
         link: '#'
      }
   ]

   const otherLinks = [
      {
         name: 'More About Us',
         link: '#'
      },
      {
         name: 'Meet The Team',
         link: '#'
      },
      {
         name: 'Contact Us',
         link: '#'
      },
      {
         name: 'Gallery',
         link: '#'
      }
   ]

   const socmed = [
      {
         icon: iconInstagram,
         link: 'https://www.instagram.com/worldcleanupdayindonesia/'
      },
      {
         icon: iconTwitter,
         link: '#'
      },
      {
         icon: iconFacebook,
         link: 'https://id-id.facebook.com/ldiindonesia/'
      },
      {
         icon: iconYoutube,
         link: '#'
      },
      {
         icon: iconLinkedin,
         link: '#'
      }
   ]

   return (
      <footer className='bg-p-primary'>
         <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap w-[100%] px-[21px] md:px-[none] mx-auto pt-[23px] pb-[23px] md:pt-[62px] md:pb-[12px] my-auto items-center justify-between md:max-w-[1224px] overflow-hidden'>
            <div className='flex flex-row w-[100%] md:w-[auto] md:justify-start mb-[50px]'>
               <div className='flex flex-row items-center mr-[20px] md:mr-[60px] md:min-w-[301px]'>
                  <div>
                     <img src={logoBig} className="w-[60px] min-w-[60px] aspect-auto md:w-[160px]" />
                  </div>
                  <div className='h-[56px] md:h-[114px] w-[1px] mr-[8px] md:mr-[24px] bg-white' />
                  <div>
                     <p className='text-[10px] font-primary text-white md:text-[16px] mb-[4px]'>Powered by</p>
                     <img src={logoSalt} className="w-[55px] aspect-auto md:w-[117px]" />
                  </div>
               </div>

               <div className='flex flex-col md:max-w-[210px] md:pr-[21px]'>
                  <h5 className='font-primary font-[400] text-[12px] md:text-[20px] text-white'>LET’S DO IT WORLD HEADQUARERS</h5>
                  <p className='font-secondary text-[10px] md:text-[16px] text-white'>REQ CODE 80562203</p>
                  <p className='font-secondary text-[10px] md:text-[16px] text-white'>ROOSIRANTSI 3, 10119 TALLINN, ESTONIA</p>
                  <p className='font-secondary font-[700] text-[10px] md:text-[14px] text-white'>INFO@WORLDCLEANUPDAY.ORG</p>
               </div>
            </div>

            <div className='flex flex-row w-[100%] md:w-[auto] justify-start items-center md:pl-[21px] md:mb-[50px]'>
               <div className='flex flex-col mr-[30px]'>
                  {
                     links.map((link, idx) => (
                        <Link key={idx} className='font-primary text-[10px] md:text-[16px] text-white mb-[8px] md:mb-[12px]' to={link.link}>{link.name}</Link>
                     ))
                  }
               </div>

               <div className='flex flex-col mr-[40px]'>
                  {
                     otherLinks.map((link, idx) => (
                        <Link key={idx} className='font-primary text-[10px] md:text-[16px] text-white mb-[12px] md:mb-[16px]' to={link.link}>{link.name}</Link>
                     ))
                  }
               </div>

               <div className='max-w-[120px] md:max-w-[none] md:min-w-[170px] '>
                  <h3 className='font-primary text-[12px] md:text-[24px] text-white mb-[12px] md:mb-[24px]'>Follow Us</h3>
                  <div className='flex flex-row flex-wrap'>
                     {
                        socmed.map((item, idx) => (
                           <a key={idx} href={item.link} target={'_blank'}><img src={item.icon} className="w-[18px] h-[18px] md:w-[32px] md:h-[32px] mr-[16px] md:mr-[20px] mb-[16px]"/></a>
                        ))
                     }
                  </div>
               </div>
            </div>

         </div>
      </footer>
   )
}

export default Footer;