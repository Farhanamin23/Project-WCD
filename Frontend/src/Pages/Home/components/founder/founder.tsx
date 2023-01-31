import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScreenContext } from "../../../../App";
import { bgFounderCl, bgFounderGs } from "../../../../assets";
import SectionTitle from "../../../../component/sectionTitle";

const Founder = () => {
   const screenSize = useContext(ScreenContext);
   const founder = [
      {
         name: 'Andy Bahari',
         position: 'Country Leader',
         image: bgFounderCl
      },
      {
         name: 'Septiany Punti Dewi',
         position: 'General Secretary',
         image: bgFounderGs
      }
   ]
   return (
      <section>
         <div className={`
            bg-dot-pattern 
            bg-no-repeat 
            md:bg-left 
            md:bg-top-left 
            py-[28px]
            md:py-[72px]
            bg-[length:252px_252px]
            md:bg-[length:688px_688px]
            text-center
         `}>
            <div className={`
               bg-mascot 
               bg-no-repeat 
               bg-blend-overlay 
               bg-[length:150vw_auto]
               bg-center
               md:bg-[length:auto_auto]
               md:bg-[right_top_1rem]
            `}>
               <SectionTitle title={"Meet The Team"} />
               <div className='mt-[61px] flex flex-col md:flex-row items-center justify-around max-w-[1440px] w-[100%] mx-auto'>
                  {
                     founder.map((item, idx) => (
                        <div className="flex flex-col items-center mb-[46px] md:mb-0">
                           <img src={item.image} width={screenSize == 'sm' ? 172 : 336} height={screenSize == 'sm' ? 140 : 273} className='mb-[24px]' />
                           <p className="font-primary text-[14px] md:text-[36px]">{item.name}<br /><p className="font-primary text-[12px] md:text-[24px]">{item.position}</p></p>
                        </div>
                     ))
                  }
               </div>
               <Link to="/" className="font-primary text-p-primary md:mt-[50px] block text-[10px] md:text-[18px]">View All Teams</Link>
            </div>

         </div>
      </section>
   );
};

export default Founder;