import { Link } from "react-router-dom"
import { useCURD } from "../AllProviders/CURDProvider"

function ProductCard({itemData}){
  const {deleteProduct} = useCURD()
    const {name, _id, category} = itemData ||{}

  function handleDelete(ID){
    deleteProduct(ID)
  }

  return (
    <>
        <section className="bg-gray-400 p-4">
            <p>{name}</p>
            <h1>{category}</h1>
            <section className="flex justify-center items-center">
                <Link to={`/production/${_id}`} className="px-6 py-2 bg-green-300">Edit</Link>
                <button onClick={()=>handleDelete(_id)} className="px-6 py-2 bg-red-300">Delete</button>
                <Link to={`/details/${_id}`} className="px-6 py-2 bg-sky-300">Details</Link>
            </section>
        </section>
    </>
  )
}

export default ProductCard