import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Transforme seu corpo com a Timer Fitness</h1>
        <p className="lead mt-3">
          Treinos personalizados, ambiente moderno e equipe profissional.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <Link href="/planos" className="btn btn-outline-light btn-lg">
            Veja nossos planos
          </Link>
          <Link href="/aula-experimental" className="btn btn-outline-light btn-lg">
            Agende uma aula
          </Link>
        </div>
      </div>
    </section>
  );
}
