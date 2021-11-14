const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);

  // manejo de errores

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    message: 'register',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.json({
    ok: true,
    message: 'login',
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    message: 'renew',
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
