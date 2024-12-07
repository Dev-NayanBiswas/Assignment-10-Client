import { MdDeleteForever } from "react-icons/md";
import { RiStarFill } from "react-icons/ri";
import {motion} from "motion/react";

function FavCard({cardData, onDelete, index}){
    const {_id, title, thumbnail, summary, release, rating, genre, duration, isFavorite } = cardData || {};
  return (
    <>
        
            <motion.section
            initial={{
              y:'50vh',
              opacity:0
            }}
            animate={{
              y:0,
              opacity:1,
              transition:{
                delay:index/2,
                type:"spring",
                damping:20,
                duration:0.5
              }
            }}
             className="w-full h-[40vh] flex rounded-lg" >
                <section className="flex-1 w-1/2 h-[40vh] rounded-s-lg">
                    <img src={thumbnail} alt="" className="h-full w-full object-top object-cover rounded-s-lg" />
                </section>
                <section className="flex-1 w-1/2 h-[40vh] rounded-e-lg flex flex-col justify-evenly">
                <section className="ml-4">
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="text-sky-400 font-semibold italic">{genre.map((data,index)=><span key={index} className="mx-2">{data}</span>)}</p>
                </section>
                <section className="text-left mx-3 space-y-3">
                <p className="font-semibold">Runtime {duration} minutes</p>
                <p className="font-semibold">Released on {release}</p>
                <p className="flex gap-1 items-center">IMDB <Rating value={rating}/></p>
                </section>
                <button onClick={()=>onDelete(_id)} className="inActive self-start ml-4 flex items-center gap-3">Delete <MdDeleteForever/></button>
                </section>
            </motion.section>

    </>
  )
}

export default FavCard


function Rating({ value }) {
    const stars = Array(value).fill(null);
    return (
      <>
        {stars.map((_, index) => (
          <RiStarFill size={15} fill='gold' key={index} />
        ))}
      </>
    );
  }