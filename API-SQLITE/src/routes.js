import { Router } from "express";
import { createTable, INSERTUsuario, UPDATEUsuario, SELECTUsuarios, SELECTUsuario, DELETEUsuario } from './controllers/Usuario.js';

const router = Router();
router.get('/', (req, res) => {
    res.json({
        "statuscode": 200,
        "msg": "API is Working..."
    })
})

router.get('/usuario', SELECTUsuario);
router.get('/usuarios', SELECTUsuarios);
router.post('/usuario', INSERTUsuario);
router.put('/usuario', UPDATEUsuario);
router.delete('/usuario', DELETEUsuario);
export default router