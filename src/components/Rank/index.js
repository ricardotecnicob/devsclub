import React, { Component } from "react";
import { Link } from "react-router-dom";
import SortBy from "sort-by";

import "./style.css";

import user from "../../assets/images/user.png";
import javascript from "../../assets/images/js-square.svg";
import python from "../../assets/images/python.png";
import java from "../../assets/images/311945.svg";
import cpp from "../../assets/images/CPP2.png";

const usuarios = [
  {
    imagem: user,
    nome: "Ricardo Alves",
    linguangem: "javascript",
    linguagemimg: javascript,
    pontuacao: 512
  },
  {
    imagem: user,
    nome: "Lindemberg de Castro",
    linguangem: "python",
    linguagemimg: python,
    pontuacao: 500
  },
  {
    imagem: user,
    nome: "Mirian Montezi",
    linguangem: "javascript",
    linguagemimg: javascript,
    pontuacao: 450
  },
  {
    imagem: user,
    nome: "Pedro Moreno",
    linguangem: "java",
    linguagemimg: java,
    pontuacao: 400
  },
  {
    imagem: user,
    nome: "Thierry Santos",
    linguangem: "c++",
    linguagemimg: cpp,
    pontuacao: 350
  },
  {
    imagem: user,
    nome: "Diego Fernandes",
    linguangem: "javascript",
    linguagemimg: javascript,
    pontuacao: 300
  },
  {
    imagem: user,
    nome: "Tarcio Carvalho",
    linguangem: "python",
    linguagemimg: python,
    pontuacao: 800
  }
];

// console.log(usuarios);

export default class Rank extends Component {
  state = {
    filter: "todos"
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const usuariosFiltered = usuarios.filter(
      usuario =>
        usuario.linguangem === this.state.filter ||
        this.state.filter === "todos"
    );
    const usuariosSorted = usuariosFiltered.sort(SortBy("-pontuacao"));
    return (
      <div className="areaGeral">
        <div className="menusAcessos">
          <div className="logo">Rank Dev's Club</div>
          <div className="menusBuscas">
            <div className="areasEmpresas">
              <Link to="/login" className="areaempresas">
                Acesso Empresas
              </Link>
            </div>
            <div className="filtro">
              <select className="selecione" onChange={this.handleChange}>
                <option value="todos">todos</option>
                <option value="javascript">javascript</option>
                <option value="python">python</option>
                <option value="ruby">ruby</option>
                <option value="java">java</option>
                <option value="c++">c++</option>
              </select>
            </div>
          </div>
        </div>

        {/* Repetido */}

        {usuariosSorted.map((user, index) => (
          <div className="areaClick" key={index}>
            <div className="arealinha">
              <div className="arealinhaDiv01">
                <div className="posicao">{index + 1}º</div>

                <div className="linha"></div>

                <div className="imagempessoa">
                  <img src={user.imagem} border="0" alt="" />
                </div>

                <div className="linha"></div>

                <div className="nomepessoa">{user.nome}</div>

                <div className="linha"></div>

                <div className="tecnologia">
                  <img src={user.linguagemimg} border="0" alt="" />
                </div>

                <div className="linha"></div>
              </div>
              <div className="arealinhaDiv02">
                <div className="pontuacao">
                  <p className="pontuacaoText">{user.pontuacao}</p>{" "}
                  <p className="pontuacaoSub">badges</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Repetido */}

        <br />
        <br />
        <br />
      </div>
    );
  }
}
