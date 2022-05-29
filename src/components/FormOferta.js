import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import TicketOferta from "./TicketOferta";

function FormOferta() {
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [soliText, setSolitext] = useState("");

  const handleOnChange = e => {
    setInputText(e.target.value1);
    setInputText2(e.target.value2);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setInputText("");
    setInputText2("");
  };

  return (
    <div>
      <form className="Form" onSubmit={handleOnSubmit}>
        <TextField
          placeholder="quién realiza la oferta"
          variant="outlined"
          className="TextField"
          onChange={handleOnChange}
          value1={inputText}
        />
        <TextField
          placeholder="qué horario ofrece"
          variant="outlined"
          className="TextField"
          onChange={handleOnChange}
          value2={inputText2}
        />
        <button className="btn">Solicitar</button>
      </form>
      <TicketOferta data={soliText}></TicketOferta>
    </div>
  );
}

export default FormOferta;
