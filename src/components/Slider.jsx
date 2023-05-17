import React, { useRef, useState } from 'react' 
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Slider = ({images, number}) => {
    const [sliderState,setSliderState] = useState(number)
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

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         handleNext()
    //     },4000);
    //     return () => clearInterval(intervalId);
    //   }, [sliderState]);

  return (
    <> 
        <div style={{height:'400px'}} className='fixed inset-0   m-auto w-fit   shrink-0  ' >
               
               {images.map((slide,index)=>
                   <div className={`${index === sliderState ? 'slide active' : 'slide'} z-10 flex items-center`} key={index} >
                       {sliderState === index && <img src={slide} className='  h-[400px] object-cover cover-img' alt="" ref={el=> slider.current = el}/>}
                   </div>
               )}
              
        </div>
         
        <span className='fixed top-20 left-20 z-40   font-bold'>{(sliderState + 1) +'/'+ (images.length  )}</span>
    
        <div className='fixed w-full   flex justify-between px-20 z-10   inset-x-0 bottom-1/2  '>
                
            <span className='cursor-pointer   border-transparent p-2' value={-1} onClick={(e)=>handlePrevious(e)}>
                <AiOutlineArrowLeft/>
            </span>
            <span className='cursor-pointer border-transparent p-2' value={-1} onClick={(e)=>handleNext(e)}>
                <AiOutlineArrowRight/>
            </span>
        </div>
    </>
  )
}

export default Slider