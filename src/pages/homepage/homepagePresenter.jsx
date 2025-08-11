import { observer } from "mobx-react-lite";
import { HompageView } from "./homepageView";

const HomepagePresenter = observer(
    function HompageRender(props) {
        return (
            <HompageView/>
        );
    }
);

export { HomepagePresenter };