const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')
app.use(express.static ("public"))

app.get('/conta', (request, response) => {
    response.render ('conta')
})

app.get('/cal', (request, response) => {
    response.render ('calculo', {n1:"", n2: "", resultado: ""})
})

app.route('/erro')
.get((request, response) => {
    response.render ('erro')
})

app.route('/soma')
.get ((request, response) => {
  response.redirect("/cal")
}) 
.post((request,response) => {     
n1 = parseFloat(request.body.n1)
n2 = parseFloat(request.body.n2)

if (isNaN (n1) || isNaN (n2)){
resultado = `Digite apenas números.`
response.redirect("/erro")
} else {
resultado = n1 + n2
response.render('calculo')
}
})

app.route('/sub')
.get ((request, response) => {
  response.redirect("/cal")
}) 
.post((request,response) => {     
n1 = parseFloat(request.body.n1)
n2 = parseFloat(request.body.n2)

if (isNaN (n1) || isNaN (n2)){
resultado = `Digite apenas números.`
response.redirect("/erro")
} else {
resultado = n1 - n2
response.render('calculo')
}
})

app.route('/mult')
.get ((request, response) => {
  response.redirect("/cal")
}) 
.post((request,response) => {     
    n1 = parseFloat(request.body.n1)
    n2 = parseFloat(request.body.n2)
    
    if (isNaN (n1) || isNaN (n2)){
    resultado = `Digite apenas números.`
    response.redirect("/erro")
    } else {
    resultado = n1 * n2
    response.render('calculo')
    }
    })
    

app.route('/div')
.get ((request, response) => {
  response.redirect("/cal")
}) 
.post((request,response) => {     
    n1 = parseFloat(request.body.n1)
    n2 = parseFloat(request.body.n2)
    
    if (isNaN (n1) || isNaN (n2)){
    resultado = `Digite apenas números.`
    response.redirect("/erro")
    } else if(n2 == 0) {
    resultado = `Nenhum número pode ser dividido por 0.`
    response.redirect("/erro")
    } 
    else{
    resultado = n1 / n2
    response.render('calculo')
    }
    })
    

const PORT = 8080
app.listen(PORT, () => {
    console.log("rodano =D")
})
