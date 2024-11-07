import { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const handleFormSubmit = (formData) => {
    setData(formData);
  };

  return (
    <div className="App">
      <h1>Información sobre Doramas</h1>
      <Form onSubmit={handleFormSubmit} />
      {data && <Card title={data.title} author={data.author} />}
    </div>
  );
}

export default App;
