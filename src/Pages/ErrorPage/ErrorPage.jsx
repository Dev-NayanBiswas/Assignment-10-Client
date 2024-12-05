import { Link, useNavigate, useRouteError } from "react-router-dom";
import LostSVG from "../../Components/SVGComponents/LostSVG"

function ErrorPage(){
  const navigate = useNavigate()
    const error = useRouteError();
  return (
    <>
      <section className="h-screen w-full overflow-x-hidden text-white/20 flex justify-center gap-3 items-center my-14">
      <section className="text-center text-black space-y-3">
        <figure className="md:h-[30vh] h-[30vh] flex justify-center items-center mb-10">
        <LostSVG/>
        </figure>
      <h1 className="md:text-5xl text-4xl text-red-400 font-bold">Oops!</h1>
      <p className="md:text-xl text-lg font-semibold italic text-defaultColor">Sorry, an unexpected error has occurred.</p>
      <p className="md:text-3xl text-xl text-red-400 font-black">
        {error.error.message}
      </p>
        <p className="md:text-4xl text-2xl text-yellow-400 font-serif">{error.statusText}</p>
        <section className="flex justify-center items-center gap-4">
          <button onClick={()=>navigate(-1)} className="inActive">Go Back</button>
          <Link to="/"><button className="active">Return Home</button></Link>
        </section>
      </section>
    </section>
    </>
  )
}

export default ErrorPage
