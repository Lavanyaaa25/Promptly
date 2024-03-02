import React from 'react';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import { IoBookmarkOutline } from 'react-icons/io5';

const EditablePromptCard = ({ promptText, userName, onEdit, onDelete }) => {
  const tags = ['#tag1', '#tag2', '#tag3', '#tag4', '#tag4', '#tag4', '#tag4', '#tag4', '#tag4']; // Replace with your tag list

  return (
    <div
      className="border rounded-lg p-4 w-96 h-72 mx-auto mt-4 relative overflow-hidden flex flex-col justify-between"
      style={{
        background: 'rgba(245, 241, 249, 0)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-white text-lg font-semibold">@{userName}</p>
        </div>
        <div className="flex items-start space-x-2">
          <button onClick={onEdit} className="text-white font-bold py-2 px-4 rounded-full">
            <FiEdit2 />
          </button>
          <button onClick={onDelete} className="text-white font-bold py-2 px-4 rounded-full">
            <FiTrash />
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

export default EditablePromptCard;
