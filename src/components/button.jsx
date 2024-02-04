
function Button(props) {
    return(
        <button onClick={props.onClick} onSubmit={props.onSubmit} className={props.className}>{props.textButton}</button>
    )
}
export default Button