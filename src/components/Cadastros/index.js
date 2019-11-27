import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logo from '../../assets/images/logo-devsclub-bg-escuro.png';

const Cadastros = () =>  {
    return (
        <div className="geralLogin">
            <div className="areaLogoLogin">
                <img src={logo} border="0" alt="" />
            </div>
            <div className="inputsLogin">
                <div className="form-control">
                    {/* <label>Entrar</label><br /> */}
                    <input type="text" className="inputCampo" placeholder="Nome" />
                </div>
                <div className="form-control">
                    {/* <label>Entrar</label><br /> */}
                    <input type="email" className="inputCampo" placeholder="Entrar" />
                </div>
                <div className="form-control">
                    {/* <label>Senha</label><br /> */}
                    <input type="password" className="inputCampo" placeholder="Senha" />
                </div>
            </div>
            <div>
        
                <button className="btnButtonEntrar">Cadastrar</button><br />
                <Link to="/login" className="btnButtonNaotenhoConta">Tenho Conta</Link>
            </div>
        </div>
    )

}

export default Cadastros;