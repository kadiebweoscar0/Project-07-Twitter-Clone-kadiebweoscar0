import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageprofile from "./pages/pageProfile.jsx";
import ContexteTweet from "./asset/contexteTweet.js";
import ContextApp from "./asset/contextApp.js";
import  {tweets}  from "./datas.json";
import { useState } from "react";
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  const [allDataTweets, setAllDataTweets] = useState(tweets)
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
