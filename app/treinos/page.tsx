'use client';

export default function Treinos() {
  return (
    <div className="container py-4">
      <div className="card shadow-sm border-primary">
        <div className="card-header bg-primary text-white">
          Agenda de Treinos
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">📅 Segunda: Peito e Tríceps</li>
            <li className="list-group-item">📅 Terça: Costas e Bíceps</li>
            <li className="list-group-item">📅 Quarta: Pernas</li>
            <li className="list-group-item">📅 Quinta: Ombro</li>
            <li className="list-group-item">📅 Sexta: Cardio e Abdômen</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
