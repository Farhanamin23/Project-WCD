import { forwardRef, useImperativeHandle, useRef } from "react";
import { GetInputData } from "../actions/global";

const PhoneInput = forwardRef<GetInputData, PhoneInputProps>(({
   label = 'Mobile Phone',
   labelTextStyle = 'text-p-neutral font-primary text-[12px] md:text-[14px] pb-[4px]',
   placeholder = '8123456789',
   inputTextStyle = 'text-[12px] md:text-[16px] text-p-gray',
   containerStyle = 'mb-[24px]',
   disabled = false,
   onChangeText = () => {}
}: PhoneInputProps, ref
) => {
   const selectionRef = useRef<HTMLSelectElement>(null);
   const inputRef = useRef<HTMLInputElement>(null);

   useImperativeHandle(
      ref,
      () => ({
         getInputData() {
            return inputRef.current?.value ? `${selectionRef.current?.value}${inputRef.current?.value}` : '';
         },
         resetInputData() {
            if(inputRef.current?.value){
               inputRef.current.value = ''
            }
         },
      }),
   )
   return (
      <div className={`flex flex-col font-tertiary flex-1 ${containerStyle}`}>
         <label className={labelTextStyle}>{label}</label>
         <div className="w-[100%] relative">
            <select disabled={disabled} ref={selectionRef} className={` top-0 absolute w-[87px] rounded-[6px] md:rounded-[12px] py-[10px] px-[14px] border-p-light-gray outline-none border-[1px] h-[100%] ${inputTextStyle}`}>
               <option>+62</option>
            </select>
            <input disabled={disabled} ref={inputRef} onChange={onChangeText} type="tel" name="phone" placeholder={placeholder} className={`font-secondary rounded-[6px] md:rounded-[12px] w-[100%] py-[10px] pl-[97px] pr-[14px] border-p-light-gray border-[1px] outline-none ${inputTextStyle}`} />
         </div>
      </div>
   )
})

type PhoneInputProps = {
   label?: string,
   labelTextStyle?: string,
   placeholder?: string,
   inputTextStyle?: string,
   containerStyle?: string,
   disabled?: boolean,
   onChangeText?(): void;
}

export default PhoneInput;