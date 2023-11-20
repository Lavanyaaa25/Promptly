import React from 'react'
import { motion } from 'framer-motion'

const Login = ({formType, setFormType}) => {
    function toggleForm(){
        setFormType(!formType);
    }
  return (
    <motion.div
    className="w-full md:w-1/2 flex justify-center items-center"
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <motion.form
      className="w-3/4 md:w-2/3 lg:w-1/2 bg-transparent rounded-lg p-6 shadow-lg border border-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.h3
        className="text-3xl mb-6 text-center text-white font-bold py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Sign In
      </motion.h3>
        <motion.input
        type="email"
        placeholder="Email"
        className="mb-4 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
        <motion.input
        type="password"
        placeholder="Password"
        className="mb-8 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          type="submit"
          className="text-white py-3 px-5 rounded border-2 border-transparent"
          style={{
            backgroundColor: '#1A1A2E',
          }}
          whileHover={{
            backgroundColor: 'transparent',
            // borderColor: 'white',
            // borderWidth: '1px',
          }}
         
        >
          Sign In
        </motion.button>
      </motion.div>
      <motion.p
        className="text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Create a new account. <span onClick={toggleForm} className="text-white underline cursor-pointer">Sign Up</span>
      </motion.p>
    </motion.form>
  </motion.div>
  )
}

export default Login