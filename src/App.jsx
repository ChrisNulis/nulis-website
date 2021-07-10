import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import logo from './logo.svg';
import './app.scss';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      HELLO
    </div>
  );
}

export default App;
