
function Button(props) {
    return(
        <button disabled={props.disabled} style={props.style} onClick={props.onClick} onSubmit={props.onSubmit} className={props.className}>{props.textButton}</button>
    )
}
export default Button