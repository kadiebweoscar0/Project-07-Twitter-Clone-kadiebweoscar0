import ImageDefault from "../imageDefault"
import iconeTreeDot from "../../../public/images/iconeTreeDot.svg"
import iconeSeting from "../../../public/images/iconeSeting.svg"
import { NavLink } from "react-router-dom"


export function TrendsText(props) {
    return(
        <div className="trendsText" >
            <div>
                <p>{props.p1}</p>
                <h3>{props.squid}</h3>
                <p>{props.valueSquid}</p>
            </div>
            <span>
                <ImageDefault urlImage={iconeTreeDot} alt="icone-tree-Dot" />
            </span>
        </div>
    )
}


function TrendsForYou() {
    return(
        <div className="trendsForYou">
            <span>
                <h2>Trends for you</h2>
                <ImageDefault urlImage={iconeSeting} alt="icone-seting" />
            </span>
            <TrendsText p1="trending in Turkey" squid="#SQUID" valueSquid="2,066 Tweets" />
            <TrendsText p1="trending in Turkey" squid="#SQUID" valueSquid="2,066 Tweets" />
            <TrendsText p1="trending in Turkey" squid="#SQUID" valueSquid="2,066 Tweets" />
            <TrendsText p1="trending in Turkey" squid="#SQUID" valueSquid="2,066 Tweets" />
            <NavLink to="#">Show more</NavLink>
        </div>
    )
}
export default TrendsForYou