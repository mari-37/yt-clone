import React, { useEffect } from 'react' ;
import { useDispatch } from 'react-redux';
import {closeMenuShow} from "../utils/appSlice" ;
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';

function VideoPage() {

const [params] = useSearchParams() ;
console.log(params.get("v")) ;

const dispatch = useDispatch() ;
useEffect(()=>{
    dispatch(closeMenuShow()) ;
}) ;

    return (
        <div className='flex'>
            <div>
            <iframe width="900" height="450" src={"https://www.youtube.com/embed/" + params.get("v") } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>           
            </div>
            <div>
                <LiveChat />
            </div>
        </div>
    )
}

export default VideoPage ;
