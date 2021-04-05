import getData from '../utils/getData';
import getHash from '../utils/getHash';
import Card from './Card';

/** Este modulo se carga cuando se filtran los productos por categorias */

const Category = async () => {
  const busqueda = getHash();
  const productos = await getData(`productos/category?${busqueda}`);
  const view = `
    ${productos.map(producto => Card(producto)).join('')}
  `;
  return view;
};

export default Category;
