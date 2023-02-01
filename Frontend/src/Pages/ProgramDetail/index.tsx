import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardProgram from '../../component/CardProgram/CardProgram'
import { iProgramShowcase } from '../Donate/donate'
import { programShowcase } from '../Donate/dummy'

const ProgramDetail: React.FC<any> = (props) => {
    const [programs, setPrograms] = useState<iProgramShowcase[]>(programShowcase)
    let { identifier } = useParams()
    const programImages = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    ]
    return (
        <main className='px-3 pb-10 lg:pb-24 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")]'>
            <div className='pt-16  max-w-5xl lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Our Program</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>

                <section className='grid grid-cols-3 gap-2 mt-6 lg:gap-24 lg:mt-24'>
                    <div className='mt-2'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt={`image `} />
                    </div>
                    <div className='col-span-2'>
                        <p className="font-primary text-sm text-p-neutral lg:text-3xl">{'Lorem Ipsum DOlor'}</p>
                        <p className="font-secondary text-xs text-p-neutral lg:text-xl">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat.'}</p>
                    </div>
                </section>

                <section className='mt-8 lg:mt-24'>
                    <div className='flex flex-row items-center justify-between md:max-w-[1344px] overflow-visible scrollbar-hide w-[90%] mx-auto'>
                        {
                            programImages?.length &&
                            <Swiper
                                slidesPerView={3}
                                loop={true}
                                navigation={true}
                                modules={[Navigation]}
                                className='md:mt-[50px]'
                            >
                                {
                                    programImages?.map((item, idx) => (
                                        <SwiperSlide className='mx-1 lg:mx-6 ' key={idx}>
                                            <img src={item} className="object-cover rounded-lg ease-in-out" />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        }
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ProgramDetail 