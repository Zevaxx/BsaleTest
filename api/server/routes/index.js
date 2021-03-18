const express = require('express');
const db = require('../db');
const router = express.Router();

/** End point que disponibiliza los productos desde la base de datos paginados */

router.get('/productos', async (req, res) => {
  try {
    const results = await db.productos();
    const pages = req.query.page;
    res.json(paginatedResults(pages, results));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/** End point que disponibiliza los productos buscados, requiere del parametro search */

router.get('/productos/search', async (req, res) => {
  try {
    const results = await db.search(req.query.search);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/** End point que disponibiliza las categorias de productos que se encuentran en la base de datos */

router.get('/productos/categorias', async (req, res) => {
  try {
    const results = await db.categories();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/** End point que disponibiliza los productos de una categoria seleccionada */

router.get('/productos/category', async (req, res) => {
  try {
    const results = await db.selectCategory(req.query.category);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/** Función que permite paginar los resultados entregados por la base de datos
 * a un máximo de 12 por pagina */

function paginatedResults (pages, model) {
  const page = pages;
  const limit = 12;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < model.length) {
    results.next = {
      page: parseInt(page) + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    };
  }
  results.results = model.slice(startIndex, endIndex);
  return results;
}

module.exports = router;
