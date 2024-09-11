import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit2, FiTrash } from 'react-icons/fi';
import { toast, Toaster } from 'react-hot-toast'; 
// import { IoBookmarkOutline } from 'react-icons/io5';

const EditablePromptCard = ({ type, id, promptText, userName, tags}) => {
  // const tags = ['#tag1', '#tag2', '#tag3', '#tag4', '#tag4', '#tag4', '#tag4', '#tag4', '#tag4']; // Replace with your tag list
  const navigate = useNavigate();
  const handleDelete = async () => {
      try{
          const token = localStorage.getItem('token');
          // console.log(key);
          if(type){
            const response = await fetch(`http://localhost:3030/delete/${id}`, {
              method: 'GET',
              headers: {
                'access-token': token,
                'Content-Type': 'application/json',
              }
            });
            const data = await response.json();
            toast.success(data.message);
            setTimeout(() => {
              window.location.reload();
            }, 800);  
        }else{
          const response = await fetch(`http://localhost:3030/save/unsave/${id}`, {
            method: 'GET',
            headers: {
              'access-token': token,
              'Content-Type': 'application/json',
            }
          });
          const data = await response.json();
          toast.error(data.message);  
          setTimeout(() => {
            window.location.reload();
          }, 800);
        }
      }
      catch(err){
        toast.error("Unauthorized access")
        setTimeout(() => {
          navigate('/')
        }, 2000);
      }
  }
  return (
    <div>
    <div
      className="border rounded-lg p-4 w-96 h-72 mx-auto mt-4 relative overflow-hidden flex flex-col justify-between"
      style={{
        background: 'rgba(245, 241, 249, 0)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        overflowY: 'auto',
        scrollbarWidth: 'thin',  // For Firefox
        scrollbarColor: 'rgba(201, 174, 243, 1) transparent', 
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
        <Link to={`/users/${userName}`}><p className="text-white text-lg font-semibold cursor-pointer">@{userName}</p></Link>
        </div>
        <div className="flex items-start space-x-2">
          <Link to={`/edit?id=${id}&promptText=${encodeURIComponent(promptText)}&username=${encodeURIComponent(userName)}`}><button className="text-white font-bold py-2 px-4 rounded-full">
            <FiEdit2 style={{color:'#6FA5EC'}}/>
          </button></Link>
          <button onClick={handleDelete} className="text-white font-bold py-2 px-4 rounded-full">
            <FiTrash style={{color:'#FF8F8F'}} />
          </button>
        </div>
      </div>
      <div className="h-full flex items-center justify-center">
        <p className="text-center text-gray-700 text-s font-semibold">{promptText}</p>
      </div>
      <div className="flex justify-center flex-wrap gap-1">
        {tags.map((tag, index) => (
          <div key={index} className="bg-transparent">
            <p className="text-xs text-green font-bold rounded px-2 py-1">{tag}</p>
          </div>
        ))}
      </div>
    </div>
    <Toaster
        toastOptions={{
          className: '',
          style: {
            background:'rgba(250, 225, 221, 1)',
            color: 'black',
            fontWeight: 600,
          },
        }}
      />
    </div>
  );
};

export default EditablePromptCard;
