import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className=' h-[500px] w-full  bg-[#101010] flex flex-col'>
      <div className='  h-[80%] w-[70%] flex mx-auto mt-8 border-b-[3px] '>
        <div className=' w-1/4 h-full  '>
        <h2 className=" text-white text-2xl ml-2 mt-20 font-extrabold font-display">
                DIGEAI
              </h2>
            <div className=' w-full h-[30%] flex flex-row mt-4'>
             <Facebook className=' fill-[#FCBF4D] h-8 w-8 font-!normal'/>
             <Instagram className=' fill-[#FCBF4D] h-8 w-8 font-!normal'/> 
             <Github className=' fill-[#FCBF4D] h-8 w-8 font-!normal'/> 
             <Linkedin className=' fill-[#FCBF4D] h-8 w-8 font-!normal'/> 
            </div>
            
        </div>
        <div className=' w-1/3 h-full '></div>
        <div className=' w-1/4 h-full b'>
        <div className=' w-1/2 flex  ml-[130px] h-full  '>
                <ul className=' mt-20 mx-auto' >
                    <li>
                        <h1 className=' font-!normal text-xl text-white'>Menu</h1>
                    </li>
                    <li className=' font-normal text-xl text-white'>
                        Home
                    </li>
                    <li className='font-normal text-xl text-white'>About</li>
                    <li className='font-normal text-xl text-white'>Contact</li>
                    <li className='font-normal text-xl text-white'>Blog</li>
                </ul>
            </div>
        </div>
        <div className=' w-[20%] h-full '>
            <div className=' w-full flex justify-end h-full '>
                <ul className=' mt-20 ' >
                    <li>
                        <h1 className=' font-!normal text-xl text-white'>Utility Pages</h1>
                    </li>
                    <li className=' font-normal text-xl text-white'>
                        Style Guide
                    </li>
                    <li className='font-normal text-xl text-white'>Lience</li>
                </ul>
            </div>
        </div>
      </div>

      {/**below border */}
      <div className=' w-[70%]  h-[20%] flex mx-auto'>
        <div className=' w-1/2 h-full  flex'>
            <h1 className=' font-normal text-xl flex items-center text-white'>All rights are reserved</h1>
        </div>
        <div className=' w-1/2 h-full  flex'>
            <h1 className=' font-normal text-xl flex items-center ml-[350px] text-white '>Made by Jai Thakur</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
