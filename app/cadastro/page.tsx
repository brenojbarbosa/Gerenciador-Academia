'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, email, senha } = formData;

    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioExistente = usuarios.find((u: any) => u.email === email);

    if (usuarioExistente) {
      setErro('Usuário já cadastrado.');
      return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    router.push('/login');
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Cadastro</h2>
        <form className="mx-auto" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
          {erro && <div className="alert alert-danger">{erro}</div>}
          <div className="mb-3">
            <input
              type="text"
              name="nome"
              className="form-control"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
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
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}
