import React, { useEffect, useState } from 'react'
import { sliderData } from './SliderData'
import './home.css'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'

function Home({slides}) {

    const [current,setcurrent] = useState(0);
    const length = slides.length


    useEffect(() => {
      setTimeout(() => {
        setcurrent(current === length - 1 ? 0 : current + 1)
      }, 5000);
    }, [current,length])
    

    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }

    const prevSlide=()=>{
        setcurrent(current === length - 1 ? 0 : current + 1)
    }
    const nextSlide=()=>{
        setcurrent(current === 0 ? length - 1 : current - 1)
    }

  return (
    <section id='home' className='slider '>
        <FaArrowCircleLeft className='arrow-left' onClick={prevSlide}/>
        <FaArrowCircleRight  className='arrow-right' onClick={nextSlide}/>
      {
          sliderData.map((slide,index)=>{
            return(
                <div className={index === current ? 'slide active':'slide'} key={index}>
                    {
                        index === current && (
                            <img src={slide.image} alt="slides" className='slide-images'/>
                        )   
                    }
                </div>
            )
          })
      }
    </section>
  )
}

export default Home