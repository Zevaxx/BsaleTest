import getData from '../utils/getData';
import Card from './Card';
import path from '../utils/path';

const Home = async () => {
  const pages = window.location.hash.slice(2).split('&')[0].split('=')[1];
  const productos = await getData(`productos?page=${pages || 1}`);

  /** Este módulo muestra todos los productos
   * paginados, cada tarjeta de producto tiene todos los datos obtenidos de la BD */

  const view = `
    <div class="pagination"> 
    ${productos.previous ? `<a class="pagination__prev" href=${window.location.origin}/${path()}#page=${productos.previous.page}>Anterior</a>` : ''}
    ${pages ? `<div class="pagination__current">${pages}</div>` : ''}
    ${productos.next ? `<a class="pagination__next" href= ${window.location.origin}/${path()}#page=${productos.next.page}>Siguiente</a>` : ''}
    </div>
    ${productos.results.map(producto => Card(producto)).join('')}
    <div class='pagination'>
    ${productos.previous ? `<a class="pagination__prev" href=${window.location.origin}/#page=${productos.previous.page}>Anterior</a>` : ''}
    ${pages ? `<div class="pagination__current">${pages}</div>` : ''}
    ${productos.next ? `<a class="pagination__next" href= ${window.location.origin}/${path()}#page=${productos.next.page}>Siguiente</a>` : ''}
    </div>`;
  return view;
};

export default Home;
