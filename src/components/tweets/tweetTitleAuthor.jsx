import iconVerified from "../../../public/images/iconVerified.svg"

function TweetTitleAuthor(props) {
    return(
        <div className="tweet-title-author">
            <h3>{props.titleAuthor}</h3>
            <img src={iconVerified} alt="logo-verified" />
        </div>
    )
}
export default TweetTitleAuthor