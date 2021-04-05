
/** Este controlador toma la información en bruto de la URL
 * y envia de vuelta las rutas válidas al modulo routes */

const resolveRoutes = (route) => {
  if (route === '/') {
    const validRoute = '/';
    return validRoute;
  } else if (route && route.substring(0, 7) === 'search=') {
    const validRoute = '/search';
    return validRoute;
  } else if (route && route.substring(0, 9) === 'category=') {
    const validRoute = '/category';
    return validRoute;
  } else if (route && route.substring(0, 5) === 'page=') {
    const validRoute = '/';
    return validRoute;
  }
  return '/';
};

export default resolveRoutes;
