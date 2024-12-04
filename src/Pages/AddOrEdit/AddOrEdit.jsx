import { useForm } from "react-hook-form";
import { imageUploader } from "../../Utilities/Scripts/imageUploader";
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useParams } from "react-router-dom";
import { useCURD } from "../../AllProviders/CURDProvider";
import { useState } from "react";

function AddOrEdit() {
  const { addProduct, updateOne } = useCURD();
  const { ID } = useParams();
  const data = useLoaderData();

  //! Edit OR Add Mode
  const [isEdit, setIsEdit] = useState(!!(ID && Object.keys(data).length));

  //! Initialize react-hook-form
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError, clearErrors } = useForm({
    defaultValues: data || {
      thumbnail: "",
      title: "",
      genre: [],
      release: "",
      duration:"",
      rating: 0,  
      summary: "",
    },
  });

  //! Watch rating for real-time updates
  const currentRating = watch("rating" || 0);

  const genreOptions = [
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comedy" },
    { value: "drama", label: "Drama" },
    { value: "horror", label: "Horror" },
    { value: "sci-fi", label: "Sci-Fi" },
  ]
  const releaseYear = [
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
    { value: 2025, label: 2025 },
  ]

  //! Submit Handler
  function formHandler(data){
    console.log(data.rating)
    if(!data.rating || data.rating === 0){
        setError(
            "rating",{
                type:"manual",
                message:"Rate this Movie"
            }
        )
        return;
    }
    if(data.genre){
        const genreValue = data.genre.split(",");
        const updateData = {...data, genre:genreValue};
        console.log(updateData);
        if (isEdit) {
            updateOne(updateData, ID);
          } else {
            addProduct(updateData);
          }
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
        className={
          isEdit
            ? "grid lg:grid-cols-2 grid-cols-1"
            : "flex lg:flex-row-reverse flex-col"
        }>
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
              {...register("title", { required: "Title is required" })}
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
            <label htmlFor="genre" className="text-left">
              Genre
            </label>
            <select 
            name="genre" 
            id="genre"
            {...register("genre", { required: "Genre is required" })}
              placeholder="Genre"
              className="default_input"
            >
            <option></option>
                {genreOptions.map(({ value, label }) => (
      <option className="bg-gray-300" value={value} key={value}>
        {label}
      </option>
    ))}
            </select>
            {errors.genre && (
              <p className="text-xs text-red-500 italic">{errors.genre.message}</p>
            )}
          </section>

          {/* Release */}
          <section className="input_section flex-1">
            <label htmlFor="release" className="text-left">
              Release Date
            </label>
            <select 
            name="release" 
            id="release"
            {...register("release", { required: "Release year is required" })}
              placeholder="Release Year"
              className="default_input"
            >
            <option></option>
                {releaseYear.map(({ value, label }) => (
      <option className="bg-gray-300" value={value} key={value}>
        {label}
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
                    value: /^https:\/\//,
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
              {...register("summary", { required: "Summary is required" })}
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
              {isEdit ? "Update Movie" : "Add Movie"}
            </button>
          </section>
        </form>
      </section>
    </>
  );
}

export default AddOrEdit;
