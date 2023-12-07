import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import SideBar from '../src/components/sidebar'
import Trends from "./components/trends.jsx";


import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <SideBar />
      <Home />
      <Trends />
    </Layout>
  );
}
