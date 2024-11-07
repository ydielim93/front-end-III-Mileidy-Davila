import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (title.length < 3 || title[0] === " ") {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    if (author.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    onSubmit({ title, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del Dorama"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor del Dorama"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Form;
