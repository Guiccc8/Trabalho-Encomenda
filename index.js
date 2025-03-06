const express = require('express')
const cors = require('cors')
const Track = require('tracking-correios')

app = express()

app.use(cors())// Sustenta a tomada de requisições do cliente

const PORT = 3001

const get = (obj, path, fallback = null) =>{
    const pathKeys = (typeof path === "string") ? path.split('.') : []
    const result = pathKeys.reduce((value, key) => value && value[key], obj)
    return result || fallback
}


app.get("/", (req, res) =>{
    const caminho = get(req, 'query.caminho') //Recebimento do "caminho"

    Track.track(caminho) 
    //Caso o caminho, ou o a requisição mandada seja existente no Tracking, então haverá o resultado
    .then((result) => {
        
        const events = get(result, '0.evento')

        console.log('evento', get(result, '0.evento'))
        res.json({message: 'ok', caminho, events}) //Envio em Json para o cliente
    })
    .catch((error) => {
        res.json({message: 'error', error})//Envio em Json para o cliente
    })

    
})
app.listen(PORT, () =>

console.log("Funcionando: ", PORT))



