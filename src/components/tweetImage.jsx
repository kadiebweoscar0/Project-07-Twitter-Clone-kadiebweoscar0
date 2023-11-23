
function TweetImage(props) {
    return(
        <div className="tweet-image">
            <img src={props.urlImage} alt="image-tweet" />
        </div>
    )
}
export default TweetImage