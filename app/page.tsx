import Button from "@/components/Button";
import Input from "@/components/Input";
import { Mail, Lock } from "lucide-react";

import { login } from "./actions";

export default function Login() {
  return (
    <div className="min-h-screen w-screen">
      <div className="flex min-h-screen w-full flex-col items-center bg-background px-3xl pb-10 pt-20">
        <div className="flex w-full flex-col items-center">
          <img
            src="/logo.png"
            alt="Logo InovaClass"
            className="h-64 w-64 object-contain"
          />

          <h1 className="mt-10 text-center font-serif text-xl text-black">
            Onde aprender é a evolução que inova!
          </h1>
        </div>

        <form className="flex flex-col w-full gap-sm" action={login}>
          <Input
            id="password"
            label="Senha"
            name="senha"
            type="password"
            placeholder="Senha de acesso"
            minLength={4}
            required
            
          />
          <Input
            id="email"
            label="Email"
            name="email"
            type="email"
            placeholder="Email.com"
            required
          
          />
          <Button type="submit" variant="primary">
            Entrar
          </Button>
        </form>

        <p className="mt-10 text-center text-xs text-text-muted">
          Esqueceu sua senha? Fale com a coordenação.
        </p>
      </div>
    </div>
  );
}