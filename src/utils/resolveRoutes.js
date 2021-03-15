
// Este controlador resuelve las rutas y envia de vuelta las rutas válidas al archivo router

const resolveRoutes = (route) => {
  if (route === '/') {
    const validRoute = '/';
    return validRoute;
  } else if (route && route.substring(0, 7) == 'search=') {
    const validRoute = '/search';
    return validRoute;
  } else if (route && route.substring(0, 9) == 'category=') {
    const validRoute = '/category';
    return validRoute;
  }
  return '/';
};

export default resolveRoutes;
