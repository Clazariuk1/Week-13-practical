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

// Below : normal code pre-bug adding for bonus.
// app.get('/:bottles', (req, res) => {
//     if(parseInt(`${req.params.bottles}`) === 0) {
//         res.render('template', { title: 'No More Beer!', message: 'all out of beer!!!', content: `<a href="http://localhost:3000">Let's start over and get Krunk again!</a>`})
//     } else {
//     res.render('template', { title: '99 Bottles of Beer', message: `${req.params.bottles} bottles of beer on the wall!`, content: `<a href="http://localhost:3000/${req.params.bottles - 1}">Take One Down, Pass it Around...</a>`})
//     }
//   })

app.get('/:bottles', (req, res) => {
    if(parseInt(`${req.params.bottles}`) === 0) {
        res.render('template', { title: 'No More Beer!', message: 'all out of beer!!!', content: `<a href="http://localhost:3000">Let's start over and get Krunk again!</a>`})
    }
    else {
        let value = bugMath(`${req.params.bottles}`)
        res.render('template', { title: '99 Bundles of Bugs', message: `${value} bottles of this efffing POS won't work!`, content: `<a href="http://localhost:3000/${value}">Maybe if you refresh the page...?</a>`})
    }
})

function bugMath(num) {
    let random = Math.floor(Math.random() * 100) + 1
    let change = parseInt(num);
    if (random % 3 === 0 && random % 5 === 0) {
        change *= 2
    }
    else if (random % 3 === 0) {
        change -= 15
    }
    else if (random % 5 === 0) {
        change += 15
    } else {
        change -= 1
    }
    return change
}


// routes end

app.listen(3000, () => {
    console.log("Server is Live.")
} )

/*

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
