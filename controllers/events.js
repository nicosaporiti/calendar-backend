const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate('user', 'name');

  try {
    res.status(200).json({
      ok: true,
      eventos,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const actualizarEvento = (req, res = response) => {
  const { id } = req.body;
  try {
    res.status(200).json({
      id: id,
      ok: true,
      msg: 'actualizarEvento',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const eliminarEvento = (req, res = response) => {
  const { id } = req.body;
  try {
    res.status(200).json({
      id: id,
      ok: true,
      msg: 'eliminarEvento',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
