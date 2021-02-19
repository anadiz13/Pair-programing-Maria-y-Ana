import React from "react";
import "../stylesheets/App.scss";
import OnionHeater from "./OnionHeater";

class App extends React.Component {
  OnClickListenerWithLifting(textareaValue) {
    console.log(textareaValue);
  }
  render() {
    return (
      <div className="App">
        <OnionHeater
          OnClickListenerWithLifting={this.OnClickListenerWithLifting}
        />
      </div>
    );
  }
}

export default App;
