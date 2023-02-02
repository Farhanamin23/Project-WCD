import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScreenContext } from "../../../../App";
import { bgFounderCl, bgFounderGs } from "../../../../assets";
import SectionTitle from "../../../../component/sectionTitle";
import { useQuery } from 'react-query';
import { adapter, baseUrl } from "../../../../actions/global";

export interface FounderData {
   id: number,
   name: string,
   figure: string,
   image: string
}

const Founder = () => {
   const screenSize = useContext(ScreenContext);

   const { isLoading: isLoadingFounders, data: founders } = useQuery<FounderData[], Error>(
      "meet-teams-data",
      async () => {
         const res = await adapter.get('/meet-the-teams?populate=*&sort=order&pagination[limit]=2');
         const _founders: FounderData[] = res.data.data.reduce((acc: any, item: any) => {
            const data : FounderData = {
               id: item.id,
               name: item.attributes.name,
               figure: item.attributes.figure,
               image: baseUrl + item.attributes.image.data.attributes.url
            }
            acc.push(data);
            return acc
         }, []);
         return _founders
      },
      {
         enabled: true,
         retry: true
      }
   );

   const founder = [
      {
         id:1,
         name: 'Andy Bahari',
         position: 'Country Leader',
         image: bgFounderCl
      },
      {
         id:2,
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
                     founders?.map((item, idx) => (
                        <div key={item.id} className="flex flex-col items-center mb-[46px] md:mb-0">
                           <img src={item.image} width={screenSize == 'sm' ? 172 : 336} height={screenSize == 'sm' ? 140 : 273} className='mb-[24px]' />
                           <p className="font-primary text-left text-[14px] md:text-[36px]">{item.name}<br /><span className="font-primary text-[12px] md:text-[24px]">{item.figure}</span></p>
                        </div>
                     ))
                  }
               </div>
               <Link to="/team" className="font-primary text-p-primary md:mt-[50px] block text-[10px] md:text-[18px]">View All Teams</Link>
            </div>

         </div>
      </section>
   );
};

export default Founder;