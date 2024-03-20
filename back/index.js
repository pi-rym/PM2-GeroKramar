const app = require ('./src/server');
const port = 3000;
const dbConection = require('./src/config/dbConection')

dbConection()
.then(
    ()=>{
        app.listen(port,()=>{
            console.log(`el servidor esta escuchando en el puerto:${port}`);
           })
        }
).catch ((error)=>{
    console.log(`hay un problema con la base de datos ${error}`);
})
