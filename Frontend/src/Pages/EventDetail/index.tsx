import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardProgram from '../../component/CardProgram/CardProgram'
import TextInput from '../../component/TextInput/index'
import { iProgramShowcase } from '../Donate/donate'
import { programShowcase } from '../Donate/dummy'

const EventDetail: React.FC<any> = (props) => {
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
        <main className='px-3 pb-24 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")]'>
            <div className='pt-16  max-w-5xl lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Our Events</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>

                <div className='grid grid-cols-1 mt-8 lg:grid-cols-2 lg:gap-16'>
                    <section>
                        <div>
                            <img className='w-full h-[150px] rounded-sm max-w-[570px] max-h-[260px] lg:h-[260px] m-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt={`image `} />
                        </div>
                        <div className='mt-8'>
                            <p className="font-primary text-sm text-p-neutral mb-5 lg:text-3xl">{'Lorem Ipsum DOlor'}</p>
                            <p className="font-secondary text-xs text-p-neutral lg:text-xl">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat.'}</p>
                        </div>
                    </section>

                    <div>
                        <section className='bg-[url("/public/img/bg-rounds-color.png")] h-[400px] lg:pt-11 mt-12 bg-contain bg-center bg-no-repeat'>
                            <form className='p-4 bg-p-yellow/70 backdrop-blur-sm rounded-lg'>
                                <TextInput
                                    label='Name'
                                    placeholder='Your name'
                                    type='text'
                                />

                                <TextInput
                                    label='Email'
                                    placeholder='johm@example.com'
                                    type='email'
                                />

                                <TextInput
                                    label='Mobile Phone'
                                    placeholder='8966353240008'
                                    type='telephone'
                                />
                            </form>

                            <div className='flex justify-center mt-4'>
                                <input className='bg-p-yellow py-2 px-6 rounded-lg font-primary text-white cursor-pointer hover:bg-p-yellow/90' type={'submit'} name='Join Event' />
                            </div>
                        </section>

                        <section>
                            <p className="font-primary text-sm text-p-neutral mb-5 lg:text-3xl">{'Detail Event:'}</p>
                            <p className="font-secondary text-xs text-p-neutral lg:text-xl">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum a turpis at iaculis. In quis orci tincidunt leo tempor blandit. Nunc tempus ligula eu iaculis pellentesque. Donec rhoncus metus et lobortis iaculis. Cras blandit ultrices feugiat.'}</p>
                        </section>
                    </div>

                </div>
            </div>
        </main >
    )
}

export default EventDetail 