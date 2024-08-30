import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const Create = () => {
  const [prompt, setPrompt]=useState('');
  const [tags, setTags]=useState('');
  const navigate = useNavigate();

  async function generate(e) {
    e.preventDefault();
    try{
      const data = {
        prompt: prompt
      }
      const response = await fetch('http://localhost:3030/generate',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
      });
      const res = await response.json();
      alert(res.message);
    }catch(err){
      alert("Erorr!!!");
      console.log(err);
    }
  }

  async function handleSubmit (e){
    e.preventDefault();
    try{
      const token = localStorage.getItem('token');
      if(!token){
        navigate('/');
        return;
      }
      const data = {
        id: new Date().getTime(),
        prompt: prompt,
        tags: tags.split(" ")
      }
      setPrompt('');
      setTags('');
      const response = await fetch('http://localhost:3030/publish',{
        method: 'POST',
        headers: {
          'access-token': token,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
      });
      const res = await response.json();
      if(res.status === 'ok')
      alert(res.message);
    else
      alert(res.message);
    }
    catch(err){
      alert("Unauthorized Access");
      navigate('/');
    }
    
  }


  return (
    <div className ="min-h-screen text-white relative flex flex-col gap-9" >

      <Header />
      
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
      <form onSubmit={handleSubmit}>
        <label className="text-xl font-semibold text-pink">Enter Your Prompt:</label><br/>
        <textarea className="border border-gray-600 px-2 py-1 text-[15px] h-[180px] w-[584px] rounded-lg focus bg-transparent resize-none mb-3 mt-2" placeholder="e.g:Time-travel mishap" type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} required></textarea><br/>
        <label className="text-xl font-semibold text-pink">Enter Tags:</label><br/>
        <input type='text' className="border border-gray-600 text-[15px] h-10 w-[584px] rounded-md focus bg-transparent mt-2 px-2" placeholder="e.g. #coding #development" value={tags} onChange={(e) => setTags(e.target.value)}/><br/>
        
        <input
  className="font-semibold text-[18px] rounded-md h-[40px] w-[150px] mt-5 text-black bg-orange hover:bg-orange-light  cursor-pointer border-none"
  value="Publish"
  type="submit"
/>
        <button
  className="font-semibold text-[18px] rounded-md h-[40px] w-[150px] mt-5 text-black bg-orange hover:bg-orange-light  cursor-pointer border-none ml-5"
  value="AI Suggestion"
  onClick={generate}>AI Suggestion</button>
       
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Create