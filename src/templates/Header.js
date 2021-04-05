import getData from '../utils/getData';
import path from '../utils/path';

/** Componente Header de la aplicación
 * tiene un buscador y un filtro por categoria */

const Header = async () => {
  const categories = await getData('productos/categorias');

  const view = `
  <a class="header__homelink"  href=${window.location.origin}/${path()}><h1 class="header__title">Bsale Test</h1></a>
 
      <div class="header__form"> 
        <input class="header__input" type="text" placeholder="Tienda" 
        onkeyup="setTimeout(() => 
        event.target.value ? document.location.hash = 'search=' + event.target.value : document.location.hash = ''
        , 1000)">    
        <div class="header__searchbutton ">
        <i class="header__searchicon fas fa-search"></i>
        </div>   
      </div> 

    <div class="header__form">
      <select class="header__input" onchange="event.target.value != 0 ? document.location.hash = 'category=' + event.target.value : document.location.hash = ''"
        name="category">
        <option value=0> Elija una opción </option>
      ${categories.map(category => `
        <option value="${category.id}">${category.name}</option>
      `).join('')}
      </select>
    
    </div>
  <a class="header__cartbutton" href="#"><i class="header__carticon fas fa-shopping-cart"></i></a> 
  `;
  return view;
};

export default Header;
