import {motion, useScroll, useSpring, useTransform} from "motion/react"
import { Outlet} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer"

function MainLayout(){
  const {scrollYProgress} = useScroll()
  const springEffect = useSpring(scrollYProgress)
  const colorTransform = useTransform(scrollYProgress, [0,1],['#ba68c8','#ba68c8'])

  return (
    <>
        <section className="w-11/12 mx-auto overflow-x-hidden overflow-y-hidden relative">
        <motion.div
        style={{
          scaleX:springEffect,
          background:colorTransform
        }}
        className="w-full top-0 h-2 rounded-b-full fixed origin-right z-50 right-0"
        />
            <section className="fixed w-11/12 navContainer top-0 z-40">
                <Navbar/>
            </section>
            <div className="h-[96px] w-full"/>
            <section className="min-h-[80vh] mx-auto">
              <Outlet/>
            </section>
            <motion.section
              initial={{
                opacity:0,
                y:200
              }}
              whileInView={{
                transition:{
                  duration:5,
                  type:'spring',
                  damping:10
                },
                opacity:1,
                y:0
              }}
            >
              <Footer/>
            </motion.section>
        </section>
    </>
  )
}

export default MainLayout