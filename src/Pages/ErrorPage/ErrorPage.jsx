import { Link, useNavigate, useRouteError } from "react-router-dom";
import LostSVG from "../../Components/SVGComponents/LostSVG"
import {motion} from "motion/react"

function ErrorPage(){
  const navigate = useNavigate()
    const error = useRouteError();
  return (
    <>
      <section className="h-screen w-full overflow-x-hidden text-white/20 flex justify-center gap-3 items-center my-14">
      <section className="text-center text-black space-y-3">
        <motion.figure
        initial={{
          opacity:0,
          y:"-100vh"
        }}
        animate={{
          opacity:1,
          y:0,
          transition:{
            duration:0.5,
            type:"spring",
            stiffness:100
          }
        }}
         className="md:h-[30vh] h-[30vh] flex justify-center items-center mb-10 z-40">
        <LostSVG/>
        </motion.figure>
      <motion.h1
      initial={{
        opacity:0,
        scale:0,
        y:"50vh"
      }}
      animate={{
        opacity:1,
        scale:1,
        y:0
      }}
       className="md:text-5xl text-4xl text-red-400 font-bold">Oops!</motion.h1>
      <p className="md:text-xl text-lg font-semibold italic text-defaultColor">Sorry, an unexpected error has occurred.</p>
      <p className="md:text-3xl text-xl text-red-400 font-black">
        {error.error.message}
      </p>
        <p className="md:text-4xl text-2xl text-yellow-400 font-serif">{error.statusText}</p>
        <section

         className="flex justify-center items-center gap-4">
          <motion.button
          initial={{
            opacity:0,
            x:"-10vw"
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{
              type:"spring",
            }
          }}

           onClick={()=>navigate(-1)} className="inActive">Go Back</motion.button>
          <Link to="/"><motion.button
          initial={{
            opacity:0,
            x:"10vw"
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{
              type:"spring",
            }
          }}
           className="active">Return Home</motion.button></Link>
        </section>
      </section>
    </section>
    </>
  )
}

export default ErrorPage
