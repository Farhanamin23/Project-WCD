import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adapter, baseUrl } from '../../actions/global'
import CardProgram from '../../component/CardProgram/CardProgram'
import { iArticle } from '../../interface'

const Article: React.FC = () => {
    const [article, setArticle] = useState<iArticle[]>()
    const navigate = useNavigate()

    const handleGetData = async () => {
        try {
            const res = await adapter.get('/articles?populate=*');

            if (res.status != 200) {
                throw res
            }

            const article: iArticle[] = res.data.data.map((it: any) => {
                return {
                    id: it.id,
                    title: it.attributes.title,
                    description: it.attributes.description,
                    imageSrc: baseUrl + it.attributes.image.data.attributes.url,
                    slug: it.attributes.slug,
                    excerpt: it.attributes.excerpt
                }
            })

            setArticle(article)
        } catch (error) {
        }
    }

    useEffect(() => {
        handleGetData()
        return () => { }
    }, [])

    return (
        <main className='flex-grow px-3 pb-10 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")] bg-cover'>
            <div className='pt-16  max-w-5xl lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16 pb-[38px] md:pb-[50px]'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Article</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>
                {
                    article?.map((it: iArticle) => {
                        return (
                            <CardProgram
                                title={it.title}
                                description={it.excerpt}
                                imageSrc={it.imageSrc}
                                link={"/article/"+it.id + "/" + it.slug}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Article 