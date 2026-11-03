import Button from "@/Components/Button";
import { login } from "./actions";


export default function Login() {
  return (
   <div className="flex min-h-screen flex-col items-center bg-background px-4 pb-10 pt-20">
      <img
        src="/logo.png"
        alt="Logo InovaClass"
        className="h-54 w-54 object-contain"
      />
      
      <p className="mt-16 w-72 text-center font-serif text-xl text-black">
        Onde aprender é a evolução que inova!
      </p>

    <div>

     <form className="mt-5 flex flex-col w-full " action={login}>
        <label htmlFor="senha" className="block font-mono text-xs font-bold">
            Senha <span className="text-red-500">*</span>
          </label>
      <input id="password" name="senha" placeholder="Senha de acesso"/>

       <label htmlFor="email" className="block font-mono text-xs font-bold">
            Email <span className="text-red-500">*</span>
          </label>
      <input id="email" name="email"   placeholder="Email.com"/>
      
      <Button type="submit" variant="primary">
        Entrar
      </Button>
     </form>
    </div>
   </div>
  );
}
