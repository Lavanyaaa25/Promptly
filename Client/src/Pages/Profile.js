import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListAlt } from '@fortawesome/free-solid-svg-icons';
import PromptCard from '../Components/Card';

const UserProfile = () => {
  const [selectedOption, setSelectedOption] = useState('My Prompts');
  const promptCount = 10; // Replace with actual prompt count
  const likesCount = 25; // Replace with actual likes count

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="min-h-screen text-white relative flex flex-col gap-9" style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}>
      {/* Promptly LOGO */}
      <div className="ml-4 mt-4 md:text-2xl font-bold text-sm text-purple">
        Promptly
      </div>

      {/* Border Box containing User Profile section and Buttons */}
      <div className="flex justify-center"> {/* Centering content */}
        <div className="border border-white rounded-lg p-4 w-3/4">
          {/* User Profile section */}
          <div className="flex items-center mb-6"> {/* Increased gap */}
            {/* Circular Profile Photo */}
            <div className="rounded-full h-24 w-24 overflow-hidden border-2 border-white flex-shrink-0">
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>

            {/* Username and Counts */}
            <div className="ml-6 flex flex-col"> {/* Added margin */}
              <div className="text-2xl font-semibold text-white mb-1">
                JohnDoe {/* Replace with dynamic username */}
              </div>
              <div className="text-sm text-gray-300 flex items-center">
                <FontAwesomeIcon icon={faListAlt} className="mr-1 text-yellow-400" />
                <span className="text-yellow-400 text-lg mr-2">{promptCount}</span> {/* Icon and count */}
                <FontAwesomeIcon icon={faHeart} className="mr-1 text-orange" />
                <span className="text-white text-lg">{likesCount}</span> {/* Icon and count */}
              </div>
            </div>
          </div>

          {/* Centered RadioInputs */}
          <div className="flex flex-col items-center"> {/* Center align and create a column layout */}
            <div className="radio-inputs bg-pink p-2 rounded-md text-black inline-flex">
              <div className="flex ">
                {/* Using a flex container to display elements in a row */}
                <label className="radio inline-block my-2">
                  <input
                    type="radio"
                    name="radio"
                    value="My Prompts"
                    checked={selectedOption === 'My Prompts'}
                    onChange={handleRadioChange}
                    className="hidden"
                  />
                  <span
                    className={`name py-3 px-4 rounded-md cursor-pointer transition-all duration-150 text-lg font-semibold ${
                      selectedOption === 'My Prompts' ? 'bg-purple ' : ''
                    }`}
                  >
                    My Prompts
                  </span>
                </label>
                <label className="radio inline-block my-2">
                  <input
                    type="radio"
                    name="radio"
                    value="Saved"
                    checked={selectedOption === 'Saved'}
                    onChange={handleRadioChange}
                    className="hidden"
                  />
                  <span
                    className={`name py-3 px-4 rounded-md cursor-pointer transition-all duration-150 text-lg font-semibold ${
                      selectedOption === 'Saved' ? 'bg-purple' : ''
                    }`}
                  >
                    Saved
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromptCard promptText={"heeloo"}/>
    </div>
  );
};

export default UserProfile;
