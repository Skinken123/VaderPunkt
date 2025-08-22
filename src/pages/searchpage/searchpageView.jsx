import "./searchpage.css";

export function SearchpageView(props) {
    function enterHomapageACB() {
        window.location.hash = "#/";
    }
    
    return(
        <div className="searchpageContainer" >

            <div className="headContainer">
                <h2 id="locationText">Location: {props.location} temp</h2>
                <input type="text" placeholder="Search..." id="searchBar2"/>
            </div>
            <div className="daysContainer">
                days
            </div>
            <div className="otherContainer">
                misc
            </div>

        </div>
    );
}