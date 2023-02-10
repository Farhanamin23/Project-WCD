import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { adapter, baseUrl } from '../../actions/global'
import DonateForm from '../Donate/components/DonateForm'
import { iProgramShowcase } from '../Donate/donate'
import SectionTitle from '../../component/sectionTitle'
import ReactMarkdown from "react-markdown";

const ProgramCsrDetail: React.FC<any> = (props) => {
   const [programCsr, setArticle] = useState<iProgramShowcase>()
   const [isErorr, setIsError] = useState<boolean>(false)
   let { id } = useParams()

   const getDetailHandle = async () => {
      try {
         const res = await adapter.get('/program-csr-lists/' + id + '?populate=*');

         if (res.status != 200) {
            throw res
         }

         const article: iProgramShowcase = {
            id: res.data.data.id,
            title: res.data.data.attributes.title,
            description: res.data.data.attributes.description,
            images: res.data.data.attributes.images.data.reduce((accImages: any, item: any) => {
               accImages.push(baseUrl + item.attributes.url)
               return accImages
            }, []),
            excerpt: res.data.data.attributes.excerpt,
            slug: res.data.data.attributes.slug
         }
         setIsError(false)
         setArticle(article)
      } catch (error) {
         setIsError(true)
      }
   }

   useEffect(() => {
      getDetailHandle()
      return () => { }
   }, [])
   return (
      <main className="flex-grow">
         {
            !!programCsr && (
               <section>
                  <div className='bg-[url("/public/img/bg-page-gradient.webp")] md:bg-[url("/public/img/bg-page-gradient-desktop.webp")] pt-28 text-center md:mx-auto bg-cover '>
                     <h1 className="text-center font-primary text-[20px] md:text-[48px] text-p-primary max-w-5xl mx-auto">{programCsr?.title}</h1>
                     <img
                        className="mx-auto mt-6 mb-9 sm:w-[809px] sm:h-[455px] sm:my-[79px]"
                        src={programCsr?.images[0]}
                        alt={`${programCsr?.title}`}
                     />
                     <div className="pr-7 pl-7 mx-auto pb-8 max-w-[1117px]">
                        <p className="font-secondary text-left text-xs text-p-neutral lg:text-xl"><ReactMarkdown>{programCsr?.excerpt}</ReactMarkdown></p>
                     </div>

                     <div className='py-[20px] md:py-[80px] w-[100%] max-w-5xl mx-auto px-[24px]'>
                        <SectionTitle title="Donate" />
                        <DonateForm
                           eventList={[programCsr]}
                        />
                     </div>

                  </div>
               </section>
            )
         }
         {
            isErorr && (
               <div className='flex flex-row flex-grow justify-center'><p className='text-center mt-40'>Not found</p></div>
            )
         }
      </main>
   )
}

export default ProgramCsrDetail 