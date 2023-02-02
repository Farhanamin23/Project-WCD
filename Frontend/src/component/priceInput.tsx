import { forwardRef, useImperativeHandle, useRef } from "react";
import { GetInputData } from "../actions/global";

const PriceInput = forwardRef<GetInputData, PriceInputProps>(({
   label = 'Mobile Phone',
   labelTextStyle = 'text-p-neutral font-primary text-[12px] md:text-[14px] pb-[4px]',
   placeholder = '8123456789',
   inputTextStyle = 'text-[12px] md:text-[16px] text-p-gray',
   containerStyle = 'mb-[24px]',
   onChangeText = () => {}
}: PriceInputProps, ref
) => {
   const selectionRef = useRef<HTMLSelectElement>(null);
   const inputRef = useRef<HTMLInputElement>(null);

   useImperativeHandle(
      ref,
      () => ({
         getInputData() {
            return inputRef.current?.value ? `${inputRef.current?.value}` : '';
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
            <select ref={selectionRef} className={` top-0 right-0 absolute w-[87px] rounded-[6px] md:rounded-[12px] py-[10px] px-[14px] border-p-light-gray outline-none border-[1px] h-[100%] ${inputTextStyle}`}>
               <option>IDR</option>
            </select>
            <input ref={inputRef} onChange={onChangeText} type="number" name="phone" placeholder={placeholder} className={`font-secondary rounded-[6px] md:rounded-[12px] w-[100%] py-[10px] pr-[97px] pl-[14px] border-p-light-gray border-[1px] outline-none ${inputTextStyle}`} />
         </div>
      </div>
   )
})

type PriceInputProps = {
   label?: string,
   labelTextStyle?: string,
   placeholder?: string,
   inputTextStyle?: string,
   containerStyle?: string,
   onChangeText?(): void;
}

export default PriceInput;