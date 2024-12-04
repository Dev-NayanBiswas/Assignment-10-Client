import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegHandshake } from "react-icons/fa";
import HelpSVG from "../Components/SVGComponents/HelpSVG"

function HelpSection() {
    return (
        <>
        <article className="mt-7">
        <section className="flex justify-center items-center mb-5 gap-4">
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Need Help ?</h1>
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Our online customer service ensures seamless, responsive, and personalized support, offering convenience, efficiency, reliability, and satisfaction at every interaction.</p>
      </article>
            <section className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg">
            <figure className="md:w-1/2 w-full">
                <HelpSVG/>
            </figure>

            <section className="md:w-8/12 w-full h-full flex flex-col justify-between items-start">
                <section>
                
                <p className=" mb-4 text-xl w-8/12 ">
                    We value our subscribers and are always ready to assist. Feel free to
                    reach out to us via phone, email, or visit us at our location.
                </p>
                </section>

                <section className="space-y-4 md:ml-5 ml-0">
                    <section className="flex items-center">
                        <FaPhoneAlt className="text-blue-500 mr-2" />
                        <span className="text-lg">+123-456-7890</span>
                    </section>
                    <section className="flex items-center">
                        <FaEnvelope className="text-red-500 mr-2" />
                        <span className="text-lg">support@reelera.com</span>
                    </section>
                    <section className="flex items-center">
                        <FaMapMarkerAlt className="text-green-500 mr-2" />
                        <span className="text-lg">007, James Bond Street, Ohio</span>
                    </section>
                    <section className="flex items-center">
                        <FaRegHandshake className="text-purple-500 mr-2" />
                        <span className="text-lg">Meeting Time: 10 AM - 8 PM</span>
                    </section>
                </section>

                <button className="active my-7 md:ml-5 ml-0">
                    Call Now
                </button>
            </section>
        </section>
        </>
    );
}

export default HelpSection;
