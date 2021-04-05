
/** Esta función obtiene la información desde la barra de direcciones para
 * entregarla al enrutador */

const getHash = () => {
  if (window.location.hash) {
    const hash = window.location.hash.slice(1).toLocaleLowerCase() || '/';

    return hash;
  }
};
export default getHash;
