const Header = () => {
  const view = `
  <h1 class="header__title">Bsale Test</h1>
    <form method="get" class="header__form" >
      <input class="header__input" type="text" placeholder="Tienda" name="search">
      <button type="submit" class="header__searchbutton ">
          <i class="header__searchicon fas fa-search"></i>
      </button>    
    </form>
  <a class="header__cartbutton" href="#"><i class="header__carticon fas fa-shopping-cart"></i></a> 
  `;
  return view;
};

export default Header;