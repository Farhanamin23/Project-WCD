import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from "react-markdown";


const CardProgram: React.FC<{ imageSrc: string, title: string, description: string, link: string  }> = ({
    imageSrc,
    title,
    description,
    link
}) => {
    return (
        <div className='mt-6 lg:ease-in-out lg:duration-300 lg:hover:scale-105'>
            <div className='flex flex-row mb-10' >
                <img className='object-cover w-32 h-32 mr-3 mt-1 lg:w-48 lg:h-48' src={imageSrc} alt={`image ${title}`} />

                <div className='block grow'>
                    <p className="font-primary text-sm lg:text-2xl ">{title}</p>
                    <p className="font-secondary text-sm line-clamp-6 lg:text-lg"><ReactMarkdown>{description}</ReactMarkdown></p>
                    <Link className='font-primary text-xs text-p-primary lg:text-sm' to={link}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default CardProgram