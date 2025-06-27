const path = require('node:path');
const data = require('../models/productos.json');

const controller = {
  home: (req, res) => {
    res.render('home', {data:data})
  }

}


module.exports = controller;




