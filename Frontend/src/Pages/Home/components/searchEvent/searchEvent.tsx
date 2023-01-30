import {
   bgIndonesiaBebasSampah
} from "../../../../assets";

const SearchEvent = () => {
   return (
      <section>
         <div className="max-w-[1102px] py-[41px] lg:pt-[107px] mx-auto flex flex-col-reverse lg:flex-row">
            <div className="w-[100%] pt-[30px]">
               <div className="lg:w-[50%] lg:ml-auto">
                  <h3 className="font-primary text-[16px] md:text-[32px] text-p-primary text-center">
                     Would you like to take part in the cleanup?
                  </h3>
                  <p className="font-primary text-[12px] md:text-[18px] text-center">
                     In the overall list you will find all cleanups in your area.
                  </p>
               </div>
               
               <div className="w-[100%] flex flex-row">
                  <div className="w-[50%]  max-w-[625px] overflow-visible relative">
                     <img src={bgIndonesiaBebasSampah} className='w-[100%] relative lg:top-[-90px] lg:inherit'/>
                  </div>
            
                  <div className="flex flex-1">

                  </div>
                  
               </div>
            </div>
         </div>
      </section>
   )
}

export default SearchEvent;