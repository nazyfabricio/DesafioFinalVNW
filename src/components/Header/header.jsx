import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";
import Style from "./header.module.scss";

export default function header() {
  return (
    <BrowserRouter>
      <header>
        {/* <section className={Style.boxLogo}>
          <img
            src={logo}
            alt="Logo do site Livros Vai na Web, imagem de um livro aberto com páginas brancas e capa azul"
          />
          <h1>Livros Vai Na Web</h1>
        </section>
 */}

        <section className={Style.boxLogo}>
          <img
            src={logo}
            alt="Logo do site Livros Vai na Web, imagem de um livro aberto com páginas brancas e capa azul"
          />
          <h1>Livros Vai Na Web</h1>
        </section>
        <nav className={boxMenu}>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/querodoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>

        <div className={Style.boxInput}>
          <input type="O que você procura?" value="O que você procura?" />
          <img src={search} alt="Imagem de uma lupa" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/querodoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
