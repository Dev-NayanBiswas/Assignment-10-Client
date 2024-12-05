import { useEffect } from "react";
import { useCURD } from "../../AllProviders/CURDProvider"
import toastAlert from "../../Utilities/Scripts/toastAlert";
import FavCard from "../../Components/FavCard";

function MyFavorites(){
  const {favMovies, setFavMovies} = useCURD();

  useEffect(()=>{
    (
      async()=>{
        try{
          const response = await fetch("http://localhost:5000/favMovies");
          if(!response.ok){
            throw new Error(`Error in Loading FavMovies ${response.status}`)
          }else{
            const result = await response.json();
            setFavMovies(result);
          }
        }catch(error){
          toastAlert("error",error.message)
        }
      }
    )()
  },[])
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
              favMovies?.map((movie)=><FavCard cardData={movie} key={movie._id}/>)
            }
        </section>
      </section>
    </>
  )
}

export default MyFavorites