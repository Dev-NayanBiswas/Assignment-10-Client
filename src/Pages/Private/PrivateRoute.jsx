import { useAuth } from '../../AllProviders/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'

function PrivateRoute({children}){
    const {userData,loading} = useAuth()
    const location = useLocation()

    
   
    if(loading){
        return <Spinner/>
    }

    if(userData?.email){
        return children
    }

    return <Navigate to="/registration/signIn" state={location.pathname}/>
    
}

export default PrivateRoute