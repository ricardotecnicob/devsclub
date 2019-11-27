import React, { Component } from "react";
import { Link } from "react-router-dom";
import SortBy from "sort-by";

import "./style.css";

import imagem02 from "../../assets/images/imagem2.jpeg";
import iconTec1 from "../../assets/images/js-square.svg";
import iconTec2 from "../../assets/images/js-square.svg";
import iconTec3 from "../../assets/images/js-square.svg";
import iconTec4 from "../../assets/images/js-square.svg";
import iconTec5 from "../../assets/images/js-square.svg";
import iconTec6 from "../../assets/images/js-square.svg";
import iconTec7 from "../../assets/images/js-square.svg";

const usuarios = [
  {
    imagem: imagem02,
    nome: "Ricardo Alves",
    linguangem: "javascript",
    linguagemimg: iconTec1,
    pontuacao: 512
  },
  {
    imagem: imagem02,
    nome: "Ricardo Alves",
    linguangem: "python",
    linguagemimg: iconTec2,
    pontuacao: 500
  },
  {
    imagem: imagem02,
    nome: "Ricardo Alves",
    linguangem: "ruby",
    linguagemimg: iconTec3,
    pontuacao: 450
  },
  {
    imagem: imagem02,
    nome: "Ricardo Alves",
    linguangem: "java",
    linguagemimg: iconTec4,
    pontuacao: 400
  },
  {
    imagem: imagem02,
    nome: "Ricardo Alves",
    linguangem: "c++",
    linguagemimg: iconTec5,
    pontuacao: 350
  },
  {
    imagem: imagem02,
    nome: "Ricardo Alves",
    linguangem: "javascript",
    linguagemimg: iconTec1,
    pontuacao: 300
  },
  {
    imagem: imagem02,
    nome: "Ricardo Alves",
    linguangem: "python",
    linguagemimg: iconTec2,
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
          <div className="areasEmpresas">
            <Link to="/empresa" className="areaempresas">
              Acesso Empresas
            </Link>
          </div>
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