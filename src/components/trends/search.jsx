import ImageDefault from "../imageDefault";
import iconeSearch from "../../../public/images/iconeSearch.svg";

function Search() {
    return(
        <div className="search">
            <input className="trends-search-input" valueText="Search Twitter" />
            <span className="trends-search-img">
                <ImageDefault urlImage={iconeSearch} alt="icone-search" />
            </span>
        </div>
    )
}
export default Search;