import "./searchpage.css";

export function SearchpageView(props) {
    function enterHomapageACB() {
        window.location.hash = "#/";
    }
    
    return(
        <div className="searchpageContainer" >
            Hello World Search! <br />
            <button onClick={enterHomapageACB}>Back to home</button>
        </div>
    );
}