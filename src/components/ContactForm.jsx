import React from 'react'

const ContactForm = ({contactState}) => {
  return (
    <div className='p-4  '> 
        {
            contactState === 'contact' ? 
            <>
                <h1 className="name text-sm mb-2 block " >Your Name*</h1>
                <input type="text" id='name' className='w-full border border-gray-300 p-2 block outline-none focus:border-black'/> 
                <h1 className="name text-sm mb-2 block pt-2" >Your email*</h1>
                <input type="email" id='name' className='w-full border border-gray-300 p-2 block outline-none focus:border-black'/> 
                <h1 className="name text-sm mb-2 block pt-2" >Subject</h1>
                <input type="text" id='name' className='w-full border border-gray-300 p-2 block  outline-none focus:border-black'/> 
                <h1 className="name text-sm mb-2 block pt-2" >Your Message</h1>
                <textarea type="text" rows={4} id='name' className='w-full border border-gray-300 p-2 block outline-none focus:border-black'/> 
                <button className='mt-2 px-4 py-2 bg-black text-white'>Submit</button>
            </>

            :
            <>
            <h1 className="name text-sm mb-2 block " >Your Name*</h1>
            <input type="text" id='name' className='w-full border border-gray-300 p-2 block outline-none focus:border-black'/> 
            <h1 className="name text-sm mb-2 block pt-2" >Your email*</h1>
            <input type="email" id='name' className='w-full border border-gray-300 p-2 block outline-none focus:border-black'/> 
            <h1 className="name text-sm mb-2 block pt-2" >Your Mobile Number</h1>
            <input type="number" id='name' className='w-full border border-gray-300 p-2 block  outline-none focus:border-black'/> 
            <h1 className="name text-sm mb-2 block pt-2" >Subject</h1>
            <input type="text" id='name' className='w-full border border-gray-300 p-2 block  outline-none focus:border-black'/> 
            <h1 className="name text-sm mb-2 block pt-2" >Upload Resume</h1>
            <input type="file" id='name' className='w-full   py-1 block  outline-none focus:border-black'/> 
              
            <button className='mt-2 px-4 py-2 bg-black text-white'>Submit</button>
            </>
        }
            
    </div>
  )
}

export default ContactForm