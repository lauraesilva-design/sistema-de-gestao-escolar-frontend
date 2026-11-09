import Link from "next/link";
import Input from "@/components/Input";
import editFuncionarioData, { getFuncionarioData } from "./actions";

const menu = [
  { nome: "Matrículas", href: "/matriculas", icone: "/icons/matriculas.png" },
  { nome: "Alunos", href: "/alunos", icone: "/icons/alunos.png" },
  { nome: "Funcionários", href: "/funcionarios", icone: "/icons/funcionarios.png" },
  { nome: "Cursos", href: "/cursos", icone: "/icons/cursos.png" },
];

export default async function Perfil() {
  const funcionario = await getFuncionarioData();

  const editAction = editFuncionarioData.bind(null, funcionario.id);

  return (
    <div className="flex min-h-screen bg-white">
      {/* MENU LATERAL */}
      <aside className="flex w-28 shrink-0 flex-col items-center bg-sidebar pb-16 pt-3">
        <Link href="/perfil" className="flex flex-col items-center gap-1">
          <img src="/icons/perfil.png" alt="Perfil" className="h-14 w-14 object-contain" />
          <span className="font-mono text-sm font-bold text-black">Perfil</span>
        </Link>

        <nav className="mt-8 flex flex-col items-center gap-8">
          {menu.map(({ nome, href, icone }) => (
            <Link key={nome} href={href} className="flex flex-col items-center gap-1">
              <img src={icone} alt={nome} className="h-14 w-14 object-contain" />
              <span className="font-mono text-sm font-bold text-black">{nome}</span>
            </Link>
          ))}
        </nav>

        <Link href="/" className="mt-auto text-sm text-black">
          Sair
        </Link>
      </aside>

      {/* CONTEÚDO */}
      <main className="relative flex-1 pb-10">
        <Link href="/inicio" className="absolute left-3 top-2 text-sm text-primary">
          ← Voltar
        </Link>

        {/* Avatar e nome */}
        <div className="flex flex-col items-center pt-10">
          <img
            src="/icons/perfil.png"
            alt={funcionario.nome}
            className="h-42 w-42 rounded-full object-cover"
          />
          <h1 className="mt-6 font-serif text-2xl text-black">{funcionario.nome}</h1>
        </div>

        <form action={editAction}>
          {/* Painel azul */}
          <section className="ml-12 mr-16 mt-6 rounded bg-painel px-4 pb-28 pt-8">
            <div className="grid grid-cols-3 gap-x-12 gap-y-28">
              <Input
              
                label="Email"
                type="email"
                required
                defaultValue={funcionario.email}
                name="email"
              />
              <Input
               
                label="Telefone"
                defaultValue={funcionario.telefone}
                name="telefone"
              />
              <Input
               
                label="Cargo"
                required
                defaultValue={funcionario.cargo}
                name="cargo"
              />
              <Input
              
                label="CPF"
                required
                defaultValue={funcionario.cpf}
                name="cpf"
              />
              <Input
                
                label="Data de Nascimento"
                defaultValue={funcionario.nascimento}
                name="nascimento"
              />
              <Input
                
                label="Endereço"
                defaultValue={funcionario.endereco}
                name="endereco"
              />
              <Input
                
                label="Nova Senha"
                type="password"
                autoComplete="new-password"
                name="senha"
              />
              <Input
                
                label="Nome Completo"
                required
                defaultValue={funcionario.nome}
                name="nome"
              />
            </div>
          </section>

          {/* Links de baixo */}
          <div className="ml-12 mr-16 mt-10 flex items-center justify-between text-sm text-primary">
            <button type="submit">Salvar Alterações</button>
            <Link href="/">Sair →</Link>
          </div>
        </form>
      </main>
    </div>
  );
}