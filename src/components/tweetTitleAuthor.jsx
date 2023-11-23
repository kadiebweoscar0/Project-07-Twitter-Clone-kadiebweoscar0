import iconVerified from "../images/iconVerified.svg"

function TweetTitleAuthor(props) {
    return(
        <div className="tweet-title-author">
            <h3 className={props.myStyleTitleAuthor}>{props.titleAuthor} <img src={iconVerified} alt="logo-verified" /></h3>
        </div>
    )
}
export default TweetTitleAuthor