"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toast, ToastContainer } from "react-bootstrap";

export default function AulaExperimental() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !telefone) {
      alert("Preencha todos os campos");
      return;
    }

    setTimeout(() => {
      setShowToast(true);
      setNome("");
      setTelefone("");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 500);
  };

  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Agende sua Aula Experimental</h1>
      
      {/* Quadro que envolve o form */}
      <div
        style={{
          border: "2px solid #0d6efd",
          borderRadius: "12px",
          padding: "24px",
          backgroundColor: "rgba(13, 110, 253, 0.1)", // azul clarinho opaco
          boxShadow: "0 0 15px rgba(13, 110, 253, 0.2)",
        }}
      >
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="tel"
              placeholder="Telefone com DDD"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Agendar
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2500}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Agendado</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Aula agendada com sucesso!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </section>
  );
}
