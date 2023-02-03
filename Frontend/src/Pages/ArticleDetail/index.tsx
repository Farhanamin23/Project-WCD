import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { adapter, baseUrl } from '../../actions/global'
import { iArticle } from '../../interface'

const ArticleDetail: React.FC<any> = (props) => {
    const [article, setArticle] = useState<iArticle>()
    const [isErorr, setIsError] = useState<boolean>(false)
    let { id } = useParams()

    const getDetailHandle = async () => {
        try {
            const res = await adapter.get('/articles/' + id + '?populate=*');

            if (res.status != 200) {
                throw res
            }

            const article: iArticle = {
                id: res.data.data.id,
                title: res.data.data.attributes.title,
                description: res.data.data.attributes.description,
                imageSrc: baseUrl + res.data.data.attributes.image.data.attributes.url,
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
                article && (
                    <section>
                        <div className='bg-[url("/public/img/bg-page-gradient.png")] md:bg-[url("/public/img/bg-page-gradient-desktop.png")] pt-28 text-center md:mx-auto bg-cover'>
                            <h1 className="text-center font-primary text-[20px] md:text-[48px] text-p-primary max-w-5xl mx-auto">{article?.title}</h1>
                            <img
                                className="mx-auto mt-6 mb-9 sm:w-[809px] sm:h-[455px] sm:my-[79px]"
                                src={article?.imageSrc}
                                alt={`${article?.title}`}
                            />
                            <div className="pr-7 pl-7 mx-auto pb-8 max-w-[1117px]">
                                <p className="font-secondary text-left text-xs text-p-neutral lg:text-xl">{article?.description}</p>
                            </div>
                        </div>
                    </section>
                )
            }
            
            {
                isErorr && (
                    <div className='flex flex-row flex-grow justify-center'><p className='text-center mt-40'>Article not found</p></div>
                )
            }
        </main>
    )
}

export default ArticleDetail 