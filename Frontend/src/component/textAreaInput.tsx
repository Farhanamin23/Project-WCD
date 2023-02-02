import { forwardRef, useImperativeHandle, useRef } from "react";
import { GetInputData } from "../actions/global";

const TextAreaInput = forwardRef<GetInputData, TextAreaInputProps>(({
    label,
    labelTextStyle = 'text-p-neutral font-primary text-[12px] md:text-[14px] pb-[4px]',
    placeholder,
    inputTextStyle = 'text-[12px] md:text-[16px] text-p-gray',
    containerStyle = 'mb-[24px]',
    onChangeText = () => { }
}: TextAreaInputProps, ref
) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(
        ref,
        () => ({
            getInputData() {
                return inputRef.current?.value || ''
            },
            resetInputData() {
                if (inputRef.current?.value) {
                    inputRef.current.value = ''
                }
            },
        }),
    )

    return (
        <div className={`flex flex-col font-tertiary flex-1 ${containerStyle}`}>
            <label className={labelTextStyle}>{label}</label>
            <textarea ref={inputRef} placeholder={placeholder} onChange={onChangeText} className={` font-secondary rounded-[6px] md:rounded-[12px] w-[100%] h-[128px] py-[10px] px-[14px] border-p-light-gray border-[1px] outline-none 
                ${inputTextStyle}`} />

        </div>
    )
})


type TextAreaInputProps = {
    label: string,
    labelTextStyle?: string,
    placeholder: string,
    inputTextStyle?: string,
    containerStyle?: string,
    onChangeText?(): void;
}

export default TextAreaInput;