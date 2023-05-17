import React, { useEffect, useRef, useState } from 'react'
// import { images } from '../App'

const images = [
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/37120.jpg',
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/61118.jpg',
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/sliderImages/1.png',
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/sliderImages/1.jpg',
    'https://s3-mern-demo.s3.ap-south-1.amazonaws.com/sliderImages/2.png'
]

const Home1 = () => { 

    const [sliderState,setSliderState] = useState(0)
    const slider = useRef(null) 

    const handleNext = (e) => {
        if(sliderState === images.length - 1) {
            setSliderState(0)
            return
        }
        setSliderState(sliderState + 1)
    }

    const handlePrevious = (e) => {
        if(sliderState=== 0) {
            setSliderState(images.length - 1)
            return
        }
        setSliderState(sliderState - 1)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext()
        },4000);
        return () => clearInterval(intervalId);
      }, [sliderState]);
 
  return (
    <div className=' h-screen flex  items-center w-full justify-center  '>
        <div style={{height:'400px'}} className='   shrink-0 relative' >
               
               {images.map((slide,index)=>
                   <div className={`${index === sliderState ? 'slide active' : 'slide'} z-10 flex items-center`} key={index} >
                       {sliderState === index && <img src={slide} className=' w-full h-[400px] object-cover cover-img' alt="" ref={el=> slider.current = el}/>}
                   </div>
               )}
              
           </div>
           {/* <div className='absolute w-screen   flex justify-between px-2 z-10 text-white inst-y-50'>
             
                   <span className='   border-transparent p-2' value={-1} onClick={(e)=>handlePrevious(e)}>
                        {'<'}
                   </span>
                   <span className='  border-transparent p-2' value={-1} onClick={(e)=>handleNext(e)}>
                       {'>'}
                   </span>
            </div> */}
            <span className='absolute right-20 bottom-20 font-semibold'>{sliderState+'/'+images.length}</span>
    </div>
  )
}

export default Home1