import Tweet from "./tweet";
import { datas } from "../../datas";

function getAllTweets() {
    //recuperation des données des
    return Object.values(datas).flatMap((user) => user.tweets.map((tweet) => <Tweet data={tweet} key={tweet.id} user={user.credential_user} />));
  }

function Tweets() {
    return(
        <div className="tweets">
            {getAllTweets()}
        </div>
    )
}
export default Tweets