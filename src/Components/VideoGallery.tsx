import React from 'react'
import Videos from './Videos'

const VideoGallery = ({allQuery}) => {
  console.log(allQuery)
  return (
    <div className='px-4 md:px-6  '>
    <ul className='grid grid-col-2 md:grid-cols-3 gap-4'>
       {/* checking all query load and error then map */}
       {
      allQuery.isLoading ? <div className='text-center p-2'>Loading...</div>
        : allQuery.isError ? <div className='text-center p-2'>Error{allQuery.error} </div>
          : allQuery.data.data.hits.map((video ) => (
<Videos video={video} key={video.id}/>
            
          ))}
    </ul>
</div>
  )
}

export default VideoGallery