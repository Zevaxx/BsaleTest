
const resolveRoutes = (route) => {
  if (route === '/') {
    const validRoute = '/';
    return validRoute;
  } else if (route && route.substring(0, 7) == 'search=') {
    const validRoute = '/search';
    return validRoute;
  }
  return '/';
};

export default resolveRoutes;
