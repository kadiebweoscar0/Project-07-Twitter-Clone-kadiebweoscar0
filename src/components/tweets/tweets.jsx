import Tweet from "./tweet";
import {tweets} from "../../datas";
import { useContext } from "react";
import ContexteTweet from "../../asset/contexteTweet";
import ContextApp from "../../asset/contextApp";


function Tweets() {
    const { allDataTweets} = useContext(ContextApp)
    const reversedTweets = allDataTweets.slice().reverse();

   
    return(
        <div className="tweets overflow-hidden">
            {reversedTweets.map((tweet) =>
            (<ContexteTweet.Provider value={tweet}>
                <Tweet />
                </ContexteTweet.Provider>)
            )}
        </div>
    )
}
export default Tweets