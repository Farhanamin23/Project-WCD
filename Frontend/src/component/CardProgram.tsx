import React from 'react';
import { Link } from 'react-router-dom';

import { baseUrl } from '../actions/global';


const CardProgram: React.FC<{ imageSrc: string, title: string, description: string, linkReadMore: string }> = ({
    imageSrc,
    title,
    description,
    linkReadMore = "/"
}) => {
    return (
        <section className='mt-6'>
            <div className='flex flex-row mb-10' >
                <div className='mt-1 min-w-[120px] h-[120px] md:min-w-[340px] md:min-h-[340px] bg-no-repeat bg-cover bg-center mr-[16px] md:mr-[100px]' style={{ backgroundImage: `url(${baseUrl + imageSrc})` }}>

                </div>
                {/* <img className='object-cover w-32 h-32 mr-3 mt-1 lg:w-48 lg:h-48' src={imageSrc[0]} alt={`image ${title}`} /> */}

                <div className='flex flex-col self-center'>
                    <p className="font-primary text-sm md:text-2xl mb-[8px] md:mb-[24px]">{title}</p>
                    <p className="font-secondary text-sm line-clamp-6 md:text-lg mb-[8px] md:mb-[18px]">{description}</p>
                    <Link className='font-primary text-xs text-p-primary md:text-sm' to={linkReadMore}>Read More</Link>
                </div>
            </div>
        </section>
    )
}

export default CardProgram