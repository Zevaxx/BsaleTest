// Este modulo se carga cuando ocurre alguna ruta no válida

const Error404 = () => {
  const view = `
    <div class="Error404">
      <h2>Error 404</h2>
    </div>
  `;
  return view;
};

export default Error404;
