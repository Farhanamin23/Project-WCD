import React from 'react';

import { useQuery } from 'react-query';
import { adapter } from '../../actions/global';
import CardProgram from '../../component/CardProgram';
import SectionTitle from '../../component/sectionTitle';
import DonateForm from './components/DonateForm';

export interface iProgramShowcase {
   id: number,
   title: string;
   description: string;
   images: string[];
}

const Donate: React.FC = () => {

   const { isLoading: isLoadingPrograms, data: programs } = useQuery<iProgramShowcase[], Error>(
      "program-csr-data",
      async () => {
         const res = await adapter.get('/program-csr-lists?populate=*');
         const _articles: iProgramShowcase[] = res.data.data.reduce((acc: any, item: any) => {
            acc.push({
               id: item.id,
               images: item.attributes.images.data.reduce((accImages: any, item: any) => {
                  accImages.push(item.attributes.url);
                  return accImages
               }, []),
               title: item.attributes.title,
               description: item.attributes.description
            })
            return acc
         }, []);
         return _articles
      },
      {
         enabled: true,
         retry: true
      }
   );

   return (
      <main className='flex-grow px-[16px] pb-10 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")] bg-cover'>
         <div className='pt-14  max-w-5xl md:pt-[75px] mx-auto '>
            {
               programs?.map(it => {
                  return (
                     <CardProgram
                        key={it.id}
                        title={it.title}
                        description={it.description}
                        imageSrc={it.images[0]}
                        linkReadMore={`/program-csr/${it.id}`}
                     />
                  )
               })
            }
            {
               !!programs && (
                  <>
                     <SectionTitle title="Donate" />
                     <DonateForm eventList={programs || []} />
                  </>
               )
            }


         </div>
      </main>
   )
}

export default Donate