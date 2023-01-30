import SectionTitle from "../../../../component/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

const Gallery = () => {
    return (
        <section>
            <div className="py-[54px]">
                <SectionTitle title='Gallery' />
                <div className="max-w-[1102px] mx-auto gallery-section video-list">
                    <Swiper
                        initialSlide={1}
                        loop={true}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className='mt-[50px]'
                    >
                        <SwiperSlide>
                            <div className="w-[25vw] md:w-[225px] p-[5px] md:p-[10px] bg-p-pink rounded-[5px]">
                                <div className="video">
                                    <iframe width={'100%'} height={'auto'} src="https://www.youtube.com/embed/f_jUU3Fd3HI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <p className="font-secondary text-[6px] md:text-[18px] mt-[12px]">World fdsfajfiaj</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-[25vw] md:w-[225px] p-[5px] md:p-[10px] bg-p-pink rounded-[5px]">
                                <div className="video">
                                    <iframe width={'100%'} height={'auto'} src="https://www.youtube.com/embed/f_jUU3Fd3HI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                                <p className="font-secondary text-[6px] md:text-[18px] mt-[12px]">World fdsfajfiaj</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="max-w-[1102px] mx-auto gallery-section">
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

                        <SwiperSlide>
                        <div className="my-[50px]" >
                                <div className="w-[28vw] h-[19vw] md:w-[273px] md:h-[189px] bg-[url('https://picsum.photos/300/100')] bg-no-repeat bg-cover rounded-[2px]  md:rounded-[7px]">

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=" my-[50px]" >
                                <div className="w-[28vw] h-[19vw] md:w-[273px] md:h-[189px] bg-[url('https://picsum.photos/300/200')] bg-no-repeat bg-cover rounded-[2px]  md:rounded-[7px]">

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className=" my-[50px]" >
                                <div className="w-[28vw] h-[19vw] md:w-[273px] md:h-[189px] bg-[url('https://picsum.photos/300/900')] bg-no-repeat bg-cover rounded-[2px] md:rounded-[7px]">

                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>

            </div>
        </section>

    )
}

export default Gallery;