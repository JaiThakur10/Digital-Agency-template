import React from 'react'

function Blog() {
  return (
        <div className=' w-full h-full min-h-screen bg-[#101010]'>

        {/** header */}
        <div className='  w-full h-[200px] flex'>
            <div className='  w-[80%] h-full flex mx-auto'>
                <h1 className=' font-!normal text-8xl text-white uppercase flex items-center mx-auto'> blog</h1>
            </div>
        </div>

        {/** bolgs */}
        <div className=' w-full h-[450px] flex  '>
            <div className='  w-[80%] h-full ml-[210px] flex gap-10 '>
            <div className=' w-[28%] h-[70%] bg-[#FCBF4D] flex flex-col   mt-2 rounded-[1rem] border-black border-2'>
                
                <img
                className=' rounded-[1rem] h-full'
                 src="https://img.freepik.com/premium-vector/good-design-business-famous-quote-lettering-poster_23-2148462451.jpg" alt="design" />
                
            </div>
            <div className=' w-[28%] h-[70%] bg-[#FCBF4D] flex flex-col   mt-2 rounded-[1rem] border-black border-2'>
                
                <img
                className='rounded-[1rem] h-full'
                 src="https://images.ctfassets.net/lh3zuq09vnm2/4Kvp8YI8jwAh72XA4T1YiA/416970f31501001e6636638bd574fc31/product-marketing-homepage-hero-visual__1_.png" alt="marketing" />
                
                
            </div>
            <div className=' w-[28%] h-[70%] bg-[#FCBF4D] flex flex-col   mt-2 rounded-[1rem] border-black border-2'>
                
                <img 
                className='rounded-[1rem] h-full'
                src="https://img.freepik.com/free-vector/pack-diagram-elements_23-2148560570.jpg" alt="design" />
                
            </div>
            
            </div>
        </div>

        {/**button */}
        <div className='  w-1/4 h-[70px] flex mx-auto mt-[-40px]'>
            <div className=' bg-[#FCBF4D] w-[40%] h-[70%] rounded-full flex mx-auto'>
                <h1 className=' flex mx-auto font-!normal text-xl uppercase justify-center items-center'>all posts</h1>
            </div>
        </div>
    </div>
  )
}

export default Blog
