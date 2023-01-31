import React from 'react'


const CardProgram: React.FC<{ imageSrc: string, title: string, description: string }> = ({
    imageSrc,
    title,
    description
}) => {
    return (
        <section className='mt-6'>
            <div className='flex flex-row mb-10' >
                <img className='object-cover w-32 h-32 mr-3 mt-1' src={imageSrc} alt={`image ${title}`} />

                <div className='block grow'>
                    <p className="font-primary text-sm ">{title}</p>
                    <p className="font-secondary text-sm line-clamp-6">{description}</p>
                    <a className='font-primary text-xs text-p-primary' href="./home">Read More</a>
                </div>
            </div>
        </section>
    )
}

export default CardProgram