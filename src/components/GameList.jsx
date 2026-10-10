import GameCard from './GameCard.jsx';

function GameList({ games, onRemoveGame }) {
  if (games.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        No hay videojuegos para la categoria seleccionada.
      </div>
    );
  }

  return (
    <div className="games-grid">
      {games.map((game) => (
        <GameCard game={game} key={game.id} onRemoveGame={onRemoveGame} />
      ))}
    </div>
  );
}

export default GameList;
