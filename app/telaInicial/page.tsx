import Link from "next/link";

// ✏️ EDITE AQUI
const nome = "Ana Beatriz";

const totais = [
  { titulo: "Funcionários", valor: 12 },
  { titulo: "Alunos", valor: 126 },
  { titulo: "Cursos", valor: 17 },
  { titulo: "Matrículas", valor: 96 },
];

const menu = [
  { nome: "Matrículas", href: "/matriculas", icone: "/icons/matriculas.png" },
  { nome: "Alunos", href: "/alunos", icone: "/icons/alunos.png" },
  { nome: "Funcionários", href: "/funcionarios", icone: "/icons/funcionarios.png" },
  { nome: "Cursos", href: "/cursos", icone: "/icons/cursos.png" },
];

export default function Inicio() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* MENU LATERAL */}
      <aside
        className="flex w-28 shrink-0 flex-col items-center pb-16 pt-3"
        style={{ backgroundColor: "#7ec5af" }}
      >
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
      <main className="flex-1">
        {/* Banner */}
        <div
          className="relative h-64 bg-cover bg-center"
          
        >
          <img
            src="/logo.png"
            alt="Logo InovaClass"
            className="absolute left-1/2 top-9 -ml-12 h-46 w-46 -translate-x-1/2 object-contain"
          />
        </div>

        {/* Saudação */}
        <h1 className="px-6 pt-2 font-serif text-2xl leading-9 text-black">
          Olá, {nome}!
          <br />
          Bem-vinda ao InovaClass.
        </h1>

        {/* Totais */}
        <div className="mx-6 mt-12 w-144 overflow-hidden rounded-lg border border-gray-200">
          <div
            className="grid h-8 grid-cols-4 items-center px-4 font-serif text-base font-bold text-black"
            style={{ backgroundColor: "#cde4dd" }}
          >
            {totais.map((t) => (
              <span key={t.titulo}>{t.titulo}</span>
            ))}
          </div>
          <div className="grid h-8 grid-cols-4 items-center bg-white px-4 text-xs text-black">
            {totais.map((t) => (
              <span key={t.titulo}>{t.valor}</span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}