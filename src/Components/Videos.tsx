import React from 'react'

const Videos = ({video}) => {
 
  return (
   <li>
       <video controls width={"100%"}>
         <source src={video.videos.small.url} type="" />
       </video>
   </li>
  )
}

export default Videos