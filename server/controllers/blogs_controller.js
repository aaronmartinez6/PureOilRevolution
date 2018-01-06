let posts = [{ "id": 0, "title": "1st post", "text": "Hi man" }]
let id = posts.length ? posts.slice(-1)[0]["id"] + 1 : 0;

module.exports = {
    
    read: (request, response) => {
        response.status(200).send(posts)
    },

    create: (request, response) => {
        const { title, body } = request.body
        posts.push({ id, title, body })
        id++
        response.status(200).send(posts)
    },

    update: (request, response) => {
        const { title, body } = request.body
        // hang on
    },

    delete: ( request, response) => {
        // hang on
    }

}