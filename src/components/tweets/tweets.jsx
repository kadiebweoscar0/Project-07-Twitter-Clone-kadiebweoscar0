import Tweet from "./tweet";
import {tweets} from "../../datas";
import { useContext } from "react";
import ContexteTweet from "../../asset/contexteTweet";
import ContextApp from "../../asset/contextApp";


function Tweets() {
    const {tweets} = useContext(ContextApp)
    console.log(tweets);
   
    return(
        <div className="tweets">
            {tweets.map((tweet, index) =>
            (<ContexteTweet.Provider value={tweet}>
                <Tweet />
                </ContexteTweet.Provider>)
            )}
        </div>
    )
}
export default Tweets