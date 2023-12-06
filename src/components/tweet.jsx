import Avatar from "./avatar";
import TweetContent from "./tweetContent";
import { datas } from "../datas";

function Tweet() {
    return(
        <>
            {datas.map((data) => (
                <div className="tweet" key={data.id}>
                    <Avatar avatar={data.tweetProfile} myClassName="tweet-avatar" />
                    <TweetContent
                        tweetTextValue={data.tweetTextValue}
                        tweetActionValue1={data.tweetActionValue1}
                        tweetActionValue2={data.tweetActionValue2}
                        tweetActionValue3={data.tweetActionValue3}
                        tweetActionValue4={data.tweetActionValue4}
                        titleAuthor={data.titleAuthor}
                        titleAddress={data.titleAddress}
                        dateHoursPublication={data.dateHoursPublication}
                        urlImage={data.imageTweet}
                    />
                </div>
            ))}
        </>
    )
}
export default Tweet