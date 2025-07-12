import React, { Suspense, useEffect, useState } from "react";
import type { Component } from 'vue' // Vue 3 Component type
import "./App.css";
import reactLogo from "./assets/react.svg";
import vueLogo from "./assets/vue.svg"
import  {VueWrapper} from "./VueWrapper";
const ReactCounter = React.lazy(() =>
  import("remote_react/ReactCounter").then((mod) => ({
    default: mod.default.Counter,
  }))
);

const ReactCounter2 = React.lazy(() =>
  import("remote_react/reactComponents").then((mod) => ({
    default: mod.default.Counter,
  }))
);


function App() {
   
  const [VueComponent, setVueComponent] = useState<Component|null>(null);
  const [VueComponent2, setVueComponent2] = useState<Component|null>(null);

    useEffect(() => {
    // Dynamically import the remote Vue component via Module Federation
   import("remote_vue/vueComponents").then(mod=>{
    setVueComponent(mod.default.Counter)
   })
   import("remote_vue/vueComponents").then(mod=>{
    setVueComponent2(mod.default.Counter)
   })
  }, [])

  return (
    <div className="main-contianer">
      <h1>React-Vue MicroFrontend App</h1>

      <div className="react-container">
        <h2>React Components</h2>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="components">
          <Suspense fallback={<span>Loading...</span>}>
            <ReactCounter />
          </Suspense>
     
          <Suspense fallback={<span>Loading...</span>}>
            <ReactCounter2 />
          </Suspense>
        </div>
      </div>
      <div className="vue-container">
        <h2>Vue Components</h2>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={vueLogo} className="logo vue" alt="React logo" />
          </a>
        </div>
          <div className="components">
           {VueComponent?<VueWrapper component={VueComponent} props={{label : "From React Host App"}}/> : "Loading Component..."}
           {VueComponent2?<VueWrapper component={VueComponent2} props={{label : "From React Host App"}}/> : "Loading Component..."}
          </div>
      </div>
    </div>
  );
}

export default App;
