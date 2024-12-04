import { useContext, useState} from "react";
import { CURDContext } from "../Utilities/Scripts/AllContexts"

function CURDProvider({children}){
    const [allData, setAllData]=useState([])

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

    //!POST Method 
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

    //! Delete Method 
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
        allData,
        updateOne,
        setAllData,
        addProduct,
        deleteProduct
    }
  return (
    <CURDContext.Provider value={CURDoperations}>
        {children}
    </CURDContext.Provider>
  )
}
export function useCURD(){
    return useContext(CURDContext);
}
export default CURDProvider