import { useEffect } from "react";
import { useCURD } from "../../AllProviders/CURDProvider"
import FavCard from "../../Components/FavCard";
import { useAuth } from "../../AllProviders/AuthProvider";
import { Link } from "react-router-dom";


function MyFavorites(){
  const {favMoviesFetcher,favMovies,deleteFromFavMovies} = useCURD();
  const {userData} = useAuth();
  

  useEffect(()=>{
      const userEmail = userData?.email;
      favMoviesFetcher(userEmail)
  },[userData])



  function handleFavDelete(id){
    deleteFromFavMovies(id)
  }
  return (
    <>
      <section>
      <section className="flex justify-center items-center mb-5 gap-4 my-[20vh]">
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Favorite Movies</h1>
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm font-semibold lg:w-7/12 md:w-10/12 w-full md:text-center text-justify mx-auto">Users got the freedom to create and manage their own movie collection. Whether they want to save classics, trending films, or personal favorites, this page serves as a convenient hub for their movie journey.</p>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-6 my-10">
            {
              favMovies?.map((movie)=><FavCard onDelete={handleFavDelete} cardData={movie} key={crypto.randomUUID()}/>)
            }
        </section>
        {
          !favMovies?.length ? <section className="w-full text-center min-h-[20vh]">
            <h1 className="text-red-500 font-semibold text-4xl my-7">Empty Page</h1>
            
            <Link to="/allMovies" className="active">Let's Add Movies</Link>
          </section> : ""
        }
      </section>
    </>
  )
}

export default MyFavorites