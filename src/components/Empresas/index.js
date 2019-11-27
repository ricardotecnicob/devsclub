import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './style.css';

import imgCoin from '../../assets/images/rocketseat-js-starter.png';

export default class Empresas extends Component {
  render() {
    return(
        <div className="areageralempresas">

            <div className="menusAcessos">
                <div className="logo">
                    Rank Dev's Club
                </div>
                <div className="areasEmpresas">
                    <Link to="/" className="areaempresas" >Voltar</Link>
                </div>
            </div>

            <div className="areaVideoApre">
                <label>Video</label>
            </div>
            <br />
            <div  className="areaTitulo" >
                <label>Nome do curso</label>
            </div>
            <div className="areaDesc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="areaCoins">
                <label>Número de Badges</label><br /><br />
                <img src={imgCoin} alt="" />
                <img src={imgCoin} alt="" />
                <img src={imgCoin} alt="" />
                <img src={imgCoin} alt="" />
                <img src={imgCoin} alt="" />
            </div>
        </div>
    )
  }
}
