import * as secction from '../../controllers/section_controller.js';

const section = document.querySelector('.section');
const listado = [
  { name: 'section', path: 'src/views/section/index.html', src: secction }
];

const llamar = async (url) => {
  const traer = await fetch(`/src/views/${url}/index.html`);
  return await traer.text();
}

window.addEventListener('hashchange', async () => {
  const hash = location.hash.slice(1);
  const encontrado = listado.find(({ name }) => name.trim() === hash);

  if (encontrado) {
    section.innerHTML = await llamar(encontrado.name);
    encontrado.src.setupSection();
  } else {
    section.innerHTML = '<p>Contenido no encontrado</p>';
  }
});
