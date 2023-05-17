import React from 'react'
import { logoImg } from '../App'
import { Link } from 'react-router-dom'
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='p-8   flex items-center justify-between fixed w-full bg-white z-10'>
        <Link to={'/'} className='flex uppercase gap-3  '>
            {/* <img src={logoImg} className='w-10' alt="" /> */}
        </Link>
        <div className='absolute w-fit mx-auto  inset-x-0 flex gap-10  uppercase text-md font-semibold'>
            <Link to={'/'} className={`hover:border-b hover:border-black`}>Home</Link>
            <Link to={'/architecture'} className='hover:border-b hover:border-black'>Architecture</Link>
            <Link to={'/interior'} className='hover:border-b hover:border-black'>Interior</Link>
            <Link to={'/about'} className='hover:border-b hover:border-black'>About</Link>
            <Link to={'/contact'} className='hover:border-b hover:border-black'>Contact</Link>
        </div>
        <div className='hidden lg:flex text-black flex gap-2 pr-4'>
            <a href="https://www.instagram.com/prayoshaarchitects/?hl=en" target="_blank"><AiFillInstagram size={20}/></a>
            <a href="https://www.facebook.com/pra.architects/" target="_blank">
                <AiFillFacebook size={20}/>
            </a>
            <a href="https://www.linkedin.com/company/prayosha-architects/about/" target="_blank">
                <AiFillLinkedin size={20}/>
            </a>
            
        </div>
    </div>
  )
}

export default Navbar