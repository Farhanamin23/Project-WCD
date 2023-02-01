import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardEvent from '../../component/cardEvent'
import { iProgramShowcase } from '../Donate/donate'
import { programShowcase } from '../Donate/dummy'

const Event: React.FC = () => {
    const [programs, setPrograms] = useState<iProgramShowcase[]>(programShowcase)
    const navigate = useNavigate()
    const events = [
        {
            id: 1,
            title: 'Olah bekas menjadi berkelas',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: '1 August 2022',
            imageSrc: 'https://krafstudio.com/wp-content/uploads/2022/07/pivva_to_helmet_samurai.jpg'
        },
        {
            id: 2,
            title: 'Olah bekas menjadi berkelas',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: '1 August 2022',
            imageSrc: 'https://krafstudio.com/wp-content/uploads/2022/07/pivva_to_helmet_samurai.jpg'
        },
        {
            id: 3,
            title: 'Olah bekas menjadi berkelas',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: '1 August 2022',
            imageSrc: 'https://krafstudio.com/wp-content/uploads/2022/07/pivva_to_helmet_samurai.jpg'
        },
        {
            id: 4,
            title: 'Olah bekas menjadi berkelas',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            date: '1 August 2022',
            imageSrc: 'https://krafstudio.com/wp-content/uploads/2022/07/pivva_to_helmet_samurai.jpg'
        },
    ]
    return (
        <main className='px-3 pb-16 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")]'>
            <div className='pt-16  max-w-5xl lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Our Events</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>

                <div className='grid grid-cols-2 gap-2 gap-y-6 mt-8 lg:grid-cols-3 lg:gap-5'>
                    {
                        events.map((it, idx) => {
                            return (
                                <CardEvent
                                    key={idx}
                                    title={it.title}
                                    description={it.description}
                                    imageSrc={it.imageSrc}
                                    date={it.date}
                                    onClick={()=>navigate(`${it.id}`)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Event 