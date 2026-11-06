import Button from "@/components/Button";
import Input from "@/components/Input";
import editFuncionarioData, { getFuncionarioData } from "./actions";

export default async function Perfil() {
  const funcionario = await getFuncionarioData();

  const editAction = editFuncionarioData.bind(null, funcionario.id);

  return (
    <div>
      <h1>Meu Perfil</h1>

      <form action={editAction}>
        <Input
          label="Nome Completo"
          required
          defaultValue={funcionario.nome}
          name="nome"
        />
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
          label="Data de Nascimento"
          defaultValue={funcionario.nascimento}
          name="nascimento"
        />
        <Input label="CPF" required defaultValue={funcionario.cpf} name="cpf" />
        <Input
          label="Endereço"
          defaultValue={funcionario.endereco}
          name="endereco"
        />
        <Input
          label="Cargo"
          required
          defaultValue={funcionario.cargo}
          name="cargo"
        />
        <Input label="Nova Senha" name="senha" />

        <Button type="submit">Salvar Alterações</Button>
      </form>
    </div>
  );
}