import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageprofile from "./pages/pageProfile.jsx";
import ContexteTweet from "./asset/contexteTweet.js";
import ContextApp from "./asset/contextApp.js";
import  {tweets}  from "./datas.json";

// const dataDeMonUser = Object.values(tweets).flatMap((user) => user.credential_user)
// const dataDeMonTweet = Object.values(tweets).flatMap((user) => user.tweets.map((tweet) => tweet));


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <ContextApp.Provider value={{tweets}}>
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
