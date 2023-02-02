import React from 'react'

interface CardEventProps {
    title: string
    description: string
    imageSrc: string
    date: string
    onClick: () => any
}
const CardEvent: React.FC<CardEventProps> = ({ title, description, imageSrc, date, onClick }) => {
    return (
        <div onClick={onClick} className='rounded-xl bg-white shadow-lg hover:scale-105 ease-in-out duration-300 cursor-pointer'>
            <div className='mb-1'>
                <img className='h-[150px] object-cover rounded-t-xl w-full' src={imageSrc} alt={`image ${title}`} />
            </div>
            <div className='p-4'>
                <p className="font-primary text-p-primary text-xs mb-4">{date}</p>
                <p className="font-primary text-p-neutral text-sm mb-3">{title}</p>
                <p className="font-secondary text-p-neutral text-sm line-clamp-4">{description}</p>
            </div>
        </div>
    )
}

export default CardEvent