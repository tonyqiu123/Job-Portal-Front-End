import SideNavBar from "./components/SideNavBar"
import SearchJobs from "./pages/SearchJobs"
import Applications from "./pages/Applications"
import Shortlist from "./pages/Shortlist"
import Profile from "./pages/Profile"
import { Route, Routes } from 'react-router-dom'
import React, { useEffect,useState } from 'react';
import {AnimatePresence} from "framer-motion";

function App() {

  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://personal-website-back-end-production.up.railway.app/api/blogs/');
      const data = await res.json();
      setBlogData(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
    fetchData();
  }, []);

  return (
    <div>
      <SideNavBar/>
      <div className='dummyMargin'></div>
      <AnimatePresence>
        <Routes>
          <Route path="/search" element={<SearchJobs />}/>
          <Route path="/applications" element={<Applications />}/>
          <Route path="/shortlist" element={<Shortlist />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
