import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import FilteredGallery from './Components/FilteredGallery'
import Header from './Components/Header'
import ImageGallery from './Components/ImageGallery'
import Overlay from './Components/Overlay'
import { SearchArea } from './Components/SearchArea'
import TitleTabs from './Components/TitleTabs'
import UnderlinedTabs from './Components/UnderlinedTabs'
import VideoGallery from './Components/VideoGallery'


function App() {
const [term, setTerm] = useState('')
const [sumbit, setSumbit] = useState(false) 
const [active, setActive] = useState("home")
  const key = "23982343-85a606c20d0db684650973a9f"
const allQuery = useQuery('all-query', ()=>
axios({
  method: "GET",
  url: `https://pixabay.com/api/?key=${key}&image_type=photo&per_page=100&orientation=vertical&safesearch=true`,
}
)) 
const videoQuery = useQuery('video-query', ()=>
axios({
  method: "GET",
  url: `https://pixabay.com/api/videos/?key=${key}&per_page=40&orientation=vertical&safesearch=true`,
}
)) 

const filteredQuery = useQuery('filtered-query', ()=>
axios({
  method:"GET",
  url: `https://pixabay.com/api/?key=${key}&image_type=photo&q=${term}`
}),{
  enabled:sumbit
}

)
console.log(filteredQuery)

  return (
    <div className="App">
      <Header />
      <Overlay />
      <SearchArea setTerm={setTerm} setSumbit={setSumbit} filteredQuery={filteredQuery} />
      <UnderlinedTabs active={active} setActive={setActive}/>
      <TitleTabs/>
    

     {
      active ==="videos"?
      <VideoGallery allQuery={videoQuery}/>:
     filteredQuery.isIdle
     ?  <ImageGallery allQuery={allQuery}/>
     : <FilteredGallery allQuery={filteredQuery}/>
     }

    </div>
  )
}

export default App
