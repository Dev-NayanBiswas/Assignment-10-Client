import { motion } from "motion/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import LogoSVG from "../SVGComponents/LogoSVG";
import ThemeToggler from "../ThemeToggler";
import { useState } from "react";
import { useAuth } from "../../AllProviders/AuthProvider";

function Navbar(){
  const [showDropdown, setShowDropdown] = useState(false);
  const {userData,signOutUser} = useAuth()
  
    const paths = [
        {path:"/", name:"Home"},
        {path:"/production", name:"Add Movies"},
        {path:"/allMovies", name:"All Movies"},
        {path:"/myFavorites", name:"My Favorites"},
        {path:"/registration", name:"Registration"},
        {path:"/FAQ", name:"FAQ"},
    ]
  return (
    <>
      <nav className='navbar min-h-20'>
        <nav className='navbar-start flex-1 flex items-center justify-start'>
          <LogoSVG/>
          <motion.h1
          initial={{x:-100, opacity:0}} 
          animate={{
            x:0, 
            opacity:1,
            transition:{
              delay:1.3,
              duration:1.5,
              type:"spring",
              bounce:0.5
            }
           }}
          className="font-logo text-4xl text-defaultColor font-semibold tracking-wide">ReelEra
            <small className="text-xs font-space text-pink-300 italic tracking-tight font-thin md:block hidden">one stop for all Movies</small>
          </motion.h1>
        </nav>



        <motion.nav
          initial={{
            y:-180,
            opacity:0.2
          }}

          animate={{
            y:0,
            opacity:1,
            transition:{
              type:"spring",
              stiffness:80
            }
          }}
         className='navbar-center flex-1 justify-center items-center lg:flex lg:gap-4 md:gap-2 hidden'>
          {
            paths.map(({path,name}, index)=>
            <motion.button
            initial={{
              opacity:0,
              y:"-40vh"
            }}
            animate={{
              opacity:1,
              y:0,
              transition:{
                duration:1,
                type:"spring",
                delay:index/5
              }
            }}
            whileHover={{
              scale:1.1,
            }}
            whileTap={{
              rotate:3,
              scale:0.98
            }} 
            key={index}>
              <NavLink to={path} className={({isActive})=>isActive? "active": "inActive"}>{name}</NavLink>
            </motion.button>)
          }
        </motion.nav>




        <nav className='navbar-end flex-1'>
            {/* Avatar */}
          {
            userData?.email? 
            <div onMouseEnter={()=>setShowDropdown(true)} className='avatar relative cursor-pointer'>
            <div className='ring-defaultColor ring-offset-black h-10 aspect-square rounded-full ring-[2px] ring-offset-2'>
              <img src={userData?.photoURL? userData.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} />
            </div>
            <section
              onMouseLeave={()=>setShowDropdown(false)}
                className={`absolute right-0 mt-10 w-48 rounded-md shadow-lg transition-transform transform px-2 ${
                    showDropdown
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <ul className="py-2 space-y-4">
                    <li>
                        <h5 onClick={()=>setShowDropdown(false)} className="block w-full px-4 py-2 text-left text-defaultColor hover:bg-gray-100 text-xl font-semibold">
                            {userData.displayName}
                        </h5>
                    </li>
                    <li>
                        <button onClick={()=>{setShowDropdown(false);signOutUser()}} className="block active !border-red-700 !bg-red-700 w-full">
                            Logout
                        </button>
                    </li>
                </ul>
            </section>
            <div>

            </div>
          </div> : <NavLink to="/registration/signIn" className={({isActive})=> isActive? "active lg:block hidden":"inActive lg:block hidden"}>Login</NavLink>}
          <ThemeToggler/>
          {/* DropDownMenu */}
          <section className='dropdown dropdown-end lg:hidden z-50'>
            <button
              tabIndex={0}
              role='button'
              className='btn btn-ghost rounded-btn'>
              <GiHamburgerMenu size={24} className="text-defaultColor" />
            </button>
            <ul
              tabIndex={0}
              className='menu bg-base-100 dropdown-content rounded-box z-[1] mt-4 w-52 p-2 shadow flex flex-col gap-4'>
              {
                paths.map(({path, name}, index)=>
                  <motion.li
                whileTap={{
                  rotate:2,
                  scale:0.98
                }} 
                   key={index}>
              <NavLink  to={path} className={({isActive})=>isActive? "active": "inActive"}>{name}</NavLink>
              </motion.li>
                )
              }
              {
                userData?.email? "":<NavLink to="/registration/signIn" className={({isActive})=> isActive? "active":"inActive"}>Sign In</NavLink>
              }
            </ul>
          </section>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;









