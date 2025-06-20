export async function ordenarProductos() {
  const mandar_peti = document.querySelector('section')
  const responder = await fetch('http://localhost:3000/api/categorias');
  const categorias = await responder.json();
  // console.log(categorias);
  const content = document.createElement('div');
  content.classList.add('content-categorias');
  categorias.data.forEach(categoria => {
    const content_item = document.createElement('div');
    const h3 = document.createElement('h3');
    const parrafo = document.createElement('p');
    h3.textContent = categoria.nombre;
    parrafo.textContent = categoria.descripcion;
    content_item.append(h3, parrafo);
    content.appendChild(content_item);
    content_item.classList.add('content-item');
  });

  mandar_peti.appendChild(content);


}