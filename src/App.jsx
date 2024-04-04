import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Pageprofile from "./pages/pageProfile.jsx";
import ContextApp from "./asset/contextApp.js";
import { useState, useEffect } from "react";
import imageX from "../public/images/Elon Musk.jpeg"
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
        const response = await axios.get('https://twitter-clone-api-c1-kadiebweoscar0.onrender.com/tweets');
          setAllDataTweets(response.data.tweetRecentsToOlds)
          setUsersAntTweets(response.data.users);
      } catch (error) {
        console.error("Erreur lors de la récupération des tweets:", error);
      }
    };

    fetchTweets();
  }, []);
  return (
   <>
   {allDataTweets.length < 1 ?( <div className="m-auto flex flex-col justify-center items-center">
    <img src={imageX} alt="image X" />
    <p>loadin ...</p>
   </div>) : 
    (<ContextApp.Provider value={{usersAndTweets, setUsersAntTweets, allDataTweets, setAllDataTweets, isAction, setIsAction, actionCount, setActionCount,isLike, setIsLike}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":name/tweets"  element={<Pageprofile />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ContextApp.Provider>)
  }
   </>
  );
}
