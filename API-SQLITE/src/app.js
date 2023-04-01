import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


import router from './routes.js';

app.use(router);
app.listen(3000, ()=> console.log("API working..."))

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, ()=> console.log("Rodando em https"));

//Primeira forma antes da otimização
// import { openDb }  from './configDB.js';
// import { createTable, INSERTUsuario, UPDATEUsuario, SELECTUsuarios, SELECTUsuario, DELETEUsuario } from './controllers/Usuario.js';



// createTable();

// app.get('/', (req, res) => {
//     res.send("Hello world");
// });

// app.get('/usuarios', async (req, res) => {
//     let usuarios = await SELECTUsuarios();
//     res.json(usuarios);
// });

// app.get('/usuario', async (req, res) => {
//     let usuario = await SELECTUsuario(req.body.id);
//     res.json(usuario);
// });

// app.delete('/usuario', async (req, res) => {
//     let usuario = await DELETEUsuario(req.body.id);
//     res.json(usuario);
// });



// app.post('/usuario', (req, res) => {
//     INSERTUsuario(req.body)
//     res.json({
//         "statucCode": 200
//     })
// });

// app.put('/usuario', (req, res) => {
//     if(req.body && !req.body.id) {
//         res.json({
//             "statucCode": "400",
//             "msg":"Você precisa informar um id"
//         })
//     } else {
//         UPDATEUsuario(req.body)
//         res.json({
//             "statucCode": 200
//         })
//     }
// });