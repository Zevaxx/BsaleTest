import router from './routes';
import Header from './templates/Header';

/** Carga de event listener que montarán los módulos de la aplicación
 * dependiendo de la interacción del usuario
 */

const header = document.getElementById('header');

const renderHeader = async () => {
  header.innerHTML = '<h1>Cargando ... 🚀🚀</h1> ';
  header.innerHTML = await Header();
};

renderHeader();

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
