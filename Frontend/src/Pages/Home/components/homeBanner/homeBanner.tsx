import { Link } from "react-router-dom";
import { iconProgressHand, iconProgressTrash, iconProgressWorld } from "../../../../assets";
import ActionButton from "../../../../component/actionButton";

const homeBanner = () => {
   return (
      <section>
         <div className="min-h-[279px] w-[100%] md:max-h-[80vh] bg-[url(/public/img/bg-turtle.png)] bg-no-repeat bg-cover">
            <div className="min-h-[279px] w-[100%] md:max-h-[80vh] bg-[url(/public/img/bg-banner.png)] bg-no-repeat bg-cover flex items-center">
               <div className="w-[38%]">
                  <div className="ml-[18px] md:ml-[62px] flex flex-col justify-center min-h-[50vw]">
                     <h1 className="text-[16px] font-primary md:text-[40px] text-p-yellow">
                        World Cleanup Day 2022
                     </h1>

                     <p className="text-[14px] font-primary md:text-[16px] text-white">
                        Save the date! Next world cleanup day is on 16th of September
                     </p>

                     <Link to="/" className="hidden md:block self-start mt-[32px]">
                        <ActionButton title={"Join the movement"} />
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex flex-row  w-[90%] max-w-[1000px] justify-around lg:justify-between bg-p-yellow px-[13px] py-[8px] rounded-[5px] lg:px-[60px] lg:py-[16px] lg:rounded-[20px] absolute left-[50%] translate-x-[-50%] translate-y-[-50%]">
               <div className="flex flex-row">
                  <img src={iconProgressWorld} className="self-center mr-[12px] w-[25px] lg:w-[80px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[16px] lg:text-[64px] text-white">191</span>
                     <span className="font-primary text-[12px] lg:text-[24px] text-white">Country</span>
                  </div>
               </div>

               <div className="flex flex-row">
                  <img src={iconProgressHand} className="self-center mr-[12px] w-[30px] lg:w-[94px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[16px] lg:text-[64px] text-white">60mln</span>
                     <span className="font-primary text-[12px] lg:text-[24px] text-white">Volunteers</span>
                  </div>
               </div>

               <div className="flex flex-row">
                  <img src={iconProgressTrash} className="self-center mr-[12px] w-[30px] lg:w-[94px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[16px] lg:text-[64px] text-white">303k</span>
                     <span className="font-primary text-[12px] lg:text-[24px] text-white">of Waste</span>
                  </div>
               </div>

            </div>
         </div>
      </section>
   )
}

export default homeBanner;