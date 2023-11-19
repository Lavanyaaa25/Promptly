import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div
      className="min-h-screen text-white relative flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Promptly logo */}
      <motion.div
        className="absolute top-4 left-4  md:text-2xl font-bold text-sm"
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
              className="text-xl md:text-6xl font-bold mb-2 md:mb-6"
            >
              Ignite & Exchange Creativity
            </motion.h1>
            <motion.p
              className="text-sm md:text-2xl mb-8 mx-4"
            >
              Join the prompt-sharing community—where creativity finds new beginnings.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right side - Signup form */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.form
            className="w-3/4 md:w-2/3 lg:w-1/2 bg-transparent rounded-lg p-6 shadow-lg border border-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.h3
              className="text-3xl mb-6 text-center text-white font-bold py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              Register
            </motion.h3>
            <motion.input
              type="text"
              placeholder="Name"
              className="mb-4 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
              <motion.input
              type="email"
              placeholder="Email"
              className="mb-4 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
              <motion.input
              type="password"
              placeholder="Password"
              className="mb-8 p-2 block w-full bg-transparent text-white rounded border-0 border-b-2 border-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.button
                type="submit"
                className="text-white py-3 px-5 rounded border-2 border-transparent"
                style={{
                  backgroundColor: '#1A1A2E',
                }}
                whileHover={{
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  borderWidth: '1px',
                }}
               
              >
                Sign Up
              </motion.button>
            </motion.div>
            <motion.p
              className="text-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              Already have an account? <a href="#" className="text-white underline">Sign In</a>
            </motion.p>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
