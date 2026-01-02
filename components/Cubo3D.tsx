"use client";

import { useState } from "react";
import "./css/Cubo3D.css";

export default function Aula3D_Passo5() {
  const [rx, setRx] = useState(-20);
  const [ry, setRy] = useState(25);

  return (
    <div className="scene">
      <div
        className="cube-2d"
        style={{ transform: `rotateX(${rx}deg) rotateY(${ry}deg)` }}
      >
        <div className="face front">Frente</div>
        <div className="face back">Trás</div>
        <div className="face right">Direita</div>
        <div className="face left">Esquerda</div>
        <div className="face top">Topo</div>
        <div className="face bottom">Fundo</div>
      </div>

      <div className="controls">
        <button onClick={() => setRy((v) => v - 15)}>Esquerda</button>
        <button onClick={() => setRy((v) => v + 15)}>Direita</button>
        <button onClick={() => setRx((v) => v - 15)}>Cima</button>
        <button onClick={() => setRx((v) => v + 15)}>Baixo</button>
      </div>
    </div>
  );
}
