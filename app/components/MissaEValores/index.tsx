export default function MissaoValores() {
  return (
    <section className="py-5 bg-light" id="missao-valores">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Nossa Missão & Valores</h2>
          <p className="lead text-muted mt-3">
            O que nos move e nos diferencia na jornada de transformar vidas.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title text-primary mb-3">Missão</h3>
                <p className="card-text">
                  Na <strong>Timer Fitness</strong>, nossa missão é transformar vidas por meio do
                  exercício físico, promovendo saúde, disciplina e autoestima. Com treinos
                  personalizados e um ambiente acolhedor, inspiramos nossos alunos a alcançarem
                  seus objetivos com segurança e motivação.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="card-title text-primary mb-3">Valores</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">✅ Profissionalismo e compromisso com o aluno</li>
                  <li className="mb-2">✅ Ambiente inclusivo e motivador</li>
                  <li className="mb-2">✅ Excelência em atendimento e acompanhamento</li>
                  <li className="mb-2">✅ Inovação constante nos métodos de treino</li>
                  <li className="mb-0">✅ Saúde e bem-estar acima de tudo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
