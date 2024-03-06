import {React,useState,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
import PromptCard from '../Components/Card1';
import Header from '../Components/Header';
const Explore = () => {

  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    async function getFeed(){
      const token = localStorage.getItem('token');
      const response = await fetch("http://localhost:3030/prompts", {
        method: 'GET',
        headers: {
          'access-token': token,
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      if(data.status === 'ok'){
        setPrompts(data.prompts);
      }else{
        alert("Internal Error");
      }
    }
    getFeed();
  }, [])
  

  return (
    <div className="min-h-screen text-white relative flex flex-col gap-9" >
      {/* Promptly LOGO */}
      <Header/>
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
            className="pl-12 pr-6 py-3 bg-gray-800 text-black placeholder-gray-800 w-full text-2xl border-2 rounded-[40px] border-white focus:outline-none" 
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <p style={{ fontSize: '1.5rem' }}>&#128269;</p>
          </div>
        </div>
      </div>
     
        {/* Cards Section */}
<div className="flex flex-wrap justify-center gap-16 mt-4"> {/* Increased from gap-8 to gap-16 */}
      {
        prompts.map((post) => <div className="flex flex-col justify-center gap-16 mt-4 sm:flex-row"> {/* Increased from gap-12 to gap-16 */}
          <PromptCard id = {post.id} tags={post.tags} promptText={post.prompt} userName={post.username}/>
        </div>)
      }
      </div>

  </div>
  );
};

export default Explore;
