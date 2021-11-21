import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";
import { Route, Routes } from "react-router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Nav from "./components/Nav";
function App() {

  return (
    <div className="App">
      <GlobalStyles />
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<Home />} />
          </Routes>

    </div>
  );
}

export default App;
