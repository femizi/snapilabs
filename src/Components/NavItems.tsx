import React, { useState } from 'react'

const NavItems = () => {
    const [navOpen, setnavOpen] = useState(false)
    const openClass = "absolute   bg-[#e8e8e8] min-w-[175px] w-60 -left-[215px] max-w-xs  top-12  text-black"
    const closeClass = "absolute hidden   bg-[#e8e8e8] min-w-[175px] w-60 -left-[215px] max-w-xs  top-12  text-black"
    return (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap mr-2 text-xl font-medium text-white hover:text-gray-900"> Explore </a>
            <a href="#" className="whitespace-nowrap mr-2 text-xl font-medium text-white hover:text-gray-900"> Licence </a>
            <a href="#" className="whitespace-nowrap mr-2 text-xl font-medium text-white hover:text-gray-900"> Upload </a>
            <a href="#" className="whitespace-nowrap mr-2 text-xl font-bold text-white hover:text-gray-900">
                <div onClick={()=> setnavOpen(!navOpen)} className='relative'>
                    <div>...</div>
                    <div className={navOpen? openClass: closeClass}>
                        <div className="text-sm">
                            <div className="absolute -z-10 bg-white rotate-45 shadow-sm rounded-[2px] w-6 h-6 text-[#1a1a1a] text-sm" style={{ left: " auto", right: "5px", top: -"4.5px" }}></div>
                            <ul className="py-2 px-2 font-bold"><li className="when-not-signed-in">
                                <a data-track-action="navbar" data-track-label="login" href="/login/" rel="nofollow">
                                    Login
                                </a>
                            </li>
                                <li className="when-not-signed-in py-2">
                                    <a data-track-action="navbar" data-track-label="signup" href="/onboarding/" rel="nofollow">
                                        Join
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a className="flex " data-track-action="navbar" data-track-label="switch-locale" href="#" rel="nofollow" data-activated="true" data-flag-activated="true">
                                        Change Language
                                        <img width="36" height="26" className="ml-2" src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png" /></a>
                                </li>
                                <li className=" pt-2">
                                    <a  data-track-label="logout" href="/logout/" rel="nofollow">
                                        Logout
                                    </a>
                                </li>

                                <li className='py-2'>
                                    <a data-track-action="navbar" data-track-label="api" href="/api/">
                                        Image &amp; Video API
                                    </a>
                                </li>
                                <li className='py-2'>
                                    <a data-track-action="navbar" data-track-label="apps" href="/pro/">
                                        Apps &amp; Plugins
                                    </a>
                                </li>
                                <li className='py-2'>
                                    <a data-track-action="navbar" data-track-label="faq" href="https://help.pexels.com/hc/en-us" rel="nofollow">
                                        FAQ
                                    </a>
                                </li>
                                <li className='py-2'>
                                    <a data-track-action="navbar" data-track-label="partnerships" href="/become-a-partner/">
                                        Partnerships
                                    </a>
                                </li>
                                <li className='py-2'>
                                    <a data-track-action="navbar" data-track-label="imprint" href="/imprint/" rel="nofollow">
                                        Imprint &amp; Terms
                                    </a>
                                </li>
                            </ul>
                            <ul className=" flex justify-evenly py-2">
                                <li  className=' group p-2 hover:bg-gray-600'>
                                    <a data-track-label="facebook" href="https://www.facebook.com/pexels" rel="nofollow" target="_blank" title="Facebook">
                                        <i className="icon-facebook"><svg className='group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg></i>
                                    </a>
                                </li>
                                <li  className='group p-2 hover:bg-gray-600'>
                                    <a data-track-label="twitter" href="https://twitter.com/pexels" rel="nofollow" target="_blank" title="Twitter">
                                        <i className="icon-twitter"><svg className='group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></i>
                                    </a>
                                </li>
                                <li  className='group p-2 hover:bg-gray-600'>
                                    <a data-track-label="instagram" href="https://instagram.com/pexels/" rel="nofollow" target="_blank" title="Instagram">
                                        <i className="rd__svg-icon rd__svg-icon--17x17"><svg className='group-hover:fill-white ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                        </i>
                                    </a>
                                </li>
                                <li  className='group p-2 hover:bg-gray-600'>
                                    <a data-track-label="pinterest" href="https://www.pinterest.com/pexels" rel="nofollow" target="_blank" title="Pinterest">
                                        <svg className='group-hover:fill-white ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fillRule="evenodd" clipRule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li  className='group p-2 hover:bg-gray-600'>
                                    <a href="https://www.youtube.com/c/PexelsPhotos" rel="nofollow" target="_blank" title="YouTube">
                                        <svg className='h-[24px] w-[24px] group-hover:fill-white  ' xmlns="http://www.w3.org/2000/svg" height="682pt" viewBox="-21 -117 682.66672 682" width="682pt"><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"></path></svg>

                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#05A081] "> Login </a>
        </div>
    )
}

export default NavItems