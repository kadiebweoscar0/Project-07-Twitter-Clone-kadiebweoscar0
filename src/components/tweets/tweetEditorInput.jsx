
function TweetEditorInput(props) {
    return(
        <input onChange={props.onChange} onClick={props.onClick} style={{overflow: "hidden",}} className={props.className} type="text" placeholder={props.placeholder}/>
    )
}
export default TweetEditorInput