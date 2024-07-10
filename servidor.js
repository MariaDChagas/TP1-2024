const express = require('express')
const app = express()
app.use(express.urlencoded ({ extended: true}))
app.set('view engine', 'ejs')

app.get('/conta', (request, response) => {
    response.render ('conta')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("rodano =D")
})

