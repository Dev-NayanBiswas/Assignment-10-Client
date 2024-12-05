import { useEffect, useState } from "react";
import { useCURD } from "../../AllProviders/CURDProvider"
import Spinner from "../../Components/Spinner/Spinner";
import MovieCard from "../../Components/MovieCard.jsx"

function AllMovies(){
    const {allData, setAllData} = useCURD();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      async function dataFetcher(){
        try{
          const response = await fetch('http://localhost:5000/movies');
          if(!response.ok){
            throw new Error("Error happend in Data Fetching")
          }else{
            const result = await response.json();
            setAllData(result);
            setLoading(false)
          }
        }catch(error){
          console.error(error.message)
        }
      }
      dataFetcher()
    },[])

  return (
    <div>
      {
        loading? <Spinner/> : <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {
            allData?.map((data)=><MovieCard key={data._id} itemData={data}/>)
          }
        </section>
      }
    </div>
  )
}

export default AllMovies