import { useState } from "react";
import "./styles.css";

export default function Button() {
  const [texto, setTexto] = useState("botao");

  function handle() {
    setTexto("button");
  }
  return <button onClick={handle}>{texto}</button>;
}
