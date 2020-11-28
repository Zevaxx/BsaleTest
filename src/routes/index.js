import Header from '../templates/Header';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes'
import Error404 from '../pages/Error404'
import Search from '../pages/Search'

const routes = {
'/': Home,
'/search': Search
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('cards');

  header.innerHTML = await Header();
  
  let hash = getHash();
  
  let route = await resolveRoutes(hash);
  
  let render = routes [route] ? routes [route] : Error404;
  
  content.innerHTML = await render();
};

export default router;