import Canvas from "./canvas/canvas.index";
import Customeizer from "./pages/Customeizer.pages";
import Home from "./pages/Home.pages";


const App: () => JSX.Element = (): JSX.Element => {
  return (
    <main className={`app transition-all ease-in`}>
      <Home />
      <Canvas />
      <Customeizer />
    </main>
  )
}

export default App