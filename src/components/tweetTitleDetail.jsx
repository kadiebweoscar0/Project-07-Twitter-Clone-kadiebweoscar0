

function TweetTitleDetail(props) {
    return(
        <p className={props.styleTitleDetail}>{props.titleAddress} {props.dateHoursPublication}</p>
    )
}
export default TweetTitleDetail