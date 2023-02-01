import React, { useState } from 'react'
import TextInput from './components/TextInput';
import CardProgram from '../../component/CardProgram/CardProgram'
import { programShowcase } from './dummy'
import { iconsEWallet } from '../../assets';

export interface iProgramShowcase {
    id: number,
    title: string;
    description: string;
    src: string;
}

const Donate: React.FC = () => {
    const [programs, setPrograms] = useState<iProgramShowcase[]>(programShowcase)
    return (
        <main className='px-3 pb-10 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")]'>
            <div className='pt-14  max-w-5xl lg:pt-[75px] mx-auto '>
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

                <div className='flex flex-col justify-center items-center lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Donate</p>
                    <div className="flex  w-[55px] h-[6px] bg-p-yellow"></div>
                </div>

                <div className='lg:flex justify-around'>
                    <section>
                        <form className='border-2 rounded-xl p-3 mt-6 border-p-primary lg:w-[500px]'>
                            <div className='lg:flex lg:items-center'>
                                <div className='flex-1 mr-3'>
                                    <TextInput
                                        label='First Name'
                                        placeholder='John'
                                    />
                                </div>

                                <div className='flex-1'>
                                    <TextInput
                                        label='Last Name'
                                        placeholder='John'
                                    />
                                </div>
                            </div>

                            <input className='accent-p-primary scale-150 mr-3 ml-1 my-4' id='isAnonym' type={'checkbox'} />
                            <label className='font-primary text-sm' htmlFor="isAnonym">Donate as Anonymous</label>

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

                            <div className='lg:flex lg:justify-center'>
                                <input type={'submit'} className='bg-p-yellow w-full rounded-lg font-primary text-white text-lg py-2 mt-6 hover:bg-p-primary hover:cursor-pointer lg:max-w-xs lg:mx-auto' />
                            </div>
                        </form>
                    </section>

                    <section className='mt-14 lg:ml-10'>
                        <div className='flex flex-col items-center bg-p-yellow p-4 mx-auto w-[300px] rounded-xl lg:w-[220px]'>
                            <p className="font-primary text-p-primary text-lg my-4">Donate with QRIS</p>
                            <img className='w-full h-full object-contain' src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="QRIS Code" />
                        </div>

                        <img className='mx-auto mt-8 w-[324px] lg:w-[224px] object-contain' src={iconsEWallet} alt="dompet digital" />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Donate