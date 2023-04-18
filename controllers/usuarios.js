const { response } = require('express');

const usuariosGet = (req, res = response) => {
  //const query = req.query;

  const { q, nombre = 'No Name', apikey } = req.query;

  res.json({
    msg: 'get, Hola Mundo, Controlador',
    q,
    nombre,
    apikey,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: 'post API - usuariosPost',
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  console.log(req.params);
  const { id } = req.params.id;

  res.json({
    msg: 'put API - usuariosPut',
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - usuariosPatch',
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - usuariosDelete',
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
