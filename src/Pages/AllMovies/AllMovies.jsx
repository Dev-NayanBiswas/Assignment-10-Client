import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useCURD } from "../../AllProviders/CURDProvider"
import Spinner from "../../Components/Spinner/Spinner";
import MovieCard from "../../Components/MovieCard.jsx"
import {motion} from "motion/react";
import { Link } from "react-router-dom";
import dynamicTitle from "../../Utilities/Scripts/dynamicTitle.js";

function AllMovies(){
  const [ascendRating, setAscendRating] = useState("");
    const {allData, allMoviesFetcher, spinner,setAllData} = useCURD();
    const[movieData, setMovieData] = useState(allData);
    const [userQuery, setUserQuery] = useState(null);
    dynamicTitle("All Movies")

    useEffect(()=>{
      if(userQuery){
        allMoviesFetcher(userQuery)
        console.log(userQuery);
      }
      allMoviesFetcher()
      
    },[userQuery])

    
    useEffect(()=>{
      if(ascendRating.length){
        if(ascendRating === "descen"){
          const sortDesc = allData?.toSorted((a,b)=>b.rating-a.rating);
          setAllData(sortDesc) 
        }else if(ascendRating === "ascen"){
          const sortDesc = allData?.toSorted((a,b)=>a.rating-b.rating);
          setAllData(sortDesc)
        }
        if(ascendRating === "old"){
          const sortDesc = allData?.toSorted((a,b)=>a.release-b.release);
          setAllData(sortDesc)
        }else if(ascendRating === "new"){
          const sortDesc = allData?.toSorted((a,b)=>b.release-a.release);
          setAllData(sortDesc)
        }
      }
      
    },[ascendRating])


  return (
    <section>
      







      <section className="flex lg:flex-row flex-col justify-center items-center mb-5 gap-4 my-20">
      <section className="selectDropdown relative -top-10">
      <select
        id="rating-filter"
        value={ascendRating}
        onChange={(e)=>setAscendRating(e.target.value)}
        className="searchInput !pr-10"
      >
        <option value="" disabled>
          Filter Movies
        </option>
        <option value="ascen">Low to High</option>
        <option value="descen">High to Low</option>
        <option value="new">New Released</option>
        <option value="old">Old is Gold</option>
      </select>
      </section>
      <section className="flex-1">
      <section className="flex justify-center items-center mb-5 gap-4">
        <motion.div
        initial={{
          opacity:0,
          x:'-100vw'
        }}
        animate={{
          x:0,
          opacity:1,
          transition:{
            duration:0.3,
            delay:0.5
          }
        }}

        viewport={{once:true}}
         className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Movie Hub</h1>
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="lg:w-9/12 w-full px-3 text-center mx-auto">Movies Hub is a community-driven platform where movie enthusiasts can explore, share, and contribute their favorite films. It serves as an open-source haven for film lovers, offering a diverse collection of movies curated by people from all walks of life. Whether you're searching for hidden gems or sharing your own recommendations</p>
      </section>
        <motion.section
        initial={{
          x:"100vw",
          opacity:0
        }}
        animate={{
          x:0, opacity:1, transition:{
            delay:1,
            duration:1,
            type:"spring",
            damping:15
          }
        }} 
         className="flex items-start justify-center relative lg:-top-9">
          <input
          type="search" 
          name="search" 
          id="search" 
          placeholder="Search by Title"
          className="searchInput !pr-10"
          defaultValue={userQuery}
          onChange={(e)=>setUserQuery(e.target.value)}
          />
          <span className="absolute right-4 top-1/3 text-xl text-defaultColor"><ImSearch /></span>
        </motion.section>
      </section>
      <div className="my-10">
      {
        spinner ? <Spinner/> : <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {
            allData?.map((data, index)=><MovieCard idx={index} key={data._id} itemData={data}/>)
          }
        </section>
      }
    </div>
    {
      allData?.length && !spinner ? " " : <motion.section
      initial={{
        y:"100vh",
        opacity:0
      }}
      animate={{
        y:0,
        opacity:1,
        transition:{
          duration:0.5,
          delay:0.5
        }
      }}
       className="text-center h-[20vh]">
        <h4 className="text-4xl text-center text-sky-400 font-schi">No match Found !</h4>
        <p className="text-center italic text-defaultColor my-7">We encourage you to share this movie with Us</p>
        <Link to="/production" className="active">Let's Add this Movie</Link>
      </motion.section>
    }
    </section>
  )
}

export default AllMovies