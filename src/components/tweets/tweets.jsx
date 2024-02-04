import Tweet from "./tweet";
import {tweets} from "../../datas";
import { useContext } from "react";
// import Contexte from "../../asset/context";
import ContexteTweet from "../../asset/contexteTweet";


import { createContext } from "react";

export const ContexteA = createContext(null);


// console.log(tweets);



// export const datasApp = {...datas};

// function getAllTweets() {

//     const t = []

//     // const userContexte = useContext(Contexte);
//     // // console.log(userContexte);
//     // // Object.values(userContexte).flatMap((item) => t.push(item))
//     // // console.log(t);

//     //recuperation des données des
//     return Object.values(datasApp).flatMap((user) => user.tweets.map((tweet) => 
//     console.log("map",tweet.id_tweet)
//     (

//         <Tweet data={tweet} key={tweet.id} user={user.credential_user} />
//         )
    
   
//     )
//     );
// }

function Tweets() {
   
    return(
        <div className="tweets">
            {tweets.map((tweet, index) =>
            // console.log("hh", tweet.titleAuthor)
            (<ContexteTweet.Provider value={tweet}>
                <Tweet />
                {/* {console.log(tweet.titleAuthor)} */}
                </ContexteTweet.Provider>)
            
            )}
        </div>
    )
}
export default Tweets