import { bgIndonesiaBersih } from "../../assets";
import PhoneInput from "../../component/phoneInput";
import SectionTitle from "../../component/sectionTitle";
import TextAreaInput from "../../component/textAreaInput";
import TextInput from "../../component/textInput";

const ContactUs: React.FC = () => {
    return (
        <main>
            <section>
                <div className="max-w-[1102px] mx-auto flex flex-row items-center">
                    <div className="w-[50%]">
                    <img alt="contactUs" src={bgIndonesiaBersih} />
                    </div>
                    <div className="w-[50%] flex flex-col">
                        <SectionTitle title="Get in Touch" />
                        <div className="mt-[76px] py-[12px] px-[12px] w-[100%] max-w-[525px] bg-p-yellow/70 backdrop-blur-lg border-p-yellow-3 border-2 rounded-[12px]">
                            <div className="flex flex-row">
                                <TextInput label="First Name" placeholder="Your first name"/>
                                <div className="w-[10px]"></div>
                                <TextInput label="Last Name" placeholder="Your last name"/>
                            </div>
                            <TextInput inputType="email" label="Email" placeholder="youremail@email.com"/>
                            <PhoneInput />
                            <TextAreaInput label="Describe Your Issue" placeholder={"Enter a description..."} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactUs;