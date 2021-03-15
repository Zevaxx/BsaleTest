import getData from '../utils/getData';

const Header = async () => {
  const categories = await getData('productos/categorias');

  const view = `
  <a class="header__homelink"  href=${window.location.origin}><h1 class="header__title">Bsale Test</h1></a>
 
    <form method="get" class="header__form" >
      <input class="header__input" type="text" placeholder="Tienda" name="search">
      
      <button type="submit" class="header__searchbutton ">
      <i class="header__searchicon fas fa-search"></i>
      </button>    
    </form>

    <div class="header__form">
      <select class="header__input" onchange="document.location.href = '?category=' + event.target.value;"
        name="category">
        <option> Elija una opción </option>
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
