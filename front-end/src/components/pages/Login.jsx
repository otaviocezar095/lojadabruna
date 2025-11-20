import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex max-w-96 flex-col items-center gap-4 w-full ">
        <h1 className="text-3xl font-semibold">Faça seu login</h1>

        <form className="flex flex-col gap-2 w-full">
          <input
            type="email"
            className="w-full border border-gray-400 px-4 py-2 rounded-full "
            placeholder="Digite seu e-mail"
          />

          <input
            type="password"
            className="w-full border border-gray-400 px-4 py-2 rounded-full"
            placeholder="Digite sua senha"
          />
          <button className="cursor-pointer bg-primary-400 w-full border text-white font-bold border-gray-400 px-4 py-2 rounded-full">
            Login
          </button>
        </form>
        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/register" className="underline font-semibold">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
