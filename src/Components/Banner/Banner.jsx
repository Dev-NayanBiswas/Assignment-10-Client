import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {imageUploader} from "../../Utilities/Scripts/imageUploader.js";
import { useEffect, useState } from "react";

function Banner(){
    const [carouselCards, setCarouselCards] = useState(3)
    const data = [
        "kingdom.jpg", "aquaman.jpg","avengers.jpg","everything.jpg","godzillakong.jpg",
        "inception.jpg","johnwick.jpg","joker.jpg","madmax.jpg","moana.jpg","wild.jpg","starwars.jpg","suicide.jpg","venom.jpg","wednesday.jpg","gladiator.jpg"
    ];
    const currentWidth = window.innerWidth;
    
    useEffect(()=>{
        if(currentWidth < 800 && currentWidth > 500){
            setCarouselCards(2)
        }else if(currentWidth < 500){
            setCarouselCards(1)
        }else{
            setCarouselCards(3)
        }
    },[currentWidth])


    const settings = {
        slidesToShow: carouselCards,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
      };
  return (
    <>
        <section className="slider-container">
            <section className="flex justify-center items-center mb-5 gap-4">
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            <h1 className="sectionHeading">New Released</h1>
            <div className="border-b-[1px] border-defaultColor flex-1 w-4/12"/>
            </section>
            
        <Slider {...settings} className="slider-container">
                {
                    data?.map((image, index)=>
                        <figure key={index} className="aspect-2 aspect-w-5">
                <img className="h-[90vh] object-contain" src={imageUploader(image)} alt="" />
            </figure>
                    )
                }
        </Slider>
        </section>
    </>
  )
}

export default Banner