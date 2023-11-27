import React from 'react'

const Create = () => {
  return (
    <div className="min-h-screen text-white relative flex flex-col gap-9" 
    style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}>

      {/* Promptly LOGO */}
      <div className="ml-4 mt-4 md:text-2xl font-bold text-sm">
        Promptly
      </div>

      {/* Hero section */}
      <div className="w-full flex flex-col">
          <div className="text-left ml-10">
            <h1 className="text-xl md:text-5xl font-bold mb-2 md:mb-5">
              Publish your AI Prompt
            </h1>
            <p className="text-sm md:text-[18px] mb-8">
            Unleash your creativity on a global canvas,<br/>Craft, share, and inspire with AI-powered prompts.
            </p>
          </div>
          <div className='ml-10'>
            <form>
              <label className='text-[20px] font-semibold'>Enter Your Prompt: </label><br/>
              <textarea className="border-2 px-2 py-1 text-[15px] h-[180px] w-[584px] rounded-md focus:outline-none bg-transparent resize-none mb-3 mt-1" placeholder='Share your prompt....' type="text"/><br/>
              <label className='text-[20px] font-semibold'>Enter Tags:</label><br/>
              <input className='border-2 text-[15px] h-10 w-[584px] rounded-md focus:outline-none bg-transparent mt-1 px-2' placeholder='e.g. #coding, #development'/><br/>
              <input className='border-2 font-semibold text-[18px] rounded-md h-[40px] w-[150px] mt-5 bg-white text-slate-800 ml-[432px] hover:bg-transparent hover:text-slate-50 cursor-pointer' value="Publish" type='submit'/>
            </form>
          </div>
      </div>

    </div>
  )
}

export default Create