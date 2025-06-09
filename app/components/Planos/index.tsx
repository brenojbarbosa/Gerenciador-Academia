export default function Planos() {
  const planos = [
    {
      nome: "Mensal",
      preco: "R$ 99/mês",
      beneficios: [
        "Acesso ilimitado à academia",
        "Aulas coletivas inclusas",
        "Avaliação física inicial",
      ],
    },
    {
      nome: "Trimestral",
      preco: "R$ 270/3 meses",
      beneficios: [
        "Desconto no valor mensal",
        "Avaliação física a cada 2 meses",
        "Aulas coletivas + workshops",
      ],
    },
    {
      nome: "Anual",
      preco: "R$ 900/ano",
      beneficios: [
        "Maior desconto mensal",
        "Avaliações físicas trimestrais",
        "Acesso VIP a eventos especiais",
      ],
    },
  ];

  const coresFundo = [
    "rgba(255, 235, 59, 0.3)",   
    "rgba(76, 175, 80, 0.3)",    
    "rgba(244, 67, 54, 0.3)",    
  ];

  return (
    <section id="planos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Nossos Planos</h2>
        <div className="row">
          {planos.map(({ nome, preco, beneficios }, i) => (
            <div key={i} className="col-md-4 mb-4 text-center">
              <div
                className="card h-100 shadow-sm plano-card"
                style={{ backgroundColor: coresFundo[i], color: "#000" }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{nome}</h5>
                  <p className="card-text fs-4 fw-bold">{preco}</p>
                  <ul className="list-unstyled text-start flex-grow-1">
                    {beneficios.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/5531997933051?text=${encodeURIComponent(
                      "Olá, tenho interesse no plano " + nome
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto"
                  >
                    Contratar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
