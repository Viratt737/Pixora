const express = require('express');
const app = express();

app.use('/', (res, req) =>{
    return res.json({
        msg : "server is start now"
    })
})


app.listen(3000, () => {
    console.log(`Server is start at 3000`);
})