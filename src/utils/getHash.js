// esta función obtiene la información desde la barra de direcciones.

const getHash = () => {
  if (window.location.hash) {
    const hash = window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    return hash;
  } else if (window.location.search) {
    const hash = window.location.search.slice(1).toLocaleLowerCase() || '/';
    return hash;
  }
};
export default getHash;
