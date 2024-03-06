import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faPlus,faBookmark } from '@fortawesome/free-solid-svg-icons';
import PromptCard from '../Components/Card2';
import PromptCard2 from '../Components/Card1';
import PromptCard3 from '../Components/Card3';
import Photo from '../Assets/user-account.png';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [username, setUsername] = useState('');
  const [auth_username, setAuthUsername] = useState('');
  const [promptCount, setPromptCount] = useState(0);
  const [prompts, setPrompts] = useState([]);
  const [saved, setSaved] = useState([]);
  const [shift, setShift] = useState(true);
  const [auth, setAuth] = useState(null);
  const { userName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      async function getDetails(){
        try{
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:3030/users/profile',{
            method: 'POST',
              headers: {
                'access-token': token,
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({userName: userName})
          })
          const data = await response.json();
          if(data.status === 'ok'){
            setIsRegistered(true);
            setUsername(data.user.username);
            setPromptCount(data.prompts.length);
            setPrompts(data.prompts);
            setSaved(data.saved);
            setAuth(data.auth);
            setAuthUsername(data.auth_username);
            // console.log(prompts);
          }else{
            console.log("Hello");
            setIsRegistered(false);
          }
      }
      catch(err){
        alert("Unauthorized Access");
        navigate('/');
      }
    }
    getDetails();
  },[userName,navigate])

  const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/');
      };
  

  if (!isRegistered)
    return (
      <div className="min-h-screen text-white relative flex flex-col gap-9">
        <div className="ml-4 mt-4 md:text-2xl font-bold text-sm text-purple">Promptly</div>
        <h1 className="ml-4 mt-8 font-semibold text-6xl">USER DOES NOT EXIST :(</h1>
      </div>
    );
  else{
    if(auth){
        return (
            <div className="min-h-screen text-white relative flex flex-col gap-9">
              {/* <Header/> */}
              <div className="flex items-center justify-between">
          <div className="ml-4  md:text-2xl font-bold text-sm text-purple flex items-center">
            <span onClick={() => navigate('/explore')} className="hover:cursor-pointer">
              Promptly
            </span>
          </div>
            <button
              className={`button-signout py-3 px-2 mr-4 rounded-md cursor-pointer transition-all duration-150 text-md text-pink font-bold`}
              onClick={handleSignOut}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-1 mt-2" />
              Log Out
            </button>
        </div>

            <div className="flex justify-center">
              <div className="border border-white rounded-lg p-4 w-3/4">
                <div className="flex items-center mb-6">
                  <div className="rounded-full h-24 w-24 overflow-hidden border-2 border-white flex-shrink-0">
                    <img className="h-full w-full object-cover" src={Photo} alt="Profile" />
                  </div>

                  <div className="ml-6 flex flex-col flex-grow">
                    <div className="text-2xl font-semibold text-white mb-1">{username}</div>
                    <div className="text-sm text-gray-300 flex items-center">
                      <FontAwesomeIcon icon={faListAlt} className="mr-1 text-yellow-400" />
                      <span className="text-yellow-400 text-lg mr-2">{promptCount}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className={`button-create py-3 px-4 rounded-md cursor-pointer transition-all duration-150 text-lg text-black font-semibold bg-orange`}
                    onClick={() => navigate('/create')}
                  >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Create
                  </button>
                  <button
                    className={`button-prompt py-3 px-4 rounded-md cursor-pointer transition-all duration-150 text-lg text-black font-semibold bg-green ml-4`}
                    onClick={() => setShift(true)}
                  >
                    My Prompts
                  </button>
                  <button
                    className={`button-saved py-3 px-4 rounded-md cursor-pointer transition-all duration-150 text-lg text-black font-semibold bg-green ml-4`}
                    onClick={() => setShift(false)}
                  >
                    <FontAwesomeIcon icon={faBookmark} className="mr-2" />
                    Saved
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
              {
                (shift)?
                prompts.map((post) => (
                <PromptCard tags={post.tags} type={shift} key={post.id} id={post.id} promptText={post.prompt} userName={post.username} />
                )):
                saved.map((post) => (
                <PromptCard3 tags={post.tags} type={shift} key={post.id} id={post.id} promptText={post.prompt} userName={post.username} />
                ))
              }
            </div>
          </div>
        );
    }else{
      return (
        <div className="min-h-screen text-white relative flex flex-col gap-9">
          {/* <Header/> */}
          <div className="flex items-center justify-between">
      <div className="ml-4  md:text-2xl font-bold text-sm text-purple flex items-center">
        <span onClick={() => navigate('/explore')} className="hover:cursor-pointer">
          Promptly
        </span>
      </div>
        <div className="flex items-center ml-auto" onClick={() => navigate(`/users/${auth_username}`)}>
        <div className="rounded-full h-8 w-8 overflow-hidden border-2 border-white mr-2 mt-1">
          <img
            className="h-full w-full object-cover hover:cursor-pointer"
            src={Photo}
            alt="Profile"
          />
        </div>
        <span className='py-3 pl-[-0.25rem] mr-4 font-bold hover:cursor-pointer'>{auth_username}</span>
      </div>
    </div>

        <div className="flex justify-center">
          <div className="border border-white rounded-lg p-4 w-3/4">
            <div className="flex items-center mb-6">
              <div className="rounded-full h-24 w-24 overflow-hidden border-2 border-white flex-shrink-0">
                <img className="h-full w-full object-cover" src={Photo} alt="Profile" />
              </div>

              <div className="ml-6 flex flex-col flex-grow">
                <div className="text-2xl font-semibold text-white mb-1">{username}</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <FontAwesomeIcon icon={faListAlt} className="mr-1 text-yellow-400" />
                  <span className="text-yellow-400 text-lg mr-2">{promptCount}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className={`button-prompt py-3 px-4 rounded-md cursor-pointer transition-all duration-150 text-lg text-black font-semibold bg-green ml-4`}
                onClick={() => setShift(true)}
              >
                Contributions
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {
            prompts.map((post) => (
            <PromptCard2 tags={post.tags} type={shift} key={post.id} id={post.id} promptText={post.prompt} userName={post.username} />
            ))
          }
        </div>
      </div>
    );
    }
  }
};

export default UserProfile;
