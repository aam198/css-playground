const express = require('express')
// Initialize express
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000


// To use Routes 
// app.get('/', (req, res) => {
//   res.send('hello world');
// })

app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

