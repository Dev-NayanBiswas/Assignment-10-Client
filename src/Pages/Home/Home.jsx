import {motion} from "motion/react"
import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner.jsx";
import HelpSection from "../../Components/HelpSection.jsx";
import MoviePackages from "../../Components/MoviePackages.jsx";
import toastAlert from "../../Utilities/Scripts/toastAlert.js";
import Spinner from "../../Components/Spinner/Spinner.jsx";
import MovieCard from "../../Components/MovieCard.jsx"
import dynamicTitle from "../../Utilities/Scripts/dynamicTitle.js";
import TeamSection from "../../Components/TeamSection.jsx";
import Announce from "../../Components/Announce.jsx";
import ReachUs from "../../Components/ReachUs.jsx";

function Home(){
  dynamicTitle("ReelEra || Home")
  const [loading, setLoading] = useState(true);
  const [featMovies, setFeatMovies] = useState([]);

  useEffect(()=>{
    (
      async()=>{
        try{
          const response = await fetch("https://assignment-10-server-kohl-seven.vercel.app/featMovies");
          if(response.ok){
            const result = await response.json();
            setFeatMovies(result);
            setLoading(false)
          }else{
            throw new Error(`Error in Loading Feature Movies`)
          }
        }catch(error){
          toastAlert("error",error.message)
        }
      }
    )()
  },[])
   
  return (
    <>
    <section className="mt-10">
      <Banner/>
    </section>
    <section className="my-10">
      <article>
        <section className="flex justify-center items-center mb-5 gap-4">
        <div
         className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Featured Movies</h1>
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Explore the top 6 featured movies on our website, chosen based on user ratings. These crowd favorites combine thrilling stories, breathtaking visuals, and stellar performances for a truly unforgettable cinematic experience!</p>
      </article>
      {
        loading ? <Spinner/> : <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          
        {
          featMovies?.map((movie)=><MovieCard key={movie._id} itemData={movie}/>)
        }
      </section>
      }
      <motion.section
      initial={{
        opacity:0,
        y:200
      }}
      whileInView={{
        transition:{
          duration:0.5,
          type:'spring',
          damping:10
        },
        opacity:1,
        y:0
      }}
       className="my-40">
        <MoviePackages/>
      </motion.section>
      {/* Announce */}
      <section>
        <Announce/>
      </section>
      {/* Team Section*/}
      <section>
        <TeamSection/>
      </section>


      <motion.section
      id="helps"
        initial={{
          opacity:0,
          y:200
        }}
        whileInView={{
          transition:{
            duration:1,
            type:'spring',
            damping:10
          },
          opacity:1,
          y:0
        }}
       className="my-40">
        <HelpSection/>

      </motion.section>
        {/* email Section*/}
      <section>
          <ReachUs/>
      </section>
    </section>
    </>
  )
}

export default Home