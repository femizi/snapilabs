import React from 'react'

const Overlay = () => {
  return (
    <div className="
    absolute z-0  top-0 inset-x-0 flex justify-center  before:absolute
    overflow-hidden pointer-events-none max-h-[500px] ">
      <div className='w-full h-full z-10 bg-black/30 absolute'></div>
      <div className="w-full flex-none justify-end">
        <img className="flex-none max-w-none object-cover" src="/pexels-hero.jpeg" alt="" />

      </div>
    </div>
  )
}

export default Overlay