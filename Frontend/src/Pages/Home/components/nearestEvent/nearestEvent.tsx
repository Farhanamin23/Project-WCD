import ActionButton from "../../../../component/actionButton";
import PhoneInput from "../../../../component/phoneInput";
import SectionTitle, { TitleColor } from "../../../../component/sectionTitle";
import TextInput from "../../../../component/textInput";

import { useQuery } from 'react-query';
import { adapter } from "../../../../actions/global";
import moment from 'moment';
import { useRegisterEvent } from "../../../../hooks";
import ReactMarkdown from "react-markdown";

interface NearestEventData {
   id: number,
   title: string,
   startDate: string,
   desc: string
}

interface Relation {
   id: number
}

interface RegisterEventPostData {
   name: string,
   email: string,
   phone: string,
   event: Relation
}

const NearestEvent = () => {
   const {
      isLoadingRegisterEvent,
      registerEvent,
      data,
      nameInputRef,
      emailInputRef,
      phoneInputRef,
      successSubmit,
      setSuccessSubmit
   } = useRegisterEvent();

   const { isLoading: isLoadingNearestData, data: nearestEvent } = useQuery<NearestEventData | null, Error>(
      "nearest-event",
      async () => {
         const res = await adapter.get(`/events?filters[startDate][$gt]=${moment(new Date()).format('YYYY-MM-DD')}&sort=startDate:asc&pagination[limit]=1`);

         if (res.data.data.length) {
            const nearestEvent: NearestEventData = {
               id: res.data.data[0].id,
               title: res.data.data[0].attributes.title,
               startDate: moment(res.data.data[0].attributes.startDate).format('DD MMM YYYY'),
               desc: res.data.data[0].attributes.detailEvent
            }
            return nearestEvent
         } else {
            return null
         }
      },
      {
         enabled: true,
         retry: true
      }
   );

   const handleJoinEvent = async () => {
      if (nearestEvent?.id) {
         registerEvent(nearestEvent.id);
      }
   }

   const onChangeText = () => {
      successSubmit && setSuccessSubmit(false)
   }

   return (
      <section>
         <div className="bg-p-primary py-[56px] lg:pt-[150px]"  id="nearestEvent">
            <div className="max-w-[1102px] mx-auto">
               <SectionTitle title={'Nearest Event'} color={TitleColor.white} />
               {
                  nearestEvent && (
                     <div className="px-[24px]">
                        <div className="
                     bg-[url(/public/img/bg-abstract-kuning.webp)]
                     bg-[left_0px_top_-50px]
                     md:bg-[left_0px_top_-50px]
                     bg-no-repeat
                     self-end
                     mt-[29px]
                  ">
                           <div className="
                        flex flex-col md:flex-row 
                        bg-[url(/public/img/bg-abstract-biru.webp)]
                        bg-[left_-60px_top_-32px]
                        md:bg-[left_-60px_top_-32px]
                        bg-no-repeat
                        overflow-visible
                     ">
                              <div className="flex flex-row w-[100%] md:max-w-[50%] justify-end mb-[29px]">
                                 <div className="mt-[76px] py-[28px] px-[31px] w-[100%] max-w-[350px] md:w-[359px] md:self-start bg-p-yellow/70 backdrop-blur-lg border-p-yellow-3 border-2 rounded-[12px]">
                                    <p className="font-primary text-[16px] md:text-[24px] text-white text-center mb-[4px]">{nearestEvent.title}</p>
                                    <p className="font-primary text-[16px] md:text-[20px] text-white text-center mb-[32px]">{nearestEvent.startDate}</p>
                                    <p className="font-secondary text-[14px] md:text-[16px] text-white line-clamp-5"><ReactMarkdown>{nearestEvent.desc}</ReactMarkdown></p>
                                 </div>
                              </div>

                              <div className="w-[100%] md:max-w-[50%] flex justify-end items-center">
                                 <div className="flex flex-col md:w-[328px] w-[100%] max-w-[350px] md:max-w-[328px]">
                                    <TextInput ref={nameInputRef} label="Name" placeholder="John Doe"
                                       labelTextStyle="font-primary text-[12px] text-white md:text-[14px] mb-[6px]"
                                       inputTextStyle="text-[12px] text-p-gray md:text-[16px]"
                                       onChangeText={onChangeText}
                                    />

                                    <TextInput ref={emailInputRef} label="Email" placeholder="johndoe@email.com"
                                       labelTextStyle="font-primary text-[12px] text-white md:text-[14px] mb-[6px]"
                                       inputTextStyle="text-[12px] text-p-gray md:text-[16px]"
                                       onChangeText={onChangeText}
                                    />

                                    <PhoneInput ref={phoneInputRef} label="Mobile Phone" placeholder="123456789"
                                       labelTextStyle="font-primary text-[12px] text-white md:text-[14px] mb-[6px]"
                                       inputTextStyle="text-[12px] text-p-gray md:text-[16px]" onChangeText={onChangeText} />

                                    {
                                       !!successSubmit && (
                                          <p className="text-center font-primary text-p-yellow">Thank you for registering for the event!</p>
                                       )
                                    }
                                    <button onClick={() => handleJoinEvent()} className="self-center mt-[16px] font-primary">
                                       <ActionButton title='Join the event' />
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               }

            </div>
         </div>
      </section>
   );
};

export default NearestEvent;
