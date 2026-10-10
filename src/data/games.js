const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

export const videoGamesCatalog = {
  productos: [
    {
      id: 'zelda-tears',
      nombre: 'The Legend of Zelda: Tears of the Kingdom',
      categoria: 'Aventura',
      precio: 54990,
      descripcion: 'Explora Hyrule y resuelve desafios en una aventura de mundo abierto.',
      imagen: imagePath('cover-aventura.svg'),
    },
    {
      id: 'fc-26',
      nombre: 'EA Sports FC 26',
      categoria: 'Deportes',
      precio: 49990,
      descripcion: 'Compite en partidos rapidos, ligas y torneos con equipos internacionales.',
      imagen: imagePath('cover-deportes.svg'),
    },
    {
      id: 'forza-horizon',
      nombre: 'Forza Horizon 6',
      categoria: 'Carreras',
      precio: 45990,
      descripcion: 'Conduce autos de alto rendimiento en rutas abiertas y eventos competitivos.',
      imagen: imagePath('cover-carreras.svg'),
    },
    {
      id: 'street-fighter',
      nombre: 'Street Fighter 6',
      categoria: 'Lucha',
      precio: 39990,
      descripcion: 'Domina combos, personajes y modos de combate para jugadores casuales y expertos.',
      imagen: imagePath('cover-lucha.svg'),
    },
    {
      id: 'minecraft',
      nombre: 'Minecraft Deluxe',
      categoria: 'Creativo',
      precio: 28990,
      descripcion: 'Construye, explora y sobrevive en mundos generados de forma dinamica.',
      imagen: imagePath('cover-creativo.svg'),
    },
    {
      id: 'spider-man',
      nombre: 'Marvel Spider-Man 2',
      categoria: 'Accion',
      precio: 52990,
      descripcion: 'Vive una historia de accion con movimientos fluidos y misiones urbanas.',
      imagen: imagePath('cover-accion.svg'),
    },
  ],
};

export { imagePath };
