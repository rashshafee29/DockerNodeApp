// src/index.js
let express = require('express')
const PORT = process.env.PORT || 4000

let app = express()

app.get('/', (req, res) => {
  res.send('Server running!')
})

// Custom 404 route not found handler
app.use((req, res) => {
  res.status(404).send('404 not found')
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})