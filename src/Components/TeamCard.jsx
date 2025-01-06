function TeamCard({cardData}){
    const {name, image, contribution, designation, logo} = cardData || {}
  return (
    <>
      <div className='group relative overflow-hidden md:h-[28vh] h-[20vh] aspect-square hover:shadow-lg'>
        <img
          className='h-full group-hover:scale-95 transition-all duration-500 w-full object-top max-w-full bg-gradient-to-b from-defaultColor/25 to-defaultColor/15 object-cover'
          src={dynamicImage(image)}
          alt='gallery-photo'
        />
        <section className='absolute h-full -bottom-24 group-hover:bottom-0 opacity-0 group-hover:opacity-90 transition-all duration-300 left-0 w-full bg-gray-700/85 px-3 py-10'>
          <p className='text-2xl text-white font-heading font-semibold'>
            {name}
          </p>
          <p className='text-white'>
            {contribution}
          </p>
          <figure className='text-white flex justify-start items-center gap-2'>
            <span className='text-xl italic font-ubuntu'>{designation}</span>
          </figure>
        </section>
      </div>
    </>
  );
}

export default TeamCard;


function dynamicImage(img){
    return new URL(`../assets/team/${img}`, import.meta.url).href
}
