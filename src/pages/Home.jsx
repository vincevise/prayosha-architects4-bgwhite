import React from 'react'
import { images } from '../App'

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center  pt-20  '>
        <div className='w-72'>

            <img src={images[0]} className='w-72   ' alt="" />
        </div>
        
    </div>
  )
}

export default Home