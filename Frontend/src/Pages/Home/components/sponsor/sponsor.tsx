import React, { useContext } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ScreenContext } from '../../../../App';
import { iconPartnerBreakFree, iconPartnerUnesco, iconPartnerUNHabitat, iconPartnerUNV } from '../../../../assets';
import './styles.css';

const Sponsor: React.FC = () => {

   const screenSize = useContext(ScreenContext);
   const sponsor = [
      {
        id:1,
         icon: iconPartnerUnesco,
         width: 151,
         height: 132
      },
      {
        id:2,
         icon: iconPartnerBreakFree,
         width: 488,
         height: 67
      },
      {
        id:3,
         icon: iconPartnerUNHabitat,
         width: 226,
         height: 65
      },
      {
        id:4,
         icon: iconPartnerUNV,
         width: 122,
         height: 110
      }
   ]

   return (
      <section>
         <div className='bg-white pt-[23px] md:pt-[54px] pb-[37px] md:pb-[94px] sponsorList '>
            <h3 className='text-center font-primary text-[16px] md:text-[48px] mb-[26px] md:mb-[61px] text-p-blue'>National Sponsor</h3>
            <div className='flex flex-row items-center justify-between md:max-w-[1344px] overflow-visible scrollbar-hide w-[90%] mx-auto'>
               <Swiper
                  slidesPerView={'auto'}
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                  className='md:mt-[50px]'
               >
                  {
                     sponsor.map((item, idx) => (
                        <SwiperSlide key={item.id}>
                           <img src={item.icon} className="mx-[30px] max-h-[34px] max-w-[70vw] md:max-w-[none] md:max-h-[none] aspect-auto" />
                        </SwiperSlide>
                     ))
                  }
               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default Sponsor