import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import HelpSVG from "../Components/SVGComponents/HelpSVG";
import {motion} from "motion/react";
import { RxCounterClockwiseClock } from "react-icons/rx";


function HelpSection() {
    return (
        <>
        <article
        className="mt-7"
        >
        <section className="flex justify-center items-center mb-5 gap-4">
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Need Help ?</h1>
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Our online customer service ensures seamless, responsive, and personalized support, offering convenience, efficiency, reliability, and satisfaction at every interaction.</p>
      </article>



            <section className="flex flex-col lg:flex-row items-center p-6 rounded-lg">
            <figure className="lg:w-1/2 md:w-8/12 w-full">
                <HelpSVG/>
            </figure>

            <section className="lg:w-8/12 w-full h-full flex flex-col justify-between items-start">
                <section>
                
                <p className=" mb-4 text-xl lg:w-8/12 w-11/12">
                    We value our subscribers and are always ready to assist. Feel free to
                    reach out to us via phone, email, or visit us at our location.
                </p>
                </section>

                <section className="space-y-4 md:ml-5 ml-0">
                    <section className="flex items-center">
                        <FaPhoneAlt size={20} className="text-defaultColor mr-2" />
                        <span className="text-lg">+123-456-7890</span>
                    </section>
                    <section className="flex items-center">
                        <FaEnvelope size={20} className="text-defaultColor mr-2" />
                        <span className="text-lg">support@reelera.com</span>
                    </section>
                    <section className="flex items-center">
                        <FaMapMarkerAlt size={20} className="text-defaultColor mr-2" />
                        <span className="text-lg">007, James Bond Street, Ohio</span>
                    </section>
                    <section className="flex items-center">
                        <RxCounterClockwiseClock size={25} className="text-defaultColor mr-2" />
                        <span className="text-lg">Meeting Time: 10 AM - 8 PM</span>
                    </section>
                </section>

                <motion.button
                whileHover={{
                    scale:1.2,
                    transition:{
                        type:"spring",
                        duration:0.1,
                        damping:10
                    }
                }}
                
                 className="active !mt-7">
                    Call Now
                </motion.button>
            </section>
        </section>
        </>
    );
}

export default HelpSection;
