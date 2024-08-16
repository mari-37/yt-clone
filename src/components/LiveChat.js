import React, { useEffect, useState } from 'react' ;
import ChatMessage from './ChatMessage' ;
import { useDispatch, useSelector } from 'react-redux';
import { message } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';
import { makeRandomMessage } from '../utils/helper';

function LiveChat() {

const [liveMessage,setLiveMessage] = useState("") ;

const dispatch = useDispatch() ;

const chatMessage = useSelector((store)=>store.chat.message) ;

useEffect(()=>{

    const timer = setInterval(()=>{
        
        dispatch(message({

            name: generateRandomName(),
            message: makeRandomMessage(20) 

        })) ;

    } , 1500) ;
    
    return ()=>clearInterval(timer) ;
    
},[]) ;

    return (
        <form  className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{e.preventDefault() ;
            dispatch(
                message({
                  name: "YOU",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
         } } >
       
            <div className="w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
             { chatMessage?.map((chat,index)=> <ChatMessage key={index} name={chat.name} message={chat.message} />)}
           </div>

            <input  className="mt-2 ml-2 border-2 rounded-lg border-black" type='text'  value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
            <button className='ml-4 px-2 py-0.5 border-2 rounded-lg border-black'>➤</button>
            

        </form>
    )
}

export default LiveChat ;
