import React from "react";

class OnionHeater extends React.Component {
  constructor(props) {
    //constructor(props) y super(props) obligatorio en conponentes de Clase
    super(props);
    this.OnClickListener = this.OnClickListener.bind(this);

    // 2.2 - this.OnClickListener = this.OnClickListener.bind(this); obligatorio en los Eventos de Componentes de clase
    //Bind siempre dentro del constructor
    //Para que no sea Undefined necesitamos pasar las (props) del componente madre en el constructor
  }

  OnClickListener(ev) {
    if (ev.target.value.includes("cebolla")) {
      this.props.OnClickListenerWithLifting(ev.target.value);
      alert("ODIO LA CEBOLLA");
      // 3- Creas la función manejadora fuera del constructor OnclickListener, aquí desarrollas lo que quieres que pase cuando s ecambie el valor del TextArea.
      //Es la función Intermediaria
      // 4-Si el valor que se introduces en el textArea (ev.target.value) incluye (includes) la plabra "cebolla" entonces
      // Quieres pasar esta información a la madre APP.JS, asi que utilizamos  this.props.OnClickListenerWithLifting(ev.target.value)
      // para subir los datos arriba.
      // 5-poniendo en la madre APP.JS OnClickListenerWithLifting(textareaValue)
      //  (No hace falta que lleve WITHLIFTING en el nombre, se puede poner el nombre que quieras mientras
      // sea igual aqui, y en el punto 5 y 6 que te he señalado en el otro conponente. Pero el mismo para los 3 sitios)
      // 6- y en la eqtiqueta donde queramos <OnionHeater OnClickListenerWithLifting={this.OnClickListenerWithLifting}
    }
  }
  render() {
    return (
      <label for="comments">
        Comentarios:
        <textarea onChange={this.OnClickListener} />
        {/* 1- El evento onCHange del text TextArea llama a la función OnClickListener de este mismo componente */}
        {/* El Evento siempre en la etiqueta que quiero escuchar,y dentro del return del render */}
        {/* 2.1- Ir al constructor de este componente y escribir "this.OnClickListener = this.OnClickListener.bind(this)" */}
      </label>
    );
  }
}

export default OnionHeater;
