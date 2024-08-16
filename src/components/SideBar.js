import React from 'react' ;
import { useSelector } from 'react-redux';

function SideBar() {

const isMenuShow =useSelector((store)=>store.app.isMenuShow) ;

if (!isMenuShow) return null ;

    return (
        <div className='w-2/12 p-7 shadow-lg'>
            <h1 className='font-bold my-5' >Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Courses</li>
                <li>Fashion</li>
                <li>Podcasts</li>
            </ul>
            
        </div>
    )
}

export default SideBar
