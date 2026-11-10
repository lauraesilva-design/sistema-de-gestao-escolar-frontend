import { getAlunoLista } from "./actions";

export default async function Alunos(){
    const alunos = await getAlunoLista();
    console.log(alunos);

    return(
<div>
    <div className="items-center">
    
    <h1>Alunos(as)</h1>
</div>
</div>
    );
}
