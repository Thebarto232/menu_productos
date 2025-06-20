import './style.css';
import * as categoria_controler from './views/categoria/categoria_controler.js';
import * as produc_categorias from './views/productos/produc_categorias.js';

const main_content = document.querySelector('.main_content');

const listado = [
  {
    name: 'productos',
    path: 'src/views/productos/index.html',
    src: produc_categorias.ordenarProductos

  },
  {
    name: 'categoria',
    path: 'src/views/categoria/index.html',
    src: categoria_controler.ordenarCategorias
  }
];

const llamar = async (url) => {
  const recibe = await fetch(`/src/views/${url}/index.html`);
  return await recibe.text();
};

window.addEventListener('hashchange', async () => {
  const hash = location.hash.slice(1);
  const encontrado = listado.find(({ name }) => name.trim() === hash);
  if (encontrado) {
    main_content.innerHTML = await llamar(encontrado.name);
    await encontrado.src();
  } else {
    main_content.innerHTML = '<p>Contenido no encontrado</p>';
  }
});
