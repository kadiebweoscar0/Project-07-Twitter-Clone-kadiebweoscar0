import Tweet from "./tweet";
import {tweets} from "../../datas";
import { useContext } from "react";
import ContexteTweet from "../../asset/contexteTweet";
import ContextApp from "../../asset/contextApp";


function Tweets() {
    const {tweets, allDataTweets} = useContext(ContextApp)
    console.log(allDataTweets);
   
    return(
        <div className="tweets">
            {allDataTweets.map((tweet, index) =>
            (<ContexteTweet.Provider value={tweet}>
                <Tweet />
                </ContexteTweet.Provider>)
            )}
        </div>
    )
}
export default Tweets