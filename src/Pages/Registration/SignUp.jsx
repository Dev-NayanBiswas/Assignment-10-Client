import { useState } from "react";
import SignUpSVG from "../../Components/SVGComponents/SignUpSVG"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignUp(){
  const [showPass, setShowPass] = useState(false);
  const {register, handleSubmit, formState:{errors}, reset} = useForm()

  function handleSignUp(data){
    console.log(data);
    reset();
  }

  return (
    <>
        <section className="flex lg:flex-row flex-col">
        <section className="flex-1">
            <SignUpSVG/>
        </section>
        <section className="flex-1 flex flex-col justify-center">
          <form onSubmit={handleSubmit(handleSignUp)} 
          className="space-y-8" noValidate>
            <section className="flex justify-center items-center mb-5 gap-4">
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            <h1 className="sectionHeading !font-space">Sign Up</h1>
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            </section>
          <section className="input_section">
                <label htmlFor="name" className="text-left">Name</label>
                <input
                id="name"
                type="text" 
                name="name"
                {...register("name",{
                  required:"User name is Required",
                  minLength:{
                    value:5,
                    message:"User name should be 5 character long"
                  },
                  pattern:{
                    value:/^[a-zA-Z\s]+$/,
                    message:"Only lowercase and uppercase letters are allowed"
                  }
                })}
                placeholder="Name"
                className="default_input"
                />
                {errors.name && (<p className="text-xs text-red-500 italic">{errors.name.message}</p>)}
          </section>





          <section className="input_section">
                <label htmlFor="email" className="text-left">Email</label>
                <input
                id="name"
                type="email" 
                name="email"
                {...register("email",{
                  required:"Email Required",
                  pattern:{
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Invalid email Address"
                  }
                })}
                placeholder="Email"
                className="default_input"
                />
                {errors.email && (<p className="text-xs text-red-500 italic">{errors.email.message}</p>)}
          </section>






          <section className="input_section">
                <label htmlFor="photo" className="text-left">Photo URL</label>
                <input
                id="photo"
                type="text" 
                name="photo"
                {...register("photo",{
                  required:"Image URL required",
                  pattern:{
                    value: /^https:\/\//,
                    message:"Invalid image URL, try an Image Link"
                  }
                })}
                placeholder="Photo URL"
                className="default_input"
                />
                {errors.photo && (<p className="text-xs text-red-500 italic">{errors.photo.message}</p>)}
          </section>


          <section className="input_section relative">
                <label htmlFor="password" className="text-left">Password</label>
                <input
                id="password"
                type={showPass? "password":"text"} 
                name="password"
                {...register("password",{
                  required:"Password Required",
                  pattern:{
                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
                    message:"At least one lowercase, one uppercase, one Special character required"
                  },
                  minLength:{
                    value:8,
                    message:"Minimum 8 characters required"
                  }
                })}
                placeholder="Password"
                className="default_input"
                />
                <span onClick={()=>setShowPass(!showPass)} className="absolute top-8 right-3">{!showPass? <FaEye/> : <FaEyeSlash/>}</span>
                {errors.password && (<p className="text-xs text-red-500 italic">{errors.password.message}</p>)}
          </section>
          <section>
            <p className="text-lg font-semibold text-sky-500">Already have an account? <Link to="/registration/signIn" className="text-defaultColor text-xl font-semibold">Sign In</Link> now</p>
          </section>
          <section>
            <button type="submit" className="inActive">Sign Up</button>
          </section>
          </form>
        </section>
        </section>
    </>
  )
}

export default SignUp