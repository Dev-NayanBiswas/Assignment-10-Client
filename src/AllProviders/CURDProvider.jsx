import { useContext, useState} from "react";
import { CURDContext } from "../Utilities/Scripts/AllContexts"
import { useAuth } from "./AuthProvider";

function CURDProvider({children}){


    const [allData, setAllData]=useState([])
    const [favMovies, setFavMovies]=useState([])

    //! PUT Method 
    async function updateOne(data, ID){
        try{
            const response = await fetch(`http://localhost:5000/movies/${ID}`,{
                method:"PUT",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(data)
            })
            if(!response.ok){
                throw new Error(`Error in Updating Data Status : ${response.status}`)
            }else{
                const result = await response.json();
                console.log(result)
            }
        }catch(error){
            console.error(error.message)
        }
    }

    //! Add to Favorite
    async function addFavorite(data){
        try{
            
            const response = await fetch("http://localhost:5000/favMovies",{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(data)
            });
            if(!response.ok){
                throw new Error(`Error in adding Favorite Movie ${response.status}`)
            }else{
                const result = await response.json();
                console.log(result)
                setFavMovies([...favMovies, data])
            }
        }catch(error){

        }
    } 

    //!Add a New Movie 
    async function addProduct(data){
        try{
            const response = await fetch('http://localhost:5000/movies',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            if(!response.ok){
                throw new Error(`Error in adding Products status : ${response.status}`)
            }else{
                const result =  await response.json();
                setAllData([...allData,data])
            }
        }catch(error){
            alert(error.message)
        }
    }

    //! Delete Method from Movies
    async function deleteProduct(ID){
        try{
            const response = await fetch(`http://localhost:5000/movies/${ID}`,{
                method:"DELETE"
            })
            if(response.ok){
                const result = await response.json();
                if(result.deletedCount){
                    const removeFromState = allData?.filter(data=> data._id !== ID);
                    setAllData(removeFromState);
                }
            }else{
                throw new Error(`Error in Delete Method status : ${response.status}`)
            }
        }catch(error){
            console.error(error.message)
        }
    }

    const CURDoperations ={
        favMovies,
        setFavMovies,
        allData,
        updateOne,
        setAllData,
        addProduct,
        deleteProduct,
        addFavorite
    }
  return (
    <CURDContext.Provider value={CURDoperations}>
        {children}
    </CURDContext.Provider>
  )
}

export default CURDProvider;

function useCURD(){
    return useContext(CURDContext)
}
export {useCURD};