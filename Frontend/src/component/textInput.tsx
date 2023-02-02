import { forwardRef, useImperativeHandle, useRef } from "react";
import { GetInputData } from "../actions/global";

const TextInput = forwardRef<GetInputData, TextInputProps>(({
   inputType = "name",
   label,
   labelTextStyle = 'text-p-neutral font-primary text-[12px] md:text-[14px] pb-[4px]',
   placeholder,
   inputTextStyle = 'text-[12px] md:text-[16px] text-p-gray',
   containerStyle = 'mb-[24px]',
   disabled = false,
   onChangeText = () => { }
}: TextInputProps, ref) => {

   const inputRef = useRef<HTMLInputElement>(null);

   useImperativeHandle(
      ref,
      () => ({
         getInputData() {
            return inputType != 'file' ? inputRef.current?.value || '' : inputRef.current?.files || {}
         },
         resetInputData() {
            if (inputRef.current?.value) {
               inputRef.current.value = ''
               if(inputType == 'file' && inputRef.current?.files) {
                  inputRef.current.files = null
               }
            }
         },
      }),
   )

   return (
      <div className={`flex flex-col font-tertiary flex-1 ${containerStyle}`}>
         <label className={labelTextStyle}>{label}</label>
         <input disabled={disabled} ref={inputRef} type={inputType} name="name" placeholder={placeholder} className={` font-secondary rounded-[6px] md:rounded-[12px] w-[100%] py-[10px] px-[14px] border-p-light-gray border-[1px] outline-none 
                ${inputTextStyle}`} onChange={onChangeText} />
      </div>
   )
})

type TextInputProps = {
   inputType?: string,
   label: string,
   labelTextStyle?: string,
   placeholder: string,
   inputTextStyle?: string,
   containerStyle?: string,
   disabled?: boolean,
   onChangeText?(): void;
}

export default TextInput;