import CanvasIndex from "./canvass/Canvas.index";
import Customeizer from "./pages/Customeizer.pages";
import Home from "./pages/Home.pages";
import React from "react";


const App: () => JSX.Element = (): JSX.Element => {


  return (

    <main className={`app transition-all ease-in`}>
      <React.Fragment>
        <Home />
        <CanvasIndex />
        <Customeizer />
      </React.Fragment>
    </main>

  )
}

export default App