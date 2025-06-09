'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const dados = localStorage.getItem('usuarioLogado');
    if (!dados) {
      router.push('/login');
    } else {
      setUsuario(JSON.parse(dados));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    router.push('/login');
  };

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold text-primary">Olá, {usuario?.nome || 'Aluno'}</h2>
          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
            Sair
          </button>
        </div>

        <div className="mb-5">
          <h4 className="mb-3">Plano Contratado</h4>
          <div className="card border-0 shadow-sm bg-white">
            <div className="card-body">
              <p className="mb-2">
                <strong>Tipo:</strong> {usuario?.plano || 'Nenhum plano'}
              </p>
              <p className="mb-0">
                <strong>Status:</strong>{' '}
                <span className="badge bg-success">Ativo</span>
              </p>
            </div>
          </div>
        </div>

        <h4 className="mb-3">Menu Rápido</h4>
        <div className="row g-3">
          <div className="col-md-6 col-lg-4">
            <Link href="/treinos" className="text-decoration-none">
              <div className="card h-100 border-primary shadow-sm hover-shadow">
                <div className="card-body">
                  <h5 className="card-title text-primary">📅 Agenda de Treinos</h5>
                  <p className="card-text text-muted">Veja seus treinos da semana.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link href="/evolucao" className="text-decoration-none">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-success">📈 Evolução</h5>
                  <p className="card-text text-muted">Acompanhe seu progresso físico.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link href="/ficha" className="text-decoration-none">
              <div className="card h-100 border-info shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-info">📄 Ficha de Treino</h5>
                  <p className="card-text text-muted">Baixe sua ficha personalizada.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link href="/checkin" className="text-decoration-none">
              <div className="card h-100 border-warning shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning">✅ Check-in</h5>
                  <p className="card-text text-muted">Marque sua presença diária.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link href="/aulas" className="text-decoration-none">
              <div className="card h-100 border-danger shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-danger">🧘 Aulas Coletivas</h5>
                  <p className="card-text text-muted">Confira horários e modalidades.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-lg-4">
            <Link href="/avaliacao" className="text-decoration-none">
              <div className="card h-100 border-dark shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-dark">📋 Avaliação Física</h5>
                  <p className="card-text text-muted">Veja seus dados avaliativos.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
