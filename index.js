const express = require('express')

const app = express()

app.use(express.static('dist'))
// app._router.use(express.static('dist'))


app.get('/datos', (req, res) => {
    res.send('Hello World!');
});



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})