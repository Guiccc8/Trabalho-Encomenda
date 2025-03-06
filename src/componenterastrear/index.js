import React, { Fragment } from "react";
import '../index.css'

function TrackingEvents({ events }){
    if(!events || events.length === 0)
    return (
    <Fragment>
        <h1>Eventos de rastreamento</h1>
        <ul>
            {events.map(item => <li key={item.descricao}>
                <span>{item.descricao}</span>
                <span>{item.data} {item.hora}</span>
                <span>{item.cidade}/{item.uf}</span>


            </li>
        )}            
        </ul>
    </Fragment>
)}

export default TrackingEvents;