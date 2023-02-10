import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adapter, baseUrl } from '../../actions/global'
import CardEvent from '../../component/cardEvent'
import { iEvent } from '../../interface'

const Event: React.FC = () => {
    const [events, setEvents] = useState<iEvent[]>([])
    const navigate = useNavigate()

    const handleGetData = async () => {
        try {
            const res = await adapter.get('/events?populate=*');

            if (res.status != 200) {
                throw res
            }

            const events = res.data.data.map((it: any) => {
                const _date = new Date(it?.attributes?.publishedAt).toDateString();
                console.log(_date)
                return {
                    id: it.id,
                    title: it.attributes.title,
                    description: it.attributes.description,
                    date: _date,
                    imageSrc: baseUrl + it.attributes.image.data.attributes.url,
                    excerpt: it.attributes.excerpt,
                    slug: it.attributes.slug
                }
            })
            setEvents(events)
        } catch (error) {
            setEvents([])
        }
    }

    useEffect(() => {
        handleGetData()
        return () => { }
    }, [])

    return (
        <main className='flex-grow px-3 pb-16 bg-[url("/public/img/bg-page-donate.webp")] md:bg-[url("/public/img/bg-page-donate-desktop.webp")] bg-cover bg-no-repeat'>
            <div className='pt-16  max-w-5xl lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Our Events</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>

                <div className='grid grid-cols-2 gap-2 gap-y-6 mt-8 lg:grid-cols-3 lg:gap-5'>
                    {
                        events.map((it: iEvent) => {
                            return (
                                <CardEvent
                                    key={it.id}
                                    title={it.title}
                                    description={it.excerpt}
                                    imageSrc={it.imageSrc}
                                    date={it.date}
                                    onClick={() => navigate(`${it.id}/${it.slug}`)}
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