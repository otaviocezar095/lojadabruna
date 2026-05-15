import React, { useState, useEffect } from "react";
import Bruna from "./imgs/Bruna.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would filter products or navigate to search results
    console.log("Searching for:", searchTerm);
    // For now, just clear the search or you could implement filtering
    setSearchTerm("");
  };

  return (
    // cabecalho completo
    <header className="shadow-md bg-white rounded-md">
      {/* Div contem - foto, pesquisa, sobre, perfil */}
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto sm:px-6">
        <Link to="/" className="flex items-center">
          <img src={Bruna} className="h-20" alt="Foto de Bruna" />
        </Link>

        {/* Div pesquisar */}
        <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-4 border border-gray-400 pr-4 pl-6 py-2 rounded-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-3 py-2 border-none focus:outline-none placeholder-gray-400"
            placeholder="Pesquisar produtos..."
          />
          <button type="submit" className="bg-primary-400 text-white px-3 py-2 rounded-full hover:bg-primary-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
        {/* Fim Div pesquisar */}

        {/* Div perfil */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2 border border-gray-400 pr-3 pl-2 py-1 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-800 truncate max-w-20">{user.name}</p>
                <button
                  onClick={handleLogout}
                  className="text-xs text-primary-600 hover:text-primary-800"
                >
                  Sair
                </button>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 border border-gray-400 pr-3 pl-2 py-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium">Login</p>
            </Link>
          )}
        </div>
        {/* FIM Div perfil */}
      </div>
      {/* fecha Div */}
    </header>
  );
};

export default Header;