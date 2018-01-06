let posts = [{ "id": 0, "title": "1st post", "body": "Hi man" }]
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
        const { title, body, id } = request.body
        console.log(request)
        const updatedPostID = request.params.id
        let indexOfPost = posts.findIndex(post => post.id == updatedPostID)
        posts[indexOfPost] = {
            title: request.body.title || posts[indexOfPost].title,
            body: request.body.body || posts[indexOfPost].body
        }
        response.status(200).send(posts)
    },

    delete: ( request, response) => {
        const deleteID = request.params.id
        postIndex = posts.findIndex( post => post.id == deleteID)
        posts.splice(postIndex, 1)
        response.status(200).send(posts)
    }

}