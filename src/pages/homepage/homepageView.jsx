import "./homepage.css"

export function HompageView(props) {
    function enterSearchpageACB() {
        window.location.hash = "#/searchpage"
    }
    
    return (
        <div className="homepageContainer">
            Hello World! <br />
            <button onClick={enterSearchpageACB}>Searchpage</button>
        </div>
    );
}