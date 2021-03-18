import router from './routes';

/** Carga de event listener que montarán los módulos de la aplicación
 * dependiendo de la interacción del usuario
 */

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
