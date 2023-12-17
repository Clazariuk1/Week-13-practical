const express = require("express")
const app = express()
const path = require('path')
const fs = require('fs')

// organization code starts

app.engine('homework', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if(err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', `<title>${options.title}</title>`)
            .replace('#message#', `<h1>${options.message}</h1>` )
            .replace('#content#', `<div>${Array.isArray(options.content)? options.content.map((item) => {
                return `<li>${item}</li>`
            }): options.content}</div>`)
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'homework')

// organization code ends

// middleware starts

// middleware ends

// routes start

  app.get('/', (req, res) => {
    res.redirect('/99')
})

app.get('/:bottles', (req, res) => {
    if(parseInt(`${req.params.bottles}`) === 0) {
        res.render('template', { title: 'No More Beer!', message: 'all out of beer!!!', content: `<a href="http://localhost:3000">Let's start over and get Krunk again!</a>`})
    } else {
    res.render('template', { title: '99 Bottles of Beer', message: `${req.params.bottles} bottles of beer on the wall!`, content: `<a href="http://localhost:3000/${req.params.bottles - 1}">Take One Down, Pass it Around...</a>`})
    }
  })

// routes end

app.listen(3000, () => {
    console.log("Server is Live.")
} )

/*
On the home page (get "/"), users should see:

"99 Bottles of beer on the wall"
a link that says "take one down, pass it around"
this should link to /98, where the number represents the number of bottles left.
When a number is given in the url (get "/:number_of_bottles"), users should see:

The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
If there are 0 bottles left, do not show a link to "take one down"

Add a link to start over, which directs the user back to the home page.
Hints
You should use an anchortag with an hrefto link to the next 'page'

Have some more fun
Update your page to be something like

99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
Make the bugs go down by one, but then have some sort of functionality where the bug count can randomlygo up

You have a lot of freedom to make it work how you want!



*/
