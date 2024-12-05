import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner.jsx";
import HelpSection from "../../Components/HelpSection.jsx";
import MoviePackages from "../../Components/MoviePackages.jsx";
import toastAlert from "../../Utilities/Scripts/toastAlert.js";
import Spinner from "../../Components/Spinner/Spinner.jsx";
import MovieCard from "../../Components/MovieCard.jsx"

function Home(){
  const [loading, setLoading] = useState(true);
  const [featMovies, setFeatMovies] = useState([]);

  useEffect(()=>{
    (
      async()=>{
        try{
          const response = await fetch("http://localhost:5000/featMovies");
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
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Featured Movies</h1>
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Explore the top 6 featured movies on our website, chosen based on user ratings. These crowd favorites combine thrilling stories, breathtaking visuals, and stellar performances for a truly unforgettable cinematic experience!</p>
      </article>
      {
        loading ? <Spinner/> : <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          
        {
          featMovies?.map((movie)=><MovieCard key={movie._id} itemData={movie}/>)
        }
      </section>
      }
      <section>
        <MoviePackages/>
      </section>
      <section>
        <HelpSection/>
      </section>
    </section>
    </>
  )
}

export default Home