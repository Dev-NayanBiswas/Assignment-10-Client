import { useEffect, useState } from "react";
import { useCURD } from "../../AllProviders/CURDProvider"
import Spinner from "../../Components/Spinner/Spinner";
import MovieCard from "../../Components/MovieCard.jsx"

function AllMovies(){
    const {allData, allMoviesFetcher, spinner} = useCURD();
    const [userQuery, setUserQuery] = useState(null);

    useEffect(()=>{
      if(userQuery){
        allMoviesFetcher(userQuery)
      }else{
        allMoviesFetcher()
      }
      
    },[userQuery])

  return (
    <section>
      <section className="flex lg:flex-row flex-col justify-center items-center mb-5 gap-4 my-20">
      <section className="flex-1">
      <section className="flex justify-center items-center mb-5 gap-4">
        <div className="border-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Movie Hub</h1>
        <div className="border-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="lg:w-9/12 w-full px-3 text-center mx-auto">Movies Hub is a community-driven platform where movie enthusiasts can explore, share, and contribute their favorite films. It serves as an open-source haven for film lovers, offering a diverse collection of movies curated by people from all walks of life. Whether you're searching for hidden gems or sharing your own recommendations</p>
      </section>
        <section className="flex items-start justify-center relative lg:-top-9 ">
          <input 
          type="search" 
          name="search" 
          id="search" 
          placeholder="Search Movie Title"
          className="searchInput"
          defaultValue={userQuery}
          onChange={(e)=>setUserQuery(e.target.value)}
          />
        </section>
      </section>
      <div className="my-10">
      {
        spinner ? <Spinner/> : <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {
            allData?.map((data)=><MovieCard key={data._id} itemData={data}/>)
          }
        </section>
      }
    </div>
    </section>
  )
}

export default AllMovies