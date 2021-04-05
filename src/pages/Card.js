const Card = (producto) => {
  const view = `
  <div class="cards__card">
  <div class="cards__image"><img src="${producto.url_image}" alt="${producto.name}"></div>
  <div class="cards__title">${producto.name}</div>
  <div class="cards__price">$ ${producto.price} ${producto.discount > 0 ? `<span class="cards__discount"> Oferta -${producto.discount}%<span>` : ''}</div>
  <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> 
  </div>`;

  return view;
};

export default Card;
