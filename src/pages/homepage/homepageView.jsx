export function HompageView(props) {
    function enterSearchpageACB() {
        window.location.hash = "#/searchpage"
    }
    
    return (
        <div>
            <div>
                Hello World!
            </div>
            <div>
                <button onClick={enterSearchpageACB}>Searchpage</button>
            </div>
        </div>
    );
}