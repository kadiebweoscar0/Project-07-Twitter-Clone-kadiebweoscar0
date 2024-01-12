import ImageDefault from "../imageDefault"

function TweetImage(props) {

    if (props.urlImage) {
        return(
            <div className="tweet-image">
                <ImageDefault urlImage={props.urlImage} alt="image-tweet" />
            </div>
        )
    }
}
export default TweetImage