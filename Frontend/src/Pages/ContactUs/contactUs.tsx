import { useRef, useState } from "react";
import { useMutation } from 'react-query';

import { adapter, GetInputData } from "../../actions/global";

import { bgIndonesiaBersih, bgRoundsColor } from "../../assets";

import ActionButton from "../../component/actionButton";
import PhoneInput from "../../component/phoneInput";
import SectionTitle from "../../component/sectionTitle";
import TextAreaInput from "../../component/textAreaInput";
import TextInput from "../../component/textInput";

const ContactUs: React.FC = () => {
   const [successSubmit, setSuccessSubmit] = useState(false);

   const nameInputRef = useRef<GetInputData>(null);
   const emailInputRef = useRef<GetInputData>(null);
   const phoneInputRef = useRef<GetInputData>(null);
   const descInputRef = useRef<GetInputData>(null);

   const { isLoading: isLoadingContactUs, mutate: sendContactUs, data } = useMutation<any, Error>(
      async () => {
         return await adapter.post('/getintouches', {
            data: {
               firstname: nameInputRef.current?.getInputData(),
               lastname: nameInputRef.current?.getInputData(),
               email: emailInputRef.current?.getInputData(),
               phonenumber: phoneInputRef.current?.getInputData(),
               description: descInputRef.current?.getInputData()
            }
         })
      }
      ,
      {
         onSuccess: (res: any) => {
            setSuccessSubmit(res.data.data.attributes.firstname);
            nameInputRef.current?.resetInputData();
            emailInputRef.current?.resetInputData();
            phoneInputRef.current?.resetInputData();
            descInputRef.current?.resetInputData();
         },
         onError: (err: any) => {
            console.log("error", err)
         },
      }
   );

   const handleSendContactUs = async () => {
      sendContactUs();
   }

   const onChangeText = () => {
      successSubmit && setSuccessSubmit(false)
   }

   return (
      <main className="flex-grow">
         <section>
            <div className="bg-[url('/public/img/bg-page-contactus-gradient.png')] md:bg-[url('/public/img/bg-page-contactus-gradient-desktop.png')] pt-[62px] bg-cover bg-no-repeat overflow-hidden">
               <div className="mx-auto flex flex-row items-center justify-end">
                  <div className="w-[100vw] flex flex-col justify-start lg:py-[62px] lg:block">
                     <div className="w-[100vw] lg:max-w-[1500px] lg:left-[50%] lg:translate-x-[-50%] lg:absolute flex flex-col justify-start py-[62px] lg:flex-row lg:justify-between lg:items-center h-[100%] z-10">
                        <img src={bgIndonesiaBersih} className="self-center z-10" />
                     </div>

                     <div className="lg:max-w-[1102px] w-[100vw] flex flex-col max-w-[560px] justify-start py-[62px] lg:flex-row lg:justify-end mx-auto  items-center">
                        <div className="lg:w-[700px] w-[100%] flex flex-row lg:justify-start">
                           <img src={bgRoundsColor} className="w-[100%] lg:w-[900px] aspect-auto relative right top-12" />
                        </div>
                     </div>
                  </div>

                  <div className="max-w-[1102px] absolute top-[62px] px-[24px] left-[50%] w-[100vw] flex flex-row justify-end translate-x-[-50%] z-10">
                     <div className="w-[100%] lg:w-[50%] flex flex-col items-center mt-[38px] md:mt-[100px] z-10  mb-[100px]">
                        <SectionTitle title="Get in Touch" />
                        <div className="mt-[100px] mb-[24px] lg:mt-[76px] py-[12px] px-[12px] w-[100%] max-w-[525px] bg-p-yellow/70 backdrop-blur-lg border-p-yellow-3 border-2 rounded-[12px]">
                           <div className="flex flex-row">
                              <TextInput onChangeText={onChangeText} ref={nameInputRef} label="Name" placeholder="Your name" />

                           </div>
                           <TextInput onChangeText={onChangeText} ref={emailInputRef} inputType="email" label="Email" placeholder="youremail@email.com" />
                           <PhoneInput onChangeText={onChangeText} ref={phoneInputRef} />
                           <TextAreaInput onChangeText={onChangeText} ref={descInputRef} label="Describe Your Issue" placeholder={"Enter a description..."} />
                        </div>

                        {
                           !!successSubmit && (
                              <p className="text-center font-primary text-p-neutral">Thank you for reaching out! We have received your message and will be in touch with you shortly.</p>
                           )
                        }

                        <button onClick={handleSendContactUs} className="self-center mt-[16px] font-primary">
                           <ActionButton title='Send' />
                        </button>
                     </div>
                  </div>

               </div>
            </div>

         </section>
      </main>
   );
};

export default ContactUs;