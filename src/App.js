import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)

 
  return (

    <>

      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" category="general" />} />
          <Route exact path="/home" element={<News setProgress={setProgress} key="general" category="general" />} />
          <Route exact path="/newsapp" element={<News setProgress={setProgress} key="general" category="general" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" category="science" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" category="business" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" category="health" />} />

        </Routes>
      </Router >
     
    </>
  )
}
export default App;
