import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { adapter, baseUrl } from '../../actions/global'
import { iProgram } from '../../interface'
import ReactMarkdown from "react-markdown";

const ProgramDetail: React.FC<any> = (props) => {
    const [program, setProgram] = useState<iProgram>()
    let { identifier } = useParams()
    
    const handleGetDetail = async () => {
        try {
            const res = await adapter.get('/programs/' + identifier + '?populate=*');

            if (res.status != 200) {
                throw res
            }

            const program: iProgram = {
                id: res.data.data.id,
                title: res.data.data.attributes.title,
                description: res.data.data.attributes.description,
                imageSrc: baseUrl + res.data.data.attributes.image.data[0].attributes.url,
                programImages: res.data.data.attributes.image.data?.slice(1).reduce((acc: string[], imageData: any) => {
                    acc.push(baseUrl + imageData.attributes.url)
                    return acc
                }, []),
                excerpt: res.data.data.attributes.excerpt,
                slug: res.data.data.attributes.slug
            }

            setProgram(program)
        } catch (error) {
        }
    }

    useEffect(() => {
        handleGetDetail()
        return () => { }
    }, [])
    return (
        <main className='flex-grow px-3 pb-10 lg:pb-24 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")] bg-cover'>
            <div className='pt-16  max-w-5xl lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Our Program</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>

                <section className='grid grid-cols-3 gap-2 mt-6 lg:gap-24 lg:mt-24'>
                    <div className='mt-2'>
                        <img src={program?.imageSrc} alt={`image ${program?.title}`} />
                    </div>
                    <div className='col-span-2'>
                        <p className="font-primary text-sm text-p-neutral lg:text-3xl">{program?.title}</p>
                        <p className="font-secondary text-xs text-p-neutral lg:text-xl"><ReactMarkdown>{program?.description || ''}</ReactMarkdown></p>
                    </div>
                </section>

                <section className='mt-8 lg:mt-24'>
                    <div className='flex flex-row items-center justify-between md:max-w-[1344px] overflow-visible scrollbar-hide w-[100%] mx-auto'>
                        {
                            ((program?.programImages?.length || 0) > 0) &&
                            <Swiper
                                slidesPerView={3}
                                loop={true}
                                navigation={true}
                                modules={[Navigation]}
                                className='md:mt-[50px]'
                            >
                                {
                                    program?.programImages?.map((item, idx) => (
                                        <SwiperSlide className='mx-1' key={idx}>
                                            <div className='px-[10px] md:px-[50px]'>
                                                <img src={item} className="object-cover rounded-lg ease-in-out" />
                                            </div>

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

export default ProgramDetail;