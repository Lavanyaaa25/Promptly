import {React,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Photo from '../Assets/user-account.png'


const Header = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    useEffect(() => {
        async function getFeed(){
          const token = localStorage.getItem('token');
          const response1 = await fetch('http://localhost:3030/getUser',{
            method: 'GET',
            headers: {
              'access-token': token,
              'Content-Type': 'application/json',
            }
          });
          const user = await response1.json();
          if(user.status === 'ok')
          {
            setUserName(user.username);
          }
          else
          {
            alert("Server Error");
          }
        }
        getFeed();
      }, [])
      // const handleSignOut = () => {
      //   // Add logic to sign out the user
      //   // Redirect to the sign-in page or perform other sign-out actions
      // };
  return (
    <div className="flex items-center justify-between">
    <div className="ml-4  md:text-2xl font-bold text-sm text-purple flex items-center">
      <span onClick={() => navigate('/explore')} className="hover:cursor-pointer">
        Promptly
      </span>
    </div>
    <div className="flex items-center ml-auto" onClick={() => navigate(`/users/${username}`)}>
      <div className="rounded-full h-8 w-8 overflow-hidden border-2 border-white mr-2 mt-1">
        <img
          className="h-full w-full object-cover hover:cursor-pointer"
          src={Photo}
          alt="Profile"
        />
      </div>
      <span className='py-3 pl-[-0.25rem] mr-4 font-bold hover:cursor-pointer'>{username}</span>
      {/* <button
        className={`button-signout py-3 px-2 mr-4 rounded-md cursor-pointer transition-all duration-150 text-md text-pink font-bold`}
        onClick={handleSignOut}
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-1 mt-2" />
        Log Out
      </button> */}
    </div>
  </div>
  )
}

export default Header
