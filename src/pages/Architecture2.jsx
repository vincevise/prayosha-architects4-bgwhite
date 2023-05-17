import React from 'react' 
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { baseImageUrl, getProjects } from '../api/api'

const Architecture2 = () => {

    const {data, isLoading, isError, isFetched, isFetching} = useQuery('projects',getProjects)

    if(isFetched) console.log(data.projects.Items)
    if(isLoading) return (<p>Loading...</p>)

  return (
    <>
    <div className=' flex  pt-32 gap-4 uppercase text-sm   pb-4 w-10/12 mx-auto'>
        <Link className='w-fit border-b border-white  hover:border-black'>Housing</Link>
        <Link className='w-fit border-b border-white  hover:border-black'>Residence</Link>
        <Link className='w-fit border-b border-white  hover:border-black'>Commerce</Link>
        <Link className='w-fit border-b border-white  hover:border-black'>Office</Link>
        <Link className='w-fit border-b border-white  hover:border-black'>Institute</Link>
    </div>
    <div className='w-10/12	 mx-auto  flex flex-wrap  gap-[15px]  pb-36 '> 

            {data.projects.Items.map((x)=>(
                <Link to={'/project-page'}>

                    <div className='  h-[250px]  shink-0 overflow-hidden transition-all	'>
                        <img src={`${baseImageUrl}/${x.coverImg.name}`} className='w-full h-full object-cover hover:opacity-10 cursor-pointer hover:scale-110 transition-all	' alt="" />
                    </div>
                    <p className='w-full flex justify-between text-xs uppercase mt-1'>
                        <span>{x.name}</span>
                        <span className='text-slate-400'>{x.location}</span>
                    </p>
                </Link>
            ))} 
    </div>
    
    </>
  )
}

export default Architecture2