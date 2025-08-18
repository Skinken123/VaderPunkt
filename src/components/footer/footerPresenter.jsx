import { observer } from "mobx-react-lite";
import { FooterView } from "./footerView";

const FooterPresenter = observer(
    function FooterRender(props){
        return (
            <FooterView/>
        );
    }
);

export { FooterPresenter };