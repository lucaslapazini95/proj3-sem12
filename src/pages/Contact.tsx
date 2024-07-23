import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Pagina de contatos</h1>
      {/* 5 - Nested routes */}
      <p>
        <Link to="/contact/1">Forma de Contato 1</Link>
      </p>
      <p>
        <Link to="/contact/2">Forma de Contato 2</Link>
      </p>
      <p>
        <Link to="/contact/3">Forma de Contato 3</Link>
      </p>
    </div>
  );
};

export default Contact;
