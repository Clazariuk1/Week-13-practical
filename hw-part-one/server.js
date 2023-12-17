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

app.get('/tip', (req, res) => {
    res.send(`I'm bad at math, what's a good tip for the bill?`)
})

app.get('/tip/:total/:percentage', (req, res) => {
    let tipConversion = `${req.params.percentage}`/ 100
    let tipValue =`${req.params.total}` * `${tipConversion}`
    let grandTotal = `${req.params.total}`
    grandTotal = parseInt(`${grandTotal}`) + parseInt(`${tipValue}`)
    res.send(`So your bill was ${req.params.total} and you want to tip ${req.params.percentage} percent? That's gonna be another ${tipValue}, bringing your grand total up to ${grandTotal} dollars.`)
})

app.get('/magic', (req, res) => {
    res.send(`Ask away.`)
})

app.get('/magic/:question', (req, res) => {
    const returnQuestion = `${req.params.question}`
    const responseArray = ["It is Certain", "It is Decidedly So", "Without a Doubt", "Yes, Definitely", "You May Rely on It", "As I See it, Yes", "Most Likely", "Outlook Good", "Yes", "Signs Point to Yes", "Reply Hazy; Try Again", "Ask Again Later", "Better Not Tell You Now", "Cannot Predict Now", "Concentrate and Ask Again", "Don't Count on It", "My Reply is No", "My Sources Say No", "Outlook Not so Good", "Very Doubtful"]
    let answer = Math.floor(Math.random() * responseArray.length)
    res.send(`<h1>Your Question: ${returnQuestion}. My Answer: ${responseArray[answer]}.</h1>`)
})

//HUNGRY FOR MORE : FIBONACCI

function perfectSquare(num) {
    const squareRoot = Math.sqrt(num)
    return squareRoot * squareRoot === num
}

function isFibonacci(number) {
    return perfectSquare(5 * (number * number) + 4) || perfectSquare(5 * (number * number) - 4)
}

app.get('/fibonacci/:query', (req, res) => {
    // MY QUESTION : Below I'm experiencing a sometimes-bug when the number is being evaluated to Fibonacci when in truth it isn't. I don't understand why. This is working 2/3 times. I really didn't want to use the 'loop through every number until you hit yours to decide' system because it seems like a less efficient way but I'm getting errors here.
    let number = parseInt(`${req.params.query}`)
    if (isFibonacci(number)) {
        res.send(`<h2>Yes, very good; the number ${number} is indeed Fibonacci.</h2>`)
    } else {
        res.send(`<h1>No, you're stupid, that's wrong. ${number} is not Fibonacci.</h1>`)
    }
})

function isFibonacci2(number) {
    let x = 0
    let y = 1

    while (x < number) {
        let z = x + y
        x = y
        y = z
    }
    return x === number
}

app.get('/fibonacci2/:query', (req, res) => {
    // Below mehod works. I'm unsure why the other was throwing bugs.
    let number = parseInt(`${req.params.query}`)
    if (isFibonacci2(number)) {
        res.send(`<h2>Yes, very good; the number ${number} is indeed Fibonacci.</h2>`)
    } else {
        res.send(`<h1>No, you're stupid, that's wrong. ${number} is not Fibonacci.</h1>`)
    }
})



// routes end
app.listen(3000, () => {
    console.log("We're live.")
})
