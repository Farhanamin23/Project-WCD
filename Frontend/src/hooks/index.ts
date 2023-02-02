import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { adapter, GetInputData } from "../actions/global";

export const useRegisterEvent = () => {
   const nameInputRef = useRef<GetInputData>(null);
   const emailInputRef = useRef<GetInputData>(null);
   const phoneInputRef = useRef<GetInputData>(null);
   const [successSubmit, setSuccessSubmit] = useState<any>(false);

   const { isLoading: isLoadingRegisterEvent, mutate: registerEvent, data } = useMutation(
      async (eventId: string | number) => {
         return await adapter.post('/register-events', {
            data: {
               name: nameInputRef.current?.getInputData(),
               email: emailInputRef.current?.getInputData(),
               phonenumber: phoneInputRef.current?.getInputData(),
               event: {
                  id: eventId
               }
            }
         });
      },
      {
         onSuccess: (res) => {
            setSuccessSubmit(res.data.data.attributes.name);
            nameInputRef.current?.resetInputData();
            emailInputRef.current?.resetInputData();
            phoneInputRef.current?.resetInputData();
         },
         onError: (err) => {
            console.log('error', err);
         },
      }
   );

   return {
      isLoadingRegisterEvent,
      registerEvent,
      data,
      nameInputRef,
      emailInputRef,
      phoneInputRef,
      successSubmit,
      setSuccessSubmit
   };
};
