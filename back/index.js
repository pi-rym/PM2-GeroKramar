const app = require ('./src/server');
const port = 3000;

app.listen(port,()=>{
 console.log(`el servidor esta escuchando en el puerto:${port}`);
})
