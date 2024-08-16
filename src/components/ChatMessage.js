import React from 'react' ;

function ChatMessage({ name, message }) {
    return (
       <div>
          <div className="flex items-center shadow-sm p-2">
             <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"  />
             <span className="font-bold px-2">{name}</span>
             <span>{message}</span>
          </div> 
      </div>
    )
} ;

export default ChatMessage ;
