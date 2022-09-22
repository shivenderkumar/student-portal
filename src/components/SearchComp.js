import "../styles/SearchComp.css"

function SearchComp(){
    return(
        <div className="search-comp-container">
            <input type="text" id="search-input" />
            <button id="search-button" type="button" >Search</button>
        </div>
    );
}

export default SearchComp;