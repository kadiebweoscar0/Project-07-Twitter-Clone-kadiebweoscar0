import Tweet from "./tweet";
import {tweets} from "../../datas";
import { useContext, useEffect } from "react";
import ContexteTweet from "../../asset/contexteTweet";
import ContextApp from "../../asset/contextApp";
import Loder from "../loder";


// function Tweets() {
//     const { allDataTweets, usersAndTweets} = useContext(ContextApp);

//     return(
//       <div className="tweets overflow-hidden">
//             {
//               allDataTweets.map((tweet) =>{
//                 (<ContexteTweet.Provider value={tweet}>
//                   <Tweet />
//                 </ContexteTweet.Provider>)
//               })
//             }
//         </div>
//     )
// }

function Tweets() {
  const { allDataTweets, usersAndTweets } = useContext(ContextApp);

  return (
    <>
    {!allDataTweets ?( <Loder />) : 
      <div className="tweets overflow-hidden">
          {allDataTweets.map((tweet) => {
            const user = usersAndTweets.find((user) => user.id === tweet.author);
            if (!user) {
              return ''
            }
            return (
              <ContexteTweet.Provider key={tweet.id} value={{ user, tweet }}>
                <Tweet />
              </ContexteTweet.Provider>
            );
          })}
        </div>}
    </>
  );
}

export default Tweets





