const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')

app.get('/conta', (request, response) => {
    response.render ('conta')
})

app.get('/cal', (request, response) => {
    resultado = ''
    response.render ('calculo')
})

app.get('/soma', (request, response) => {
    soma = parseFloat(request.query.n1) + parseFloat(request.query.n2)
    response.render('calculo', {resultado: soma})
})

app.get('/sub', (request, response) => {
    sub = parseFloat(request.query.n1) - parseFloat(request.query.n2)
    response.render('calculo', {resultado: sub})
})

app.get('/mult', (request, response) => {
    mult = parseFloat(request.query.n1) * parseFloat(request.query.n2)
    response.render('calculo', {resultado: mult}) 
})

app.get('/div', (request, response) => {
    div = parseFloat(request.query.n1) / parseFloat(request.query.n2)
    response.render('calculo', {resultado: div})
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("rodano =D")
})

