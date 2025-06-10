"use client";

import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setTimeout(() => {
      setShowToast(true);
      setFormData({ nome: "", email: "", mensagem: "" });
    }, 500);
  };

  return (
    <section id="contato" className="py-5 bg-light position-relative">
      <div className="container">
        <h2 className="text-center mb-4">Entre em contato</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              name="nome"
              type="text"
              className="form-control"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <textarea
              name="mensagem"
              className="form-control"
              rows={4}
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary me-3">
              Enviar
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        position="bottom-end"
        className="p-3"
        style={{ position: "fixed" }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Sucesso</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Mensagem enviada com sucesso!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </section>
  );
}
