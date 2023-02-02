import { forwardRef, useImperativeHandle, useRef } from "react";
import { GetInputData } from "../actions/global";

const SelectInput = forwardRef<GetInputData, SelectInputProps>(({
   label = 'Options',
   labelTextStyle = 'text-p-neutral font-primary text-[12px] md:text-[14px] pb-[4px]',
   placeholder = '8123456789',
   inputTextStyle = 'text-[12px] md:text-[16px] text-p-gray',
   containerStyle = 'mb-[24px]',
   options = [],
   onChange = () => {}
}: SelectInputProps, ref
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
         <div className="w-[100%]">
            <select defaultValue={''} onChange={onChange} ref={selectionRef} className={`rounded-[6px] md:rounded-[12px] w-[100%] py-[10px] px-[14px] border-p-light-gray outline-none border-[1px] h-[100%] ${inputTextStyle}`}>
               <option value="" disabled hidden>{placeholder}</option>
               {options.map(item => (
                  <option key={item.value} value={item.value}>{item.name}</option>
                  ))}
            </select>
         </div>
      </div>
   )
})

type SelectInputProps = {
   label?: string,
   labelTextStyle?: string,
   placeholder?: string,
   inputTextStyle?: string,
   containerStyle?: string,
   options: {name: string; value: string}[],
   onChange?(): void;
}

export default SelectInput;