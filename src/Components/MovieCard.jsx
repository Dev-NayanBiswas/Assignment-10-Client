import {motion} from "motion/react";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ProductCard({itemData, idx}){
    const {_id,title,thumbnail,genre,duration,release,rating} = itemData ||{}


  return (
    <>
        <motion.figure
        initial={{
          y:100,
          opacity:0.5,
        }}
        whileInView={{
          y:0,
          opacity:1,
          transition:{
            duration:0.5,
            delay:idx/20,
                type:"tween",
                ease:"easeInOut"
          }
        }}
        viewport={{once:false,margin:'10px'}}
         className='cursor-pointer border-gray-50/10 border-[1px] flex flex-col justify-between  shadow-xl rounded-bl-xl rounded-br-xl'>
            
            <figure className="h-[650px] lg:h-[800px] w-full p-2 overflow-hidden">
            <motion.img
            whileHover={{
              scale:1.1,
              rotate:1,
              transition:{
                duration:0.3,
              }
            }}
             className="w-full h-full lg:object-contain object-cover" src={thumbnail} alt='' />
            </figure>
            <figcaption className='px-7 py-5 space-y-3'>
              <h3 className='text-2xl my-3 font-semibold'>{title}</h3>
              <p className="text-lg font-semibold space-x-3">Genre {genre.map((type, index)=><span className="px-2 text-sm uppercase py-1 bg-defaultColor/20 rounded-md font-semibold" key={index}>{type}</span>)}</p>
              <p className='text-lg font-semibold'>
                Duration <span className="text-sky-400">{Math.round(duration/60)}</span> Hrs <span className="text-sky-400">{duration%60}</span> Min
              </p>
              <p className='text-lg font-semibold'>
                Released on <span className="text-sky-400">{release}</span>
              </p>
              <div className='flex items-center space-x-1 mb-5'>
                <span className="text-lg font-semibold mr-3">Rating</span> <Rating value={rating}/>{""} <span className="ml-3 italic tracking-wider text-lg font-bold">{rating} / 5</span>
              </div>
              
            </figcaption>
            <section className="px-7 py-5">
              <motion.button
              whileHover={{
                scale:1.1,
                transition:{
                  duration:0.3
                }
              }}
              whileTap={{
                scale:0.95,
                transition:{
                  type:"bounce"
                }
              }}
              ><Link to={`/details/${_id}`} className="inActive">See Details</Link></motion.button>
            </section>
            
          </motion.figure>
    </>
  )
}

export default ProductCard

function Rating({value}){
  const stars = Array(value).fill(null);
  return (
    <>
      {
        stars.map((_, index)=><RiStarFill fill="gold" key={index}/>)
      }
    </>
  )
}
