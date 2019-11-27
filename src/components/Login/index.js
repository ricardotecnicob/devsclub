import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";

import logo from "../../assets/images/logo-devsclub-bg-escuro.png";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit() {
    if (email !== "teste@teste.com" || senha !== "testando") {
      //alert("Usuário ou senha inválidos");
      toast.error("Usuário ou senha inválidos!");
    } else {
      history.push("/empresa");
    }
  }

  return (
    <div className="geralLogin">
      <div className="areaLogoLogin">
        <img src={logo} border="0" alt="" />
      </div>
      <div className="inputsLogin">
        <div className="form-control">
          {/* <label>Entrar</label><br /> */}
          <input
            type="email"
            className="inputCampo"
            placeholder="Entrar"
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="form-control">
          {/* <label>Senha</label><br /> */}
          <input
            type="password"
            className="inputCampo"
            placeholder="Senha"
            onChange={event => setSenha(event.target.value)}
          />
        </div>
      </div>
      <div>
        <button className="btnButtonEntrar" onClick={handleSubmit}>
          Entrar
        </button>
        <br />
        <Link to="/cadastrar" className="btnButtonNaotenhoConta">
          Não Tenho Conta
        </Link>
      </div>
    </div>
  );
}
