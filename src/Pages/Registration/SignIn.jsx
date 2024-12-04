import { useState } from "react";
import SignInSVG from "../../Components/SVGComponents/SignInSVG"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignIn(){
  const [showPass, setShowPass] = useState(true);
  const {register, handleSubmit, formState:{errors}, reset, watch} = useForm()

  const emailData = watch("email");

  function handleSignIn(data){
    console.log(data);
    reset();
  }

  return(
    <>
        <section className="flex lg:flex-row flex-col-reverse">
        
        <section className="flex-1 flex flex-col justify-center">
          <form onSubmit={handleSubmit(handleSignIn)} 
          className="space-y-8" noValidate>
            <section className="flex justify-center items-center mb-5 gap-4">
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            <h1 className="sectionHeading !font-space">Sign In</h1>
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
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
                <Link to={`/registration/forgetPassword/${emailData || " "}`} className="italic underline text-sky-500 text-xs my-3">Forgot Password ?</Link>
          </section>
          <section>
            <p className="text-lg font-semibold text-sky-500">new on ReelEra? <Link to="/registration/signUp" className="text-defaultColor text-xl font-semibold">Sign Up</Link> first</p>
          </section>
          <section>
            <button type="submit" className="inActive">Sign In</button>
          </section>
          </form>
        </section>
        <section className="flex-1">
            <SignInSVG/>
        </section>
        </section>
    </>
  )
}

export default SignIn