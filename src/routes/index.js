import Header from '../templates/Header';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Error404 from '../pages/Error404';
import Category from '../pages/Category';
import Search from '../pages/Search';

/** Creación de las rutas con los componentes que renderiza cada uno */

const routes = {
  '/': Home,
  '/search': Search,
  '/category': Category
};

/** Renderiza los distintos módulos */

const router = async () => {
  const header = document.getElementById('header');
  const content = document.getElementById('cards');

  header.innerHTML = '<h1>Cargando ...</h1>';
  header.innerHTML = await Header();

  const hash = getHash();
  const route = resolveRoutes(hash);
  const render = routes[route] ? routes[route] : Error404;

  content.innerHTML = '<h1> Cargando...</h1>';
  content.innerHTML = await render();
};

export default router;
