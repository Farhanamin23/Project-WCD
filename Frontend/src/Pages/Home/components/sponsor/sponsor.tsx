import React, { useContext } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from 'react-query';
import { adapter, baseUrl } from '../../../../actions/global';
import { ScreenContext } from '../../../../App';
import { iconPartnerBreakFree, iconPartnerUnesco, iconPartnerUNHabitat, iconPartnerUNV } from '../../../../assets';
import './styles.css';

const Sponsor: React.FC = () => {

   const { isLoading: isLoadingSponsorsData, data: sponsors } = useQuery<string[], Error>(
      "sponsors-data",
      async () => {
         const res = await adapter.get('/national-sponsors?sort=order&populate=*');
         const _articles: string[] = res.data.data.reduce((acc: any, item: any) => {
            acc.push(baseUrl + item.attributes.image.data.attributes.url)

            return acc
         }, []);
         return _articles
      },
      {
         enabled: true,
         retry: true
      }
   );

   const sponsor = [
      {
         id: 1,
         icon: iconPartnerUnesco,
         width: 151,
         height: 132
      },
      {
         id: 2,
         icon: iconPartnerBreakFree,
         width: 488,
         height: 67
      },
      {
         id: 3,
         icon: iconPartnerUNHabitat,
         width: 226,
         height: 65
      },
      {
         id: 4,
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
               {
                  sponsors &&
                  <Swiper
                     slidesPerView={'auto'}
                     loop={true}
                     navigation={true}
                     modules={[Navigation]}
                     className='md:mt-[50px]'
                  >
                     {
                        sponsors?.map((item, idx) => (
                           <SwiperSlide key={item}>
                              <img src={item} className="mx-[30px] max-h-[34px] max-w-[70vw] md:max-w-[none] md:max-h-[none]" />
                           </SwiperSlide>
                        ))
                     }
                  </Swiper>
               }
            </div>
         </div>
      </section>
   );
};

export default Sponsor