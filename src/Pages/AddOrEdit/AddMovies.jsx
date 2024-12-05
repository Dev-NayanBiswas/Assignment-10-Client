import { Controller, useForm} from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import { imageUploader } from "../../Utilities/Scripts/imageUploader";
import ReactStars from "react-rating-stars-component";
import { useCURD } from "../../AllProviders/CURDProvider";
import { useLoaderData, useParams } from "react-router-dom";
import { useAuth } from "../../AllProviders/AuthProvider";

function AddMovies() {
  const { addProduct,updateOne,addFavorite } = useCURD();
  const {userData} = useAuth();
  const {ID} = useParams();
  const data = useLoaderData();
  const currentUserEmail = userData?.email;

  const isEdit = !!(ID && data);

  //! Initialize react-hook-form
  const {control,register, handleSubmit, setValue, watch, formState: { errors }, setError, clearErrors, reset } = useForm({defaultValues : {
    title:data?.title || "", 
    thumbnail:data?.thumbnail || "", 
    summary:data?.summary || "", 
    release:data?.release || 0, 
    rating:data?.rating || 0, 
    genre:data?.genre?  data?.genre?.map((genre)=>({
      value:genre,
      label:genre.charAt(0).toUpperCase() + genre.slice(1)
    })) 
    :[], 
    duration:0
  }});

  //! Watch rating for real-time updates
  const currentRating = watch("rating" || 0);


  const genreOptions = [
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comedy" },
    { value: "drama", label: "Drama" },
    { value: "horror", label: "Horror" },
    { value: "sci-fi", label: "Sci-Fi" },
    { value: "history", label: "History" },
    { value: "crime", label: "Crime" },
  ]

  const thisYear = new Date().getFullYear();
  const releaseYear = Array(20).fill(null).map((_,index)=>thisYear-index);


  //! Submit Handler
  function formHandler(data){
    let updateData = data;
    if(data.release && data.duration){
      updateData={...updateData, release:Number(updateData.release)};
      updateData={...updateData, duration:Number(updateData.duration)};
    }
    if(!data.rating || data.rating === 0){
        setError(
            "rating",{
                type:"manual",
                message:"Rate this Movie"
            }
        )
        return;
    }
    if(updateData.genre?.length){
        const genreValue = updateData.genre.map(elem=>elem.value);
        updateData = {...updateData, genre:genreValue};
        if(isEdit){
          updateOne(updateData,ID)
          reset();
          return;
        }else{
          addProduct(updateData);
          const newData = {...updateData,email:currentUserEmail};
          addFavorite(newData)
          reset();
          return;
        }
    }else{
      setError(
        "genre",{
            type:"manual",
            message:"Select Genre"
        }
    )
    return;
    }
    
    
  }

  return (
    <>
      <section>
      <section className="flex justify-center items-center mb-5 gap-4">
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            <h1 className="sectionHeading !font-space my-8">{isEdit? "Update Movie" : "Add Movie"}</h1>
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            </section>
      </section>
      <section
        className= {isEdit? "flex lg:flex-row-reverse flex-col" : "flex lg:flex-row flex-col"}>
        <figure className="h-[60vh] w-full aspect-square flex-1">
          <img
            className="h-full w-full object-contain"
            src={imageUploader(isEdit ? "UpdateMovie.svg" : "EditMovies.svg")}
            alt=""
          />
        </figure>
        <form onSubmit={handleSubmit(formHandler)} className="px-3 flex-1" noValidate>





          {/* Title */}
          <section className="input_section">
            <label htmlFor="title" className="text-left">
              Title
            </label>
            <input
              id="title"
              {...register("title", { required: "Title is required",
                minLength:{
                  value:2,
                  message:"Title Should've minimum 2 characters"
                }
               })}
              placeholder="Movie Title"
              className="default_input"
            />
            {errors.title && (
              <p className="text-xs text-red-500 italic">{errors.title.message}</p>
            )}
          </section>

          {/* Genre & Release */}
          <section className="flex lg:flex-row flex-col gap-4">














            {/* Genre */}
          <section className="input_section flex-1">
            <label htmlFor="genre">Genre</label>
          <Controller
        name="genre"
        id="genre"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <MultiSelect
      options={genreOptions}
      value={value}
      onChange={(value) => {
        onChange(value); 
        if (value.length > 0) {
          clearErrors("genre");
        }
      }}
      labelledBy="Select"
      hasSelectAll={false}
      className="bg-transparent w-full outline-none text-defaultColor font-semibold"
    />
        )}
      />
      {errors.genre && (
        <p className="text-red-500 text-sm">
          {errors.genre.message || "Genre selection is required"}
        </p>
      )}

      </section>
          
          














          {/* Release */}
          <section className="input_section flex-1">
            <label htmlFor="release" className="text-left">
              Release Date
            </label>
            <select 
            name="release"
            type="number"
            id="release"
            {...register("release", { required: "Release year is required" })}
              placeholder="Release Year"
              className="default_input"
            >
            <option></option>
                {releaseYear.map((year) => (
      <option className="bg-base-100" value={year} key={year}>
        {year}
      </option>
    ))}
            </select>
            {errors.release && (
              <p className="text-xs text-red-500 italic">{errors.release.message}</p>
            )}
          </section>
          </section>

          {/* Rating */}
          <section className="input_section">
            <label htmlFor="rating" className="text-left">
              Rating
            </label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ReactStars
                count={5}
                onChange={(value) => {
                    setValue("rating", value);
                    if (value > 0) {
                        clearErrors("rating");
                      }
                }}  
                value={currentRating}
                isHalf={false}
                fullIcon={<i className="fa fa-star"></i>}
                size={30}
                style={{ color: "gold", cursor: "pointer" }}
              />
              {currentRating > 0 && (
                <span className="ml-2">{currentRating.toFixed(1)}/5</span>
              )}
            </div>
            {errors.rating && (
              <p className="text-xs text-red-500 italic">Rate this Movie</p>
            )}
          </section>









          {/* Duration */}
          <section className="input_section">
            <label htmlFor="duration" className="text-left">
              Duration
            </label>
            <input
              id="duration"
              type="number"
              {...register("duration", { 
                required: "Duration Required",
                min:{
                    value:60,
                    message:"Minimum 60 minutes"
                },
                max:{
                    value:300,
                    message:"Maximum 300 minutes"
                }
             })}
              placeholder="Movie Duration"
              className="default_input"
            />
            {errors.duration && (
              <p className="text-xs text-red-500 italic">{errors.duration.message}</p>
            )}
          </section>

          {/* Thumbnail */}
          <section className="input_section">
            <label htmlFor="thumbnail" className="text-left">
              Thumbnail URL
            </label>
            <input
              id="thumbnail"
              {...register("thumbnail", { 
                required: "Thumbnail is required",
                pattern:{
                    value: /^https?:\/\//,
                    message:"Invalid image URL, try an Image Link"
                  } 
            })}
              placeholder="Thumbnail URL"
              className="default_input"
            />
            {errors.thumbnail && (
              <p className="text-xs text-red-500 italic">{errors.thumbnail.message}</p>
            )}
          </section>

          {/* Summary */}
          <section className="input_section">
            <label htmlFor="summary" className="text-left">
              Summary
            </label>
            <textarea
              id="summary"
              {...register("summary", { required: "Summary is required",
                minLength:{
                  value:10,
                  message:"Summary should be minimum 10 characters"
                }
               })}
              placeholder="Short Summary of the Movie"
              className="default_input"
            />
            {errors.summary && (
              <p className="text-xs text-red-500 italic">{errors.summary.message}</p>
            )}
          </section>

          {/* Submit Button */}
          <section className="w-8/12 mx-auto">
            <button className="form_btn" type="submit">
            {isEdit? "Update Movie" : "Add Movie"}
            </button>
          </section>
        </form>
      </section>
    </>
  );
}

export default AddMovies;
