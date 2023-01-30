const TextAreaInput = ({
    label,
    labelTextStyle  = 'text-p-neutral font-primary text-[14px] pb-[4px]',
    placeholder,
    inputTextStyle
}: TextAreaInputProps
) => {
    return (
        <div className="flex flex-col font-tertiary mb-[24px] flex-1">
            <label className={labelTextStyle}>{label}</label>
           <textarea placeholder={placeholder} className={`rounded-[12px] w-[100%] h-[128px] py-[10px] px-[14px] border-p-light-gray border-1 outline-none 
                ${inputTextStyle}`}/>
                
        </div>
    )
}


type TextAreaInputProps = {
    label: string,
    labelTextStyle?: string,
    placeholder: string,
    inputTextStyle?: string
}

export default TextAreaInput