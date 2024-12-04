import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AllProviders/AuthProvider"
import { FaGoogle } from "react-icons/fa";


function GoogleLogin(){
    const location = useLocation();
    const redirect = useNavigate();
    const {googleLogin} = useAuth()

    function handleGoogleSignIn(){
      googleLogin()
      .then(()=>{
        redirect(`${location.state? location.state : "/"}`)
      })
    }
  return (
    <>
        <span onClick={handleGoogleSignIn} className="active flex items-center gap-4 cursor-pointer"><FaGoogle /> Google Signin</span>
    </>
  )
}

export default GoogleLogin