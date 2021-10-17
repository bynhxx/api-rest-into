const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const { response } = require("express")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


var DB = {
    games: [
        {
            id: 23, 
            title: 'Call of duty',
            year: 2019,
            price: 60
        },
        {
            id: 21, 
            title: 'Sea of thieves',
            year: 2018,
            price: 45
        },
        {
            id: 2, 
            title: 'Minecraft',
            year: 2005,
            price: 15
        },
    ]
}

// retornará a listagem dos games 
// necessário retornar tbm o status code
app.get("/games", (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
}) 

//retornando um dado individualmente
app.get("/game/:id", (req, res) => { 
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else {
        
        let id = parseInt(req.params.id)
        let game = DB.games.find(g => g.id === id)

        if(game != undefined){
            res.statusCode = 200
            res.json(game)
        } else {
            res.sendStatus(404)
        }
    }
})

//criando um novo registro
app.post("/game", (req, res) => {
    let {title, price, year} = req.body

    DB.games.push({
        id: 2323, 
        title, 
        price,
        year
    })
    res.sendStatus(200)

})

//deletando um registro 
app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else {
        
        let id = parseInt(req.params.id)
        let index = DB.games.findIndex(g => g.id === id)

        if(index == -1){
            res.sendStatus(404)
        } else {
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})


//atualizando um registro
app.put("/game/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else {

        let id = parseInt(req.params.id)
        let game = DB.games.find(g => g.id === id)

        if(game != undefined){

            let {title, price, year} = req.body

            if(title != undefined){
                game.title = title
            }

            if(price != undefined){
                game.price = price
            }

            if(year != undefined){
                game.year = year
            }

            res.sendStatus(200)

        } else {
            res.sendStatus(404)
        }

    }
})
    

app.listen(45678, () => {
    console.log("API rodando :) ")
})


/* 

if(game != undefined){

            let {title, price, year} = req.body

            if(title != undefined){
                game.title = title
            }

            if(prince != undefined){
                game.price = price
            }

            if(year != undefined){
                game.year = year
            }

            res.sendStatus(200)

        } else {
            res.sendStatus(404)
        }
*/