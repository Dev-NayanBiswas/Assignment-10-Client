import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {motion} from "motion/react";
import { RxCounterClockwiseClock } from "react-icons/rx";
import MessageSVG from "./SVGComponents/MessageSvg";
import { imageUploader } from "../Utilities/Scripts/imageUploader";


function ReachUs() {
    return (
        <>
        <article
        className="mt-7"
        >
        <section className="flex justify-center items-center mb-5 gap-4">
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Get in Touch</h1>
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Feel free to drop us an email for any inquiries, feedback, or assistance. We're always ready to connect and provide the support you need. Whether it’s a question about our services or suggestions to improve, your emails are important to us, and we strive to respond promptly.</p>
      </article>




            <section className="flex flex-col-reverse lg:flex-row items-center p-6 rounded-lg">
            

            <section
                style={{
                    background:`url(${imageUploader('emailEmail.svg')})`,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'top',
                    backgroundSize:'contain',
                    backgroundOrigin:''
                }}
             className="lg:w-8/12 w-full h-full flex flex-col justify-center items-center">
                <form action="" className="w-11/12 h-[70vh] flex lg:justify-center justify-start flex-col gap-4">
                    <div>
                        <input type="text" placeholder="Enter your Name" className="textInput" />
                    </div>
                    <div>
                        <input type="email" placeholder="Enter your Email" className="textInput" />
                    </div>
                    <div>
                        <textarea type="email" placeholder="Enter your Email" className="textInput" />
                    </div>
                    <div>
                        <button className="px-8 py-2 rounded-full bg-defaultColor text-white text-xl font-semibold">Send Email</button>
                    </div>
                </form>
            </section>
            <figure className="lg:w-1/2 w-9/12">
                <MessageSVG/>
            </figure>
        </section>
        </>
    );
}

export default ReachUs;
