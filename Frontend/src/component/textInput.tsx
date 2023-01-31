const TextInput = ({ 
    inputType = "name",
    label, 
    labelTextStyle = 'text-p-neutral font-primary text-[14px] pb-[4px]', 
    placeholder, 
    inputTextStyle = 'text-[16px] text-p-gray'
}: TextInputProps) => {
    return (
        <div className="flex flex-col font-tertiary mb-[24px] flex-1">
            <label className={labelTextStyle}>{label}</label>
            <input type={inputType} name="name" placeholder={placeholder} className={`rounded-[12px] w-[100%] py-[10px] px-[14px] border-p-light-gray border-1 outline-none 
                ${inputTextStyle}` }/>
        </div>
    )
}

type TextInputProps = {
    inputType?: string,
    label: string,
    labelTextStyle?: string,
    placeholder: string,
    inputTextStyle?: string
}

export default TextInput;