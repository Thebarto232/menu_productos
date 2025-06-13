// import './style.css'
import './style.css';
import * as categoria_controler from './views/productos/produc_categorias.js';
import * as produc_categorias from './views/categoria/categoria_controler.js';
const main_container = document.querySelector('.main_content');/**clase  */
const listado = [
  { name: 'productos', path: 'src/views/productos/index.html', src: produc_categorias },
  { name: 'categoria ', path: 'src/views/categoria/index.html', src: categoria_controler }
]
const llamar = async (url) => {
  const recibe = await fetch(`/src/views/${url}/index.html`);
  return await recibe.text();

}
window.addEventListener('hashchange', async () => {


  const hast = location.hash.slice(1);

  // if (window.location.hash === '#productos') {

  //   main_container.innerHTML = await llamar('/productos');
  // }
  // if (window.location.hash === '#categorias') {
  //   main_container.innerHTML = await llamar('/categoria');
  // }
  const encontrado = listado.find(({ name }) => name == hast);
  main_container.innerHTML = await llamar(encontrado.name);
});

