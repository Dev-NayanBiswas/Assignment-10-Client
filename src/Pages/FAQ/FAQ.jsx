import FAQsvg from "../../Components/SVGComponents/FAQsvg"

function FAQ(){
    const faq = [
        {
          question: "What services does the movie portal offer ?",
          answer: "ReelEra allows you to buy, rent movies, and purchase tickets for upcoming movie screenings online."
        },
        {
          question: "How can I rent or buy a movie ?",
          answer: "Simply browse the movies, select the movie you want, and call our help center for next procedure."
        },
        {
          question: "Can I book movie tickets for multiple people ?",
          answer: "Yes, you can book tickets for multiple people. Just select movies as your favorite and let us know which one you are interested in."
        },
        {
          question: "What payment methods are supported on the portal ?",
          answer: "We accept major credit cards, debit cards, PayPal, and other secure online payment methods for your convenience."
        },
        {
          question: "Is there a refund policy for tickets or movie rentals ?",
          answer: "Refunds are available for cancellations made within the allowed time-frame. Check our refund policy for detailed information."
        },
        {
          question: "Can I access my all favorite movies on multiple devices?",
          answer: "Yes, you can stream all favorite movies on multiple devices, provided you log in with the same account."
        }
      ];
      
  return (
    <section className="flex flex-col justify-center h-full my-10">
        <article>
        <section className="flex justify-center items-center mb-5 gap-4">
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        <h1 className="sectionHeading text-center">FAQ</h1>
        <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
        </section>
        <p className="text-sm text-center lg:w-5/12 w-full mx-auto my-4">People always asked about their queries, You might have something common in them or for better consultancy talk to our expert one</p>
      </article>
      <section className="flex lg:flex-row flex-col justify-center gap-4">
        <section className="lg:w-5/12 w-full">
        <FAQsvg/>
        </section>
      <section className=" flex flex-col gap-5">
        {
            faq.map(({question, answer}, index)=>
                <section key={index} className='collapse collapse-plus shadow-lg'>
          <input type='radio' name='my-accordion-3' defaultChecked />
          <section className='collapse-title md:text-2xl text-lg font-medium italic'>
            {question}
          </section>
          <section className='collapse-content'>
            <p>{answer}</p>
          </section>
        </section>
            )
        }
      </section>
      </section>
    </section>
  );
}

export default FAQ;
