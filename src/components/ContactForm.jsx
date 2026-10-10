import { useState } from 'react';

const initialContact = {
  nombre: '',
  email: '',
  mensaje: '',
};

function ContactForm() {
  const [contact, setContact] = useState(initialContact);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((currentContact) => ({ ...currentContact, [name]: value }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contact.nombre.trim()) {
      nextErrors.nombre = 'Ingresa tu nombre.';
    }

    if (!emailPattern.test(contact.email)) {
      nextErrors.email = 'Ingresa un email valido.';
    }

    if (contact.mensaje.trim().length < 10) {
      nextErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    setSent(true);
    setContact(initialContact);
  };

  return (
    <form className="app-form" onSubmit={handleSubmit} noValidate>
      {sent && (
        <div className="alert alert-success" role="alert">
          Mensaje enviado correctamente. El administrador se contactara pronto.
        </div>
      )}

      <div className="mb-3">
        <label className="form-label" htmlFor="contactName">
          Nombre
        </label>
        <input
          className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
          id="contactName"
          name="nombre"
          type="text"
          value={contact.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="contactEmail">
          Email
        </label>
        <input
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="contactEmail"
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="contactMessage">
          Mensaje
        </label>
        <textarea
          className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
          id="contactMessage"
          name="mensaje"
          rows="5"
          value={contact.mensaje}
          onChange={handleChange}
        ></textarea>
        {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
      </div>

      <button className="btn btn-info fw-semibold" type="submit">
        Enviar mensaje
      </button>
    </form>
  );
}

export default ContactForm;
