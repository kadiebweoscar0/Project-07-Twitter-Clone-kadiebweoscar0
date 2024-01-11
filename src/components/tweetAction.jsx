import TweeEditorAction from "./tweeEditorAction";
import ValueAction from "./valueAction";
import { useState } from "react";

const likeIconWithBg = <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.45169 19.0952C13.3301 17.2185 16.1369 14.0148 17.6509 10.7709C19.1417 7.54043 19.3513 4.32333 18.0237 2.39307C16.8241 0.663868 15.2634 0.00704628 13.6794 0.0606634C12.0955 0.114286 10.5581 0.905158 9.45169 2.01773C8.34525 0.905158 6.8079 0.114286 5.22395 0.0606634C3.64 0.00704628 2.07935 0.663868 0.879742 2.39307C-0.447979 4.32333 -0.238339 7.54043 1.27573 10.7709C2.7665 14.0148 5.57335 17.2185 9.45169 19.0952Z" fill="#FF0000"/>
</svg>

function TweetAction(props) {
  const [actionCount, setActionCount] = useState({
    comment: props.value1,
    retweet: props.value2,
    like: props.value3,
    update: props.value4
  });
  const  [isAction, setIsAction]= useState(true)

  const handleLikeClick = (e) => {
    
    const actionName = e
    
    if (isAction === true) {
      if (["comment", "retweet", "like", "update"].includes(actionName)) {
        setActionCount({
          ...actionCount,
          [e]: actionCount[e] + 1
        })
      }
    }
    else{
      if (["comment", "retweet", "like", "update"].includes(actionName)) {
        setActionCount({
          ...actionCount,
          [e]: actionCount[e] - 1
        })
      }
    }
    setIsAction(!isAction)   
  };

  return (
    <div className="tweet-actions">
      
      <Comment 
      value={actionCount.comment} 
      onClick={()=>handleLikeClick("comment")} 
      />

      <Retweet 
      value={actionCount.retweet} 
      onClick={()=>handleLikeClick("retweet")} 
      />

      <Like 
      value={actionCount.like} 
      onClick={()=>handleLikeClick("like")} 
       />
     
     <Update 
      value={actionCount.update} 
      onClick={()=>handleLikeClick("update")} 
       />

    </div>
  );
}

export default TweetAction;


export  function Comment({value, onClick}) {
  const [isHover, setIsHover] = useState("#D9D9D9")
  const [v, setV] = useState(false)

  const bgColorComment = {
    backgroundColor: "#00bbf949"
  }

  const valueColor = {
    color: "#00bbf9"
  }


  const handleMouseHover = () =>{
        setIsHover("#00bbf9")
        setV(true)

  }

  const handleMouseOut = () =>{
    setIsHover("#D9D9D9")
    setV(false)
  }


  const commentIcon =  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0459 2.242L9.89795 2.232H9.89595C5.52195 2.232 2.09595 5.659 2.09595 10.034C2.09595 14.132 5.28195 17.24 9.56095 17.404V21.232C9.56095 21.34 9.60495 21.518 9.68095 21.635C9.82295 21.86 10.0649 21.982 10.3129 21.982C10.4509 21.982 10.5899 21.944 10.7149 21.864C10.9789 21.696 17.1879 17.724 18.8029 16.358C20.7049 14.748 21.8429 12.388 21.8459 10.046V10.029C21.8399 5.662 18.4159 2.242 14.0459 2.241V2.242ZM17.8329 15.214C16.6989 16.174 12.9709 18.619 11.0609 19.857V16.67C11.0609 16.256 10.7259 15.92 10.3109 15.92H9.91495C6.25495 15.92 3.59695 13.444 3.59695 10.034C3.59695 6.5 6.36495 3.732 9.89695 3.732L14.0439 3.742H14.0459C17.5779 3.742 20.3459 6.508 20.3479 10.038C20.3449 11.948 19.4059 13.882 17.8339 15.214H17.8329Z" fill={isHover}/>
</svg>
  return (
    <>
      <span className="tweet-editor-actions hover-of-action" 
        onClick={onClick}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
        title="Reply"
      >
      <span className="hover-cecle" style={v ? bgColorComment : {}} >
        {commentIcon}
      </span>

      <ValueAction value={value} style={v ? valueColor : {}} />
        {/* {actionCount.comment}  */}
      </span>
    </>
  )
}

export  function Retweet({value, onClick}) {
 const [isHover, setIsHover] = useState("#D9D9D9")
 const [v, setV] = useState(false)

 const bgColorRetweet = {
  backgroundColor: "#80ed9950"
}

const valueColor = {
  color: "#80ed99"
}

  const handleMouseHover = () =>{
        setIsHover("#80ed99")
        setV(true)
  }

  const handleMouseOut = () =>{
    setIsHover("#D9D9D9")
    setV(false)
  }

const retweetIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.65C20.49 5.582 18.807 3.9 16.74 3.9H10.89C10.476 3.9 10.14 4.236 10.14 4.65C10.14 5.064 10.476 5.4 10.89 5.4H16.74C17.98 5.4 18.99 6.41 18.99 7.65V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67ZM13.11 18.95H7.25997C6.01997 18.95 5.00997 17.94 5.00997 16.7V6.46L7.22997 8.68C7.37797 8.827 7.56997 8.9 7.76197 8.9C7.95397 8.9 8.14597 8.827 8.29197 8.68C8.58497 8.387 8.58497 7.912 8.29197 7.62L4.79197 4.12C4.49897 3.826 4.02397 3.826 3.73197 4.12L0.231975 7.62C-0.0620254 7.912 -0.0620254 8.387 0.231975 8.68C0.525975 8.973 0.998975 8.973 1.29197 8.68L3.51197 6.46V16.7C3.51197 18.768 5.19497 20.45 7.26197 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95H13.11Z" fill={isHover}/>
</svg>
  return (
    <>
      <span className="tweet-editor-actions hover-of-action" 
        onClick={onClick}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
        title="Repost"
      >
        
        <span className="hover-cecle" style={v ? bgColorRetweet : {} }>
          {retweetIcon}
        </span>
        <span>
          <ValueAction value={value} style={v ? valueColor : {} } />
          {/* {actionCount.retweet}  */}
        </span>
      </span>
    </>
  )
}

export  function Like({value, onClick}) {
  const [isLike, setIsLike] = useState(false)
  const [isHover, setIsHover] = useState("#D9D9D9")
  const [v, setV] = useState(false)

  let styleLike = {
    backgroundColor: "#d61f3e48",
  }

  let valueStyle = {
    color: "#f21b3f"
  }

  const handleMouseUp = () =>{
    setIsLike(!isLike)
  }

  const handleMouseHover = () =>{
        setIsHover("#f21b3f")
        setV(true)
  }

  const handleMouseOut = () =>{
    setIsHover("#D9D9D9")
    setV(false)
  }

const likeIconEmptyBg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35395 4.225C5.27395 4.225 3.45095 6.213 3.45095 8.48C3.45095 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88395 4.225 7.35495 4.225H7.35395Z" fill= {isHover} />
</svg>

  return (
    <>
      <span className="tweet-editor-actions hover-of-action" 
        onClick={onClick}
        onMouseUp={handleMouseUp}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
        title="Like"
      >
      <span className="hover-cecle" style={v ? styleLike : {}} >
        {isLike? likeIconWithBg : likeIconEmptyBg}
      </span>
        <ValueAction style={v ? valueStyle : {}} value={value} />
        {/* {actionCount.like}  */}
      </span>
    </>
  )
}

export  function Update({value, onClick}) {
  const [isHover, setIsHover] = useState("#D9D9D9")
  const [v, setV] = useState(false)

  const bgColorUpdate = {
    backgroundColor: "#00bbf949"
  }

  const valueColor = {
    color: "#00bbf9"
  }


  const handleMouseHover = () =>{
        setIsHover("#00bbf9")
        setV(true)

  }

  const handleMouseOut = () =>{
    setIsHover("#D9D9D9")
    setV(false)
  }


const updateIcon =  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.53 7.47L12.53 2.47C12.237 2.177 11.762 2.177 11.47 2.47L6.47001 7.47C6.17601 7.763 6.17601 8.238 6.47001 8.53C6.76401 8.822 7.23701 8.824 7.53001 8.53L11.25 4.81V15C11.25 15.414 11.586 15.75 12 15.75C12.414 15.75 12.75 15.414 12.75 15V4.81L16.47 8.53C16.616 8.677 16.808 8.75 17 8.75C17.192 8.75 17.384 8.678 17.53 8.53C17.823 8.237 17.823 7.763 17.53 7.47Z" fill={isHover}/>
<path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944Z" fill={isHover}/>
</svg>

  return (
    <>
      <span className="tweet-editor-actions hover-of-action" 
        onClick={onClick}
        onMouseOver={handleMouseHover}
        onMouseOut={handleMouseOut}
        title="Share"
      >
      <span className="hover-cecle" style={v ? bgColorUpdate : {} }>
        {updateIcon}
      </span>
        <ValueAction value={value} style={v ? valueColor : {} } />
        {/* {actionCount.update}  */}
      </span>
    </>
  )
}