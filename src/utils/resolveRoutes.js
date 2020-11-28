const resolveRoutes = (route) => {
  
  if (route === '/') {
    let validRoute = '/';
    return validRoute;
  }else if (route && route.substring(0,7) == 'search='){
    let validRoute = '/search';
    return validRoute;
    
  }
  return `/`;
};

export default resolveRoutes;