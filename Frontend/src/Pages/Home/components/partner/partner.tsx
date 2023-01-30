import React from 'react';
import { iconPartnerBreakFree, iconPartnerUnesco, iconPartnerUNHabitat, iconPartnerUNV } from '../../../../assets';

const Partner: React.FC = () => {
  const partner = [
    {
      icon: iconPartnerUnesco,
      width: 151,
      height: 132
    },
    {
      icon: iconPartnerBreakFree,
      width: 488,
      height: 67
    },
    {
      icon: iconPartnerUNHabitat,
      width: 226,
      height: 65
    },
    {
      icon: iconPartnerUNV,
      width: 122,
      height: 110
    }
  ]
  
  return (
      <section>
        <div className='bg-p-blue pt-[54px] pb-[94px]'>
          <h3 className='text-center font-primary text-[48px] mb-[61px] text-white'>Global Partner</h3>
          <div className='flex flex-row items-center justify-between max-w-[1224px] overflow-x-scroll scrollbar-hide w-[100%] mx-auto'>
            {
              partner.map((item, idx) => (
                <img src={item.icon} width={item.width} height={item.height} className={idx != 0 ? 'ml-[80px]' : ''} />
              ))
            }
          </div>
        </div>
      </section>
  )
}

export default Partner