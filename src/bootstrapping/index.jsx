import { model } from "/src/model.js";
import { Root } from "/src/bootstrapping/Root.jsx";
import { createElement } from "react";
import {createRoot} from "react-dom/client";

import { observable, configure } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions

const reactiveModel= observable(model);


// (2) ----------  display (mount) the root component in the browser page. Pass the reactive model as prop ---------
// http://localhost:8080/react.html

// mount the app in the page DIV with the id "root":
createRoot(document.getElementById('root'))
    .render(<Root model={reactiveModel}/>);
/* This <div id="root"></div> is configured in vite.config.js. Vite produces a react.html file, find it in Developer tools, Sources */



// ------ for debug purposes, do not do this in production! ----------
// making the model available at the console
window.myModel= reactiveModel;

//createRoot(document.getElementById('root'))
//    .render(<div>hello world!</div>);
