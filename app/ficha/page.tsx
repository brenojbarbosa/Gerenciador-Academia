'use client';

export default function Ficha() {
  return (
    <div className="container py-4">
      <div className="card shadow-sm border-info text-center">
        <div className="card-header bg-info text-white">
          Download da Ficha de Treino
        </div>
        <div className="card-body">
          <p className="mb-3">Clique abaixo para baixar sua ficha personalizada:</p>
          <a href="/docs/ficha-aluno.pdf" className="btn btn-info" download>
            📄 Baixar Ficha
          </a>
        </div>
      </div>
    </div>
  );
}
