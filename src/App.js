import SearchJobs from "./pages/SearchJobs"
import Applications from "./pages/Applications"
import Shortlist from "./pages/Shortlist"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Survey from "./pages/Survey"
import { Route, Routes } from 'react-router-dom'
import React, { useEffect,useState } from 'react';
import {AnimatePresence} from "framer-motion";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <div>
      <AnimatePresence>
        <Routes>
          <Route path="/search" element={<SearchJobs />}/>
          <Route path="/applications" element={<Applications />}/>
          <Route path="/shortlist" element={<Shortlist />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/survey" element={<Survey />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
