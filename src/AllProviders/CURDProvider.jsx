import { useContext, useEffect, useState} from "react";
import { CURDContext } from "../Utilities/Scripts/AllContexts"
import toastAlert from "../Utilities/Scripts/toastAlert";

function CURDProvider({children}){


    const [allData, setAllData]=useState([])
    const [favMovies, setFavMovies]=useState([]);
    const [spinner, setSpinner] = useState(true);
    

            

            // useEffect(()=>{
            //     if(selectedRating){
            //         console.log("Hello World")
            //         const filterMovies = allData?.filter(item=>item.rating === selectedRating);
            //         setAllData(filterMovies);
            //         console.log(filterMovies)
            //     }else{
            //         console.log("Less then 3")
            //         allMoviesFetcher()
            //     }
            // },[selectedRating])
    
 

    //! Favorite Movies Fetcher Function 
    async function favMoviesFetcher(email){
        try{
            const response = await fetch(`https://assignment-10-server-kohl-seven.vercel.app/favMovies/${email}`);
            if(!response.ok){
                throw new Error(`Error happened in Loading Favorite Movies ${response.status}`)
            }else{
                const result = await response.json();
                setSpinner(false);
                setFavMovies(result)
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    //! All Movies Fetcher function 

    async function allMoviesFetcher(query){
        try{
            const response = await fetch(`https://assignment-10-server-kohl-seven.vercel.app/${ query?`movies?searchQuery=${query}` :'movies'}`);
            if(!response.ok){
                throw new Error(`Error in loading All Movies ${response.status}`)
            }else{
                const result = await response.json();
                setAllData(result);
                setSpinner(false);
            }
        }catch(error){
            toastAlert('error',error.message)
        }

    }



    //! PUT Method 
    async function updateOne(data, ID){
        try{
            const response = await fetch(`https://assignment-10-server-kohl-seven.vercel.app/movies/${ID}`,{
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
                if(result.modifiedCount){
                    toastAlert("success",`${data.title} has Updated`)
                }
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    //! Add to Favorite
    async function addFavorite(data){
        try{
            
            const response = await fetch("https://assignment-10-server-kohl-seven.vercel.app/favMovies",{
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
                if(result.acknowledged){
                    setFavMovies([...favMovies, data])
                    toastAlert("success",`${data.title} added to Favorite List`)
                }
                
            }
        }catch(error){
            toastAlert("error", error.message)
        }
    }
    
    //! Delete From Fav Movies 
    async function deleteFromFavMovies(ID){
        try{
            const response = await fetch(`https://assignment-10-server-kohl-seven.vercel.app/favMovies/${ID}`,{
                method:"DELETE",
            });
            if(!response.ok){
                throw new Error(`Error in Deleting Favorite Movie`)
            }else{
                const result = await response.json();
                if(result.deletedCount){
                    const newFavMovies = favMovies.filter(movie=> movie._id !== ID);
                    setFavMovies(newFavMovies); 
                    toastAlert('success','Successfully Removed');
                }
                
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    //!Add a New Movie 
    async function addProduct(data){
        try{
            const response = await fetch('https://assignment-10-server-kohl-seven.vercel.app/movies',{
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
                setAllData([...allData,data]);
                toastAlert("success",`${data.title} added to Movies`)
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    //! Delete Method from Movies
    async function deleteProduct(ID){
        try{
            const response = await fetch(`https://assignment-10-server-kohl-seven.vercel.app/movies/${ID}`,{
                method:"DELETE"
            })
            if(response.ok){
                const result = await response.json();
                if(result.deletedCount){
                    const removeFromState = allData?.filter(data=> data._id !== ID);
                    setAllData(removeFromState);
                    toastAlert("info", "Successfully Deleted");
                }
            }else{
                throw new Error(`Error in Delete Method status : ${response.status}`)
            }
        }catch(error){
            toastAlert("error",error.message)
        }
    }

    const CURDoperations ={

        setAllData,

        spinner,
        allMoviesFetcher,
        favMovies,
        favMoviesFetcher,
        allData,
        updateOne,
        addProduct,
        deleteProduct,
        addFavorite,
        deleteFromFavMovies
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