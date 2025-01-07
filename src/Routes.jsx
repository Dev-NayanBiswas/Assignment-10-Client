import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "./MainLayout"
import ErrorPage from "./Pages/ErrorPage/ErrorPage"
import Home from "./Pages/Home/Home"
import Details from "./Pages/DetailPage/Details"
import Registration from "./Pages/Registration/Registration"
import SignUp from "./Pages/Registration/SignUp"
import SignIn from "./Pages/Registration/SignIn"
import AllMovies from "./Pages/AllMovies/AllMovies"
import MyFavorites from "./Pages/MyFavorites/MyFavorites"
import FAQ from "./Pages/FAQ/FAQ"
import ForgetPassword from "./Pages/Registration/ForgetPassword"
import PrivateRoute from "./Pages/Private/PrivateRoute"
import AddMovies from "./Pages/AddOrEdit/AddMovies"

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                loader:()=>fetch('https://assignment-10-server-kohl-seven.vercel.app/movies'),
                element:<Home/>
            },
            {
                path:"allMovies",
                element:<AllMovies/>
                
            },
            {
                path:"myFavorites",
                element:<PrivateRoute>
                    <MyFavorites/>
                </PrivateRoute>
            },
            {
                path:"FAQ",
                element:<FAQ/>
            },
            {
                path:"production/:ID?",
                loader:({params})=>fetch(`https://assignment-10-server-kohl-seven.vercel.app/movies/${params.ID||"b51715dbd2ff48f4a4c64025"}`),
                element:<PrivateRoute>
                    <AddMovies/>
                </PrivateRoute>
            },
            {
                path:"details/:ID?",
                loader:({params})=>fetch(`https://assignment-10-server-kohl-seven.vercel.app/movies/${params.ID || "b51715dbd2ff48f4a4c64025"}`),
                element:<Details/>
               
            },
            {
                path:"registration",
                element:<Registration/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to="signUp" replace/>
                    },
                    {
                        path:"signUp",
                        element:<SignUp/>
                    },
                    {
                        path:"signIn",
                        element:<SignIn/>
                    },
                    {
                        path:"forgetPassword/:email?",
                        element:<ForgetPassword/>
                    }
                ]
            }
        ]
    }
])

export default Routes
