import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Nome</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="email"></input>

        <label>Assunto</label>
        <input type="text"></input>

        <label>Mensagem</label>
        <textarea rows="6" placeholder="Escreva sua mensagem..." />

        <button className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
