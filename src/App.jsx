import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageprofile from "./pages/pageProfile.jsx";
import ContexteTweet from "./asset/contexteTweet.js";
import ContextApp from "./asset/contextApp.js";
import  {tweets}  from "./datas.json";
import { useState, useEffect } from "react";
import axios from "axios";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  const [allDataTweets, setAllDataTweets] = useState([])
  const  [isAction, setIsAction]= useState(true)
  const [actionCount, setActionCount] = useState(false);
  const [isLike, setIsLike] = useState(false)
  const [usersAndTweets, setUsersAntTweets] = useState([])

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tweets');
          setAllDataTweets(response.data.tweetRecentsToOlds)
          setUsersAntTweets(response.data.users);
          // console.log(response.data);
        // allDataTweets.map((user)=> console.log(user.text))
      } catch (error) {
        console.error("Erreur lors de la récupération des tweets:", error);
      }
    };

    fetchTweets();
  }, []);
  return (
    <ContextApp.Provider value={{usersAndTweets, setUsersAntTweets, allDataTweets, setAllDataTweets, isAction, setIsAction, actionCount, setActionCount,isLike, setIsLike}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":name/tweets"  element={<Pageprofile />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ContextApp.Provider>
  );
}
