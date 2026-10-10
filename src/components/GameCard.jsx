function formatPrice(price) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(price);
}

function GameCard({ game, onRemoveGame }) {
  return (
    <article className="card game-card h-100 shadow-sm">
      <img className="card-img-top" src={game.imagen} alt={`Portada de ${game.nombre}`} />
      <div className="card-body d-flex flex-column">
        <span className="badge text-bg-dark align-self-start mb-3">{game.categoria}</span>
        <h3 className="h5 card-title">{game.nombre}</h3>
        <p className="card-text text-secondary flex-grow-1">{game.descripcion}</p>
        <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
          <strong className="price">{formatPrice(game.precio)}</strong>
          <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => onRemoveGame(game.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
