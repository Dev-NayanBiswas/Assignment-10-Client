import Banner from "../../Components/Banner/Banner.jsx";
import FeatureCard from "../../Components/FeatureCard.jsx";
import HelpSection from "../../Components/HelpSection.jsx";
import MoviePackages from "../../Components/MoviePackages.jsx";
import PrivateRoute from "../Private/PrivateRoute.jsx";

function Home(){
   
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
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {
          Array(6).fill(null).map((_,index)=><FeatureCard key={index}/>)
        }
      </section>
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