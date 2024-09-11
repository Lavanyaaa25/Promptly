import React from 'react';

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        className="p-8 rounded-lg shadow-2xl w-11/12 max-w-lg relative border border-white-500 bg-green"
        style={{
          /* Semi-transparent green */
          background: "rgba(182, 204, 192, 0.8)", /* Adjusted to semi-transparent green */
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", /* Light shadow for depth */
          backdropFilter: "blur(10px)", /* Blur effect */
          WebkitBackdropFilter: "blur(10px)" /* Safari support */
        }}
      >
        
        <button
          className="absolute top-4 right-4 text-black text-4xl font-bold focus:outline-none"
          onClick={onClose} 
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-black">AI Says:</h2>
        <p className="mb-6 text-md font-semibold text-black">{message}</p>
      </div>
    </div>
  );
};

export default Modal;
