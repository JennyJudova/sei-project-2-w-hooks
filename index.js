const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.static(`${__dirname}/src`))

app.use('/*', (req, res) => res.sendFile(`${__dirname}/src/index.html`))

app.listen(port, () => console.log(`Express is running on port ${port}`))