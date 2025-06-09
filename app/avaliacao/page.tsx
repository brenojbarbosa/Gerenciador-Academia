'use client';

export default function Avaliacao() {
  return (
    <div className="container py-4">
      <div className="card shadow-sm border-dark">
        <div className="card-header bg-dark text-white">
          Avaliação Física
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Peso: 78kg</li>
            <li className="list-group-item">Altura: 1.75m</li>
            <li className="list-group-item">IMC: 25.5</li>
            <li className="list-group-item">Percentual de gordura: 18%</li>
          </ul>
          <p className="text-muted">🔁 Próxima avaliação recomendada: 01/07/2025</p>
        </div>
      </div>
    </div>
  );
}
