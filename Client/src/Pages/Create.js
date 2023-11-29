import React from 'react'

const Create = () => {
  return (
    <div className="min-h-screen text-white relative flex flex-col gap-9" 
    style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}>

      {/* Promptly LOGO */}
      <div className="ml-4 mt-4 md:text-2xl font-bold text-sm text-purple">
        Promptly
      </div>

      {/* Hero section */}
<div className="w-full flex justify-center items-center">
  <div className="flex flex-col">
    <div className="text-left ml-10">
      <h1 className="text-xl md:text-5xl font-bold mb-2 md:mb-5 text-green">
        Publish your AI Prompt
      </h1>
      <p className="text-sm md:text-[18px] mb-8 text-orange-red">
        Unleash your creativity on a global canvas,<br/>Craft, share, and inspire with AI-powered prompts.
      </p>
    </div>
    <div className="ml-10">
      <form>
        <label className="text-xl font-semibold text-pink">Enter Your Prompt:</label><br/>
        <textarea className="border border-gray-600 px-2 py-1 text-[15px] h-[180px] w-[584px] rounded-lg focus bg-transparent resize-none mb-3 mt-2" placeholder="e.g:Time-travel mishap" type="text"></textarea><br/>
        <label className="text-xl font-semibold text-pink">Enter Tags:</label><br/>
        <input className="border border-gray-600 text-[15px] h-10 w-[584px] rounded-md focus bg-transparent mt-2 px-2" placeholder="e.g. #coding, #development"/><br/>
        
        <input
  className="font-semibold text-[18px] rounded-md h-[40px] w-[150px] mt-5 text-black bg-orange hover:bg-orange-light  cursor-pointer border-none"
  value="Publish"
  type="submit"
 
/>
       
      </form>
    </div>
  </div>
</div>


    </div>
  )
}

export default Create