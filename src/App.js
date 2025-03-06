import React, { useState } from "react";
import TrackingEvents from "./componenterastrear";
import './index.css'


function App() {

  const [events, setEvents ] = useState([])

  console.log(events)
  const submitHandler = (evento) => { //Evento do form
    evento.preventDefault()

    const formData = new FormData(evento.target/*Formulário nos parâmetros */) 
    const Data = Object.fromEntries(formData) //Dados do formulário


    fetch('http://localhost:3001/?caminho='+Data.caminho)//busca = 'fetch'
    .then(response => response.json())
    .then(Data => {
      const events = Data.events || []
      setEvents(events)

    })
    .catch(console.error) 

    console.log('APP.SubmitHandler.Data', Data)
  }



  return (
    <div className="container">
      <h1>Rastreamento de objetos</h1>
      <form onSubmit={submitHandler}>
        <div className="lin">
          <input type="text" name="caminho" placeholder="Código de rastreamento"/>
          <button>Buscar</button>
        </div>

      </form>
      <TrackingEvents events={events} />


    </div>
  );
}

export default App;
 