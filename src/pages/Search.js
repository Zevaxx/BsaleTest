import getData from '../utils/getData';
import getHash from '../utils/getHash';
import Card from './Card';

/** Módulo que se carga cuando se buscan productos */

const Search = async () => {
  const busqueda = getHash();
  const productos = await getData(`productos/search?${busqueda}`);

  const view = `
    ${productos.length === 0 ? '<h1>No se encontraron productos con ese nombre 😢</h1>' : productos.map(producto => Card(producto)).join('')}
  `;
  return view;
};

export default Search;
