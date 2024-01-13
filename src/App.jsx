import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pageprofile from "./pages/pageProfile.jsx";
import { datas } from "./datas.js";
import PostProfile from "./components/profils/postProfile.jsx";


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageProfile/:id" element={<Pageprofile />} >
            <Route index element={<PostProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
