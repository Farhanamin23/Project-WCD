import SectionTitle from "../../../../component/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ScreenContext } from "../../../../App";
import { ScreenSize } from "../../../../utils/utils";
import { adapter, baseUrl } from "../../../../actions/global";
import { useQuery } from "react-query";
import ReactMarkdown from "react-markdown";

interface ArticleData {
   id: number,
   image: string,
   createdAt: string,
   title: string,
   desc: string,
   excerpt: string,
   slug: string
}

const LatestNews = () => {

   const screenSize = useContext(ScreenContext);

   const { isLoading: isLoadingEventData, data: articles } = useQuery<ArticleData[], Error>(
      "event-data",
      async () => {
         const res = await adapter.get('/articles?populate=*');
         const _articles: ArticleData[] = res.data.data.reduce((acc: any, item: any) => {
            acc.push({
               id: item.id,
               image: item.attributes.image.data.attributes.url,
               createdAt: item.attributes.createdAt,
               title: item.attributes.title,
               desc: item.attributes.description
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
      <section>
         <div className="max-w-[1102px] mx-auto w-[100%] py-[23px] lg:py-[54px]">
            <SectionTitle title="Latest News" />

            {
               articles?.length &&
               <Swiper
                  initialSlide={1}
                  loop={articles?.length < 3 ? false : true}
                  loopFillGroupWithBlank={false}
                  slidesPerView={screenSize == ScreenSize.sm || screenSize == ScreenSize.md ? 1 : 3}
                  centeredSlides={true}
                  spaceBetween={0}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className='mt-[32px] md:mt-[50px] event-list'
               >
                  {
                     articles?.map(article => {
                        return (
                           <SwiperSlide key={article.id}>
                              <div className="max-w-[201px] md:max-w-[318px] rounded-[20px] overflow-hidden my-[30px] lg:ease-in-out lg:duration-300 lg:hover:scale-105">
                                 <Link to={'/article/' + article.id + "/" + article.slug}>
                                    <div className={`h-[83px] md:h-[220px] bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${baseUrl}${article.image})` }}></div>
                                    <div className="bg-white py-[10px] md:py-[28px] px-[16px] md:px-[31px] text-left text-ellipsis">
                                       <p className="font-primary text-[10px] md:text-[14px] mb-[10px] leading-[17px] md:leading-[25px] text-p-primary">{article.createdAt}</p>
                                       <p className="font-primary text-[14px] md:text-[24px] mb-[12px] leading-[14px] md:leading-[25px] text-ellipsis max-h-[100px]">{article.title}</p>
                                       <p className="font-secondary text-[12px] md:text-[16px] line-clamp-3"><ReactMarkdown>{article.excerpt}</ReactMarkdown></p>
                                    </div>
                                 </Link>
                              </div>
                           </SwiperSlide>
                        )
                     })
                  }
               </Swiper>
            }
         </div>
      </section>
   );
};

export default LatestNews;
