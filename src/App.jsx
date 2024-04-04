import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Pageprofile from "./pages/pageProfile.jsx";
import ContexteTweet from "./asset/contexteTweet.js";
import ContextApp from "./asset/contextApp.js";
import  {tweets}  from "./datas.json";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  const [allDataTweets, setAllDataTweets] = useState([])

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tweets');
        console.log(response.data);
        setAllDataTweets(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des tweets:", error);
      }
    };

    fetchTweets();
  }, []);
  
  // axios.get('https://65c54af1dae2304e92e428cf.mockapi.io/testApi/v1/tweetData')
  // .then(response => 
  //   console.log(response.data)
  // )
  // .catch(error =>
  //   console.log(error)
  // );


  return (
    <ContextApp.Provider value={{tweets, allDataTweets, setAllDataTweets}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":name"  element={<Pageprofile />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ContextApp.Provider>
  );
}
