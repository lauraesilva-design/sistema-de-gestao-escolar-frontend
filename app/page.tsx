"use client";

import { useState } from "react";

// ✏️ EDITE AS MENSAGENS AQUI
const mensagens = {
  senhaVazia: "Digite sua senha",
  senhaCurta: "A senha precisa ter no mínimo 8 caracteres",
  emailVazio: "Digite seu email",
  emailInvalido: "Digite um email válido, como nome@email.com",
};

export default function Login() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [enviou, setEnviou] = useState(false);

  // Descobre qual erro mostrar (vazio = campo válido)
  let erroSenha = "";
  if (!senha) erroSenha = mensagens.senhaVazia;
  else if (senha.length < 8) erroSenha = mensagens.senhaCurta;

  let erroEmail = "";
  if (!email) erroEmail = mensagens.emailVazio;
  else if (!/^\S+@\S+\.\S+$/.test(email)) erroEmail = mensagens.emailInvalido;

  const mostrarErroSenha = enviou && erroSenha !== "";
  const mostrarErroEmail = enviou && erroEmail !== "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviou(true);
    if (erroSenha || erroEmail) return;
    console.log({ email, senha }); // aqui entra a chamada da sua API
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-background px-4 pb-10 pt-20">
      <img
        src="/logo.png"
        alt="Logo InovaClass"
        className="h-54 w-54 object-contain"
      />

      <p className="mt-10 text-center font-serif text-xl text-black">
        Onde aprender é a evolução que inova!
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-16 w-72">
        {/* SENHA */}
        <div>
          <label htmlFor="senha" className="block font-mono text-xs font-bold">
            Senha <span className="text-red-500">*</span>
          </label>
          <input
            id="senha"
            type="password"
            placeholder="Senha de acesso"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={`mt-1 h-9 w-full rounded bg-gray-200 px-3 font-mono text-xs placeholder:text-gray-500 focus:outline-none focus:ring-2 ${
              mostrarErroSenha ? "ring-2 ring-red-500" : "focus:ring-primary"
            }`}
          />
          <p
            className={`mt-0.5 text-xs ${
              mostrarErroSenha ? "text-red-500" : "text-gray-600"
            }`}
          >
            {mostrarErroSenha ? erroSenha : "Mínimo 8 caracteres"}
          </p>
        </div>

        {/* EMAIL */}
        <div className="mt-5">
          <label htmlFor="email" className="block font-mono text-xs font-bold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 h-9 w-full rounded bg-gray-200 px-3 font-mono text-xs placeholder:text-gray-500 focus:outline-none focus:ring-2 ${
              mostrarErroEmail ? "ring-2 ring-red-500" : "focus:ring-primary"
            }`}
          />
          <p
            className={`mt-0.5 text-xs ${
              mostrarErroEmail ? "text-red-500" : "text-gray-600"
            }`}
          >
            {mostrarErroEmail ? erroEmail : "Email cadastrado"}
          </p>
        </div>

        {/* BOTÃO */}
        <button
          type="submit"
          className="mx-auto mt-30 block h-16 w-56 rounded-xl bg-primary text-base text-white transition hover:brightness-90"
        >
          Acessar
        </button>
      </form>
    </main>
  );
}