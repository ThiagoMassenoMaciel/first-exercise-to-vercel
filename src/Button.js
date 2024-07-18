import { useState } from "react";
import "./styles.css";

export default function Button() {
  const [texto, setTexto] = useState("botao");
  //  const boleano = false;

  function handle() {
    setTexto("botao clicado");
    //TENTEI UMA LOGICA PARA ELE VOLTAR PARA O VALOR INITIAL quando clicasse de volta no `button clicked`
    // if (boleano) {
    //   setTexto("botao");
    // } else {
    //   setTexto("button licked");
    // }

    // boleano = !boleano;
    // console.log("mudei valor de boleano");
    // console.log(boleano);
  }
  return <button onClick={handle}>{texto}</button>;
}
