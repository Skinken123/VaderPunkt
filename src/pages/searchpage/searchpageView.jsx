export function SearchpageView(props) {
    function enterHomapageACB() {
        window.location.hash = "#/";
    }
    
    return(
        <div>
            <div>
            Hello World Search!
            </div>
            <div>
            <button onClick={enterHomapageACB}>Back to home</button>
            </div>
        </div>
    );
}