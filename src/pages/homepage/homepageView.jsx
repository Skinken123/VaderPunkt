import "./homepage.css"

export function HompageView(props) {
    function enterSearchpageACB() {
        window.location.hash = "#/searchpage"
    }
    
    return (
        <div className="homepageContainer">

            <div className="logoContainer">
                <h1 id="pageTitle">VaderPunkt</h1>
                <i className="fa-solid fa-sun fa-5x"></i>
            </div>

            <div className="searchContainer">
                <h1>Search</h1>
                <button onClick={enterSearchpageACB}>Searchpage</button>
            </div>

            <div className="dataContainer">
                <h1>Data</h1>
            </div>

        </div>
    );
}