import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white relative flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}>
      {/* Promptly logo */}
      <div className="absolute top-4 left-4  md:text-2xl font-bold text-sm">
        Promptly
      </div>

      {/* Content Wrapper */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        {/* Hero section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-xl md:text-6xl font-bold mb-2 md:mb-6">Ignite & Exchange Creativity</h1>
            <p className="text-sm md:text-2xl mb-8 mx-4">
              Join the prompt-sharing community—where creativity finds new beginnings.
            </p>
          </div>
        </div>

        {/* Right side - Signup form */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <form className="w-3/4 md:w-2/3 lg:w-1/2 bg-transparent rounded-lg p-6 shadow-lg border border-gray-600 ">
            <h3 className="text-3xl mb-6 text-center text-white font-bold py-4">Register</h3>
            <input type="text" placeholder="Name" className="mb-4 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600" />
            <input type="email" placeholder="Email" className="mb-4 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600" />
            <input type="password" placeholder="Password" className="mb-8 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600" />
            <div className='flex justify-center mb-4'>
              <button
                type="submit"
                className="text-white py-3 px-5 rounded border-2 border-transparent"
                style={{
                  backgroundColor: '#1A1A2E',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease', // Added transition for border
                }}
                onMouseOver={(e) => { 
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = 'white'; // Change border color on hover
                  e.target.style.borderWidth = '1px'; 
                }}
                onMouseOut={(e) => { 
                  e.target.style.backgroundColor = '#1A1A2E';
                  e.target.style.borderColor = 'transparent'; // Reset border color
                  e.target.style.borderWidth = '0px'; 
                }}
              >
                Sign Up
              </button>
            </div>
            <p className="text-center text-gray-400 text-sm">
              Already have an account? <a href="#" className="text-white underline">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
