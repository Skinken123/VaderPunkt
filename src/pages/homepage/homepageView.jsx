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
                Find your location! <br />
                <input type="text" placeholder="Search..." id="searchBar"/>
            </div>

            <div className="dataContainer">
                <div className="recommendedBox">
                    Favorites:
                    <ul>
                        <li>--------------------</li>
                        <li>--------------------</li>
                        <li>--------------------</li>
                        <li>--------------------</li>
                        <li>--------------------</li>
                    </ul>
                    </div>
                <div className="recommendedBox">
                    Recent:
                    <ul>
                        <li>--------------------</li>
                        <li>--------------------</li>
                        <li>--------------------</li>
                        <li>--------------------</li>
                        <li>--------------------</li>
                    </ul>
                    </div>
            </div>

        </div>
    );
}