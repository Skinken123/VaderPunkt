import "./footer.css";

export function FooterView(props){
    return(
        <div className="footerContainer">
            <div className="infoContainer">
                author: Gustav Moritz <br />
                contact: <a href="mailto:guma.moritz@gmail.com">guma.moritz@gmail.com</a> <br />
                &copy; copyright reserved
            </div>
        </div>
    );
}