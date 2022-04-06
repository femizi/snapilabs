import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Header from './Components/Header'
import ImageGallery from './Components/ImageGallery'
import Overlay from './Components/Overlay'
import { SearchArea } from './Components/SearchArea'
import TitleTabs from './Components/TitleTabs'
import UnderlinedTabs from './Components/UnderlinedTabs'


function App() {
  const key = "23982343-85a606c20d0db684650973a9f"
const allQuery = useQuery('all-query', ()=>
axios({
  method: "GET",
  url: `https://pixabay.com/api/?key=${key}&image_type=photo`
}
)) 


  return (
    <div className="App">
      <Header />
      <Overlay />
      <SearchArea/>
      <UnderlinedTabs/>
      <TitleTabs/>
      <ImageGallery allQuery={allQuery}/>

    </div>
  )
}

export default App
