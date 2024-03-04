import "./App.css";
import {Route, Routes} from 'react-router-dom'
import LandingPage from "./Pages/Landing";
import Profile from "./Pages/Profile"
import Create from "./Pages/Create";
import Explore from "./Pages/Explore";
import Edit from "./Pages/Edit";

function App() {
  return (
    <div className="font-montserrat" style={{ background: 'linear-gradient(to bottom, #1A1A2E, #000000)' }}>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit" element={<Edit/>}/>
      <Route path="/users/:userName" element={<Profile/>}/>
      <Route path="/explore" element={<Explore/>}/>
    </Routes>

    </div>
  );
}

export default App;

