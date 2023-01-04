const database = require('../config/database');

const getAllCoctels = async (req, res) => {
  try {
    const data = await database.all('Coctel');
    res.status(200).json(await data.toJson());
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.error || e.message });
  }
};

const getOneCoctel = async (req, res) => {
  try {
    const data = await database.findById('Coctel', req.params.id);
    res.status(200).json(await data.toJson());
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.error || e.message });
  }
};

const getCoctelByName = async (req, res) => {
  try {
    const data = await database.all('Coctel', { name: req.params.name });
    res.status(200).json(await data.toJson());
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.error || e.message });
  }
};

const createCoctel = async (req, res) => {
  try {
    console.log(req.body);
    const coctel = await database.create('Coctel', req.body);
    for (let i = 0; i < req.body.allIngredients.length; i++) {
      const el = req.body.allIngredients[i];
      let record = await database.first('Ingredient', 'name', el.name);
      if (record) {
        coctel.relateTo(record, 'ingredients', {
          amount: el.amount,
          accion: el.accion,
          order: el.order,
        });
      } else {
        record = await database.create('Ingredient', el);
        coctel.relateTo(record, 'ingredients', {
          amount: el.amount,
          accion: el.accion,
          order: el.order,
        });
      }
    }
    res.status(200).json(await coctel.toJson());
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.error || e.message });
  }
};

const updateCoctel = async (req, res) => {
  try {
    const data = await database.findById('Coctel', req.params.id);
    await data.update(req.body);
    res.status(200).json(data.toJson());
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.error || e.message });
  }
};

const deleteCoctel = async (req, res) => {
  try {
    const data = await database.findById('Coctel', req.params.id);
    await data.delete();
    //const data = await database.delete('Coctel', { name: Number(req.params.id) });
    res.status(200).json(data.toJson());
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.error || e.message });
  }
};

module.exports = {
  getAllCoctels,
  getCoctelByName,
  getOneCoctel,
  createCoctel,
  updateCoctel,
  deleteCoctel,
};
