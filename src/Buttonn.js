//desafio é fazer o botão de baixo , quando clicado pela2 vez voltar para o valor inicial
// fazer isso sem usar o hook effect
// demorei 1h fazendo isso

//um estado para mudar o nome
//outro estado para saber depois de qual/quantos click eu exibo qual texto ?

import { useEffect, useState } from "react";
import "./styles.css";

export default function Buttonn() {
  const [texto, setTexto] = useState("BOTAO");
  //const contador = 1;
  const [contador, setContador] = useState(1);

  console.log("-----Antes de entrar no handle");
  console.log(contador);

  function handle() {
    //toda vez que o butao for clicado tenho que incrementar + 1para mudar o fluxo para if ou para o else
    setContador(contador + 1);

    console.log("depois de entrar no handle()");
    if (contador % 2 === 0) {
      // se for par é para exibir o valor inicial
      setTexto("BOTAO");

      console.log(contador);
      // e soma mais um para na outra renderiação o contador
      //ser um valor impar para entrar dentro do else e exibir
      // o texto BOTAO CLICADO
    } else {
      //so vai entrar aqui quando o valor estado contador for numero impar
      setTexto("BOTAO CLICADO");
      console.log(contador);
    }
  }

  return <button onClick={handle}>{texto}</button>;
}
