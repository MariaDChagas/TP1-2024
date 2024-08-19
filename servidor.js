const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')
app.use(express.static ("public"))

app.get('/conta', (request, response) => {
    response.render ('conta')
})

app.get('/cal', (request, response) => {
    resultado = ''
    response.render ('calculo')
})

app.post('/soma', (request, response) => {
    soma = parseFloat(request.body.n1) + parseFloat(request.body.n2)
    response.render('calculo', {resultado: soma})
})

app.post('/sub', (request, response) => {
    sub = parseFloat(request.body.n1) - parseFloat(request.body.n2)
    response.render('calculo', {resultado: sub})
})

app.post('/mult', (request, response) => {
    mult = parseFloat(request.body.n1) * parseFloat(request.body.n2)
    response.render('calculo', {resultado: mult}) 
})

app.post('/div', (request, response) => {
    div = parseFloat(request.body.n1) / parseFloat(request.body.n2)
    response.render('calculo', {resultado: div})
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("rodano =D")
})
