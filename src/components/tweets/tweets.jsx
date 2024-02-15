import Tweet from "./tweet";
import {tweets} from "../../datas";
import { useContext } from "react";
import ContexteTweet from "../../asset/contexteTweet";
import ContextApp from "../../asset/contextApp";


function Tweets() {
    const { allDataTweets} = useContext(ContextApp)
   
    return(
        <div className="tweets">
            {allDataTweets.map((tweet) =>
            (<ContexteTweet.Provider value={tweet}>
                <Tweet />
                </ContexteTweet.Provider>)
            )}
        </div>
    )
}
export default Tweets