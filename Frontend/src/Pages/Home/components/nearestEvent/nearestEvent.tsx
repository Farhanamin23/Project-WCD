import ActionButton from "../../../../component/actionButton";
import PhoneInput from "../../../../component/phoneInput";
import SectionTitle from "../../../../component/sectionTitle";
import TextInput from "../../../../component/textInput";

const NearestEvent = () => {
   return (
      <section>
         <div className="bg-p-primary py-[56px]">
            <div className="max-w-[1102px] mx-auto">
               <SectionTitle title={'Nearest Event'} color={'text-white'} />
               <div className="px-[24px]">
                  <div className="
                     bg-[url(/public/img/bg-abstract-kuning.png)]
                     bg-[left_0px_top_-50px]
                     md:bg-[left_0px_top_-50px]
                     bg-no-repeat
                     self-end
                     mt-[29px]
                  ">
                     <div className="
                        flex flex-col md:flex-row 
                        bg-[url(/public/img/bg-abstract-biru.png)]
                        bg-[left_-60px_top_-32px]
                        md:bg-[left_-60px_top_-32px]
                        bg-no-repeat
                        overflow-visible
                     ">
                        <div className="flex flex-row w-[100%] md:max-w-[50%] justify-end mb-[29px]">
                           <div className="mt-[76px] py-[28px] px-[31px] w-[100%] max-w-[350px] md:w-[359px] md:self-start bg-p-yellow/70 backdrop-blur-lg border-p-yellow-3 border-2 rounded-[12px]">
                              <p className="font-primary text-[16px] md:text-[24px] text-white text-center mb-[4px]">WORLD CLEAN UP DAY 2022</p>
                              <p className="font-primary text-[16px] md:text-[20px] text-white text-center mb-[32px]">26 Nov 2022</p>
                              <p className="font-secondary text-[14px] md:text-[16px] text-white">World Cleanup Day unites millions of olunteers, governments and organisations in 191 counries to tackle the global waste problem and build up th enew sustainable world.</p>
                           </div>
                        </div>

                        <div className="w-[100%] md:max-w-[50%] flex justify-end items-center">
                           <div className="flex flex-col md:w-[328px] w-[100%] max-w-[350px] md:max-w-[328px]">
                              <TextInput label="Name" placeholder="John Doe" 
                                 labelTextStyle="font-primary text-[12px] text-white md:text-[14px] mb-[6px]"
                                 inputTextStyle="text-[12px] text-p-gray md:text-[16px]"
                              />

                              <TextInput label="Email" placeholder="johndoe@email.com" 
                                 labelTextStyle="font-primary text-[12px] text-white md:text-[14px] mb-[6px]"
                                 inputTextStyle="text-[12px] text-p-gray md:text-[16px]"
                              />

                              <PhoneInput label="Mobile Phone" placeholder="123456789" 
                                 labelTextStyle="font-primary text-[12px] text-white md:text-[14px] mb-[6px]"
                                 inputTextStyle="text-[12px] text-p-gray md:text-[16px]" />

                              <button onClick={() => { console.log("join event!") }} className="self-center mt-[16px] font-primary">
                                 <ActionButton title='Join the event' />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default NearestEvent;