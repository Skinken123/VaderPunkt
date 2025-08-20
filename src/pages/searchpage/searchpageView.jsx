export function SearchpageView(props) {
    function enterHomapageACB() {
        window.location.hash = "#/";
    }
    
    return(
        <div>
            Hello World Search! <br />
            <button onClick={enterHomapageACB}>Back to home</button>
        </div>
    );
}