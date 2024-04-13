import {React, useState} from 'react';
import { motion } from 'framer-motion';
import SignUp from '../Components/SignUp';
import Login from '../Components/Login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState(false);
  useEffect(() => {
    async function isLoggedIn(){
      try{
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3030/users/getUser',{
          method: 'GET',
          headers: {
            'access-token': token,
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        if(data.status === 'ok'){
          navigate('/explore')
        }
      }
      catch(err){
        console.log(err);
      }
    }
    isLoggedIn();
  },[navigate]);
  return (
    <motion.div
      className="min-h-screen text-white relative flex flex-col items-center justify-center"
      // style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Promptly logo */}
      <motion.div
        className="absolute top-4 left-4  md:text-2xl font-bold text-sm text-purple"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Promptly
      </motion.div>

      {/* Content Wrapper */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Hero section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="text-center"
           
          >
            <motion.h1
              className="text-xl md:text-6xl font-bold mb-2 md:mb-6 "
            >
              Ignite & Exchange Creativity
            </motion.h1>
            <motion.p
              className="text-sm md:text-2xl mb-8 mx-4 text-gray font-semibold"
            >
              Join the prompt-sharing community—where creativity finds new beginnings.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right side - Signup / Sign in form */}
        {(formType)?<Login formType={formType} setFormType={setFormType}/>:<SignUp formType={formType} setFormType={setFormType}/>}
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
