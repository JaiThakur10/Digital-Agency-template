import React from 'react'

function Testimonial() {
  return (
    <div className=' h-full min-h-screen bg-white w-full'>

        {/**header */}
        <div className='  w-full h-[200px] flex  '>
            <div className=' w-[80%]  flex mx-[190px]  '>
                <div className='  flex  '>
                    <h1 className='  text-[#101010] font-!normal text-[90px] uppercase mt-8 '>TESTIMONIALS</h1>
                </div>
                <div className='  w-[8%] ml-4 border-b-4 border-black flex h-[110px]' ></div>
                <div className='  flex justify-center items-center w-[30%] ml-6'>
                    <p className=' font-normal'>
                    These testimonials reflect the commitment, innovation, and excellence we bring to every project.
                    </p>
                </div>
            </div>
        </div>

        {/**container of 3 divs */}
        <div className=' w-full h-[450px] flex'>
            <div className='  w-[75%] bg-[#FCBF4D] h-full mx-auto flex  border-black border-2 rounded-[1rem] flex-col '>
            
            <div className='  flex  h-[40%] w-full gap-10 justify-center items-center'>
                <div className=' border-black border-2 rounded-full h-32 w-32'></div>
                <div className=' border-black border-2  rounded-full h-32 w-32'></div>
                <div className=' border-black border-2  rounded-full h-32 w-32'></div>
            </div>
            <div className=' flex  h-[40%] w-full justify-center items-center'>
                <p className=' font-!normal w-[60%] text-3xl  ml-24'>"TRANSFORMATIVE PARTNERSHIP WITH DIGEAI AGENCY, WHERE INNOVATION MET SUCCESS, AND OUR DIGITAL JOURNEY SOARED."</p>
            </div>
            <div className=' flex  h-[20%] w-full flex-col'>
                    <div className=' flex  h-[50%] w-full '>
                        <h1 className=' font-!normal flex h-full items-end justify-center w-full text-2xl'>JOHN PEARSON</h1>
                    </div>
                    <div className=' flex  h-[50%] w-full '>
                        <h1 className='font-!normal flex h-full  justify-center w-full'>Digital Project Manager</h1>
                    </div>

            </div>
            
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
