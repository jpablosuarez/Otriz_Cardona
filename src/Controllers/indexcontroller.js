const path = require('path');


class IndexController {
  // Renderizar la página de inicio
  getindexpage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  };
}

module.exports = new IndexController();