const app = require('./config/server_config');

app.listen(Number(process.env.SERVER_PORT),()=>{
    console.log(`server started http://localhost:${Number(process.env.SERVER_PORT)}`)
})