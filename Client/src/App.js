import "./App.css";
import {Route, Routes} from 'react-router-dom'
import LandingPage from "./Pages/Landing";
import Profile from "./Pages/Profile"

import Create from "./Pages/Create";
function App() {
  return (
    <div className="font-montserrat">
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

    </div>
  );
}

export default App;

