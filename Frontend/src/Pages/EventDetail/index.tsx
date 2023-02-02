import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { adapter, baseUrl } from '../../actions/global'
import ActionButton from '../../component/actionButton'
import PhoneInput from '../../component/phoneInput'
import TextInput from '../../component/textInput'
import { useRegisterEvent } from '../../hooks'
import { iEvent } from '../../interface'

const EventDetail: React.FC<any> = (props) => {
    const [event, setEvent] = useState<iEvent>()
    let { identifier } = useParams()
    const {
        isLoadingRegisterEvent,
        registerEvent,
        data,
        nameInputRef,
        emailInputRef,
        phoneInputRef,
        successSubmit,
        setSuccessSubmit
    } = useRegisterEvent();

    const handleGetDetail = async () => {
        try {
            const res = await adapter.get('/events/' + identifier + '?populate=*');

            if (res.status != 200) {
                throw res
            }

            const _date = new Date(res.data.data?.attributes?.publishedAt).toDateString();
            const event: iEvent = {
                id: res.data.data.id,
                title: res.data.data.attributes.title,
                description: res.data.data.attributes.description,
                date: _date,
                imageSrc: baseUrl + res.data.data.attributes.image.data.attributes.url,
                detailEvent: res.data.data.attributes.detailEvent
            }

            setEvent(event)
        } catch (error) {
        }
    }

    useEffect(() => {
        handleGetDetail()
        return () => { }
    }, [])

    const handleJoinEvent = async () => {
        if (identifier) {
            registerEvent(identifier);
        }
    }

    const onChangeText = () => {
        successSubmit && setSuccessSubmit(false)
    }

    return (
        <main className='flex-grow px-3 pb-24 bg-[url("/public/img/bg-page-donate.png")] md:bg-[url("/public/img/bg-page-donate-desktop.png")] bg-cover'>
            <div className='pt-16  max-w-[1238px] lg:pt-[75px] mx-auto '>
                <div className='flex flex-col justify-center items-center mt-4 lg:mb-6 lg:mt-16'>
                    <p className="font-primary text-p-primary text-xl lg:text-4xl">Our Events</p>
                    <div className="flex  w-[105px] h-[6px] bg-p-yellow lg:w-[190px]"></div>
                </div>

                <div className='grid grid-cols-1 mt-8 lg:grid-cols-2 lg:gap-16'>
                    <section>
                        <div>
                            <img className='w-full h-[150px] object-cover rounded-sm max-w-[570px] max-h-[260px] lg:h-[260px] m-auto' src={event?.imageSrc} alt={`image ${event?.title}`} />
                        </div>
                        <div className='mt-8'>
                            <p className="font-primary text-sm text-p-neutral mb-5 lg:text-3xl">{event?.title}</p>
                            <p className="font-secondary text-xs text-p-neutral lg:text-xl">{event?.description}</p>
                        </div>
                    </section>

                    <div className='flex flex-col bg-[url("/public/img/bg-rounds-color.png")] bg-contain bg-no-repeat bg-top-left'>
                        <section className='self-end max-w-[525px] w-[100%] lg:mt-20'>
                            <div className='h-[400px] mt-12'>
                                <div className='p-4 bg-p-yellow/70 backdrop-blur-sm rounded-lg'>
                                    <TextInput ref={nameInputRef} label="Name" placeholder="John Doe"
                                        labelTextStyle="font-primary text-[12px] text-p-neutral md:text-[14px] mb-[6px]"
                                        inputTextStyle="text-[12px] text-p-gray md:text-[16px]"
                                        onChangeText={onChangeText}
                                    />

                                    <TextInput ref={emailInputRef} label="Email" placeholder="johndoe@email.com"
                                        labelTextStyle="font-primary text-[12px] text-p-neutral md:text-[14px] mb-[6px]"
                                        inputTextStyle="text-[12px] text-p-gray md:text-[16px]"
                                        onChangeText={onChangeText}
                                    />

                                    <PhoneInput ref={phoneInputRef} label="Mobile Phone" placeholder="123456789"
                                        labelTextStyle="font-primary text-[12px] text-p-neutral md:text-[14px] mb-[6px]"
                                        inputTextStyle="text-[12px] text-p-gray md:text-[16px]" onChangeText={onChangeText} />
                                </div>


                                <div className='flex flex-col justify-center mt-4'>
                                    {
                                        !!successSubmit && (
                                            <p className="text-center font-primary text-p-neutral">Thank you for registering for the event!</p>
                                        )
                                    }

                                    <button onClick={() => handleJoinEvent()} className="self-center mt-[16px] font-primary">
                                        <ActionButton title='Join the event' />
                                    </button>
                                </div>
                            </div>


                        </section>

                        <section className='lg:pt-20 pt-6 self-end max-w-[525px] w-[100%]'>
                            <p className="font-primary text-sm text-p-neutral mb-5 lg:text-3xl">{'Detail Event:'}</p>
                            <p className="font-secondary text-xs text-p-neutral lg:text-xl">{event?.detailEvent}</p>
                        </section>
                    </div>


                </div>
            </div>
        </main >
    );
};

export default EventDetail;