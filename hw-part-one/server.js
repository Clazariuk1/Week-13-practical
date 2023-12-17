const express = require('express')
const app = express()
const path = require('path')
// const fs = require('fs')

// organization code starts

// app.engine('homework', (filePath, options, callback) => {
//     fs.readFile(filePath, (err, content) => {
//         if (err) return callback(err)

//         const rendered = content.toString()
//         .replace('#title#', `<title>${options.title}</title>`)
//         .replace('#messages#', `<h1>${options.message}</h1>`)
//         .replace('#content#', `<div>${Array.isArray(options.content)? options.content.map((item) => {
//             return `<li>${item}</li>`
//         }): options.content}</div>`)
//     return callback(null, rendered)
//     })
// })
// app.set('views', './views')
// app.set('view engine', 'homework')

// organization code ends

// middleware starts

// app.use((req, res, next) => {
//     console.log("All Systems Nominal.")
//     next()
// })

// middleware ends

// routes start

app.get('/greeting', (req, res) => {
    res.send(`Greetings, Stranger.`)
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hey... Isn't your name ${req.params.name}?`)
})

// routes end
app.listen(3000, () => {
    console.log("We're live.")
})
