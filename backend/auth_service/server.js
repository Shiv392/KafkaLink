const express = require('express');
const app = express();
const port = 8010;

app.get('/', (req, res)=>{
    return res.status(200).json({success : true, message : 'Home Route'});
});

app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
})