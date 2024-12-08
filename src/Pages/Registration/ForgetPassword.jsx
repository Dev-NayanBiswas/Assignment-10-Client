import { useParams } from "react-router-dom";
import {motion} from "motion/react"
import ResetSVG from "../../Components/SVGComponents/ResetSVG"
import { useForm } from "react-hook-form";
import { useAuth } from "../../AllProviders/AuthProvider";
import toastAlert from "../../Utilities/Scripts/toastAlert";
import dynamicTitle from "../../Utilities/Scripts/dynamicTitle";

function ForgetPassword(){
    const {resetPasswordEmail} = useAuth();
    const {email} = useParams();
  const {register, handleSubmit, formState:{errors}, reset} = useForm({defaultValues:{email:email || " "}});
  dynamicTitle("Reset Password")


  function handleReset(data){
    resetPasswordEmail(data.email)
    .then(()=>{
      toastAlert("success",`Email send to ${data.email}`)
      window.open("https://mail.google.com/mail", "_blank")
      reset();
    })
    .catch(error=>toastAlert("error","Error happened in sending Email"))
  }
  return (
    <>
        <section className="flex lg:flex-row flex-col-reverse">
        
        <motion.section
        initial={{
          opacity:0,
          x:'-100vw'
        }}
        animate={{
          opacity:1,
          x:0,
          transition:{
            duration:5,
            type:"spring",
            stiffness:20
          }
        }}
         className="flex-1 flex flex-col justify-center">
          <form onSubmit={handleSubmit(handleReset)} 
          className="space-y-8" noValidate>
            <section className="flex justify-center items-center mb-5 gap-4">
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            <h1 className="sectionHeading !font-space">Reset Password</h1>
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

          <section>
            <p className="text-lg font-semibold text-sky-500">You will be direct to your Gmail</p>
          </section>
          <section>
            <button
            
             type="submit" className="active">Reset Password</button>
          </section>
          </form>
        </motion.section>
        <motion.section
          initial={{
            opacity:0,
            x:"100vw"
          }}
          animate={{
            opacity:1,
            x:0,
            transition:{
              duration:5,
              type:"spring",
              stiffness:20
            }
          }}
         className="flex-1">
            <ResetSVG/>
        </motion.section>
        </section>
    </>
  )
}

export default ForgetPassword