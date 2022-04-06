import React from 'react'

const UnderlinedTabs = () => {
    return (
        <div className='mt-8 md:mt-18 lg:mt-8 shadow-sm p-4 text-center font-semibold 
        text-[#5e5e5e] text-lg  '>
   
                <a className="p-4 text-[#0064f9] border-b-2 border-[#0064f9]" href="/">Home</a>
                <a className="p-4 hover:text-[#0064f9] transition-colors ease-in" href="/discover/">Discover</a>
                <a className="p-4 hover:text-[#0064f9] transition-colors ease-in" href="/videos/">Videos</a>
                <a className="p-4 hover:text-[#0064f9] transition-colors ease-in " href="/leaderboard/">Leaderboard</a>
                <a className="p-4 hover:text-[#0064f9] transition-colors ease-in" href="/challenges/">Challenges</a>
    
        </div>
    )
}

export default UnderlinedTabs