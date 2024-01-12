import ImageDefault from "../imageDefault";
import TweetEditorInput from "../tweets/tweetEditorInput";
import iconeSearch from "../../images/iconeSearch.svg";

function Search() {
    return(
        <div className="search">
            <TweetEditorInput className="trends-search-input" valueText="Search Twitter" />
            <span className="trends-search-img">
                <ImageDefault urlImage={iconeSearch} alt="icone-search" />
            </span>
        </div>
    )
}
export default Search