

export const SearchArea = () => {
    return (
        <div className="z-20 container grid place-content-center pt-20 pb-16  px-4 ">
            <h1 className="text-white font-extrabold text-4xl z-20 px-6 mb-4 max-w-2xl">
                The best free stock photos, royalty free images & videos shared by creators.
            </h1>
            <div className="relative px-6 max-w-2xl">
                <input className="w-full p-5 text-black rounded-md text-lg" type="search" name="s" id="search" autoFocus
                    placeholder="Search for free photos and videos" autoComplete="off"
                    autoCapitalize="none" required />
                <button type="submit" className="absolute inset-y-0 right-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </button>
            </div>
            <div className="flex px-6 pt-2 max-w-2xl  z-20">
                <div className="text-bold mr-2 text-white">
                    Suggested:
                </div>
                <ul className="flex gap-2 ">
                    <li className="text-white/25 hover:text-white transition-colors ease-in">computer</li>
                    <li className="text-white/25 hover:text-white transition-colors ease-in">water</li>
                    <li className="text-white/25 hover:text-white transition-colors ease-in">easter</li>
                    <li className="text-white/25 hover:text-white transition-colors ease-in">landscape</li>
                    <li className="text-white/25 hover:text-white transition-colors ease-in">mountain</li>
                    <li className="text-white/25 hover:text-white transition-colors ease-in">technology</li>
                    <li className="text-white/25 hover:text-white transition-colors ease-in">more</li>
                </ul>



            </div>
        </div>
    )
}
