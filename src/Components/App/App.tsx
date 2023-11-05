import React, { useState } from 'react';
import './App.css';
import { getSiteText } from '../../Utils/apiCalls';
import loadingGif from '../../loading.gif';
import Nav from '../Nav/Nav';

function App() {

  const [siteURL, setSiteURL] = useState<string>("");
  const [siteSummary, setSiteSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchAPI = () => {
    if(!siteURL.length) {
      setError(true)
    }

    setLoading(true);

    try {
      getSiteText(siteURL).then(data => {
        setSiteSummary(data.data);
        setLoading(false);
        setError(false);
      })
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(false);
    }
   
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSiteURL(e.target.value)
  };

  return (
    <div className="App">
      <Nav />
      <div className='main-container'>
        <h1>AI Powered Website Summaries</h1>
        <div>
          <p>Enter a URL in the space below, and get an AI powered summary of it's contents- Works best with text based web pages like articles!</p>
          <p className='warning'>WARNING: ChatGPT calls take ~30seconds, please be patient!</p>
        </div>
        <div>
          <input type="text" placeholder="URL HERE" onChange={(e) => { handleChange(e) }} value={siteURL}></input>
          <button onClick={fetchAPI}>GET SUMMARY</button>
          {error && <p>Please type in a URL </p>}
        </div>
      </div>
      {loading && <img className='loading-img' src={loadingGif} alt="loading animation"/>}
      {siteSummary && 
      <div className='summary-container'>
        <h2>Your Site Summary:</h2>
        <p className='summary-box'>{siteSummary}</p>
      </div>}
      <footer>
        <i>Uses ChatGPT's OpenAI API, please use your own API key when using locally.</i>
      </footer>
    </div>
  );
}

export default App;
