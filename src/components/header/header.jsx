import TitlePage from "./titlePage";
import TopTweet from "./topTweet";


function Header() {
    return(
        <header className="header">
            <TitlePage value="Home"/>
            <TopTweet />
        </header>
    )
}
export default Header