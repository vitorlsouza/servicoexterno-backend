const Servico = require('../models/Servico');

module.exports = {
  async index(req, res) {
    const servicos = await Servico.find({});

    return res.json(servicos);
  },

  async store(req, res) {
    const servico = await Servico.create(req.body);

    req.io.emit('servico', servico);

    return res.json(servico);
  },
};
