const {Router}=require('express');
const { usuariosGet, usuariosPost, usuariosPut } = require('../controllers/usuarios');

const router = Router();

module.exports = router;

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.put('/:id', usuariosPut)