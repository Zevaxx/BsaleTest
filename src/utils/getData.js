
/** Conexión con la api, a esta función se le entrega la ruta de la api
 * para conectarse con el end point que corresponda y obetener la información
 * que se renderizará en cada módulo */

const API = 'https://bsaleapitest.herokuapp.com/api/';

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;

  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

export default getData;
