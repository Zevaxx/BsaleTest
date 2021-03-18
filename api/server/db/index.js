const mysql = require('mysql');

/**  Pool con los datos de conexión a la base de datos */

const pool = mysql.createPool({
  user: 'bsale_test',
  database: 'bsale_test',
  password: 'bsale_test',
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com'

});

const bsaledb = {};

/** función que trae todos los productos de la base de datos */

bsaledb.productos = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM product;', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/** Función que permite buscar productos por los nombres in DB */

bsaledb.search = (buscar) => {
  return new Promise((resolve, reject) => {
    const like = `%${buscar}%`;
    pool.query('Select * FROM product where name like ? ;', like, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/** Función que trae las categorías de los productos, deja fuera categorias que no tengan productos */

bsaledb.categories = () => {
  return new Promise((resolve, reject) => {
    pool.query(`
      select DISTINCT category.name , category.id 
      from product
      inner join category
      on product.category = category.id;`, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

/** Función que selecciona los productos de una categoria desde la base de datos */

bsaledb.selectCategory = (filtro) => {
  return new Promise((resolve, reject) => {
    const category = `${filtro}`;
    pool.query(`
    select *
    from product
    where category = ? ;`, category, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = bsaledb;
