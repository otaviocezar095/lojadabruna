import React from "react";
import Bruna from "./imgs/Bruna.png";
const Header = () => {
  return (
    // cabecalho completo
    <div className=" shadow-md bg-white rounded-md">
      {/* Div contem - foto, pesquisa, sobre, perfil */}
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={Bruna} className="h-20" alt="Foto de Bruna" />
        </div>
        {/* Div pesquisar */}
        <div className="flex items-center gap-6 border border-gray-400 pr-4 pl-6 py-2 rounded-full">
          <p className="text-gray-500 font-light opacity-65">Pesquisar</p>
          {/* Icone */}
          <div className="bg-primary-400 rounded-full p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          {/* Fecha icone */}
        </div>
        {/* Fim Div pesquisar */}
        {/* Div perfil */}
        <div className="flex items-center gap-6 border border-gray-400 pr-4 pl-3 py-2 rounded-full">
          {/* Icone */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
          {/* Fecha icone */}
          <p className="text-gray-800 font-medium">Perfil</p>
        </div>
        {/* FIM Div perfil */}
      </div>
      {/* fecha Div */}
    </div>
  );
};

export default Header;
