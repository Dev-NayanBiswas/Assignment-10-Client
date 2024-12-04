import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData, useOutletContext, useParams } from "react-router-dom";


function Details(){
    const detailsData = useLoaderData();
    const [productData, setProductData] = useState(detailsData || null)

  return (
    <>
        Details
        {
            productData?
            <section>
                <p>{productData && productData.name}</p>
            <section>
                <button className=""><GrEdit/></button>
                <button><MdDeleteForever/></button>
            </section>
            </section> :
            <section>
                        <h1>Should Choose an Item First</h1>
                        <Link to="/">Go Home</Link>
            </section>
        }
    </>
  )
}

export default Details