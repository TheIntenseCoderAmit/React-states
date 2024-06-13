import { useState } from "react";

export default function likeButton(){
let [isLiked,setIsLiked]=useState(  false);
let clicked=()=>{
    setIsLiked(!isLiked);
}
let likeStyle={
    color:"red"
}

return(
    <div>
        <p onClick={clicked}>
            {isLiked ?
             (<i className="fa-solid fa-heart" style={likeStyle}></i>):(<i className="fa-regular fa-heart"></i>)}
            </p>
    </div>
);
}