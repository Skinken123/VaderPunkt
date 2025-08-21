import { observer } from "mobx-react-lite";
import { RouterProvider, createHashRouter } from "react-router-dom"; 
import { HomepagePresenter } from "/src/pages/homepage/homepagePresenter";
import { SearchpagePresenter } from "/src/pages/searchpage/searchpagePresenter";
import { FooterPresenter } from "../pages/footer/footerPresenter";
import { HeaderPresenter } from "../pages/header/headerPresenter";

const Root = observer(
    function Root (props) {
        /* Suspense to be added, load image while waiting for page to load */
        
        return (
            <>
                <HeaderPresenter/>
                <RouterProvider router={makeRouter(props.model)}/>
                <FooterPresenter/>
            </>
        );  
    },

);
/*
! Remeber to use: window.location.hash = "#/<path>"; in CUSTOM EVENTS
 */
function makeRouter(propsModel) {
    return createHashRouter([
        {
            path: "/",
            element: <HomepagePresenter model = {propsModel}/>
        },
        {
            path: "/searchpage",
            element: <SearchpagePresenter model = {propsModel}/>
        }
    ]);
}

export {Root, makeRouter};