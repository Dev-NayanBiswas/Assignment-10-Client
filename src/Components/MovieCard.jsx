import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ProductCard({itemData}){
    const {_id,title,thumbnail,genre,duration,release,rating} = itemData ||{}

    console.log(itemData)

  return (
    <>
        <figure className='cursor-pointer border-gray-50/10 border-[1px]  shadow-xl rounded-bl-xl rounded-br-xl'>
            
            <figure className="w-full h-[522px]">
            <img className='w-full h-full mx-auto object-contain object-center mt-6' src={thumbnail} alt='' />
            </figure>
            <figcaption className='px-7 py-5 space-y-3'>
              <h3 className='text-2xl my-3 font-semibold'>{title}</h3>
              <p className="text-lg font-semibold space-x-3">Genre {genre.map((type, index)=><span className="px-2 text-sm uppercase py-1 bg-slate-200 rounded-sm font-semibold" key={index}>{type}</span>)}</p>
              <p className='text-lg font-semibold'>
                Duration <span className="text-sky-400">{Math.round(duration/60)}</span> Hrs <span className="text-sky-400">{duration%60}</span> Min
              </p>
              <p className='text-lg font-semibold'>
                Released on <span className="text-sky-400">{release}</span>
              </p>
              <div className='flex items-center space-x-1 mb-5'>
                <Rating value={rating}/>
              </div>
              
            </figcaption>
            <section className="px-7 py-5">
              <Link to={`/details/${_id}`} className="inActive">See Details</Link>
            </section>
            
          </figure>
    </>
  )
}

export default ProductCard

function Rating({value}){
  const stars = Array(value).fill(null);
  return (
    <>
      {
        stars.map((_, index)=><RiStarFill fill="gold" key={index}/>)
      }
    </>
  )
}
