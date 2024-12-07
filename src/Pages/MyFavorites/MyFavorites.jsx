import { useEffect } from "react";
import { useCURD } from "../../AllProviders/CURDProvider"
import FavCard from "../../Components/FavCard";
import { useAuth } from "../../AllProviders/AuthProvider";
import { Link } from "react-router-dom";
import { motion } from "motion/react";


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
        <motion.div
        initial={{opacity:0, x:'-100vw'}}
        animate={{x:0, opacity:1, transition:{
          duration:1,
          type:"spring",
          damping:15
        }}}
         className="border-b-[1px] border-defaultColor flex-1 w-4/12 origin-right"/>
        <h1 className="sectionHeading text-center">Favorite Movies</h1>
        <motion.div
        initial={{opacity:0, x:'100vw'}}
        animate={{x:0, opacity:1, transition:{
          duration:1,
          type:"spring",
          damping:15
        }}}
         className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm font-semibold lg:w-7/12 md:w-10/12 w-full md:text-center text-justify mx-auto">Users got the freedom to create and manage their own movie collection. Whether they want to save classics, trending films, or personal favorites, this page serves as a convenient hub for their movie journey.</p>
        <motion.section
        initial={{y:"100vh", opacity:0}}
        animate={{
          y:0, 
          opacity:1,
          transition:{
            duration:2,
            type:"tween",
            ease:"easeInOut"
          }
        }}
         className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-6 my-10">
            {
              favMovies?.map((movie, index)=><FavCard onDelete={handleFavDelete} index={index} cardData={movie} key={crypto.randomUUID()}/>)
            }
        </motion.section>
        {
          !favMovies?.length ? <motion.section
          initial={{y:"100vh", opacity:0}}
          animate={{y:0, opacity:1, transition:{duration:1, delay:1}}}
           className="w-full text-center min-h-[20vh]">
            <h1 className="text-red-500 font-semibold text-4xl my-7">Empty Page</h1>
            
            <Link to="/allMovies" className="active">Let's Add Movies</Link>
          </motion.section> : ""
        }
      </section>
    </>
  )
}

export default MyFavorites