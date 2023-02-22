import "./App.css";
import Resume from "./ResumeMui";
import Portfolio from "./Portfolio";
import { Route, Routes, Navigate } from "react-router-dom";
import UseRedirectToHttps from "./hooks/useRedirectToHttps";
import AppAbout from "./AppAbout";
import DrawerAppBar from "./Navbar";

function App() {
  // UseRedirectToHttps();
  return (
    <div className="App">
      <DrawerAppBar>
        <Routes>
          <Route path="/" element={<Resume />} />
        </Routes>
      </DrawerAppBar>
    </div>
  );
}

export default App;
