import { useAuth } from "../../AllProviders/AuthProvider"
import { FaGoogle } from "react-icons/fa";


function GoogleLogin() {
    const {googleLogin, userData} = useAuth()

    console.log(userData)
  return (
    <>
        <span onClick={googleLogin} className="active flex items-center gap-4 cursor-pointer"><FaGoogle /> Google Signin</span>
    </>
  )
}

export default GoogleLogin