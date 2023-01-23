import React from 'react'

const Room = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='w-1/3 h-[320px] rounded-lg bg-indigo-600 flex flex-col space-y-4 p-3'>
          <h1 className=' text-center my-4 font-bold text-2xl'>WELCOME TO CHAT</h1>
          <input className='h-12 rounded-xl p-3 outline-none' type="text" placeholder='Username' />
          <input className='h-12 rounded-xl p-3 outline-none' type="text" placeholder='Room' />
          <div className='tracking-wider hover:opacity-70 cursor-pointer text-white bg-indigo-900 h-12 pt-2 text-xl text-center rounded-lg'>CHAT!!!</div>
      </div>
    </div>
  )
}

export default Room