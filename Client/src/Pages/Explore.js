import React from 'react';
import PromptCard from '../Components/Card';
const Explore = () => {
  return (
    <div className="min-h-screen text-white relative flex flex-col gap-9" >
      {/* Promptly LOGO */}
      <div className="ml-4 mt-4 md:text-2xl font-bold text-sm text-purple">
        Promptly
      </div>
      <div className="absolute top-4 right-8"> {/* Adjusted right margin */}
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
          <img
            src="URL_TO_YOUR_PROFILE_PHOTO"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 text-xl md:text-6xl font-bold">
        <h1 className="text-4xl md:text-6xl font-bold text-light-yel text-center">Discover Endless Ideas</h1>
        <div className="mt-2">
          <h1 className="text-2xl md:text-3xl font-semibold text-red text-center">Explore Prompts...</h1>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <div className="relative w-3/4 md:w-8/12">
          <input
            type="text"
            placeholder=" Search..."
            className="pl-12 pr-6 py-3 bg-gray-800 text-black placeholder-gray-800 w-full text-2xl border-2 rounded-[40px] border-white  " 
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <p style={{ fontSize: '1.5rem' }}>&#128269;</p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap justify-center gap-4 mt-4">
      <div className="flex justify-center gap-4 mt-4">
          <PromptCard promptText="Prompt 1" userName="JaneDoe" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <PromptCard promptText="Prompt 2" userName="JaneDoe" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <PromptCard promptText="Prompt 3" userName="Alice" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <PromptCard promptText="Prompt 4" userName="Bob" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <PromptCard promptText="Prompt 5" userName="Eve" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <PromptCard promptText="Prompt 6" userName="Charlie" />
        </div>
      </div> */} 
      {/* three in a row */}
     
        {/* Cards Section */}
<div className="flex flex-wrap justify-center gap-16 mt-4"> {/* Increased from gap-8 to gap-16 */}
  <div className="flex flex-col justify-center gap-16 mt-4 sm:flex-row"> {/* Increased from gap-12 to gap-16 */}
    <PromptCard promptText="Prompt 1" userName="JaneDoe" />
    <PromptCard promptText="Prompt 2" userName="JohnDoe" />
  </div>

  <div className="flex flex-col justify-center gap-16 mt-4 sm:flex-row"> {/* Increased from gap-12 to gap-16 */}
    <PromptCard promptText="Prompt 3" userName="Alice" />
    <PromptCard promptText="Prompt 4" userName="Bob" />
  </div>

  <div className="flex flex-col justify-center gap-16 mt-4 sm:flex-row"> {/* Increased from gap-12 to gap-16 */}
    <PromptCard promptText="Prompt 5" userName="Eve" />
    <PromptCard promptText="Prompt 6" userName="Charlie" />
  </div>
</div>

   
    </div>
  );
};

export default Explore;
