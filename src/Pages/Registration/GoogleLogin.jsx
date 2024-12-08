import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AllProviders/AuthProvider"
import { FaGoogle } from "react-icons/fa";
import {motion} from "motion/react";


function GoogleLogin(){
    const location = useLocation();
    const redirect = useNavigate();
    const {googleLogin} = useAuth()

    const buttonVariant={
      hover:{
        scale:1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow : "0px 0px 8px rgb(255,255,255)",
        transition:{
          duration:0.5,
          repeat:Infinity,
          repeatType:"loop"
        }
      }
    }

    function handleGoogleSignIn(){
      googleLogin()
      .then(()=>{
        redirect(`${location.state? location.state : "/"}`)
      })
    }
  return (
    <>
        <motion.span
        variants={buttonVariant}
        whileHover="hover"
        onClick={handleGoogleSignIn} className="active flex items-center gap-4 cursor-pointer"><FaGoogle /> Google Signin</motion.span>
    </>
  )
}

export default GoogleLogin