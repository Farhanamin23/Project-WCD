import SectionTitle from "../../../../component/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import { useQuery } from 'react-query';
import { adapter, baseUrl } from "../../../../actions/global";

const Gallery = () => {

   const { isLoading: isLoadingVideos, data: videos } = useQuery<string[], Error>(
      "videos-data",
      async () => {
         const res = await adapter.get('/videos');
         const _videos: string[] = res.data.data.reduce((acc: any, item: any) => {
            acc.push(item.attributes.vidio);
            return acc
         }, []);
         return _videos
      },
      {
         enabled: true,
         retry: true
      }
   );

   const { isLoading: isLoadingGalleries, data: galleries } = useQuery<string[], Error>(
      "galleries-data",
      async () => {
         const res = await adapter.get('/galleries?populate=*');
         const _galleries: string[] = res.data.data.reduce((acc: any, item: any) => {
            acc.push(item.attributes.image.data[0].attributes.url);
            return acc
         }, []);
         return _galleries
      },
      {
         enabled: true,
         retry: true
      }
   );

   return (
      <section>
         <div className="py-[54px]">
            <SectionTitle title='Gallery' />
            <div className="max-w-[1102px] mx-auto gallery-section video-list">
               {
                  videos?.length && (
                     <Swiper
                        initialSlide={videos?.length < 3 ? 0 : 1}
                        loop={videos?.length < 3 ? false : true}
                        loopFillGroupWithBlank={false}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className='mt-[50px]'
                     >
                        {
                           videos.map((item, idx) => (
                              <SwiperSlide key={idx}>
                                 <div className="w-[25vw] md:w-[225px] p-[5px] md:p-[10px] bg-p-pink rounded-[5px]">
                                    <div className="video">
                                       <iframe width={'100%'} height={'auto'} src={item} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                    </div>
                                    <p className="font-secondary text-[6px] md:text-[18px] mt-[12px]">World fdsfajfiaj</p>
                                 </div>
                              </SwiperSlide>
                           ))
                        }

                        {/* <SwiperSlide>
                     <div className="w-[25vw] md:w-[225px] p-[5px] md:p-[10px] bg-p-pink rounded-[5px]">
                        <div className="video">
                           <iframe width={'100%'} height={'auto'} src="https://www.youtube.com/embed/f_jUU3Fd3HI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                        <p className="font-secondary text-[6px] md:text-[18px] mt-[12px]">World fdsfajfiaj</p>
                     </div>
                  </SwiperSlide> */}
                     </Swiper>
                  )
               }

            </div>

            <div className="max-w-[1102px] mx-auto gallery-section">
               {
                  galleries?.length && (
                     <Swiper
                        initialSlide={1}
                        loop={true}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className='md:mt-[50px]'
                     >
                        {
                           galleries.map((item, idx) => (
                              <SwiperSlide>
                                 <div className="my-[50px]" >
                                    <div className={`
                                       w-[28vw] 
                                       h-[19vw] 
                                       md:w-[273px] 
                                       md:h-[189px] 
                                       bg-no-repeat 
                                       bg-cover 
                                       rounded-[2px]  
                                       md:rounded-[7px]
                                    `}
                                    style={{ backgroundImage: `url(${baseUrl + item})` }}
                                    >

                                    </div>
                                 </div>
                              </SwiperSlide>
                           ))
                        }

                     </Swiper>
                  )
               }

            </div>

         </div>
      </section>
   );
};

export default Gallery;