import Search from "./search"
import TrendsForYou from "./trendsForYou"
import WhoToFollow from "./whoToFollow"

function Trends() {
    return(
        <div className="trends">
            <Search />
            <TrendsForYou />
            <WhoToFollow />
        </div>

    )
}
export default Trends