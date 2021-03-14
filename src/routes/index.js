import Header from '../templates/Header';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Error404 from '../pages/Error404';
import Search from '../pages/Search';

const routes = {
  '/': Home,
  '/search': Search
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('cards');

  header.innerHTML = Header();

  const hash = getHash();

  const route = resolveRoutes(hash);

  const render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
