import React from "react";
import "../stylesheets/App.scss";
import OnionHeater from "./OnionHeater";

class App extends React.Component {
  OnClickListenerWithLifting(textareaValue) // 5
  {
    console.log(textareaValue);
  }
  render() {
    return (
      <div className="App">
        <OnionHeater
          OnClickListenerWithLifting={this.OnClickListenerWithLifting}
          //6
        />
      </div>
    );
  }
}

export default App;
