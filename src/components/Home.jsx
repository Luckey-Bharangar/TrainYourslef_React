import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 justify-center items-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-5'>
            <p>ITS TIME TO GET</p>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>TRAIN<span className='text-blue-400'>YOURSELF</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Lorem ipsum dolor sit, amet consectetur <span className='text-blue-400 font-medium'>adipisicing elit.</span> Ipsa tempore cupiditate cumque hic neque? Ratione repellendus, officia placeat quis quod impedit ab ipsa etsa <span className='text-blue-400 font-medium'>incidunt recusandae </span> explicabo sapiente praesentium? Ex?</p>
        <Button func={() => {
          window.location.href = '/#generate'
        }} text="Accept and Begin" />
    </div>
  )
}

export default Home
