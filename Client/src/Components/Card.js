import { useState } from 'react';
import { FiCopy,  FiCheckCircle } from 'react-icons/fi'; // Import the required icons
import { IoBookmarkOutline } from 'react-icons/io5';

const PromptCard = ({ promptText, userName }) => {
  const [copied, setCopied] = useState(false); // State to track if text is copied
  const [saved, setSaved] = useState(false); // State to track if prompt is saved

  const tags = ['#tag1', '#tag2', '#tag3', '#tag4','#tag4','#tag4','#tag4','#tag4','#tag4']; // Replace with your tag list

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText)
      .then(() => {
        setCopied(true); // Update state on successful copy
        setTimeout(() => {
          setCopied(false); 
        }, 2000); 
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleSaveClick = () => {
    console.log(saved);
    setSaved(!saved); // Toggle the saved state
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-96 h-72 mx-auto mt-4 relative overflow-hidden flex flex-col justify-between"
         style={{
           backdropFilter: 'blur(10px)',
           backgroundColor: 'rgba(159,145,204, 0.1)',
           borderRadius: '20px'
         }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-white text-lg font-semibold">@{userName}</p>
        </div>
        <div className="flex items-start space-x-2">
          <button
            onClick={copyToClipboard}
            className="text-white font-bold py-2 px-4 rounded-full"
          >
            {copied ? <FiCheckCircle /> : <FiCopy />}
          </button>
          <button
            onClick={handleSaveClick}
            className="text-white font-bold py-2 px-4 rounded-full"
          >
            {saved ? <IoBookmarkOutline color="white" fill="white" /> : <IoBookmarkOutline />}
          </button>
        </div>
      </div>
      <div className="h-full flex items-center justify-center">
        <p className="text-center text-gray-700 text-s font-semibold">{promptText}</p>
      </div>
      <div className="flex justify-center flex-wrap gap-1">
        {tags.map((tag, index) => (
          <div key={index} className="rounded-full bg-gray-200 px-2 py-1">
            <p className="text-sm text-gray-700 bg-slate-600 rounded px-2 py-1">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptCard;
