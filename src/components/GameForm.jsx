import { useState } from 'react';

const initialGame = {
  nombre: '',
  categoria: '',
  precio: '',
  descripcion: '',
};

function GameForm({ onAddGame }) {
  const [game, setGame] = useState(initialGame);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGame((currentGame) => ({ ...currentGame, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!game.nombre.trim() || !game.categoria.trim() || !game.precio || !game.descripcion.trim()) {
      setError('Completa todos los campos para agregar un videojuego.');
      setSuccess('');
      return;
    }

    if (Number(game.precio) <= 0) {
      setError('El precio debe ser mayor a cero.');
      setSuccess('');
      return;
    }

    onAddGame({
      ...game,
      precio: Number(game.precio),
    });
    setGame(initialGame);
    setError('');
    setSuccess('Videojuego agregado correctamente.');
  };

  return (
    <form className="app-form" onSubmit={handleSubmit} noValidate>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="gameName">
            Nombre
          </label>
          <input
            className="form-control"
            id="gameName"
            name="nombre"
            type="text"
            value={game.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="gameCategory">
            Categoria
          </label>
          <input
            className="form-control"
            id="gameCategory"
            name="categoria"
            type="text"
            value={game.categoria}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="gamePrice">
            Precio
          </label>
          <input
            className="form-control"
            id="gamePrice"
            min="1"
            name="precio"
            type="number"
            value={game.precio}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="gameDescription">
            Descripcion
          </label>
          <textarea
            className="form-control"
            id="gameDescription"
            name="descripcion"
            rows="3"
            value={game.descripcion}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <button className="btn btn-info fw-semibold mt-4" type="submit">
        Agregar videojuego
      </button>
    </form>
  );
}

export default GameForm;
