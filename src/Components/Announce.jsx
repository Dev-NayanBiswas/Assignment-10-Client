import AnnounceSVG from "./SVGComponents/AnnounceSVG";
import {motion} from "motion/react"



function Announce() {
    return (
        <>
        <article
        className="mt-7"
        >
        <section className="flex justify-center items-center mb-5 gap-4">
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Announcement</h1>
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Our team is a dynamic blend of passionate professionals dedicated to innovation and creativity. Comprising designers, developers, and strategists, we bring diverse perspectives together to craft meaningful solutions. With a shared commitment to excellence, we thrive on collaboration and continuously push boundaries to deliver exceptional results.</p>
      </article>




            <section className="flex flex-col lg:flex-row items-center p-6 rounded-lg">
            <figure className="lg:w-1/2 w-8/12">
                <AnnounceSVG/>
            </figure>
            <section className="w-full h-full">
                <section className="!text-right md:text-lg text-sm">
                
                <p className=" mb-4 mx-auto text-left text-justify">
                We are thrilled to announce the launch of <span className="text-defaultColor text-xl font-semibold font-logo">ReelEra ,</span> a groundbreaking platform designed for movie enthusiasts who love sharing and discovering cinematic gems.<span className="text-defaultColor text-xl font-semibold font-logo">ReelEra </span> is more than just a site—it's a vibrant community where you can upload, share, and recommend your favorite films to friends and fellow cinephiles. Whether it's an indie masterpiece or a Hollywood blockbuster, <span className="text-defaultColor text-xl font-semibold font-logo">ReelEra </span> is here to bring people together through the magic of movies.
                </p>
                <p className=" mb-4 text-right">Join us as we redefine the way we enjoy movies! <span className="text-defaultColor text-xl font-semibold font-logo">ReelEra </span> invites you to build connections, share your passion, and discover the films that truly matter. Stay tuned for exclusive features, exciting updates, and the chance to be part of a community that celebrates the magic of cinema. Sign up now and let the movie-sharing adventure begin!</p>
                <p className=" mb-4 text-left">Together, we are not just a team; we are a family united by the vision of turning ideas into reality and making a difference.</p>
                </section>
            </section>
        </section>
        </>
    );
}

export default Announce;
