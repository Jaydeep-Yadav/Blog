import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { Query } from 'appwrite';
import { useSelector } from 'react-redux';


function MyPosts() {
    const userData = useSelector((state) => state.auth.userData);
    
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.myPosts([Query.equal('userId', userData?.$id)]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts?.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default MyPosts