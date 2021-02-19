import React from "react";

class OnionHeater extends React.Component {
  constructor(props) {
    super(props);
    this.OnClickListener = this.OnClickListener.bind(this);
    // this.OnClickListener = this.OnClickListener.bind(this); esta frase solo es obligatorio si es un componente de clase para hacer eventos
  }
  OnClickListener(ev) {
    if (ev.target.value.includes("cebolla")) {
      this.props.OnClickListenerWithLifting(ev.target.value);
      alert("ODIO LA CEBOLLA");
    }
  }
  render() {
    return (
      <label for="comments">
        Comentarios:
        <textarea onChange={this.OnClickListener} />
      </label>
    );
  }
}

export default OnionHeater;
