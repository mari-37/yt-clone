import React, { useEffect, useState } from 'react'
import { VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {

const [showVideo,setshowVideo] = useState() ;
useEffect(()=>{
    fetchData() ;
},[]);

const fetchData = async () =>{
    const response = await fetch(VIDEO_API) ;
    const data = await response.json() ;
    setshowVideo(data.items) ;
    
} ;

    return (
        <div className='flex flex-wrap'>
      {showVideo?.map(showVideo=> <Link   key={showVideo.id} to={"/watch?v=" + showVideo.id}> <VideoCard info={showVideo}/> </Link>  )} 
        </div> 
    ) ;
} ;

export default VideoContainer ;
