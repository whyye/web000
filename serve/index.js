const express = require('express')

const app =express()

app.use(require('cors')())

app.use(express.json())

require('./admin/index')(app)
require('./plugins/db')(app)




app.listen(3002,()=>{
    console.log('http://localhost:3002/');
    
})