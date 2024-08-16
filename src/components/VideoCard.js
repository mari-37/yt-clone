import React from 'react'

function VideoCard({info}) {
    const {snippet,statistics}=info ;
    const {title,channelTitle,thumbnails}=snippet ;
    const {viewCount}=statistics ;
    return (
        <div className='p-2 m-10 w-72 shadow-lg'>
            <img alt='thumbnail' className='rounded-lg' src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount}views</li>
            </ul>
        </div>
    )
} ;

export default VideoCard ;
