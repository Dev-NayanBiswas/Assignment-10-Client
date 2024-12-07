import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";
import { RiStarFill } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { GiFilmSpool } from "react-icons/gi";
import {
  Link,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { useCURD } from "../../AllProviders/CURDProvider";
import { useAuth } from "../../AllProviders/AuthProvider";
import { useEffect, useState } from "react";
import toastAlert from "../../Utilities/Scripts/toastAlert";
import Spinner from "../../Components/Spinner/Spinner";

function Details() {
    const [isFavorite, setIsFavorite] = useState(false)
    const {favMovies,addFavorite, deleteProduct,favMoviesFetcher, spinner} = useCURD();
    const redirect = useNavigate();
    const {userData} = useAuth();
    const cardData = useLoaderData()
  const { _id, title, thumbnail, summary, release, rating, genre, duration} = cardData || {};
  const email = userData?.email;


  
  
  useEffect(() => {
    if (!favMovies.length) {
      favMoviesFetcher(email);
    }
    const favTitles = favMovies?.map(({ title }) => title);
    if (favTitles.includes(title)) {
      setIsFavorite(true);
    }
  }, [favMovies, title, email, favMoviesFetcher]);

  async function handleMovies(){
    
    const {_id,...remainingCardData} = cardData;
    const newData = {...remainingCardData, email:email};
    const titleArray = favMovies?.map(({title})=>title)



    if(titleArray.includes(newData.title)){
        toastAlert("error","Already existed in Favorite List");
        return;
    }else{
            await addFavorite(newData);
    }
  }

  function handleDelete(id){
        deleteProduct(id);
        redirect("/allMovies")
        return;
  }

  return (
    <>
    {
      spinner ? <Spinner/> : ""
    }
      {title ? (
        <section>
          <section className="flex justify-center items-center my-10 gap-4">
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Movie Details</h1>
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
          <section className=" my-8">
          <section className='relative flex lg:flex-row flex-col items-center justify-center lg:w-8/12 mx-auto'>
            <section className='lg:h-[80vh] h-[80vh] md:h-[90vh] lg:w-10/12 w-full -z-50'>
              <img
                className='object-cover md:w-full md:object-top h-full'
                src={thumbnail}
                alt=''
              />
            </section>
            <section className='lg:h-[80vh] md:h-[40vh] w-full space-y-4 lg:flex lg:flex-col lg:justify-center lg:ml-8 ml-0'>
            <h3 className='text-5xl font-schi my-3 font-semibold text-left'>
            {title}
          </h3>
              <p className='text-sky-400 my-5'>
                Plot <span className='text-gray-400 ml-1'>{summary}</span>
              </p>
              <p className='text-lg font-semibold space-x-3'>
                Genre{" "}
                {genre.map((type, index) => (
                  <span
                    className='px-2 text-sm uppercase py-1 bg-slate-200 rounded-sm font-semibold'
                    key={index}>
                    {type}
                  </span>
                ))}
              </p>
              <p className='text-lg font-semibold'>Duration {" "}
                <span className='text-sky-400'>
                  {Math.round(duration / 60)}
                </span>{" "}
                Hrs <span className='text-sky-400'>{duration % 60}</span> Min
              </p>
              <p className='text-lg font-semibold'>
                Released on <span className='text-sky-400'>{release}</span>
              </p>
              <div className='flex items-center space-x-1 mb-5'>
                <Rating value={rating} />
              </div>
              <section className="text-left flex gap-4">
            <button onClick={()=>{
              setIsFavorite(true)
              handleMovies();
            }} className={`text-3xl text-gray-500 ${ isFavorite ? "pointer-events-none" : "cursor-pointer"}`}>
              {isFavorite ? <GoHeartFill fill="red" size={30}/> :<GoHeart size={30} />}
            </button>
            <Link to={`/production/${_id}`} className="text-3xl">
              <RiEdit2Line className="text-sky-500" size={30} />
            </Link>
            <button onClick={()=>handleDelete(_id)} className="text-3xl">
              <MdDeleteForever fill="#f3311685" size={30} />
            </button>
          </section>
            </section>
          </section>
          </section>
          <section className="text-center my-3">
            <Link to='/allMovies' className='inActive !py-2'>
              See All Movies <GiFilmSpool size={35} className="inline-block ml-4 relative -right-3 -scale-100 -rotate-90" />
            </Link>
          </section>
        </section>
      ) : (
        <section className='lg:w-5/12 mx-auto text-center my-8'>
          <h1 className='text-yellow-400 font-schi text-3xl mb-10'>
            Should Choose an Item First
          </h1>
          <section>
            <Link className='active !rounded-e-none' to='/'>
              Go Home
            </Link>
            <Link className='inActive !rounded-s-none' to='/allMovies'>
              All Movies <GiFilmSpool />
            </Link>
          </section>
        </section>
      )}
    </>
  );
}

export default Details;

function Rating({ value }) {
  const stars = Array(value).fill(null);
  return (
    <>
      {stars.map((_, index) => (
        <RiStarFill size={25} fill='gold' key={index} />
      ))}
    </>
  );
}
