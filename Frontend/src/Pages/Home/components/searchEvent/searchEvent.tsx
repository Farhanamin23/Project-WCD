import {
   bgCollectTrash,
   bgCollectTrashTitle
} from "../../../../assets";

const SearchEvent = () => {
   return (
      <section>
         <div className="max-w-[1102px] py-[107px] mx-auto flex flex-row">
            <div className="w-[50%]">
               <div className="relative">
                  <div className="bg-[url(/public/img/bg-collect-trash-back.png)] bg-no-repeat bg-[left_0px_top_100px]">
                     <img src={bgCollectTrashTitle} className="pb-[272px]" />
                  </div>
                  <div className="absolute top-[150px] left-[120px]">
                     <img src={bgCollectTrash} />
                  </div>
               </div>
            </div>
            <div className="w-[50%] pt-[30px]">
               <h3 className="font-primary text-[32px] text-p-primary">
                  Would you like to take part in the cleanup?
               </h3>
               <p className="font-primary text-[18px] text-center">
                  In the overall list you will find all cleanups in your area.
               </p>
            </div>
         </div>
      </section>
   )
}

export default SearchEvent;