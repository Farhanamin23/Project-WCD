import React, { useState } from 'react'

type TextInputType = 'email' | 'text' | 'telephone' | 'list' | 'currency' | 'file'
interface TextInputProps {
    id?: string
    type?: TextInputType
    label?: string
    placeholder?: string
    required?: boolean
    labelStyle?: string
    listRefName?: string
    onChange?: () => undefined
}
const TextInput: React.FC<TextInputProps> = ({ type = "text", label, id, placeholder, required, labelStyle, listRefName, onChange }) => {
    const [defaultValueOption, setDefaultValueOption] = useState('')
    const additionalProps = {
        ...(type === "telephone" && { maxlength: '12' }),
        ...(type === "email" && { pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }),
        ...(type === "list" && { list: listRefName }),
        ...(type === "currency" && { type: 'number' }),
        ...(type === "telephone" && { type: 'number' })
    }

    return (
        <div className='mb-3'>
            <label className={`font-primary text-p-neutral text-sm ml-1 ${labelStyle}`}>{label}
                <div className={`border-[1px] rounded-lg drop-shadow-xl bg-white mt-1 relative ${type === 'telephone' && 'pl-16'}`}>
                    <input
                        className={`font-secondary text-p-gray text-sm p-2 w-full outline-none rounded-lg none`}
                        type={type}
                        placeholder={placeholder}
                        id={id}
                        onChange={onChange}
                        required={required}
                        {...additionalProps}
                    />

                    {
                        type === 'telephone' &&
                        <div className='absolute left-0 top-0  w-[68px]'>
                            <input
                                id='inputTelephoneCode'
                                list='listcode'
                                className='border-[1px] font-secondary text-p-gray text-sm p-2 outline-none rounded-lg w-full'
                                placeholder='+62'
                                defaultValue={defaultValueOption}
                            />

                            <datalist id="listcode">
                                <option value="+62" />
                                <option value="+61" />
                                <option value="+60" />
                                <option value="+82" />
                                <option value="+92" />
                            </datalist>
                        </div>
                    }

                    {
                        type === 'currency' &&
                        <div className='absolute right-0 top-0  w-[68px]'>
                            <input
                                id='inputTelephoneCode'
                                list='currencyCode'
                                className='border-[1px] font-secondary text-p-gray text-sm p-2 outline-none rounded-lg w-full'
                                placeholder='IDR'
                                defaultValue={defaultValueOption}
                            />

                            <datalist id="currencyCode">
                                <option value="IDR" />
                                <option value="USD" />
                                <option value="MYR" />
                                <option value="EUR" />
                                <option value="SGP" />
                            </datalist>
                        </div>
                    }
                </div>
            </label>

        </div>
    )


}

export default TextInput