import React, { useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: 'JohnDoe', // Replace with user's actual data
    email: 'johndoe@example.com', // Replace with user's actual data
    // Add more user data fields as needed
  });

  // Example profile image URL
  const userProfileImage = 'https://via.placeholder.com/150';

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)', color: 'white' }}>
      {/* User Profile Card */}
      <div className="p-6 mt-8 ml-8 bg-transparent rounded-md max-w-sm flex items-center border border-gray-500">
        <div className="rounded-full overflow-hidden w-20 h-20">
          <img src={userProfileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{userData.username}</h1>
          <div className="mt-1">
            <p> {userData.email}</p>
            {/* Render other user data fields */}
          </div>
          {/* You can add edit options or additional user information here */}
        </div>
      </div>

      {/* Rest of the content */}
      {/* Add your other page content below the profile card */}
    </div>
  );
};

export default UserProfile;
