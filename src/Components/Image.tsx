import React from 'react'

const Image = ({image}) => {
  return (
   <li>
       <img src={image.largeImageURL} alt="" />
   </li>
  )
}

export default Image