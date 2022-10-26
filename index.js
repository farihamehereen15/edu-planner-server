const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Edu Planner Courses Is Running')
})

app.listen(port, () => {
    console.log(`Edu Planner courses is listening on port ${port}`)
})