import getData from '../utils/getData';

const Home = async () => {
  const productos = await getData('all');
  const view = `
    ${productos.map(producto => `
    <div class="cards__card">
      <div class="cards__image"><img src="${producto.url_image}" alt="${producto.name}"></div>
      <div class="cards__title">${producto.name}</div>
      <div class="cards__price">$ ${producto.price}</div>
      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> 
    </div>`).join('')}
  `;
  return view;
};

export default Home;