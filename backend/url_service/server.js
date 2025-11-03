const app = require('./config/server_config');

console.log(process.env.SERVER_PORT)
app.listen(Number(process.env.SERVER_PORT), ()=>{
    console.log(`server started http://localhost:${process.env.SERVER_PORT}`);
})