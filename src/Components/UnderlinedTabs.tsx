import React from 'react'

const UnderlinedTabs = ({active, setActive}) => {
    const activeClass = "p-4 cursor-pointer text-[#0064f9] border-b-2 border-[#0064f9]"
    const inactiveClass = "p-4 cursor-pointer hover:text-[#0064f9] transition-colors ease-in"
    function homeActive (e){
        e.preventDefault()
        setActive("home")
    }
    function videosActive (e){
        e.preventDefault()
        setActive("videos")
    }
    return (
        <div className='-mt-2 sm:mt-12  md:mt-18 lg:mt-8  overflow-x-auto whitespace-nowrap  shadow-sm p-4 text-center font-semibold 
        text-[#5e5e5e] text-small md:text-lg px-4 md:px-24  '>
   
                <a
                onClick={(e)=> homeActive(e)} 
                className={active === "home"? activeClass: inactiveClass} >Home</a>
                <a className="p-4 hover:text-[#0064f9] transition-colors ease-in" href="/discover/">Discover</a>
                <a 
                onClick={(e)=> videosActive(e)} 
                className={active === "videos"? activeClass: inactiveClass} >Videos</a>
                <a className="p-4 hover:text-[#0064f9] transition-colors ease-in " href="/leaderboard/">Leaderboard</a>
                <a className="p-4 hover:text-[#0064f9] transition-colors ease-in" href="/challenges/">Challenges</a>
    
        </div>
    )
}

export default UnderlinedTabs