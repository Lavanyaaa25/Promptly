import React from 'react';

const UserProfile = () => {
  return (
    <div className="min-h-screen text-white relative flex flex-col gap-9" style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}>
      {/* Promptly LOGO */}
      <div className="ml-4 mt-4 md:text-2xl font-bold text-sm text-purple">
        Promptly
      </div>

      {/* Border Box containing User Profile section and Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div className="border border-white rounded-lg p-4 w-3/4">
    {/* User Profile section */}
    <div className="flex items-center mb-4">
      {/* Circular Profile Photo */}
      <div className="rounded-full h-16 w-16 overflow-hidden border-2 border-white flex-shrink-0">
        <img
          className="h-full w-full object-cover"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
      </div>

      {/* Username */}
      <div className="ml-3 text-lg font-semibold text-white">
        JohnDoe {/* Replace with dynamic username */}
      </div>
    </div>

  
    <div className="flex justify-center">
      <button className=" hover:bg-blue-700 text-black font-bold py-2 px-3 rounded mr-3 bg-orange">
        My Prompts
      </button>
      <button className=" hover:bg-blue-700 text-black font-bold py-2 px-3 rounded mr-3 bg-orange">
        Saved
      </button>
             

    </div>
  </div>
</div>

      
    </div>
  );
};

export default UserProfile;
