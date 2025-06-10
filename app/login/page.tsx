"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, senha } = formData;

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios.find(
      (u: any) => u.email === email && u.senha === senha
    );

    if (!usuario) {
      setErro("E-mail ou senha incorretos.");
      return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    router.push("/dashboard");
  };

  return (
    <section
      id="contato"
      className="py-5 bg-light position-relative"
      style={{ margin: "40px" }} // margem em volta da seção
    >
      <div className="container">
        <h2 className="text-center mb-4">Login</h2>

        <div
          style={{
            backgroundColor: "white",
            border: "2px solid #0d6efd",
            borderRadius: "12px",
            padding: "50px",
            maxWidth: "500px",
            margin: "0 auto",
            boxShadow: "0 0 25px rgba(13, 110, 253, 0.15)",
          }}
        >
          <form onSubmit={handleSubmit}>
            {erro && <div className="alert alert-danger">{erro}</div>}
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="senha"
                className="form-control"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
          </form>

          <p className="text-center mt-3 mb-0">
            Ainda não tem uma conta?{" "}
            <Link href="/cadastro" className="btn btn-link p-0">
              Cadastrar
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
