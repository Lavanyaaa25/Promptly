import {React,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Modal from '../Components/Modal';
import { toast, Toaster } from 'react-hot-toast';  
const Edit = () => {
  const [prompt, setPrompt]=useState('');
  const [promptId, setPromptId]=useState('');
  const [userName,setUserName] = useState('');
  const [modalOpen, setModalOpen] = useState(false); 
  const [aiMessage, setAiMessage] = useState(''); 
  const [tags, setTags]=useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    setUserName(params.get('username'));
    setPromptId(params.get('id'));
    setPrompt(params.get('promptText'));

  }, []);

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
      setAiMessage(res.message); 
      setModalOpen(true); 
    }catch(err){
      setAiMessage("Error!!!");
      setModalOpen(true);
      console.log(err);
    }
  }

  async function handleSubmit (e){
    e.preventDefault();
    try{
        // console.log(id);
        // console.log(prompt);
      const token = localStorage.getItem('token');
      if(!token){
        navigate('/');
        return;
      }
      const data = {
        id: promptId,
        prompt: prompt,
        tags: tags
      }
      setPrompt('');
      setTags('');
      const response = await fetch('http://localhost:3030/edit',{
        method: 'POST',
        headers: {
          'access-token': token,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
      });
      const res = await response.json();
      if(res.status === 'ok')
        toast.success(res.message);
    else
    toast.error(res.message);
    setTimeout(() => {
      navigate(`/users/${userName}`)
    }, 3000);  
    }
    catch(err){
      toast.error("Unauthorized Access");
      setTimeout(() => {
        navigate('/');
      }, 3000); 
    }
  }

  return (
    <div className ="min-h-screen text-white relative flex flex-col gap-9" >

      <Header />
      
      {/* Hero section */}
<div className="w-full flex justify-center items-center">
  <div className="flex flex-col">
    <div className="text-left ml-10">
      <h1 className="text-lg md:text-5xl font-bold mb-2 md:mb-5 text-green">
        Edit your AI Prompt
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
        <input type='text' className="border border-gray-600 text-[15px] h-10 w-[584px] rounded-md focus bg-transparent mt-2 px-2" placeholder="e.g. #coding, #development" value={tags} onChange={(e) => setTags(e.target.value)}/><br/>
        
        <input
  className="font-semibold text-[18px] rounded-md h-[40px] w-[150px] mt-5 text-black bg-orange hover:bg-orange-light  cursor-pointer border-none"
  value="Update"
  type="submit"
/>
<button
  className="font-semibold text-[18px] rounded-md h-[40px] w-[150px] mt-5 text-black bg-green cursor-pointer border-none ml-5"
  value="AI Suggestion"
  onClick={generate}>AI Suggestion</button>
       
      </form>
    </div>
  </div>
</div>
<Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} 
        message={aiMessage} 
      />
       <Toaster
        toastOptions={{
          className: '',
          style: {
            background: 'rgba(244, 191, 85, 0.8)',
            color: 'black',
            fontWeight: 600,
          },
        }}
      />

    </div>
  )
}

export default Edit