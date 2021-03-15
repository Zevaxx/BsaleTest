// este modulo de conecta con la base de datos disponibilizada en la API

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
