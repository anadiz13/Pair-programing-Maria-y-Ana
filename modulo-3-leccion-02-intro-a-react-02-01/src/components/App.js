import React from "react";
import logo from "../foto perfil.jpeg";
import "../App.css";
import MediaCards from "./MediaCards";

function App() {
  const AppHeader = (
    <div>
      <div class="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 class="App-user">Alex Gerrero</h1>

          <h3 class="date">Lunes 26 de junio de 2017</h3>
        </div>
      </div>
    </div>
  );
  const Appfooter = (
    <div class="moretext">
      <p class="reading">Leer más.... </p>
      <span>37</span>
      <i class="fas fa-heart"></i>
    </div>
  );
  const AppReturn = (
    <div className="App">
      {AppHeader} <MediaCards />
      {Appfooter}
    </div>
  );

  return AppReturn;
}
export default App;
