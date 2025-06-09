'use client';

import { useState } from 'react';

export default function Checkin() {
  const [presente, setPresente] = useState(false);

  const marcarPresenca = () => {
    setPresente(true);
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-warning text-center">
        <div className="card-header bg-warning text-dark">
          Marcar Presença
        </div>
        <div className="card-body">
          {presente ? (
            <div className="alert alert-success">✅ Presença marcada com sucesso!</div>
          ) : (
            <button className="btn btn-warning" onClick={marcarPresenca}>
              Marcar presença
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
