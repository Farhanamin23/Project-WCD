import ActionButton from "../../../../component/actionButton";
import SectionTitle from "../../../../component/sectionTitle";

const NearestEvent = () => {
   return (
      <section>
         <div className="bg-p-primary py-[56px]">
            <div className="max-w-[1102px] mx-auto">
               <SectionTitle title={'Nearest Event'} color={'text-white'} />
               <div className="flex flex-row justify-evenly">
                  <div className="
                     max-w-[50%]
                     w-[554px]
                     bg-[url(/public/img/bg-abstract-kuning.png)]
                     bg-[right_200px_top_-50px]
                     bg-no-repeat
                  ">
                     <div className="
                        flex
                        flex-row
                        justify-end
                        bg-[url(/public/img/bg-abstract-biru.png)]
                        bg-[right_90px_top_-32px]
                        bg-no-repeat
                     ">
                        <div className="mt-[76px] py-[28px] px-[31px] w-[359px] bg-p-yellow/70 backdrop-blur-lg border-p-yellow-3 border-2 rounded-[12px]">
                           <p className="font-primary text-[24px] text-white text-center mb-[4px]">WORLD CLEAN UP DAY 2022</p>
                           <p className="font-primary text-[20px] text-white text-center mb-[32px]">26 Nov 2022</p>
                           <p className="font-secondary text-[16px] text-white">World Cleanup Day unites millions of olunteers, governments and organisations in 191 counries to tackle the global waste problem and build up th enew sustainable world.</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-[81px] flex flex-col w-[328px]">
                     <div className="flex flex-col font-tertiary mb-[24px]">
                        <label className="text-[14px] text-white mb-[6px]">Name</label>
                        <input name="name" placeholder="John Doe" className="rounded-[12px] w-[100%] py-[10px] px-[14px] text-p-gray border-p-light-gray border-1 outline-none" />
                     </div>
                     <div className="flex flex-col font-tertiary mb-[24px]">
                        <label className="text-[14px] text-white mb-[6px]">Email</label>
                        <input type='email' name="email" placeholder="johndoe@email.com" className="rounded-[12px] w-[100%] py-[10px] px-[14px] text-p-gray border-p-light-gray border-1 outline-none" />
                     </div>
                     <div className="flex flex-col font-tertiary mb-[24px]">
                        <label className="text-[14px] text-white mb-[6px]">Mobile Phone</label>
                        <div>
                           <select className="absolute w-[87px] rounded-[12px] py-[10px] px-[14px] text-p-gray border-p-light-gray border-1 outline-none">
                              <option>+62</option>
                           </select>
                           <input type="tel" name="phone" placeholder="123456789" className="rounded-[12px] w-[100%] py-[10px] pl-[97px] pr-[14px] text-p-gray border-p-light-gray border-1 outline-none" />
                        </div>
                     </div>
                     <button onClick={() => { console.log("join event!") }} className="self-center mt-[16px] font-primary">
                        <ActionButton title='Join the event' />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NearestEvent