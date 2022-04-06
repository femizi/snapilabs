import React from 'react'
import { useQuery } from 'react-query'
import Image from './Image'
const ImageGallery = ({allQuery}) => {
  console.log(allQuery)
  return (
    <div className='px-4 md:px-6  '>
        <ul className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
           {/* checking all query load and error then map */}
           {
          allQuery.isLoading ? <div className='text-center p-2'>Loading...</div>
            : allQuery.isError ? <div className='text-center p-2'>Error{allQuery.error} </div>
              : allQuery.data.data.hits.map((image ) => (

                <Image key={image.id} image={image} />))
        }
        </ul>
    </div>
  )
}

export default ImageGallery