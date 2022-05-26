const {response} = require('express')
const usuariosGet=(req, res=response)=>{
            res.status(200).json({msg:'Hello World'});
};
const usuariosPost=(req, res=response)=>{
            const query = req.query;
            const body = req.body;
            res.status(200).json({
                msg:'Hello World',
                body,
                query
            });
};

const usuariosPut=(req, res=response)=>{
            const id = req.params.id;
            res.status(200).json({
                msg:'Hello World',
                id
            });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}