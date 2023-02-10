import React, { useRef, useState } from 'react'
import { adapter, GetInputData, StringValue } from '../../../actions/global';
import { iconsEWallet } from '../../../assets'
import PhoneInput from '../../../component/phoneInput';
import PriceInput from '../../../component/priceInput';
import SelectInput from '../../../component/selectInput';
import TextInput from '../../../component/textInput';
import { iProgramShowcase } from '../donate';

import { useMutation } from 'react-query';

export default function DonateForm({ eventList }: DonateFormProps) {

   const [successSubmit, setSuccessSubmit] = useState<any>(false);
   const [donateId, setDonateId] = useState<number | undefined>(undefined);
   const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

   const firstNameInputRef = useRef<GetInputData>(null);
   const lastNameInputRef = useRef<GetInputData>(null);
   const emailInputRef = useRef<GetInputData>(null);
   const phoneInputRef = useRef<GetInputData>(null);
   const programInputRef = useRef<GetInputData>(null);
   const amountInputRef = useRef<GetInputData>(null);
   const fileInputRef = useRef<GetInputData>(null);

   const { isLoading: isLoadingUploadDonate, mutate: uploadDonate } = useMutation(
      async (id: number) => {
         var bodyFormData = new FormData();
         bodyFormData.set('files', fileInputRef.current?.getInputData()[0]);
         bodyFormData.set('ref', 'api::donate.donate');
         bodyFormData.set('refid', `${id}`);
         bodyFormData.set('field', 'paymentscrenshot');
         return await adapter.postFormData('/upload', bodyFormData);
      }
      ,
      {
         onSuccess: (res: any) => {
            setDonateId(undefined);
            setSuccessSubmit(true);
            firstNameInputRef.current?.resetInputData()
            lastNameInputRef.current?.resetInputData()
            emailInputRef.current?.resetInputData()
            phoneInputRef.current?.resetInputData()
            amountInputRef.current?.resetInputData()
            fileInputRef.current?.resetInputData()
         },
         onError: (err: any) => {
            console.log("error", err)
         },
      }
   );

   const { isLoading: isLoadingDonate, mutate: donate } = useMutation<any, Error>(
      async () => {
         let donateData = {
            email: emailInputRef.current?.getInputData(),
            phonenumber: phoneInputRef.current?.getInputData(),
            total: amountInputRef.current?.getInputData(),
            eventId: {
               id: programInputRef.current?.getInputData
            }
         }

         if (!isAnonymous) {
            donateData = {
               ...donateData,
               ...{
                  firstName: firstNameInputRef.current?.getInputData(),
                  lastName: lastNameInputRef.current?.getInputData()
               }
            }
         }
         return await adapter.post('/donates', { data: donateData })
      }
      ,
      {
         onSuccess: (res: any) => {
            setDonateId(res.data.data.id);
            uploadDonate(res.data.data.id)
            //post form data
         },
         onError: (err: any) => {
            console.log("error", err)
         },
      }
   );

   const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (fileInputRef.current?.getInputData()[0]) {
         donate()
      }
   }

   const onChangeText = () => {
      successSubmit && setSuccessSubmit(false)
   }

   return (
      <div className='md:flex justify-around mt-[40px] md:mt-[80px]'>
         <section>
            <form
               onSubmit={handleSubmit}
               className='border-2 rounded-xl p-3 mt-6 border-p-primary md:w-[500px] text-left'
            >
               <div className='md:flex md:items-center'>
                  <div className='flex-1 md:mr-3'>
                     <TextInput
                        onChangeText={onChangeText}
                        ref={firstNameInputRef}
                        inputType="name"
                        label='First Name'
                        placeholder='first name'
                        containerStyle='mb-[10px] md:mb-[12px]'
                        disabled={isAnonymous}
                     />
                  </div>

                  <div className='flex-1'>
                     <TextInput
                        onChangeText={onChangeText}
                        ref={lastNameInputRef}
                        inputType="name"
                        label='Last Name'
                        placeholder='last name'
                        containerStyle='mb-[10px] md:mb-[12px]'
                        disabled={isAnonymous}
                     />
                  </div>
               </div>

               <input checked={isAnonymous} onChange={() => setIsAnonymous(!isAnonymous)} className='accent-p-primary scale-150 mr-3 ml-1 mb-[10px] md:mb-[12px]' id='isAnonym' type={'checkbox'} />
               <label className='font-primary text-[12px] md:text-[14px]' htmlFor="isAnonym">Donate as Anonymous</label>

               <TextInput
                  onChangeText={onChangeText}
                  ref={emailInputRef}
                  inputType="email"
                  label='Email'
                  placeholder='youremail@email.com'
                  containerStyle='mb-[10px] md:mb-[12px]'
               />

               <PhoneInput
                  onChangeText={onChangeText}
                  ref={phoneInputRef}
                  label='Mobile Phone'
                  placeholder='895555555555'
                  containerStyle='mb-[10px] md:mb-[12px]'
               />

               <SelectInput
                  onChange={onChangeText}
                  ref={programInputRef}
                  label='Choose Program to Donate '
                  placeholder='Choose program'
                  options={eventList.reduce((acc: any, item) => {
                     acc.push({ name: item.title, value: item.id })
                     return acc
                  }, [])}
                  containerStyle='mb-[10px] md:mb-[12px]'
               />

               <PriceInput
                  onChangeText={onChangeText}
                  ref={amountInputRef}
                  label='How Much You Donate'
                  placeholder='10000'
                  containerStyle='mb-[10px] md:mb-[12px]'
               />

               <TextInput
                  onChangeText={onChangeText}
                  ref={fileInputRef}
                  inputType="file"
                  label='Payment Confirmation Receipt'
                  placeholder='Upload image'
                  containerStyle='mb-[10px] md:mb-[12px]'
               />

               {
                  !!successSubmit && (
                     <p className="text-center font-primary text-p-neutral">Thank you for supporting our efforts to keep the world clean. Your donation will make a positive impact on our mission.</p>
                  )
               }

               <div className='md:flex md:justify-center'>
                  <input type={'submit'} className='bg-p-yellow w-full rounded-lg font-primary text-white text-lg py-2 mt-6 hover:bg-p-primary hover:cursor-pointer md:max-w-xs md:mx-auto' />
               </div>
            </form>
         </section>

         {/* <section className='mt-14 md:ml-10'> */}
            {/* <div className='flex flex-col items-center bg-p-yellow p-4 mx-auto max-w-[300px] rounded-xl md:w-[220px]'>
               <p className="font-primary text-p-primary text-lg my-4">Donate with QRIS</p>
               <img className='w-full h-full object-contain' src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="QRIS Code" />
            </div>

            <img className='mx-auto mt-8 w-[324px] md:w-[224px] object-contain' src={iconsEWallet} alt="dompet digital" /> */}
         {/* </section> */}
      </div>
   );
};


type DonateFormProps = {
   eventList: iProgramShowcase[]
};