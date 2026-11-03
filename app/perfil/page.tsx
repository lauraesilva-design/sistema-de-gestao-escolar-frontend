import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  IdCard,
  MonitorPlay,
  User,
} from "lucide-react";

// ✏️ EDITE OS DADOS AQUI
const usuario = {
  nome: "Ana Beatriz",
  email: "ana.beatriz@example.com",
  telefone: "(41) 98888-0001",
  cargo: "Administradora",
  cpf: "000.000.000-00",
  nascimento: "15/03/2005",
  endereco: "Rua das Flores, 82, 303",
  senha: "********",
};

const campos = [
  { label: "Email", valor: usuario.email, type: "text" },
  { label: "Telefone", valor: usuario.telefone, type: "text" },
  { label: "Cargo", valor: usuario.cargo, type: "text" },
  { label: "CPF", valor: usuario.cpf, type: "text" },
  { label: "Data de nascimento", valor: usuario.nascimento, type: "text" },
  { label: "Endereço", valor: usuario.endereco, type: "text" },
  { label: "Senha", valor: usuario.senha, type: "password" },
];

const menu = [
  { nome: "Matrículas", href: "/matriculas", Icone: IdCard },
  { nome: "Alunos", href: "/alunos", Icone: GraduationCap },
  { nome: "Funcionários", href: "/funcionarios", Icone: Briefcase },
  { nome: "Cursos", href: "/cursos", Icone: MonitorPlay },
];

export default function Perfil() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* MENU LATERAL */}
      <aside className="flex w-28 shrink-0 flex-col items-center bg-sidebar pb-16 pt-3">
        <Link href="/perfil" className="flex flex-col items-center gap-1">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
            <User className="h-8 w-8 fill-white text-white" />
          </div>
          <span className="font-mono text-sm font-bold text-black">Perfil</span>
        </Link>

        <nav className="mt-8 flex flex-col items-center gap-8">
          {menu.map(({ nome, href, Icone }) => (
            <Link key={nome} href={href} className="flex flex-col items-center gap-1">
              <Icone size={56} strokeWidth={1.5} className="text-black" />
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
          <div className="flex h-42 w-42 items-center justify-center rounded-full bg-black">
            <User className="h-24 w-24 fill-white text-white" />
          </div>
          <h1 className="mt-6 font-serif text-2xl text-black">{usuario.nome}</h1>
        </div>

        {/* Painel azul com os dados */}
        <section className="ml-12 mr-16 mt-6 rounded bg-painel px-4 pb-28 pt-8">
          <div className="grid grid-cols-3 gap-x-12 gap-y-28">
            {campos.map((c) => (
              <div key={c.label}>
                <label className="mb-1 block text-xs text-black">{c.label}</label>
                <input
                  type={c.type}
                  value={c.valor}
                  readOnly
                  className="h-9 w-full rounded bg-white px-3 text-xs text-black shadow-md outline-none"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Links de baixo */}
        <div className="ml-12 mr-16 mt-10 flex items-center justify-between text-sm text-primary">
          <div className="flex gap-16">
            <button type="button">Alterar senha</button>
            <button type="button">Editar dados</button>
          </div>
          <Link href="/">Sair →</Link>
        </div>
      </main>
    </div>
  );
}