import getData from '../utils/getData';

const Home = async () => {
  const pages = window.location.search.slice(1).split('&')[0].split('=')[1];
  const productos = await getData(`productos?page=${pages || 1}`);

  /** Este módulo muestra todos los productos
   * paginados, cada tarjeta de producto tiene todos los datos obtenidos de la BD */

  const view = `
    <div class="pagination"> 
    ${productos.previous ? `<a class="pagination__prev" href=${window.location.origin}/BsaleTest/?page=${productos.previous.page}>Anterior</a>` : ''}
    ${pages ? `<div class="pagination__current">${pages}</div>` : ''}
    ${productos.next ? `<a class="pagination__next" href= ${window.location.origin}/BsaleTest/?page=${productos.next.page}>Siguiente</a>` : ''}
    </div>
    ${productos.results.map(producto => `
    <div class="cards__card">
      <div class="cards__image"><img src="${producto.url_image}" alt="${producto.name}"></div>
      <div class="cards__title">${producto.name}</div>
      <div class="cards__price">$ ${producto.price} ${producto.discount > 0 ? `<span class="cards__discount"> Oferta -${producto.discount}%<span>` : ''}</div>
      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> 
    </div>`).join('')}
  `;
  return view;
};

export default Home;
