import React from 'react';

import { useQuery } from 'react-query';
import { adapter } from '../../actions/global';
import CardProgram from '../../component/CardProgram';
import SectionTitle from '../../component/sectionTitle';
import DonateForm from './components/DonateForm';

export interface iProgramShowcase {
   excerpt: string;
   id: number,
   title: string;
   description: string;
   images: string[];
   slug: string
}

const Donate: React.FC = () => {

   const { isLoading: isLoadingPrograms, data: programs } = useQuery<iProgramShowcase[], Error>(
      "program-csr-data",
      async () => {
         const res = await adapter.get('/program-csr-lists?populate=*');
         const _programs: iProgramShowcase[] = res.data.data.reduce((acc: any, item: any) => {
            acc.push({
               id: item.id,
               images: item.attributes.images.data.reduce((accImages: any, item: any) => {
                  accImages.push(item.attributes.url);
                  return accImages
               }, []),
               title: item.attributes.title,
               description: item.attributes.description,
               excerpt: item.attributes.excerpt,
               slug: item.attributes.slug
            })
            return acc
         }, []);
         return _programs
      },
      {
         enabled: true,
         retry: true
      }
   );

   return (
      <main className='flex-grow px-[16px] pb-10 bg-[url("/public/img/bg-page-donate.webp")] md:bg-[url("/public/img/bg-page-donate-desktop.webp")] bg-cover'>
         <div className='pt-[80px] md:pt-[150px] max-w-5xl mx-auto'>
            {
               programs?.map(it => {
                  return (
                     <CardProgram
                        key={it.id}
                        title={it.title}
                        description={it.excerpt}
                        imageSrc={it.images[0]}
                        linkReadMore={`/program-csr/${it.id}/${it.slug}`}
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