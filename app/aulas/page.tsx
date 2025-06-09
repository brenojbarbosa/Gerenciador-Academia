'use client';

export default function Aulas() {
  return (
    <div className="container py-4">
      <div className="card shadow-sm border-danger">
        <div className="card-header bg-danger text-white">
          Aulas Coletivas
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">🧘 Segunda - Yoga - 18h</li>
            <li className="list-group-item">💃 Terça - Zumba - 19h</li>
            <li className="list-group-item">🥊 Quarta - Funcional - 20h</li>
            <li className="list-group-item">🚴 Quinta - Spinning - 18h30</li>
            <li className="list-group-item">🧘 Sexta - Alongamento - 17h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
