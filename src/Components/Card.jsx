const Card = ({ title, author }) => {
  return (
    <div className="card">
      <h2>Información del Dorama</h2>
      <p>
        <strong>Título:</strong> {title}
      </p>
      <p>
        <strong>Autor:</strong> {author}
      </p>
    </div>
  );
};

export default Card;
