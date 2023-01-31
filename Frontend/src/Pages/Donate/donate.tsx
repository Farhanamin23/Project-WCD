import React, { useState } from 'react'
import TextInput from './components/TextInput';
import CardProgram from './components/CardProgram/CardProgram'
import { programShowcase } from './dummy'

export interface iProgramShowcase {
    title: string;
    description: string;
    src: string;
}

const Donate: React.FC = () => {
    const [programs, setPrograms] = useState<iProgramShowcase[]>(programShowcase)
    return (
        <main className='pt-14 mx-3 lg:pt-[75px] mb-8'>
            {
                programs?.map(it => {
                    return (
                        <CardProgram
                            title={it.title}
                            description={it.description}
                            imageSrc={it.src}
                        />
                    )
                })
            }

            <section>
                <div className='flex flex-col justify-center items-center'>
                    <p className="font-primary text-p-primary text-xl">Donate</p>
                    <div className="flex  w-[55px] h-[6px] bg-p-yellow"></div>
                </div>

                <form className='border-2 rounded-xl p-3 mt-6 border-p-primary'>
                    <TextInput
                        id='inputName'
                        label='Name'
                        placeholder='Your name'
                    />

                    <TextInput
                        id='inputEmail'
                        label='Email'
                        type={'email'}
                        placeholder='youremail@email.com'
                    />

                    <TextInput
                        id='inputPhone'
                        label='Mobile Phone'
                        type={'telephone'}
                        placeholder='895555555555'
                    />

                    <TextInput
                        id='inputProgram'
                        label='Choose Program to Donate '
                        type={'list'}
                        listRefName={'listProgram'}
                        placeholder='Choose program'
                    />
                    <datalist id="listProgram">
                        <option value="Memasak" />
                        <option value="Membersihkan" />
                        <option value="menyayangi" />
                        <option value="Pandawara Group" />
                        <option value="1000 pohon" />
                    </datalist>

                    <TextInput
                        id='inputCurrency'
                        label='How Much You Donate'
                        type={'currency'}
                        placeholder='10000000'
                    />

                    <TextInput
                        id='inputImage'
                        label='Payment Confirmation Receipt'
                        type={'file'}
                        placeholder='Upload image'
                    />
                </form>

            </section>
        </main>
    )
}

export default Donate