const PhoneInput = ({
    label = 'Mobile Phone',
    labelTextStyle = 'text-p-neutral font-primary text-[14px] pb-[4px]', 
    placeholder = '8123456789', 
    inputTextStyle = 'text-[16px] text-p-gray'
}: PhoneInputProps
) => {
    return (
        <div className="flex flex-col font-tertiary mb-[24px]">
            <label className={labelTextStyle}>{label}</label>
            <div>
                <select className="absolute w-[87px] rounded-[12px] py-[10px] px-[14px] text-p-gray border-p-light-gray border-1 outline-none">
                    <option>+62</option>
                </select>
                <input type="tel" name="phone" placeholder={placeholder} className={`rounded-[12px] w-[100%] py-[10px] pl-[97px] pr-[14px] border-p-light-gray border-1 outline-none ${inputTextStyle}`} />
            </div>
        </div>
    )
}

type PhoneInputProps = {
    label?: string,
    labelTextStyle?: string,
    placeholder?: string,
    inputTextStyle?: string
}

export default PhoneInput;