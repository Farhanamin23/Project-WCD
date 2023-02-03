import { useEffect } from "react";
import { Link } from "react-router-dom";
import { adapter, baseUrl } from "../../../../actions/global";
import { iconProgressHand, iconProgressTrash, iconProgressWorld } from "../../../../assets";
import ActionButton from "../../../../component/actionButton";
import { useQuery, useMutation } from "react-query";
import CountUp from 'react-countup';

interface BannerData {
   title: string,
   image: string
}

interface ProgressData {
   countryCount: number | 0,
   volunteerCount: number | 0,
   wasteCounter: number | 0,
}

const HomeBanner = () => {

   const { isLoading: isLoadingBannerData, data: bannerData } = useQuery<BannerData, Error>(
      "banner-data",
      async () => {
         const res = await adapter.get('/banners?populate=*');
         const bannerData: BannerData = {
            title: res.data.data[0].attributes.title,
            image: res.data.data[0].attributes.bannerhome.data.attributes.formats.large.url
         }
         return bannerData
      },
      {
         enabled: true,
         retry: true
      }
   );

   const { isLoading: isLoadingProgressData, data: progressData } = useQuery<ProgressData, Error>(
      "progress-data",
      async () => {
         const res = await adapter.get('/progresses');
         const progressData: ProgressData = {
            countryCount: parseInt(res.data.data[0].attributes.countryCount) ,
            volunteerCount: parseInt(res.data.data[0].attributes.volunteerCount),
            wasteCounter: parseInt(res.data.data[0].attributes.wasteCounter),
         }
         return progressData
      },
      {
         enabled: true,
         retry: true
      }
   );

   const bannerImage = bannerData?.image ? baseUrl + bannerData.image : '';
   
   return (
      <section>
         <div className={`min-h-[279px] w-[100%] md:max-h-[80vh] 
         bg-no-repeat 
         bg-cover
         `} style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="min-h-[279px] w-[100%] md:max-h-[80vh] bg-[url(/public/img/bg-banner.png)] bg-no-repeat bg-cover flex items-center">
               <div className="w-[38%]">
                  <div className="ml-[18px] md:ml-[62px] flex flex-col justify-center min-h-[50vw]">
                     <h1 className="text-[16px] font-primary md:text-[40px] text-p-yellow">
                        {/* World Cleanup Day 2022 */}
                        {bannerData?.title}
                     </h1>

                     <p className="text-[14px] font-primary md:text-[16px] text-white">
                        Save the date! Next world cleanup day is on 16th of September
                     </p>

                     <Link to="/event" className="hidden md:block self-start mt-[32px]">
                        <ActionButton title={"Join the movement"} />
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex flex-row  w-[90%] max-w-[1000px] justify-around lg:justify-between bg-p-yellow px-[13px] py-[8px] rounded-[5px] lg:px-[60px] lg:py-[16px] lg:rounded-[20px] absolute left-[50%] translate-x-[-50%] translate-y-[-50%]">
               <div className="flex flex-row">
                  <img src={iconProgressWorld} className="self-center mr-[12px] w-[25px] lg:w-[80px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[16px] lg:text-[64px] text-white"><CountUp end={progressData?.countryCount || 0} enableScrollSpy /></span>
                     <span className="font-primary text-[12px] lg:text-[24px] text-white">Country</span>
                  </div>
               </div>

               <div className="flex flex-row">
                  <img src={iconProgressHand} className="self-center mr-[12px] w-[30px] lg:w-[94px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[16px] lg:text-[64px] text-white"><CountUp end={progressData?.volunteerCount || 0} enableScrollSpy />mln</span>
                     <span className="font-primary text-[12px] lg:text-[24px] text-white">Volunteers</span>
                  </div>
               </div>

               <div className="flex flex-row">
                  <img src={iconProgressTrash} className="self-center mr-[12px] w-[30px] lg:w-[94px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[16px] lg:text-[64px] text-white"><CountUp end={progressData?.wasteCounter || 0} enableScrollSpy />k</span>
                     <span className="font-primary text-[12px] lg:text-[24px] text-white">of Waste</span>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default HomeBanner;