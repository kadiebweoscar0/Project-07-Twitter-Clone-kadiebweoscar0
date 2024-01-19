
function TweetEditorInput(props) {
    return(
        <textarea style={{overflow: "hidden",}} className={props.className} type="text" placeholder={props.valueText}/>
    )
}
export default TweetEditorInput