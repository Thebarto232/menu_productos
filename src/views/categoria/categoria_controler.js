export async function ordenarCategorias() {
  const mandar_peti = document.querySelector('section')
  const responder = await fetch('http://localhost:3000/api/categorias');
  const categorias = await responder.json();
  console.log(categorias);


  
  const content = document.createElement('div');
  mandar_peti.appendChild(content);
  content.classList.add('content-categorias');
  content.innerHTML = '<h2>Categorías</h2>';

  const content_title = document.createElement('h3');
  content_title.textContent = 'Lista de categorías';
  content.appendChild(content_title);

  const content_description = document.createElement('p');
  content_description.textContent = 'Aquí encontrarás todas las categorías disponibles.';
  content.appendChild(content_description);

  categorias.data.forEach(categoria => {
    const content_item = document.createElement('div');
    content.appendChild(content_item);
    content_item.classList.add('content-item');
  });



}
// export async function ordenarProductos() {
//   const mandar_peti = await document.querySelector('section');
//   const responder = await fetch('http://localhost:3000/api/productos');
//   if (!mandar_peti) {
//     throw new Error('Error al cargar los productos');
//   }
//   let content = '<table></table><tbody>';
//   const productos = await responder.json();
//   productos.forEach(producto => {
//     content += `
//       <tr>
//         <td>${producto.nombre}</td>
//         <td>${producto.descripcion}</td>
//       </tr>
//     `;
//   });
//   content += '</tbody></table>';
//   return mandar_peti.innerHTML = content;
// }



