import { observer } from "mobx-react-lite";
import { SearchpageView } from "./searchpageView";

const SearchpagePresenter = observer(
    function SearchpageRender(props) {
        return(
            <SearchpageView/>
        );
    }
);

export { SearchpagePresenter };