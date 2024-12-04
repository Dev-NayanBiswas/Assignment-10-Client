import { Outlet} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer"

function MainLayout(){

  return (
    <>
        <section className="w-11/12 mx-auto">
            <section>
                <Navbar/>
            </section>
            <section className="min-h-[80vh]">
              <Outlet/>
            </section>
            <section>
              <Footer/>
            </section>
        </section>
    </>
  )
}

export default MainLayout