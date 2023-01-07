import { Link } from "react-router-dom";
import { iconProgressHand, iconProgressTrash, iconProgressWorld } from "../../../../assets";
import ActionButton from "../../../../component/actionButton";

const homeBanner = () => {
   return (
      <section>
         <div className="w-[100%] min-h-[50vw] bg-[url(/public/img/bg-turtle.png)] bg-no-repeat">
            <div className="w-[100%] min-h-[50vw] bg-[url(/public/img/bg-banner.png)] bg-no-repeat">
               <div className="w-[38%]">
                  <div className="ml-[62px] flex flex-col justify-center min-h-[50vw]">
                     <h1 className="font-primary text-[40px] text-p-yellow">
                        World Cleanup Day 2022
                     </h1>

                     <p className="font-primary text-[16px] text-white">
                        Save the date! Next world cleanup day is on 16th of September
                     </p>
                     <Link to="/" className="self-start mt-[32px]">
                        <ActionButton title={"Join the movement"} />
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex flex-row  w-[100%] max-w-[1000px] justify-between bg-p-yellow px-[60px] py-[16px] rounded-[20px] absolute left-[50%] translate-x-[-50%] translate-y-[-50%]">
               <div className="flex flex-row">
                  <img src={iconProgressWorld} className="self-center pr-[12px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[64px] text-white">191</span>
                     <span className="font-primary text-[24px] text-white">Country</span>
                  </div>
               </div>

               <div className="flex flex-row">
                  <img src={iconProgressHand} className="self-center pr-[12px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[64px] text-white">60mln</span>
                     <span className="font-primary text-[24px] text-white">Volunteers</span>
                  </div>
               </div>

               <div className="flex flex-row">
                  <img src={iconProgressTrash} className="self-center pr-[12px]" />
                  <div className="flex flex-col">
                     <span className="font-primary text-[64px] text-white">303k</span>
                     <span className="font-primary text-[24px] text-white">of Waste</span>
                  </div>
               </div>
               
            </div>
         </div>
      </section>
   )
}

export default homeBanner;