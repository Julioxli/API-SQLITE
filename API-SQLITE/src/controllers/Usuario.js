import { openDb } from "../configDB.js";

export  async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Usuario ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT, senha NUMERIC)')
    });
}

//GET usuários da tabela
export  async function SELECTUsuarios(req,res){
    openDb()
    .then(db=>{
        db.all('SELECT * FROM Usuario')
        .then(usuarios=> res.json(usuarios));
    });
}

// GET usuário específico da tabela pelo id
export  async function SELECTUsuario(req, res){
    let id = req.body.id;
     openDb()
    .then(db=>{
        db.get('SELECT * FROM Usuario WHERE id=?', [id])
        .then(usuario=> res.json(usuario));
    });
}

//INSERT adciona usuário a tabela
export  async function INSERTUsuario(req, res){
    let usuario = req.body;
    openDb()
    .then(db=>{
        db.run('INSERT INTO Usuario ( nome, email, senha) VALUES (?,?,?)', [usuario.nome, usuario.email, usuario.senha]);
    });
    res.json({
        "statuscode": 200
    })
}

//UPDATE atualizar usuário da tabela
export  async function UPDATEUsuario(req, res){
    let usuario = req.body;
    openDb()
    .then(db=>{
        db.run('UPDATE Usuario SET nome=?, email=?, senha=? WHERE id=?', [usuario.nome, usuario.email, usuario.senha, usuario.id]);
    });
    res.json({
        "statuscode": 200
    })
}

//DELETE deletar usuário da tabela

export  async function DELETEUsuario(req, res){
    let id = req.body.id;
     openDb()
    .then(db=>{
        db.get('DELETE FROM Usuario WHERE id=?', [id])
        .then(usuario=> res.json(usuario));
    });
    res.json({
        "statuscode": 200
    })
}




