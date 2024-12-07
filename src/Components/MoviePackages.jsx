import { FaFilm } from "react-icons/fa";
import {motion} from "motion/react";

const subscriptionPlans = [
  {
    name: "Basic",
    price: "$5",
    features: ["10 Movie Per Month", "5 New Released Movies", "No Subscription Bonuses"],
    icon: <FaFilm className="text-5xl text-blue-500" />,
  },
  {
    name: "Premium",
    price: "$15",
    features: ["20 Movies Per Month", "15 New Movies", "24/7 Priority Support"],
    icon: <FaFilm className="text-5xl text-yellow-500" />,
  },
  {
    name: "Silver",
    price: "$10",
    features: ["15 Movie Per Month", "10 New Movies", "24/7 Priority Support"],
    icon: <FaFilm className="text-5xl text-gray-700" />,
  },
];

function MoviePackages() {
  return (
    <>
        <article className="mt-7">
        <section className="flex justify-center items-center mb-5 gap-4">
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">Subscriptions</h1>
        <section className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">Flexible subscriptions offer exclusive features, affordable pricing, and enhanced user experience!</p>
      </article>
    <section className="flex flex-wrap justify-center gap-8 py-8">
      {
      subscriptionPlans.map((plan, index) => (
        <motion.section
        whileHover={{
          scale:1.1,
          background:"#f8fff2",
          transition:{
            duration:0.5,
          }
        }}
          key={index}
          className="w-80 p-6 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer"
        >
          <section className="mb-4">{plan.icon}</section>
          <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
          <p className="text-3xl font-bold mb-4 text-green-600">{plan.price} <span className="text-gray-500">/ month</span></p>
          <ul className="mb-4 space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="text-lg text-left">
                {feature}
              </li>
            ))}
          </ul>
          <button className="inActive hover:bg-defaultColor hover:text-white transition-all duration-300 my-10">
            Choose {plan.name}
          </button>
        </motion.section>
      ))}
    </section>
    </>
  )
}

export default MoviePackages;
