import {motion} from "motion/react";
import TeamSVG from "./SVGComponents/TeamSVG";
import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";


function TeamSection(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("./team.json")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>alert(error.message))
    },[])
    return (
        <>
        <article
        className="mt-7"
        >
        <section className="flex justify-center items-center mb-5 gap-4">
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Our Team</h1>
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Our team is a dynamic blend of passionate professionals dedicated to innovation and creativity. Comprising designers, developers, and strategists, we bring diverse perspectives together to craft meaningful solutions. With a shared commitment to excellence, we thrive on collaboration and continuously push boundaries to deliver exceptional results.</p>
      </article>




            <section className="flex flex-col-reverse lg:flex-row items-center p-6 rounded-lg">
            

            <section className="w-full h-full flex flex-wrap justify-center gap-4 items-start" >
                {
                    data?.map((item)=><TeamCard key={item.id} cardData={item}/>)
                }
            </section>
            <figure className="lg:w-9/12 w-full">
                <TeamSVG/>
            </figure>
        </section>
        </>
    );
}

export default TeamSection;
