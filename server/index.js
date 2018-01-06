const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const blogs_controller = require("./controllers/blogs_controller")

const baseURL = "/api/posts"

// let posts = [{ "id": 0, "title": "1st post" }]

// let id = posts.length ? posts.slice(-1)[0]["id"] + 1 : 0;

app.get(baseURL, blogs_controller.read)

app.post(baseURL, blogs_controller.create)

app.put(`${baseURL}/:id`, blogs_controller.update)

app.delete(`${baseURL}/:id`, blogs_controller.delete)

const port = 8080
app.listen(port, () => console.log(`The magic is now happening on port ${port}`))