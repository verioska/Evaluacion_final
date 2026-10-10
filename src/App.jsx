import { useMemo, useState } from 'react';
import { imagePath, videoGamesCatalog } from './data/games.js';
import AppNavbar from './components/AppNavbar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import GameForm from './components/GameForm.jsx';
import GameList from './components/GameList.jsx';

function App() {
  const [games, setGames] = useState(videoGamesCatalog.productos);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = useMemo(() => {
    const uniqueCategories = games.map((game) => game.categoria);
    return ['Todas', ...new Set(uniqueCategories)];
  }, [games]);

  const filteredGames = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return games;
    }

    return games.filter((game) => game.categoria === selectedCategory);
  }, [games, selectedCategory]);

  const addGame = (newGame) => {
    setGames((currentGames) => [
      {
        ...newGame,
        id: crypto.randomUUID(),
        imagen: imagePath('cover-nuevo.svg'),
      },
      ...currentGames,
    ]);
    setSelectedCategory('Todas');
  };

  const removeGame = (gameId) => {
    setGames((currentGames) => currentGames.filter((game) => game.id !== gameId));
  };

  return (
    <>
      <AppNavbar />

      <header id="inicio" className="site-header">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p className="text-uppercase text-info fw-bold mb-2">Tienda online</p>
              <h1 className="display-5 fw-bold text-white">GameStore Pixel</h1>
              <p className="lead text-light mb-4">
                Catalogo de videojuegos con filtros, tarjetas responsivas y formulario de contacto para
                clientes.
              </p>
              <a className="btn btn-info fw-semibold" href="#catalogo">
                Ver catalogo
              </a>
            </div>
            <div className="col-lg-5">
              <div className="stats-panel">
                <span className="stats-number">{games.length}</span>
                <span className="stats-label">videojuegos disponibles</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="catalogo" className="catalog-section py-5">
          <div className="container">
            <div className="section-heading">
              <p className="text-uppercase text-info fw-bold mb-2">Catalogo</p>
              <h2 className="h1 fw-bold">Videojuegos disponibles</h2>
              <p className="text-secondary">
                Filtra por categoria o agrega nuevos productos para demostrar el manejo de estado en
                React.
              </p>
            </div>

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <GameList games={filteredGames} onRemoveGame={removeGame} />
          </div>
        </section>

        <section id="administrar" className="admin-section py-5">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <p className="text-uppercase text-info fw-bold mb-2">React state</p>
                <h2 className="h1 fw-bold">Agregar videojuegos</h2>
                <p className="text-secondary mb-0">
                  Este formulario usa estado para insertar productos dinamicamente y props para
                  actualizar la lista principal.
                </p>
              </div>
              <div className="col-lg-7">
                <GameForm onAddGame={addGame} />
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section py-5">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <p className="text-uppercase text-info fw-bold mb-2">Contacto</p>
                <h2 className="h1 fw-bold">Escribenos</h2>
                <p className="text-secondary">
                  El formulario valida nombre, email y mensaje antes de simular el envio.
                </p>
              </div>
              <div className="col-lg-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
