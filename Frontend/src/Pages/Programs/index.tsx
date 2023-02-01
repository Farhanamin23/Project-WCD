import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardProgram from '../../component/CardProgram/CardProgram'
import { iProgramShowcase } from '../Donate/donate'
import { programShowcase } from '../Donate/dummy'

const Programs: React.FC = () => {
    const [programs, setPrograms] = useState<iProgramShowcase[]>(programShowcase)
    const navigate = useNavigate()
    return (
        <main className='px-3 pb-10 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")]'>
            <div className='pt-16  max-w-5xl lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Our Program</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>
                {
                    programs?.map(it => {
                        return (
                            <CardProgram
                                title={it.title}
                                description={it.description}
                                imageSrc={it.src}
                                onClick={()=>{navigate('gilnag')}}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Programs 