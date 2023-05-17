import React, { useState } from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import ContactForm from '../components/ContactForm'

const Contact = () => {

  const [contactState, setContactState] = useState('contact')

  return (
    <>
    <div>
      <div className='text-black pt-24 text-center flex gap-10 justify-center pb-4'>
        <button className={`border-b border-white ${contactState==='contact' && 'border-black' }`}
        onClick={()=>setContactState('contact')}>Contact us</button> 
        <button className={`border-b border-white ${contactState==='career' && 'border-black' }`}
        onClick={()=>setContactState('career')}>Career</button> 
      </div>
    </div>
    <div className='flex flex-wrap  px-24 [&>div]:shrink-0'>
       <div className='w-full lg:w-1/2  p-4 text-sm [&>h1]:pt-10 [&>h1]:pb-2 [&>h1]:text-md '>
          <h2 className='text-lg font-bold'>{contactState==='contact' ? 'Contact Us' : 'Career'}</h2>

          { contactState==='contact' ? <><h1>Address</h1>
          <p>
          603,White orchid, LP Savani Rd, Guru Ram Pavan Bhumi,Adajan Gam, Adajan, Surat, Gujarat 395009
          </p>

          <h1>Contact</h1>
          <p><b>Email</b>: prayoshaarchitects@gmail.com</p>
          <p><b>Phone</b>: 8141311900</p>

          <h1>Social</h1>
          <p className='flex'>
            <a href="https://www.instagram.com/prayoshaarchitects/?hl=en" target="_blank"><AiFillInstagram size={20}/></a>
            <a href="https://www.facebook.com/pra.architects/" target="_blank">
                <AiFillFacebook size={20}/>
            </a>
            <a href="https://www.linkedin.com/company/prayosha-architects/about/" target="_blank">
                <AiFillLinkedin size={20}/>
            </a> 
          </p></> : <h1 className='text-4xl'>Join Us !</h1>}
       </div>
       <div className='w-full lg:w-1/2 '>
          <ContactForm contactState={contactState}/>
       </div>
    </div>
    </>
  )
}

export default Contact