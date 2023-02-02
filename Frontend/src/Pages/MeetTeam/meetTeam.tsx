import { useContext } from 'react';
import { useQuery } from 'react-query';
import { adapter, baseUrl } from '../../actions/global';
import { ScreenContext } from '../../App';
import { FounderData } from '../Home/components/founder/founder';
import SectionTitle from '../../component/sectionTitle';

export default function MeetTeam() {
   const screenSize = useContext(ScreenContext);

   const { isLoading: isLoadingFounders, data: founders } = useQuery<FounderData[], Error>(
      "meet-teams-data-all",
      async () => {
         const res = await adapter.get('/meet-the-teams?populate=*&sort=order');
         const _founders: FounderData[] = res.data.data.reduce((acc: any, item: any) => {
            const data: FounderData = {
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

   return (
      <main className='flex-grow px-3 pb-10 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")] bg-cover bg-center'>
         <div className="pt-[120px] mx-auto flex flex-col">
            <SectionTitle title={'Meet the Team'} />
            <div className="grid grid-cols-2 gap-x-8 md:gap-y-[85px] gap-y-[32px] md:grid-cols-3 pt-[32px] md:pt-[90px] max-w-[1238px] w-[100%] lg:pt-[75px] mx-auto">
               {
                  founders?.map((item, idx) => (
                     <div key={item.id} className={`flex flex-col mx-auto justify-start items-center min-w-[50%] md:min-w-[30%] md:mb-0 max-w-[88px] md:max-w-[330px] w-[100%]`}>
                        <img src={item.image} width={screenSize == 'sm' ? 88 : 330} height={screenSize == 'sm' ? 140 : 273} className='mb-[24px]' />
                        <p className={`font-primary text-left text-[14px] md:text-[36px]`}>{item.name}<br /><span className="font-primary text-[12px] md:text-[24px]">{item.figure}</span></p>
                     </div>
                  ))
               }
            </div>
         </div>

      </main>
   );
};