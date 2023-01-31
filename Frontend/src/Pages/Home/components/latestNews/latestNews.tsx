import SectionTitle from "../../../../component/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ScreenContext } from "../../../../App";
import { ScreenSize } from "../../../../utils/utils";

const LatestNews = () => {
   const screenSize = useContext(ScreenContext);

   const events = [
      {
         image: 'https://picsum.photos/300/450',
         category: 'Recycle Tips',
         title: 'Lorem ipsum dolor sit amet',
         shortDesc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
         image: 'https://picsum.photos/300/450',
         category: 'Recycle Tips',
         title: 'Lorem ipsum dolor sit amet',
         shortDesc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
         image: 'https://picsum.photos/300/450',
         category: 'Recycle Tips',
         title: 'Lorem ipsum dolor sit amet',
         shortDesc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
   ]
   return (
      <section>
         <div className="max-w-[1102px] mx-auto w-[100%]">
            <SectionTitle title="Latest News" />

            <Swiper
               initialSlide={1}
               loop={true}
               loopFillGroupWithBlank={false}
               slidesPerView={screenSize == ScreenSize.sm || screenSize == ScreenSize.md ? 1 : 3}
               centeredSlides={true}
               spaceBetween={0}
               navigation={true}
               modules={[Pagination, Navigation]}
               className='mt-[32px] md:mt-[50px] event-list'
            >
               {
                  events.map(event => {
                     return (
                        <SwiperSlide>
                           <div className="max-w-[201px] md:max-w-[318px] rounded-[20px] overflow-hidden my-[30px]">
                              <Link to="">
                                 <div className={`h-[83px] md:h-[220px] bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${event.image})` }}></div>
                                 <div className="bg-white py-[10px] md:py-[28px] px-[16px] md:px-[31px] text-left">
                                    <p className="font-primary text-[10px] md:text-[14px] mb-[10px] leading-[17px] md:leading-[25px] text-p-primary">{event.title}</p>
                                    <p className="font-primary text-[14px] md:text-[24px] mb-[12px] leading-[14px] md:leading-[25px]">{event.title}</p>
                                    <p className="font-secondary text-[12px] md:text-[16px]">{event.shortDesc}</p>
                                 </div>
                              </Link>
                           </div>
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>

         </div>
      </section>
   );
};

export default LatestNews;