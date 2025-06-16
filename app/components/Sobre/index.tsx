export default function Sobre() {
  return (
    <section id="sobre" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#2c3e50' }}>
            Sobre a <span style={{ color: '#28a745' }}>Timer Fitness</span>
          </h2>
          <p className="lead mt-3" style={{ color: '#6c757d' }}>
            Transforme seu estilo de vida com saúde, foco e motivação.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="card border-0 shadow-lg p-5"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f1f3f5 100%)',
                borderRadius: '1rem',
              }}
            >
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#343a40' }}>
                A <strong>Timer Fitness</strong> é mais do que uma academia. Somos uma comunidade
                apaixonada por bem-estar e performance, que acredita que todos têm o potencial
                de alcançar seus objetivos através da disciplina, apoio e um plano bem estruturado.
              </p>

              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#343a40' }}>
                Oferecemos treinos personalizados, avaliações físicas frequentes e acompanhamento com
                profissionais qualificados em um ambiente moderno e acolhedor. Contamos com uma ampla
                variedade de equipamentos, aulas coletivas dinâmicas e um aplicativo completo para gerenciar
                sua rotina de treinos e evoluções.
              </p>

              <p className="mb-0" style={{ fontSize: '1.1rem', color: '#343a40' }}>
                Seja você iniciante, intermediário ou atleta, temos o plano ideal para seu perfil.
                <br />
                <strong>Junte-se à Timer Fitness e dê o primeiro passo rumo à sua melhor versão.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
