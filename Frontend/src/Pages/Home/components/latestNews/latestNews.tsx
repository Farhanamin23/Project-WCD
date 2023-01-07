import SectionTitle from "../../../../component/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { Link } from "react-router-dom";

const LatestNews = () => {
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
               slidesPerView={'auto'}
               centeredSlides={true}
               spaceBetween={5}
               navigation={true}
               modules={[Pagination, Navigation]}
               className='mt-[50px] event-list'
            >
               {
                  events.map(event => {
                     return (
                        <SwiperSlide>
                           <div className="max-w-[318px] rounded-[20px] overflow-hidden my-[30px]">
                              <Link to="">
                                 <div className={`h-[220px] bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${event.image})` }}></div>
                                 <div className="bg-white py-[28px] px-[31px] text-left">
                                    <p className="font-primary text-[14px] mb-[10px] leading-[25px] text-p-primary">{event.title}</p>
                                    <p className="font-primary text-[24px] mb-[12px] leading-[25px]">{event.title}</p>
                                    <p className="font-secondary text-[16px]">{event.shortDesc}</p>
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
   )
}

export default LatestNews;