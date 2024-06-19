import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-violet-900 text-white rounded-xl p-4'>
            <div className='md:w-32 lg:w-48 justify-center mb-4 text-white'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>

            <h2
            className='font-bold text-white text-pretty'
            >{title}
            </h2>
        </div>
    </Link>
  )
}


export default PostCard