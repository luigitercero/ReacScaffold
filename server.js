const express = require('express');
const app = express();
const users = [
    {
        "nombre":"fabian"
    },
        
    {
        "nombre":"Pedro"
    }
]


app.use(express.static(__dirname + '/public'))
app.get('/api/users',(req,res)=>{
    res.json({
        users:users
    })
});
app.listen (3001, function() {
    console.log('server http://localhost:3001')
})