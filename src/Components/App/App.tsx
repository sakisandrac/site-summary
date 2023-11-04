import React, { useState } from 'react';
import './App.css';
import { getSiteText } from './Utils/apiCalls';

function App() {

  const [siteURL, setSiteURL] = useState<string>("");
  
  const fetchAPI = () => {
    getSiteText(siteURL).then(data => {
      console.log(data)
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSiteURL(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <h1>AI Powered Website Summaries</h1>
      <div>
        <p>Enter a URL in the space below, and get an AI powered summary of it's contents</p>
        <p>Note: Works best with text based web pages like articles!</p>
      </div>
      <div>
        <input type="text" placeholder="URL HERE" onChange={(e) => {handleChange(e)}} value={siteURL}></input>
        <button onClick={fetchAPI}>GET SUMMARY</button>
      </div>
      <div>
        <h2>Site Summary:</h2>
        
      </div>
    </div>
  );
}

export default App;
