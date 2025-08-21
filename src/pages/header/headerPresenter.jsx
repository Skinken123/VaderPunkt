import { observer } from "mobx-react-lite";
import { HeaderView } from "./headerView";

const HeaderPresenter = observer(
    function HeaderRender(props) {
        return (
            <HeaderView/>
        );
    }
);

export { HeaderPresenter };