

const TitleTabs = () => {
    return (
        <div className="md:px-6 px-4 flex justify-between font-semibold mb-2 ">
            <div>Free Stock Photos</div>
            <div className="relative group">
                <div className="flex cursor-pointer">Trending
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>
                    </span></div>
                <div className="absolute transition ease-in-out hidden group-hover:block bg-white shadow-md pt-2 w-24 ">
                <div className="absolute -z-10 bg-white rotate-45 shadow-sm rounded-[2px] w-6 h-6  text-sm" style={{ left: " auto", right: "5px", top: -"4.5px" }}></div>
                    <div className="bg-[#e8e8e8] pt-2 px-4 text-left cursor-pointer">Trending</div>
                    <div className="hover:bg-[#e8e8e8]  pt-2 px-4 text-left cursor-pointer">New</div>
                </div>
            </div>
        </div>
    )
}

export default TitleTabs