import React from "react";
import logo from "./foto perfil.jpeg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-user">Alex Gerrero</h1>

        <h3>Lunes 26 de junio de 2017</h3>
      </header>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <p>Leer más...</p>
      <div>
        <span>37</span>
        <i class="fas fa-heart"></i>
      </div>
    </div>
  );
}
render();
const appRoot = (
  <div className="container">
    <h1 className="App-user"></h1>
  </div>
);

return appRoot;

export default App;
